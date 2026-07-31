import BlogClosingQuote from "@/components/blog-closing-quote";

export const biometricAuthContentEn = (
    <>
        <p>
            Modern mobile banking apps rely on biometric authentication for a seamless login
            experience. Biometrics alone are not enough: security depends on the protocol around
            them.
        </p>
        <p>
            During a security assessment of <strong>Banco Lumina&apos;s</strong> mobile banking app,
            the cybersecurity team found a critical <strong>Authentication Bypass</strong>: biometric
            verification itself was sound, but the protocol allowed a previously captured request to
            be replayed — granting access without a new biometric check.
        </p>
        <p>
            This case study covers the threat model, redesign goals, and a replay-resistant
            architecture that kept UX intact on Android and iOS.
        </p>

        <blockquote>
            Real architectural challenge based on a banking project. Company name, diagrams, and
            implementation details have been generalized for confidentiality. Code samples are
            simplified and anonymized — not production bank code.
        </blockquote>

        <h2>Technology stack</h2>
        <ul>
            <li>
                <strong>Mobile:</strong> React, Apache Cordova, Android, iOS
            </li>
            <li>
                <strong>Backend:</strong> Java 8, REST APIs
            </li>
        </ul>

        <h2>Understanding the threat</h2>
        <h3>What is a replay attack?</h3>
        <p>
            A replay attack happens when an attacker captures a legitimate authentication request
            and later resends the exact same payload. If the server cannot tell original from
            duplicate, the attacker may authenticate without the user&apos;s biometric.
        </p>
        <p>
            Unlike credential theft, replay does not require breaking encryption — it exploits reuse
            of a previously valid authentication message.
        </p>

        <h3>Why TLS is not enough</h3>
        <p>
            A common misconception: HTTPS fully prevents replay. It does not. TLS gives
            confidentiality, integrity, and server authentication. If an attacker obtains a
            previously valid authenticated request (malware, device compromise, instrumentation),
            TLS cannot decide whether the request is fresh or a replay.
        </p>
        <p>
            Replay protection must live at the <strong>application layer</strong>.
        </p>

        <h2>Original architecture</h2>
        <p>
            The original flow used a long-lived biometric session token on the device, reused across
            login attempts:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`User
  → Fingerprint verification
  → Biometric session token
  → REST API
  → Java backend
  → Login success`}
        </pre>
        <p>
            The token was encrypted in transit but stayed valid for a long window. Under specific
            attack conditions, a captured request could be replayed.
        </p>

        <h2>Threat analysis</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Risk</th>
                        <th className="px-3 py-2 text-left">Impact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Persistent auth token</td>
                        <td className="px-3 py-2">Replay possibility</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Client trusted too much</td>
                        <td className="px-3 py-2">Larger attack surface</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">No request uniqueness</td>
                        <td className="px-3 py-2">Same request accepted many times</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Missing challenge</td>
                        <td className="px-3 py-2">Server cannot detect duplicates</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">No token rotation</td>
                        <td className="px-3 py-2">Longer exposure window</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Design goals</h2>
        <ul>
            <li>Eliminate replay attacks</li>
            <li>Keep biometric login transparent for users</li>
            <li>Support Android and iOS</li>
            <li>Minimize backend changes</li>
            <li>Preserve existing UX</li>
            <li>Follow secure authentication best practices</li>
        </ul>

        <h2>Solution architecture</h2>
        <p>
            Instead of a reusable authentication request, the new design stacks independent security
            layers. The client is no longer the source of truth.
        </p>

        <h3>1. Server-side biometric validation</h3>
        <p>
            Before completing login, the backend validates the biometric session with the biometric
            provider: registered device, active session, known user, valid auth state. Failure stops
            authentication immediately.
        </p>

        <h3>2. One-time challenge (nonce)</h3>
        <p>
            After validation succeeds, the backend generates a cryptographically secure random
            challenge — unique, unpredictable, short-lived, single-use. The client must return it;
            the backend verifies existence, session ownership, expiration, and that it was never
            used. After success, the challenge is permanently invalidated.
        </p>
        <p>
            The challenge <strong>must</strong> be server-generated. A client-made nonce could be
            controlled or predicted. Only the server can guarantee uniqueness, randomness,
            lifecycle, expiration, and ownership.
        </p>
        <p>
            Each challenge carries a TTL (for example 30–60 seconds). After expiry, auth fails and a
            new challenge is required — shrinking the attack window.
        </p>

        <h3>Single consumption (not REST idempotency)</h3>
        <p>
            The critical control is <strong>atomic single consumption</strong> of the nonce — not
            classic REST idempotency. The same repeated request must never produce another
            successful authentication.
        </p>
        <p>Challenge states: Pending → Used / Expired. Reuse is rejected immediately.</p>

        <h3>3. Biometric session token rotation</h3>
        <p>
            After a successful login, the previous biometric session token is invalidated and a new
            one is issued. Older tokens become useless after the next successful login.
        </p>

        <h2>New flow</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`1. App requests challenge from backend
2. Backend generates random nonce (SecureRandom)
3. Backend binds nonce to user, device, biometric token
4. App runs local biometric verification
5. App sends nonce + biometric token
6. Backend consumes nonce atomically
7. Backend validates biometric session with provider
8. Backend invalidates previous biometric token
9. Backend issues rotated biometric token
10. Backend creates bank session`}
        </pre>

        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Before</th>
                        <th className="px-3 py-2 text-left">After</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Persistent auth token</td>
                        <td className="px-3 py-2">One-time challenge</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Replay vulnerable</td>
                        <td className="px-3 py-2">Replay resistant</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Long-lived credentials</td>
                        <td className="px-3 py-2">Short-lived credentials</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Client trusted</td>
                        <td className="px-3 py-2">Server authoritative</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2">Reusable requests</td>
                        <td className="px-3 py-2">Single-use requests</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>REST contracts (simplified)</h2>
        <h3>Request challenge</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`POST /api/v1/biometric/challenges

{
  "userId": "usr_78451",
  "deviceId": "device_92c01",
  "biometricToken": "finger-token-current"
}

→ {
  "challengeId": "chl_a46e7c",
  "nonce": "UcQpGWCSqALdTiS34jkT2w",
  "expiresAt": "2026-07-31T18:10:30Z"
}`}
        </pre>

        <h3>Complete authentication</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`POST /api/v1/biometric/authentications

{
  "challengeId": "chl_a46e7c",
  "nonce": "UcQpGWCSqALdTiS34jkT2w",
  "userId": "usr_78451",
  "deviceId": "device_92c01",
  "biometricToken": "finger-token-current"
}

→ {
  "accessToken": "bank-session-token",
  "newBiometricToken": "finger-token-rotated",
  "expiresIn": 900
}`}
        </pre>

        <h2>Implementation highlights</h2>
        <p>
            Portfolio focus: three critical fragments — secure nonce generation, atomic consumption,
            and conditional token rotation. Store the <strong>hash</strong> of the nonce, not the
            plaintext value.
        </p>

        <h3>1. Secure nonce generation</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`public final class NonceGenerator {
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();
    private static final int NONCE_LENGTH_BYTES = 32;

    public static String generate() {
        byte[] randomBytes = new byte[NONCE_LENGTH_BYTES];
        SECURE_RANDOM.nextBytes(randomBytes);
        return Base64.getUrlEncoder()
                .withoutPadding()
                .encodeToString(randomBytes);
    }
}`}
        </pre>
        <p>
            Avoid <code>UUID.randomUUID()</code>, <code>Math.random()</code>, or{" "}
            <code>Random</code> for the nonce. Use <code>SecureRandom</code>.
        </p>

        <h3>2. Atomic challenge consumption</h3>
        <p>
            A read-then-write race lets two concurrent requests both see <code>PENDING</code>. Use a
            conditional update:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`UPDATE biometric_challenge
   SET status = 'USED',
       used_at = CURRENT_TIMESTAMP
 WHERE challenge_id = ?
   AND status = 'PENDING'
   AND expires_at > CURRENT_TIMESTAMP;

-- updatedRows must be exactly 1; otherwise → replay`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Request A consumes nonce → updates 1 row → proceeds
Request B same nonce     → updates 0 rows → ReplayDetectedException`}
        </pre>

        <h3>3. Conditional token rotation</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`UPDATE biometric_token
   SET token_hash = ?,
       rotated_at = CURRENT_TIMESTAMP,
       version = version + 1
 WHERE user_id = ?
   AND device_id = ?
   AND token_hash = ?
   AND status = 'ACTIVE';

-- compare-and-swap: rotate only if current hash still matches`}
        </pre>

        <h2>Mobile side (React + Cordova)</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`async function loginWithBiometrics({ userId, deviceId, biometricToken }) {
  const challenge = await requestBiometricChallenge({
    userId, deviceId, biometricToken
  });

  const biometricResult = await authenticateLocally();
  if (!biometricResult.success) {
    throw new Error("Local biometric authentication failed");
  }

  const authentication = await completeBiometricAuthentication({
    challengeId: challenge.challengeId,
    nonce: challenge.nonce,
    userId, deviceId, biometricToken
  });

  await secureStorage.set(
    "biometricToken",
    authentication.newBiometricToken
  );

  return authentication.accessToken;
}`}
        </pre>
        <p>
            Never store the biometric token in <code>localStorage</code>. Use secure storage backed
            by Android Keystore / iOS Keychain.
        </p>

        <h2>Consume before vs reserve-and-complete</h2>
        <ul>
            <li>
                <strong>Consume first:</strong> blocks concurrent replays immediately; if the
                biometric provider call fails technically, user must request a new challenge.
            </li>
            <li>
                <strong>Reserve then complete:</strong>{" "}
                <code>PENDING → PROCESSING → USED|FAILED</code>. Distinguishes replay from a
                technical failure during external validation — preferred for banking login.
            </li>
        </ul>

        <h2>Engineering decisions</h2>
        <ul>
            <li>
                <strong>Auth state on the server</strong> — challenge lifecycle is server-owned.
            </li>
            <li>
                <strong>Ephemeral credentials</strong> — live only for one login attempt.
            </li>
            <li>
                <strong>Separate verification from authorization</strong> — biometrics confirm
                identity; the backend authorizes authentication.
            </li>
            <li>
                <strong>Defense in depth</strong> — server validation, one-time challenges, TTL,
                token rotation, and TLS each cover gaps in the others.
            </li>
        </ul>

        <h2>Results</h2>
        <ul>
            <li>Eliminated replay of authentication requests</li>
            <li>Enforced single-use challenges</li>
            <li>Reduced credential exposure windows</li>
            <li>Preserved existing biometric UX</li>
            <li>Strengthened mobile banking security posture</li>
        </ul>

        <h2>My contribution</h2>
        <ul>
            <li>Security analysis with the cybersecurity team</li>
            <li>Authentication architecture redesign</li>
            <li>Backend implementation in Java</li>
            <li>Mobile implementation with React and Apache Cordova</li>
            <li>REST API integration and end-to-end validation</li>
            <li>Coordination with QA and security during rollout</li>
        </ul>

        <h2>Lessons learned</h2>
        <p>
            Biometrics verify <strong>who the user is</strong>. The authentication protocol decides{" "}
            <strong>whether the request can be trusted</strong>. Secure login needs every attempt to
            be unique, verifiable, short-lived, and impossible to replay.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Original          New
Fingerprint  →    Fingerprint
Persistent   →    Server validation
token             One-time challenge
Backend      →    Timestamp check
Login             Single-use consume
                  Token rotation
                  Login`}
        </pre>

        <BlogClosingQuote>
            TLS protects the wire. Nonces, TTL, atomic consumption, and token rotation protect the
            protocol. That gap is where authentication bypass lives — and where architecture earns
            its keep.
        </BlogClosingQuote>
    </>
);

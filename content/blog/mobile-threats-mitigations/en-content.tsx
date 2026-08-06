import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const mobileThreatsMitigationsContentEn = (
    <>
        <p>
            This section can be one of the most valuable parts of the article because it connects
            each threat with the countermeasures used in real banking applications.
        </p>
        <p>
            It complements the layered view of <strong>Defense in Depth</strong>: the focus here is
            not the reference architecture, but the catalog of attacks that architecture tries to
            contain — and how each one is mitigated in practice.
        </p>

        <BlogFigure
            src="/blog/mobile-threats-mitigations-card.png"
            alt="Threats and mitigations in mobile banking"
            caption="Twelve common threats and their countermeasures in financial apps"
        />

        <BlogFigure
            src="/blog/mobile-threats-mitigations-infografia.png"
            alt="Infographic: common attacks on mobile banking apps and how to mitigate them"
            caption="Visual map: attack → how it works → example → risk → mitigation"
        />

        <h2>1. Man in the Middle (MITM)</h2>
        <h3>What is it?</h3>
        <p>
            An attacker sits between the mobile app and the server to intercept or modify traffic
            without the user noticing.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`App
   │
   ▼
Attacker
   │
   ▼
Bank`}
        </pre>

        <h3>Real-world example</h3>
        <p>A user joins free airport Wi‑Fi.</p>
        <p>The attacker creates a fake Access Point with the same name.</p>
        <p>All traffic passes through the attacker first.</p>
        <p>
            If the app does not correctly verify the server certificate, the attacker can:
        </p>
        <ul>
            <li>read responses</li>
            <li>modify responses</li>
            <li>steal tokens</li>
            <li>capture credentials</li>
        </ul>

        <h3>How it is mitigated</h3>
        <ul>
            <li>TLS 1.3</li>
            <li>SSL Pinning</li>
            <li>HSTS</li>
            <li>Mutual TLS (mTLS)</li>
            <li>Certificate Transparency</li>
            <li>Periodic certificate rotation</li>
        </ul>

        <h2>2. Replay Attack</h2>
        <h3>What is it?</h3>
        <p>The attacker captures a valid request and later resends it.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`User
Transfer $500
        ↓
Attacker captures
        ↓
Resends the exact same request`}
        </pre>
        <p>
            If the backend does not validate operation uniqueness, it may execute the transfer
            again.
        </p>

        <h3>Example</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`POST /transfer
amount=500
account=123
token=abc`}
        </pre>
        <p>The attacker simply resends that exact request.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>
                <strong>Nonce</strong> — every request has a unique identifier.
            </li>
            <li>
                <strong>Timestamp</strong> — requests expire after a few seconds.
            </li>
            <li>
                <strong>Sequence Number</strong> — each request has a consecutive number.
            </li>
            <li>
                <strong>Idempotency Key</strong> — the same operation can run only once.
            </li>
            <li>
                <strong>Request Signature</strong> — every request is digitally signed.
            </li>
            <li>
                <strong>Short-lived JWT</strong> — for example, 5 minutes.
            </li>
        </ul>

        <h2>3. Tampering</h2>
        <h3>What is it?</h3>
        <p>Modifying the APK to change its behavior.</p>
        <p>Examples:</p>
        <ul>
            <li>remove validations</li>
            <li>unlock features</li>
            <li>disable biometrics</li>
            <li>modify URLs</li>
            <li>change endpoints</li>
        </ul>

        <h3>Real-world example</h3>
        <p>The attacker decompiles the APK with jadx.</p>
        <p>Changes</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`if(user.isPremium())`}
        </pre>
        <p>to</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`if(true)`}
        </pre>
        <p>Recompiles and installs the app.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>App Signature Verification</li>
            <li>Integrity Check</li>
            <li>Hash Verification</li>
            <li>Runtime Integrity</li>
            <li>Play Integrity API</li>
            <li>Apple App Attest</li>
            <li>Tamper Detection</li>
            <li>DexGuard</li>
        </ul>

        <h2>4. Rooting / Jailbreak</h2>
        <h3>What is it?</h3>
        <p>The attacker gains administrative privileges on the device.</p>
        <p>That enables:</p>
        <ul>
            <li>reading memory</li>
            <li>intercepting calls</li>
            <li>modifying files</li>
            <li>accessing secure storage</li>
        </ul>

        <h3>Example</h3>
        <p>Rooted malware reads a token stored by the app.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Root Detection</li>
            <li>Jailbreak Detection</li>
            <li>Magisk Detection</li>
            <li>Zygisk Detection</li>
            <li>Play Integrity API</li>
            <li>DeviceCheck</li>
            <li>
                Block critical operations — many banking apps still open, but block transfers,
                payments, and password changes.
            </li>
        </ul>

        <h2>5. Reverse Engineering</h2>
        <h3>What is it?</h3>
        <p>Analyzing the APK to learn how it works.</p>
        <p>Tools:</p>
        <ul>
            <li>jadx</li>
            <li>apktool</li>
            <li>Ghidra</li>
        </ul>

        <h3>Attacker goals</h3>
        <p>Find:</p>
        <ul>
            <li>hidden APIs</li>
            <li>keys</li>
            <li>secrets</li>
            <li>URLs</li>
            <li>algorithms</li>
        </ul>

        <h3>Example</h3>
        <p>The developer left:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`String apiKey="123456789";`}
        </pre>
        <p>The attacker simply extracts it.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>
                <strong>Obfuscation</strong> — ProGuard, R8, DexGuard
            </li>
            <li>String Encryption</li>
            <li>
                <strong>Native Libraries</strong> — move critical logic to C/C++ via NDK
            </li>
            <li>
                <strong>Secret Management</strong> — never ship secrets inside the APK
            </li>
            <li>
                <strong>HSM</strong> — private keys never live in the app
            </li>
        </ul>

        <h2>6. Hooking</h2>
        <h3>What is it?</h3>
        <p>
            Changing app behavior while it is running. It does not modify the APK — it modifies
            memory.
        </p>
        <p>Tools:</p>
        <ul>
            <li>Frida</li>
            <li>Xposed</li>
            <li>LSPosed</li>
        </ul>

        <h3>Example</h3>
        <p>The attacker replaces</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`isFingerprintValid()`}
        </pre>
        <p>so it always returns</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`true`}
        </pre>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Frida Detection</li>
            <li>Hook Detection</li>
            <li>Runtime Integrity</li>
            <li>RASP</li>
        </ul>

        <h2>7. Credential Stuffing</h2>
        <h3>What is it?</h3>
        <p>
            Using millions of leaked username/password pairs to attempt automated logins.
        </p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>MFA</li>
            <li>Rate Limiting</li>
            <li>CAPTCHA</li>
            <li>Device Fingerprinting</li>
            <li>Behavioral Analytics</li>
        </ul>

        <h2>8. Brute Force</h2>
        <h3>What is it?</h3>
        <p>Trying thousands of passwords.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Temporary lockout</li>
            <li>Progressive backoff</li>
            <li>MFA</li>
            <li>Rate Limiting</li>
        </ul>

        <h2>9. Session Hijacking</h2>
        <h3>What is it?</h3>
        <p>Stealing the session token.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Short-lived JWT</li>
            <li>Refresh Token Rotation</li>
            <li>Token Binding</li>
            <li>mTLS</li>
            <li>Device Binding</li>
        </ul>

        <h2>10. API Abuse</h2>
        <h3>What is it?</h3>
        <p>Automating calls against APIs.</p>
        <p>Example: sending 100,000 requests per minute.</p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Cloudflare</li>
            <li>WAF</li>
            <li>Rate Limiting</li>
            <li>Bot Detection</li>
            <li>API Gateway</li>
        </ul>

        <h2>11. Malware Overlay</h2>
        <h3>What is it?</h3>
        <p>
            A malicious app paints a fake screen on top of the banking app to capture credentials.
            Very common on Android.
        </p>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Overlay detection</li>
            <li>
                <strong>FLAG_SECURE</strong> — blocks screenshots and screen recording on sensitive
                views
            </li>
            <li>Accessibility Abuse Detection</li>
        </ul>

        <h2>12. Memory Dump</h2>
        <h3>What is it?</h3>
        <p>The attacker dumps RAM looking for:</p>
        <ul>
            <li>tokens</li>
            <li>keys</li>
            <li>PIN</li>
            <li>credentials</li>
        </ul>

        <h3>How it is mitigated</h3>
        <ul>
            <li>Do not keep secrets in memory longer than needed</li>
            <li>Memory zeroization</li>
            <li>In-memory encryption for critical data</li>
            <li>Anti Debugging</li>
        </ul>

        <h2>Summary of attacks and mitigations</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Attack</th>
                        <th className="px-3 py-2 text-left">Goal</th>
                        <th className="px-3 py-2 text-left">Main mitigations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">MITM</td>
                        <td className="px-3 py-2">Intercept or modify communications</td>
                        <td className="px-3 py-2">TLS 1.3, SSL Pinning, mTLS</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Replay</td>
                        <td className="px-3 py-2">Replay a valid request</td>
                        <td className="px-3 py-2">
                            Nonce, Timestamp, Idempotency Key, digital signatures
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Tampering</td>
                        <td className="px-3 py-2">Modify the APK</td>
                        <td className="px-3 py-2">
                            App Signature Verification, Play Integrity API, hashes, Runtime
                            Integrity
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Rooting / Jailbreak</td>
                        <td className="px-3 py-2">Gain elevated privileges</td>
                        <td className="px-3 py-2">
                            Root Detection, Magisk Detection, Device Integrity
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Reverse Engineering</td>
                        <td className="px-3 py-2">Analyze application code</td>
                        <td className="px-3 py-2">
                            Obfuscation, String Encryption, NDK, secure secret management
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Hooking</td>
                        <td className="px-3 py-2">Alter runtime behavior</td>
                        <td className="px-3 py-2">Frida Detection, Hook Detection, RASP</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Credential Stuffing</td>
                        <td className="px-3 py-2">Reuse leaked credentials</td>
                        <td className="px-3 py-2">MFA, Rate Limiting, Device Fingerprinting</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Brute Force</td>
                        <td className="px-3 py-2">Guess passwords</td>
                        <td className="px-3 py-2">Temporary lockouts, MFA, CAPTCHA</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Session Hijacking</td>
                        <td className="px-3 py-2">Steal the user session</td>
                        <td className="px-3 py-2">
                            Short-lived JWT, Refresh Token Rotation, Device Binding
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">API Abuse</td>
                        <td className="px-3 py-2">Saturate or automate API usage</td>
                        <td className="px-3 py-2">
                            WAF, Cloudflare, API Gateway, Bot Detection
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Malware Overlay</td>
                        <td className="px-3 py-2">Capture credentials via fake screens</td>
                        <td className="px-3 py-2">
                            FLAG_SECURE, overlay detection, Accessibility Protection
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Memory Dump</td>
                        <td className="px-3 py-2">Extract secrets from RAM</td>
                        <td className="px-3 py-2">
                            Zeroization, in-memory encryption, Anti Debugging
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            Combined with architecture and a banking transaction flow, this section turns the
            article into a fairly complete guide to the security layers typically implemented in
            financial mobile apps.
        </p>

        <BlogClosingQuote>
            Every threat has a countermeasure. Mobile banking does not pick one — it stacks many,
            and assumes the attacker is already on the device.
        </BlogClosingQuote>
    </>
);

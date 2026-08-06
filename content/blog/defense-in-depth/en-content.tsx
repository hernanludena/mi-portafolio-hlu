import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const defenseInDepthContentEn = (
    <>
        <p>
            In a banking application, security cannot depend on a single technology. HTTPS alone or
            a second authentication factor is not enough. An attacker may try to intercept traffic,
            modify the app, reverse-engineer it, automate attacks, compromise a device, or exploit
            infrastructure vulnerabilities.
        </p>
        <p>
            That is why, while contributing to a mobile banking platform, I learned that the
            strongest approach is <strong>Defense in Depth</strong>: multiple coordinated
            mechanisms protecting the application from the client device all the way to the services
            that process financial data.
        </p>
        <p>
            This article shares a reference architecture based on practices widely used across the
            financial industry.
        </p>

        <h2>A seemingly simple request</h2>
        <p>
            When a user opens the app and checks an account balance, that request actually crosses
            many protection layers before it reaches the backend.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Mobile App
      │
SSL/TLS + SSL Pinning
      │
Cloudflare
      │
NetScaler (ADC)
      │
API Gateway
      │
Authentication Services
      │
Java Microservices
      │
Encryption Services / HSM
      │
Oracle Database`}
        </pre>
        <p>
            Each layer has a specific purpose and protects against a different class of threats.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-arquitectura.png"
            alt="Complete mobile banking architecture with Defense in Depth security layers"
            caption="Full architecture — from the mobile device to the banking core, with cross-cutting layers and mitigated threats"
        />

        <BlogFigure
            src="/blog/defense-in-depth-flujo-transaccion.png"
            alt="Banking transaction flow from the mobile app to the core with security layers"
            caption="Transaction flow — device checks, perimeter, application layer, HSM, and core systems"
        />

        <h2>First line of defense: protecting the infrastructure</h2>
        <p>
            Before a request reaches bank servers, it usually passes through specialized perimeter
            protection services.
        </p>

        <h3>Cloudflare</h3>
        <p>Cloudflare acts as the first barrier against internet traffic.</p>
        <p>Typical responsibilities include:</p>
        <ul>
            <li>DDoS protection.</li>
            <li>Web Application Firewall (WAF).</li>
            <li>Bot protection.</li>
            <li>Rate limiting.</li>
            <li>IP reputation filtering.</li>
            <li>Geo blocking.</li>
            <li>API protection.</li>
        </ul>
        <p>
            Thanks to this layer, a large volume of attacks never reaches banking infrastructure.
        </p>

        <h3>NetScaler</h3>
        <p>
            After Cloudflare it is common to find an Application Delivery Controller such as
            NetScaler.
        </p>
        <p>Beyond load balancing, it can handle:</p>
        <ul>
            <li>SSL termination.</li>
            <li>Reverse proxy.</li>
            <li>High availability.</li>
            <li>Intelligent traffic distribution.</li>
            <li>Health checks.</li>
            <li>Session persistence.</li>
        </ul>
        <p>This layer improves both availability and platform performance.</p>

        <BlogFigure
            src="/blog/defense-in-depth-perimeter.png"
            alt="Perimeter defense with Cloudflare and NetScaler ADC"
            caption="Perimeter — Cloudflare filters threats at the edge; NetScaler load-balances, terminates SSL, and keeps availability high"
        />

        <h2>Secure communications</h2>
        <p>
            All communication between the mobile application and the backend must travel encrypted
            with TLS.
        </p>
        <p>However, HTTPS alone does not eliminate every risk.</p>

        <h3>SSL Pinning</h3>
        <p>One of the most widely used mechanisms in banking apps is SSL Pinning.</p>
        <p>
            The application stores expected certificate information ahead of time and verifies that
            the server presents exactly that certificate.
        </p>
        <p>This helps prevent attacks such as:</p>
        <ul>
            <li>Man in the Middle.</li>
            <li>Forged certificates.</li>
            <li>Compromised Wi-Fi networks.</li>
            <li>Malicious proxies.</li>
        </ul>
        <p>
            Even if an attacker installs a fraudulent certificate on the device, the app will reject
            the connection.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-ssl-pinning.png"
            alt="SSL Pinning compared to a Man-in-the-Middle attack"
            caption="Without pinning, MITM can succeed; with certificate/public key pinning the app rejects the forged certificate"
        />

        <h2>Protecting the application itself</h2>
        <p>
            A banking application must also defend against attacks aimed at the client binary.
        </p>
        <p>Common protections include:</p>

        <h3>Root and Jailbreak Detection</h3>
        <p>
            Detect compromised devices where an attacker has elevated privileges.
        </p>

        <h3>Emulator Detection</h3>
        <p>
            Prevent the app from running in environments used for automated analysis.
        </p>

        <h3>Anti Debugging</h3>
        <p>
            Detect debugging tools that allow inspecting application execution.
        </p>

        <h3>Hook Detection</h3>
        <p>
            Block frameworks used to modify app behavior at runtime, such as Frida or Xposed.
        </p>

        <h3>Tampering Detection</h3>
        <p>
            Detect whether the APK was modified, recompiled, or resigned by an attacker.
        </p>

        <h3>Code Obfuscation</h3>
        <p>
            Make reverse engineering harder with tools such as ProGuard, R8, or DexGuard.
        </p>
        <p>
            These techniques do not make attacks impossible, but they significantly raise the
            effort required to compromise the application.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-app-hardening.png"
            alt="Mobile device protections: root, emulator, anti-debug, hooks, tampering, and obfuscation"
            caption="Client hardening — runtime threat detection and binary protection"
        />

        <h2>Credential protection</h2>
        <p>
            One of the most sensitive assets in a banking app is the user&apos;s credentials.
        </p>
        <p>Passwords should never travel or be stored in plaintext.</p>
        <p>
            Many financial systems also use <strong>PIN Block</strong>, a widely adopted standard
            to protect PINs during critical operations such as authentication, PIN change, or
            credential recovery.
        </p>
        <p>
            The PIN is transformed following ISO 9564 and then encrypted before being processed by
            an HSM.
        </p>
        <p>This mechanism prevents the real PIN from being exposed in transit.</p>

        <BlogFigure
            src="/blog/defense-in-depth-pin-hsm.png"
            alt="ISO 9564 PIN Block flow encrypted into an HSM without exposing the clear PIN"
            caption="PIN Block + HSM — PIN is transformed (ISO 9564), encrypted, and processed in secure hardware"
        />

        <h2>Encryption and key management</h2>
        <p>Data protection does not stop when requests reach the backend.</p>
        <p>Several technologies usually work together:</p>
        <ul>
            <li>AES for encrypting sensitive data.</li>
            <li>RSA or ECC for secure key exchange.</li>
            <li>SHA-256 or SHA-512 for integrity.</li>
            <li>bcrypt, PBKDF2, or Argon2 for secure password storage.</li>
        </ul>
        <p>
            Cryptographic keys are typically managed by a Hardware Security Module (HSM), so
            private keys never leave a hardened environment.
        </p>

        <h2>Multi-factor authentication</h2>
        <p>A password alone is no longer enough to protect a bank account.</p>
        <p>Modern platforms add multiple complementary mechanisms:</p>
        <ul>
            <li>OTP.</li>
            <li>Biometrics.</li>
            <li>Device binding.</li>
            <li>Push authentication.</li>
            <li>Risk-based authentication.</li>
        </ul>
        <p>
            The latter adapts the security level to the user&apos;s context.
        </p>
        <p>For example:</p>
        <ul>
            <li>unusual location,</li>
            <li>new device,</li>
            <li>atypical time of day,</li>
            <li>suspicious IP address.</li>
        </ul>

        <BlogFigure
            src="/blog/defense-in-depth-mfa-risk.png"
            alt="Multi-factor and risk-based authentication in mobile banking"
            caption="MFA + Risk-Based Auth — OTP, biometrics, device binding, and step-up challenges by risk context"
        />

        <h2>Protection against replay attacks</h2>
        <p>
            A less discussed threat is <strong>Replay Attacks</strong>.
        </p>
        <p>
            In this attack, an adversary captures a legitimate request and later resends it to
            execute an unauthorized operation.
        </p>
        <p>Mitigation usually combines several mechanisms:</p>
        <ul>
            <li>One-time nonces.</li>
            <li>Timestamps.</li>
            <li>Short-lived tokens.</li>
            <li>Unique transaction identifiers.</li>
            <li>Digital signatures.</li>
            <li>Idempotency checks.</li>
        </ul>
        <p>
            With these controls, a valid request stops being reusable once it has been processed.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-replay.png"
            alt="Before and after mitigating a Replay Attack with nonce, timestamp, and idempotency"
            caption="Replay Attack — without controls the request is reusable; with a one-time nonce the replay is rejected"
        />

        <h2>Security is a continuous process</h2>
        <p>
            Banking application development typically includes periodic security assessments.
        </p>
        <p>
            Findings from pentesting, SAST, DAST, and OWASP Mobile Top 10–based testing continuously
            strengthen the platform.
        </p>
        <p>
            Every fixed vulnerability becomes another protection layer added to the system.
        </p>

        <h2>Final reflection</h2>
        <p>
            One of the biggest lessons from working on financial applications is that security is
            not an isolated feature, nor the sole responsibility of the cybersecurity team.
        </p>
        <p>
            It is a cross-cutting discipline involving architecture, mobile development, backend,
            infrastructure, cryptography, and continuous monitoring.
        </p>
        <p>
            When all these layers work together, the result is a platform far more resilient to
            modern attacks.
        </p>
        <p>
            The real strength of a banking application is not a single technology, but how multiple
            mechanisms collaborate to protect every transaction from the client device to the core
            of the financial system.
        </p>

        <BlogClosingQuote>
            Strength is not a single technology — it is how multiple layers collaborate to protect
            every transaction, from the device to the financial core.
        </BlogClosingQuote>
    </>
);

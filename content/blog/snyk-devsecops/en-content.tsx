import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const snykDevsecopsContentEn = (
    <>
        <p>
            Modern software depends more and more on third-party components, frameworks, open-source
            libraries, container images, cloud services and infrastructure defined as code.
        </p>
        <p>
            That evolution speeds delivery — and expands the attack surface. An application can look
            safe in its own code and still pull a critical vulnerability through an external
            dependency. Or keep dependencies updated and still be exposed by insecure Kubernetes,
            Terraform or container configuration.
        </p>
        <p>
            In this study I analyze <strong>Snyk as a security capability integrated into the
            development process</strong>, with emphasis on DevSecOps. Snyk has evolved: it is not
            accurate to present <code>snyk test</code> as the only analysis mechanism. The current
            CLI separates dependency, code, container and IaC analysis.
        </p>
        <blockquote>
            <strong>
                Security should not be a stage after development; it should be part of the same
                process used to build, test and deploy software.
            </strong>
        </blockquote>

        <BlogFigure
            src="/blog/snyk-devsecops-card.png"
            alt="Snyk DevSecOps — security integrated from developer to production"
            caption="Cross-cutting security — SCA, SAST, Container and IaC across the lifecycle"
        />

        <h2>1. The problem Snyk tries to solve</h2>
        <p>For years, security showed up at the end:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`DEVELOPMENT → TESTING → QA → SECURITY → PRODUCTION`}
        </pre>
        <p>
            Finding a vulnerability late is expensive: identify the component, assess impact, fix,
            re-test, rebuild and redeploy. Modern practice shifts controls earlier —{" "}
            <strong>Shift Left Security</strong>: not only &ldquo;do security sooner&rdquo;, but
            embed controls in the same workflow used to build software.
        </p>

        <BlogFigure
            src="/blog/snyk-shift-left.png"
            alt="Shift Left Security: Developer, IDE, Repository, CI/CD, Container, IaC, Production and Monitoring"
            caption="Shift Left — continuous security from IDE through production monitoring"
        />

        <h2>2. What is Snyk?</h2>
        <p>
            Snyk is a platform focused on software development security. Its scope includes open
            source dependencies, source code, container images, infrastructure as code, SBOM,
            continuous monitoring and certain AI-application scenarios.
        </p>
        <p>
            Official docs organize the main mechanisms around SCA, SAST, container security and
            Infrastructure as Code. Thinking of it only as a &ldquo;library scanner&rdquo; is wrong.
            It is better seen as a{" "}
            <strong>security layer integrated into the development lifecycle</strong>.
        </p>

        <BlogFigure
            src="/blog/snyk-platform-layers.png"
            alt="Snyk analysis layers: Open Source SCA, Code SAST, Container and IaC toward Cloud/Runtime"
            caption="Analysis layers — SCA, SAST, Container and IaC under one platform"
        />

        <h2>3. SCA: Software Composition Analysis</h2>
        <p>
            A Java, Node.js or Python app declares few direct dependencies — but each pulls others.
            The <strong>dependency tree</strong> grows fast. A vulnerability may sit several levels
            below what the developer declared.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Application
    │
    ▼
Dependency A
  /         \\
 B           C
             │
             ▼
             D  ← vulnerability here`}
        </pre>
        <p>
            Snyk Open Source analyzes that tree for known vulnerabilities and license issues.
        </p>

        <h2>4. Direct vs transitive vulnerability</h2>
        <p>
            If <code>library-C</code> is vulnerable and arrived via A → B → C, the developer may
            never have added it explicitly. Reviewing only{" "}
            <code>pom.xml</code> / <code>package.json</code> / <code>requirements.txt</code> is not
            enough: you need the full dependency tree.
        </p>

        <h2>5. Vulnerability severity</h2>
        <p>Not every finding is an emergency. A reasonable strategy:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`CRITICAL → block immediately
HIGH     → fix with priority
MEDIUM   → evaluate in context
LOW      → manage via backlog`}
        </pre>
        <p>
            Beyond severity: is the component actually used? Exploitable in our context? Is there a
            mitigation? Internet-facing? Is there a fix? Does it affect production?
        </p>

        <h2>6. SAST: analyzing your own code</h2>
        <p>SCA looks at external components. SAST looks at your code:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`String query =
    "SELECT * FROM users WHERE id = " + userId;`}
        </pre>
        <p>
            Static analysis may flag a SQL Injection pattern. The issue is not in a dependency: it
            is how the code was written. The CLI includes:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`snyk code test`}
        </pre>

        <h2>7. SCA and SAST are not the same</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="text-left py-2 pr-4">Technology</th>
                        <th className="text-left py-2 pr-4">Analyzes</th>
                        <th className="text-left py-2">Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">SCA</td>
                        <td className="py-2 pr-4">Dependencies</td>
                        <td className="py-2">Vulnerable library</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">SAST</td>
                        <td className="py-2 pr-4">Source code</td>
                        <td className="py-2">SQL Injection</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Container</td>
                        <td className="py-2 pr-4">Image</td>
                        <td className="py-2">Vulnerable OS package</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">IaC</td>
                        <td className="py-2 pr-4">Configuration</td>
                        <td className="py-2">Public storage</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">SBOM</td>
                        <td className="py-2 pr-4">Inventory</td>
                        <td className="py-2">Included components</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>A mature strategy combines these controls.</p>

        <h2>8. Container security</h2>
        <p>
            A seemingly simple image contains OS, system packages, runtime, app dependencies and the
            application itself:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`FROM python:3.11
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app.py .
CMD ["python", "app.py"]`}
        </pre>
        <p>
            Snyk Container analyzes images and dependencies, and can produce an SBOM. The CLI
            includes <code>container test</code>, <code>container monitor</code> and{" "}
            <code>container sbom</code>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Dockerfile → docker build → Image → Security Scan
                                      ├── vulnerable → STOP
                                      └── acceptable → Registry`}
        </pre>

        <h2>9. Infrastructure as Code</h2>
        <p>
            Infrastructure is defined with Terraform, Kubernetes, Helm, CloudFormation, AWS CDK,
            Kustomize, Serverless and other formats. Code can &ldquo;compile&rdquo; and the app can
            run — and still have excessive privileges, public exposure or insecure networking.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`snyk iac test`}
        </pre>
        <p>
            Key advantage: catch the problem{" "}
            <strong>before creating risk in the cloud</strong>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Terraform → IaC Scan → FAIL → Developer
                      └→ PASS → Deploy`}
        </pre>

        <h2>10. Snyk CLI: test vs monitor</h2>
        <p>Basic flow:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`snyk auth
snyk test          # dependencies (OSS)
snyk code test     # SAST
snyk iac test      # IaC
snyk container …   # containers
snyk monitor       # snapshot + continuous monitoring`}
        </pre>
        <p>
            <strong>snyk test</strong> = point-in-time check (&ldquo;vulnerable right now?&rdquo;).
            Exit codes enable CI/CD decisions.
        </p>
        <p>
            <strong>snyk monitor</strong> = continuous snapshot (&ldquo;did a new CVE appear
            later?&rdquo;).
        </p>

        <BlogFigure
            src="/blog/snyk-test-vs-monitor.png"
            alt="Comparison of snyk test (point in time) vs snyk monitor (continuous monitoring and alerts)"
            caption="test vs monitor — point-in-time evaluation vs risk that appears over time"
        />

        <h2>11. CI/CD integration and Security Gate</h2>
        <p>
            This is where Snyk becomes a real DevSecOps component. A traditional pipeline (Build →
            Test → Package → Deploy) can add SAST, SCA, Container Scan and IaC Scan, plus a{" "}
            <strong>Security Gate</strong> that decides FAIL/PASS by policy.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`CRITICAL → block
HIGH     → block
MEDIUM   → review
LOW      → log`}
        </pre>

        <BlogFigure
            src="/blog/snyk-pipeline-gate.png"
            alt="CI/CD pipeline with parallel SAST SCA Container IaC scans and Security Gate FAIL/PASS"
            caption="Security Gate — scanning stops being observation and becomes delivery control"
        />

        <h2>12. Security across four stages</h2>
        <ul>
            <li>
                <strong>Developer</strong> — IDE, CLI, local scan: catch issues as early as
                possible.
            </li>
            <li>
                <strong>Pull Request</strong> — automated scan: keep vulnerabilities out of main.
            </li>
            <li>
                <strong>CI/CD</strong> — build, test, security, package: security as a delivery
                condition.
            </li>
            <li>
                <strong>Production</strong> — continuous monitoring: risks that appear after
                deploy.
            </li>
        </ul>
        <p>
            Today we ship <code>library X 1.2.0</code> with no CVE. Six months later a vulnerability
            is published. The app did not change — the risk did. Point-in-time analysis is not
            enough.
        </p>

        <h2>13. SBOM and practical examples</h2>
        <p>
            An <strong>SBOM</strong> (Software Bill of Materials) is the component inventory: what
            is included, which version, where it is used, which apps a CVE affects. SCA → visibility
            → SBOM → risk management.
        </p>
        <p>
            For Java (<code>pom.xml</code>) or Node (<code>package.json</code>) / Python (
            <code>requirements.txt</code>), the pipeline should answer more than &ldquo;3
            vulnerabilities found&rdquo;: what? where? why? how severe? exploitable? how to fix?
        </p>

        <h2>14. Secrets, thresholds and false positives</h2>
        <p>
            Never hardcode the token in the repo. Correct pattern: CI/CD secret store →{" "}
            <code>SNYK_TOKEN</code> → pipeline → CLI.
        </p>
        <p>Possible policies:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Strict:     Critical/High/Medium/Low → FAIL
Balanced:   Critical/High → FAIL; Medium → REVIEW; Low → ALLOW
Initial:    Critical → FAIL; High → REVIEW; rest → REPORT`}
        </pre>
        <p>
            Blocking everything before understanding volume causes{" "}
            <strong>alert fatigue</strong>. The goal is not zero findings at any cost: it is
            reducing relevant risk (severity, exploitability, exposure, reachability, business
            impact, availability of a fix).
        </p>

        <h2>15. Snyk inside DevSecOps — and what it does not replace</h2>
        <p>
            Shift-left does not dump all security onto developers. Roles: Developer (secure coding +
            fixes), DevOps (CI/CD + automation), Security (policies + risk + governance),
            Architecture (standards).
        </p>
        <p>
            Snyk does not replace pentesting, threat modeling, secure architecture, code review,
            secrets management, IAM, network security, runtime protection or incident response. It
            is one piece of a larger strategy.
        </p>

        <BlogFigure
            src="/blog/snyk-lifecycle-security.png"
            alt="Security integrated in the lifecycle: Development, CI/CD, Infrastructure, Production with cross-cutting SECURITY layer"
            caption="Main figure — security as a cross-cutting capability, not a final stage"
        />

        <h2>16. Advantages, limitations and phased adoption</h2>
        <p>
            <strong>Advantages:</strong> feedback in the developer flow, automation, shift-left,
            multi-artifact visibility, monitoring, CI/CD gates, SBOM.
        </p>
        <p>
            <strong>Limitations:</strong> not every finding is exploitable; automation ≠ complete
            security; noise if misconfigured; you need Detect → Prioritize → Remediate → Verify;
            poorly designed gates block legitimate delivery.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Phase 1 Visibility    → Install → Scan → Measure (no blocking yet)
Phase 2 Prioritization → Findings → Severity → Risk → Backlog
Phase 3 Automation     → Git → CI/CD → Security Scan
Phase 4 Security Gates → Critical/High → Pipeline FAIL
Phase 5 Monitoring     → Production → Continuous → Alert`}
        </pre>

        <h2>17. From DevSecOps to Secure Software Supply Chain</h2>
        <p>
            The biggest conceptual value appears when we stop thinking only about code. Each layer —
            code, dependencies, container, IaC, cloud, production — introduces risk. Modern software
            security must consider the full supply and execution chain. Snyk fits because it is not
            limited to a single artifact type.
        </p>

        <h2>18. Comparison with other tools</h2>
        <p>
            Snyk sits in Application Security / DevSecOps, but not every tool does the same job.
            Comparison depends on what you need to analyze.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="text-left py-2 pr-3">Tool</th>
                        <th className="text-left py-2 pr-3">SAST</th>
                        <th className="text-left py-2 pr-3">SCA</th>
                        <th className="text-left py-2 pr-3">Container</th>
                        <th className="text-left py-2 pr-3">IaC</th>
                        <th className="text-left py-2">Strength</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Snyk</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2">Developer-first, broad coverage</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">SonarQube</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2">Code quality + code security</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">GitHub Adv. Sec.</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2">Deep GitHub integration</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Semgrep</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2">Flexible SAST + custom rules</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Checkmarx / Veracode</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅/⚠️</td>
                        <td className="py-2 pr-3">✅/⚠️</td>
                        <td className="py-2">Enterprise AppSec / compliance</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Trivy</td>
                        <td className="py-2 pr-3">❌</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2">OSS cloud-native scanner</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-3">Mend / OWASP DC</td>
                        <td className="py-2 pr-3">⚠️/❌</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️/❌</td>
                        <td className="py-2 pr-3">⚠️/❌</td>
                        <td className="py-2">OSS dependency focus</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            Exact capabilities depend on product, edition and configuration. Do not read every cell
            as equal depth.
        </p>

        <BlogFigure
            src="/blog/snyk-tools-landscape.png"
            alt="AppSec tool landscape: Developer Security, Enterprise, Repository-native, Cloud-native and SCA"
            caption="Landscape — different categories solve different layers of the problem"
        />

        <h3>How to group them</h3>
        <ul>
            <li>
                <strong>Developer Security</strong> — Snyk / Semgrep / SonarQube
            </li>
            <li>
                <strong>Enterprise AppSec</strong> — Checkmarx / Veracode
            </li>
            <li>
                <strong>Repository-native</strong> — GitHub Advanced Security
            </li>
            <li>
                <strong>Cloud-native scanning</strong> — Trivy
            </li>
            <li>
                <strong>Open Source / SCA</strong> — Mend / OWASP Dependency-Check
            </li>
        </ul>
        <p>
            <strong>SonarQube ≈ code quality + code security</strong>;{" "}
            <strong>Snyk ≈ developer security + dependencies + cloud-native</strong>. They can
            coexist. <strong>Trivy = scanner</strong>; <strong>Snyk = platform</strong>. GitHub
            Security is deeply repo-native; Snyk aims to be more VCS-agnostic.
        </p>
        <p>
            For a Java + React + Docker + Kubernetes + AWS profile, a useful study order: Snyk →
            SonarQube → Trivy → GitHub Advanced Security → Semgrep; then Checkmarx / Veracode / Mend
            for enterprise AppSec.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Developer
   ├── SonarQube (quality/SAST)
   ├── Semgrep (flexible SAST)
   └── Snyk (SCA/SAST/Container/IaC)
          │
         Git → CI/CD → Trivy (container/IaC)
                          │
                     Kubernetes → AWS`}
        </pre>
        <p>
            Key point: in a mature DevSecOps architecture you can use several tools because they
            solve different layers.
        </p>

        <h2>19. Conclusion</h2>
        <p>
            Snyk&apos;s biggest contribution is not only finding vulnerabilities: it is{" "}
            <strong>integrating security into the software engineering process</strong>. Moving from
            Develop → Deploy → Security to Develop → Analyze → Secure → Build → Deploy → Monitor →
            Improve.
        </p>
        <p>
            A complete strategy includes SAST + SCA + IaC + Container + SBOM + Risk Management +
            CI/CD Gates + Monitoring. Snyk is one piece of a DevSecOps strategy — not a complete
            security solution by itself.
        </p>
        <blockquote>
            <strong>
                Find important risks early, prioritize them correctly, remediate automatically when
                possible, and keep security across the full software lifecycle.
            </strong>
        </blockquote>
        <p>
            <em>
                Note: commands and capabilities evolve with versions. Always validate against the
                docs for your CLI version. Sources: official Snyk documentation (scan overview, CLI
                commands, test, monitor, container, iac test) and practical introductory guides.
            </em>
        </p>

        <BlogClosingQuote>
            Security is not a final stage. It is a cross-cutting lifecycle capability — and Snyk is
            one piece, not the whole strategy.
        </BlogClosingQuote>
    </>
);

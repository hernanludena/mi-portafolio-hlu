import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const snykDevsecopsContentEs = (
    <>
        <p>
            El desarrollo moderno depende cada vez más de componentes de terceros, frameworks,
            librerías open source, imágenes de contenedores, servicios cloud e infraestructura
            definida mediante código.
        </p>
        <p>
            Esa evolución acelera la entrega — y también amplía la superficie de ataque. Una
            aplicación puede tener código propio aparentemente seguro e incorporar una
            vulnerabilidad crítica vía dependencia externa. O tener dependencias actualizadas y
            quedar expuesta por una configuración insegura de Kubernetes, Terraform o un
            contenedor.
        </p>
        <p>
            En este estudio analizo <strong>Snyk como herramienta de seguridad integrada al
            proceso de desarrollo</strong>, con énfasis en DevSecOps. Snyk ha evolucionado: no
            conviene presentar <code>snyk test</code> como único mecanismo. La CLI actual separa
            análisis de dependencias, código, contenedores e IaC.
        </p>
        <blockquote>
            <strong>
                La seguridad no debería ser una etapa posterior al desarrollo; debería formar parte
                del mismo proceso mediante el cual construimos, probamos y desplegamos software.
            </strong>
        </blockquote>

        <BlogFigure
            src="/blog/snyk-devsecops-card.png"
            alt="Snyk DevSecOps — seguridad integrada desde el desarrollador hasta producción"
            caption="Seguridad transversal — SCA, SAST, Container e IaC en el ciclo de vida"
        />

        <h2>1. El problema que intenta resolver Snyk</h2>
        <p>Durante muchos años, seguridad aparecía al final:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`DESARROLLO → TESTING → QA → SEGURIDAD → PRODUCCIÓN`}
        </pre>
        <p>
            Encontrar una vulnerabilidad tarde es costoso: identificar el componente, impacto,
            corrección, re-test, rebuild y redeploy. El enfoque moderno desplaza controles hacia
            etapas anteriores — <strong>Shift Left Security</strong>: no solo &ldquo;hacer
            seguridad antes&rdquo;, sino incorporar controles al mismo flujo de trabajo.
        </p>

        <BlogFigure
            src="/blog/snyk-shift-left.png"
            alt="Shift Left Security: Developer, IDE, Repository, CI/CD, Container, IaC, Production y Monitoring"
            caption="Shift Left — seguridad continua desde el IDE hasta el monitoreo en producción"
        />

        <h2>2. ¿Qué es Snyk?</h2>
        <p>
            Snyk es una plataforma orientada a la seguridad del desarrollo de software. Su alcance
            incluye dependencias open source, código fuente, imágenes de contenedores,
            infraestructura como código, SBOM, monitoreo continuo y escenarios relacionados con
            aplicaciones de IA.
        </p>
        <p>
            La documentación oficial organiza los mecanismos principales alrededor de SCA, SAST,
            seguridad de contenedores e Infrastructure as Code. Por tanto, es incorrecto pensarlo
            solo como un &ldquo;scanner de librerías&rdquo;. Es más apropiado verlo como una{" "}
            <strong>capa de seguridad integrada al ciclo de desarrollo</strong>.
        </p>

        <BlogFigure
            src="/blog/snyk-platform-layers.png"
            alt="Capas de análisis Snyk: Open Source SCA, Code SAST, Container e IaC hacia Cloud/Runtime"
            caption="Capas de análisis — SCA, SAST, Container e IaC bajo una misma plataforma"
        />

        <h2>3. SCA: Software Composition Analysis</h2>
        <p>
            Una aplicación Java, Node.js o Python declara pocas dependencias directas — pero cada
            una arrastra otras. El <strong>dependency tree</strong> crece rápido. Una
            vulnerabilidad puede estar varios niveles por debajo de lo que el desarrollador
            declaró.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Aplicación
    │
    ▼
Dependency A
  /         \\
 B           C
             │
             ▼
             D  ← vulnerabilidad aquí`}
        </pre>
        <p>
            Snyk Open Source analiza ese árbol para detectar vulnerabilidades conocidas y problemas
            de licencias.
        </p>

        <h2>4. Vulnerabilidad directa vs. transitiva</h2>
        <p>
            Si <code>library-C</code> es vulnerable y llegó vía A → B → C, el desarrollador
            posiblemente nunca la agregó explícitamente. Revisar solo{" "}
            <code>pom.xml</code> / <code>package.json</code> / <code>requirements.txt</code> no
            basta: hay que analizar el árbol completo.
        </p>

        <h2>5. Severidad de las vulnerabilidades</h2>
        <p>No todo finding es emergencia. Una estrategia razonable:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`CRITICAL → bloquear inmediatamente
HIGH     → corregir prioritariamente
MEDIUM   → evaluar según contexto
LOW      → gestionar en backlog`}
        </pre>
        <p>
            Además de severidad: ¿el componente se usa realmente? ¿es explotable en nuestro
            contexto? ¿hay mitigación? ¿está expuesto a Internet? ¿existe fix? ¿afecta producción?
        </p>

        <h2>6. SAST: análisis del código propio</h2>
        <p>SCA mira componentes externos. SAST mira el código propio:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`String query =
    "SELECT * FROM users WHERE id = " + userId;`}
        </pre>
        <p>
            Un análisis estático puede marcar un patrón de SQL Injection. El problema no está en
            una dependencia: está en cómo se construyó el código. La CLI contempla:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`snyk code test`}
        </pre>

        <h2>7. SCA y SAST no son lo mismo</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="text-left py-2 pr-4">Tecnología</th>
                        <th className="text-left py-2 pr-4">Analiza</th>
                        <th className="text-left py-2">Ejemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">SCA</td>
                        <td className="py-2 pr-4">Dependencias</td>
                        <td className="py-2">Librería vulnerable</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">SAST</td>
                        <td className="py-2 pr-4">Código fuente</td>
                        <td className="py-2">SQL Injection</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Container</td>
                        <td className="py-2 pr-4">Imagen</td>
                        <td className="py-2">Paquete OS vulnerable</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">IaC</td>
                        <td className="py-2 pr-4">Configuración</td>
                        <td className="py-2">Storage público</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">SBOM</td>
                        <td className="py-2 pr-4">Inventario</td>
                        <td className="py-2">Componentes incluidos</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>Una estrategia madura combina estos controles.</p>

        <h2>8. Seguridad de contenedores</h2>
        <p>Una imagen aparentemente sencilla contiene OS, paquetes del sistema, runtime,
            dependencias de la app y la aplicación misma:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`FROM python:3.11
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY app.py .
CMD ["python", "app.py"]`}
        </pre>
        <p>
            Snyk Container analiza imágenes y dependencias, y puede generar SBOM. La CLI contempla{" "}
            <code>container test</code>, <code>container monitor</code> y{" "}
            <code>container sbom</code>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Dockerfile → docker build → Image → Security Scan
                                      ├── vulnerable → STOP
                                      └── acceptable → Registry`}
        </pre>

        <h2>9. Infrastructure as Code</h2>
        <p>
            Hoy la infraestructura se define con Terraform, Kubernetes, Helm, CloudFormation, AWS
            CDK, Kustomize, Serverless y otros formatos. El código puede &ldquo;compilar&rdquo; y
            la app funcionar — y aun así tener privilegios excesivos, exposición pública o
            networking inseguro.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`snyk iac test`}
        </pre>
        <p>
            Ventaja clave: detectar el problema <strong>antes de crear el riesgo en cloud</strong>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Terraform → IaC Scan → FAIL → Developer
                      └→ PASS → Deploy`}
        </pre>

        <h2>10. Snyk CLI: test vs monitor</h2>
        <p>Flujo básico:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`snyk auth
snyk test          # dependencias (OSS)
snyk code test     # SAST
snyk iac test      # IaC
snyk container …   # contenedores
snyk monitor       # snapshot + monitoreo continuo`}
        </pre>
        <p>
            <strong>snyk test</strong> = evaluación puntual (&ldquo;¿está vulnerable ahora?&rdquo;).
            Los exit codes permiten automatizar decisiones en CI/CD.
        </p>
        <p>
            <strong>snyk monitor</strong> = snapshot continuo (&ldquo;¿apareció un CVE
            después?&rdquo;).
        </p>

        <BlogFigure
            src="/blog/snyk-test-vs-monitor.png"
            alt="Comparación snyk test (punto en el tiempo) vs snyk monitor (monitoreo continuo y alertas)"
            caption="test vs monitor — evaluación puntual frente a riesgo que aparece con el tiempo"
        />

        <h2>11. Integración con CI/CD y Security Gate</h2>
        <p>
            Aquí Snyk se vuelve componente real de DevSecOps. Un pipeline tradicional (Build → Test
            → Package → Deploy) puede incorporar SAST, SCA, Container Scan e IaC Scan, y un{" "}
            <strong>Security Gate</strong> que decide FAIL/PASS según política.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`CRITICAL → bloquear
HIGH     → bloquear
MEDIUM   → revisar
LOW      → registrar`}
        </pre>

        <BlogFigure
            src="/blog/snyk-pipeline-gate.png"
            alt="Pipeline CI/CD con escaneos paralelos SAST SCA Container IaC y Security Gate FAIL/PASS"
            caption="Security Gate — el scan deja de ser observación y pasa a control de entrega"
        />

        <h2>12. Seguridad en cuatro etapas</h2>
        <ul>
            <li>
                <strong>Developer</strong> — IDE, CLI, scan local: detectar lo antes posible.
            </li>
            <li>
                <strong>Pull Request</strong> — scan automatizado: evitar vulnerabilidades en la
                rama principal.
            </li>
            <li>
                <strong>CI/CD</strong> — build, test, security, package: seguridad como condición de
                entrega.
            </li>
            <li>
                <strong>Producción</strong> — monitoreo continuo: riesgos que aparecen después del
                despliegue.
            </li>
        </ul>
        <p>
            Hoy desplegamos <code>library X 1.2.0</code> sin CVE. Seis meses después se publica una
            vulnerabilidad. La app no cambió — el riesgo sí. Por eso el análisis puntual no basta.
        </p>

        <h2>13. SBOM y ejemplos prácticos</h2>
        <p>
            Un <strong>SBOM</strong> (Software Bill of Materials) es el inventario de componentes:
            qué hay, qué versión, dónde se usa, qué apps afecta un CVE. SCA → visibilidad → SBOM →
            gestión de riesgo.
        </p>
        <p>
            En Java (<code>pom.xml</code>) o Node (<code>package.json</code>) / Python (
            <code>requirements.txt</code>), el pipeline debería responder no solo &ldquo;3
            vulnerabilities found&rdquo;, sino: ¿qué? ¿dónde? ¿por qué? ¿qué tan grave? ¿explotable?
            ¿cómo se corrige?
        </p>

        <h2>14. Secretos, umbrales y falsos positivos</h2>
        <p>
            Nunca hardcodear el token en el repo. Patrón correcto: secret store del CI/CD →{" "}
            <code>SNYK_TOKEN</code> → pipeline → CLI.
        </p>
        <p>Políticas posibles:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Estricta:     Critical/High/Medium/Low → FAIL
Equilibrada:  Critical/High → FAIL; Medium → REVIEW; Low → ALLOW
Inicial:      Critical → FAIL; High → REVIEW; resto → REPORT`}
        </pre>
        <p>
            Empezar bloqueando todo sin entender el volumen produce{" "}
            <strong>alert fatigue</strong>. El objetivo no es cero findings a cualquier precio:
            es reducir el riesgo relevante (severidad, explotabilidad, exposición, reachability,
            impacto de negocio, disponibilidad de fix).
        </p>

        <h2>15. Snyk dentro de DevSecOps — y lo que no reemplaza</h2>
        <p>
            Shift-left no traslada toda la responsabilidad al desarrollador. Roles: Developer
            (secure coding + fix), DevOps (CI/CD + automation), Security (policies + risk +
            governance), Architecture (standards).
        </p>
        <p>
            Snyk no sustituye pentesting, threat modeling, arquitectura segura, revisión de código,
            gestión de secretos, IAM, seguridad de red, runtime protection ni respuesta a
            incidentes. Es una pieza dentro de una estrategia mayor.
        </p>

        <BlogFigure
            src="/blog/snyk-lifecycle-security.png"
            alt="Seguridad integrada en el ciclo de vida: Development, CI/CD, Infrastructure, Production con capa transversal SECURITY"
            caption="Figura principal — seguridad como capacidad transversal, no etapa final"
        />

        <h2>16. Ventajas, limitaciones y adopción por fases</h2>
        <p>
            <strong>Ventajas:</strong> feedback en el flujo del developer, automatización,
            shift-left, visibilidad multi-artefacto, monitoreo, gates en CI/CD, SBOM.
        </p>
        <p>
            <strong>Limitaciones:</strong> no todo finding es explotable; automatización ≠ seguridad
            completa; ruido si mal configurado; hace falta estrategia Detect → Prioritize →
            Remediate → Verify; gates mal diseñados bloquean entregas legítimas.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Fase 1 Visibilidad     → Install → Scan → Measure (sin bloquear)
Fase 2 Priorización    → Findings → Severity → Risk → Backlog
Fase 3 Automatización  → Git → CI/CD → Security Scan
Fase 4 Security Gates  → Critical/High → Pipeline FAIL
Fase 5 Monitoring      → Production → Continuous → Alert`}
        </pre>

        <h2>17. De DevSecOps a Secure Software Supply Chain</h2>
        <p>
            El mayor valor aparece cuando dejamos de pensar solo en el código. Cada capa — código,
            dependencias, contenedor, IaC, cloud, producción — introduce riesgo. La seguridad del
            software moderno debe considerar la cadena completa de suministro y ejecución. Snyk
            encaja porque no se limita a un único tipo de artefacto.
        </p>

        <h2>18. Comparación con otras herramientas</h2>
        <p>
            Snyk pertenece a Application Security / DevSecOps, pero no todas las herramientas hacen
            lo mismo. La comparación depende de qué quieras analizar.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="text-left py-2 pr-3">Herramienta</th>
                        <th className="text-left py-2 pr-3">SAST</th>
                        <th className="text-left py-2 pr-3">SCA</th>
                        <th className="text-left py-2 pr-3">Container</th>
                        <th className="text-left py-2 pr-3">IaC</th>
                        <th className="text-left py-2">Fortaleza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Snyk</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2">Developer-first, alcance amplio</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">SonarQube</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2">Calidad + seguridad de código</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">GitHub Adv. Sec.</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2">Integración profunda con GitHub</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Semgrep</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2 pr-3">⚠️</td>
                        <td className="py-2">SAST flexible + reglas custom</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Checkmarx / Veracode</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅/⚠️</td>
                        <td className="py-2 pr-3">✅/⚠️</td>
                        <td className="py-2">AppSec empresarial / compliance</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-3">Trivy</td>
                        <td className="py-2 pr-3">❌</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2">Scanner OSS cloud-native</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-3">Mend / OWASP DC</td>
                        <td className="py-2 pr-3">⚠️/❌</td>
                        <td className="py-2 pr-3">✅</td>
                        <td className="py-2 pr-3">⚠️/❌</td>
                        <td className="py-2 pr-3">⚠️/❌</td>
                        <td className="py-2">Foco en dependencias OSS</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            Capacidades exactas dependen de producto, edición y configuración. No interpretar la
            tabla como profundidad idéntica en cada celda.
        </p>

        <BlogFigure
            src="/blog/snyk-tools-landscape.png"
            alt="Landscape de herramientas AppSec: Developer Security, Enterprise, Repository-native, Cloud-native y SCA"
            caption="Landscape — distintas categorías resuelven capas distintas del problema"
        />

        <h3>Cómo agruparlas</h3>
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
            <strong>SonarQube ≈ calidad + seguridad de código</strong>;{" "}
            <strong>Snyk ≈ developer security + dependencias + cloud-native</strong>. Pueden
            convivir. <strong>Trivy = scanner</strong>; <strong>Snyk = plataforma</strong>. GitHub
            Security está profundamente integrado en el repo; Snyk intenta ser más independiente
            del proveedor.
        </p>
        <p>
            Para un perfil Java + React + Docker + Kubernetes + AWS, un orden de estudio útil:
            Snyk → SonarQube → Trivy → GitHub Advanced Security → Semgrep; después Checkmarx /
            Veracode / Mend para visión enterprise.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Developer
   ├── SonarQube (calidad/SAST)
   ├── Semgrep (SAST flexible)
   └── Snyk (SCA/SAST/Container/IaC)
          │
         Git → CI/CD → Trivy (container/IaC)
                          │
                     Kubernetes → AWS`}
        </pre>
        <p>
            La clave: en una arquitectura DevSecOps madura pueden usarse varias porque resuelven
            capas diferentes.
        </p>

        <h2>19. Conclusión</h2>
        <p>
            El mayor aporte de Snyk no es solo detectar vulnerabilidades: es{" "}
            <strong>integrar seguridad dentro del proceso de ingeniería</strong>. Pasar de Develop
            → Deploy → Security a un ciclo Develop → Analyze → Secure → Build → Deploy → Monitor →
            Improve.
        </p>
        <p>
            Una estrategia completa contempla SAST + SCA + IaC + Container + SBOM + Risk Management
            + CI/CD Gates + Monitoring. Snyk es pieza de una estrategia DevSecOps — no solución
            completa por sí sola.
        </p>
        <blockquote>
            <strong>
                Encontrar los riesgos importantes temprano, priorizarlos correctamente, corregirlos
                de manera automatizada cuando sea posible y mantener la seguridad durante todo el
                ciclo de vida del software.
            </strong>
        </blockquote>
        <p>
            <em>
                Nota: comandos y capacidades evolucionan con las versiones. Validar siempre contra
                la documentación de la CLI utilizada. Fuentes: documentación oficial Snyk (scan
                overview, CLI commands, test, monitor, container, iac test) y guías introductorias
                prácticas.
            </em>
        </p>

        <BlogClosingQuote>
            Seguridad no es etapa final. Es capacidad transversal del ciclo de vida — y Snyk es una
            pieza, no toda la estrategia.
        </BlogClosingQuote>
    </>
);

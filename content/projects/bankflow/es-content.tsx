import BlogFigure from "@/components/blog-figure";

export const bankflowDetailEs = (
    <>
        <p>
            Plataforma bancaria de microservicios con <strong>arquitectura hexagonal</strong>{" "}
            (ports &amp; adapters), <strong>Command/Handler/Mediator</strong>, integración{" "}
            <strong>Kafka</strong>, <strong>API Gateway</strong>, <strong>OAuth2/JWT</strong>{" "}
            (Keycloak), <strong>Resilience4j</strong> y SPA <strong>React + Tailwind</strong>.
            Corre en <strong>Docker Compose</strong> local y <strong>Kubernetes (Helm)</strong> en
            cluster.
        </p>

        <BlogFigure
            src="/projects/bankflow-thumbnail-original.png"
            alt="Miniatura Bankflow — microservicios, hexagonal, Kubernetes"
            caption="Vista previa — Spring Cloud · Kafka · Keycloak · Helm"
        />

        <h2>Dominio</h2>
        <ul>
            <li>
                <strong>customer</strong> (:8081) — <code>Person</code> / <code>Customer</code>
            </li>
            <li>
                <strong>transaction</strong> (:8082) — <code>Account</code> / <code>Movement</code>,
                estados de cuenta (JSON + PDF Base64); débito con saldo cero →{" "}
                <code>&quot;Saldo no disponible&quot;</code>
            </li>
        </ul>

        <h2>Integración</h2>
        <ul>
            <li>
                <strong>Async (Kafka):</strong> crear cliente →{" "}
                <code>CustomerCreatedMessage</code> en <code>customer.events</code> → transaction
                abre cuenta (consumer Strategy). Retries +{" "}
                <code>customer.events-dlt</code> (DLT)
            </li>
            <li>
                <strong>Sync:</strong> WebClient vía Eureka + circuit breaker Resilience4j para
                enriquecer estados de cuenta
            </li>
        </ul>

        <BlogFigure
            src="/projects/bankflow-login.png"
            alt="Login Keycloak Sign In del realm bankflow"
            caption="Login — Keycloak realm bankflow (Authorization Code + PKCE)"
        />

        <BlogFigure
            src="/projects/bankflow-customers.png"
            alt="SPA Bankflow página Customers con tabla de clientes"
            caption="SPA — CRUD de Customers"
        />

        <BlogFigure
            src="/projects/bankflow-accounts.png"
            alt="SPA Bankflow página Accounts con saldos"
            caption="SPA — Accounts"
        />

        <BlogFigure
            src="/projects/bankflow-movements.png"
            alt="SPA Bankflow página Movements con créditos y débitos"
            caption="SPA — Movements (crédito / débito)"
        />

        <BlogFigure
            src="/projects/bankflow-reports.png"
            alt="SPA Bankflow Reports con estado de cuenta y descarga PDF"
            caption="SPA — Estados de cuenta (vista JSON + Download PDF)"
        />

        <h2>Plataforma</h2>
        <ul>
            <li>Spring Cloud Gateway (:8080) — JWT en el edge</li>
            <li>Eureka (:8761) + Config Server (:8880)</li>
            <li>Keycloak 25 (:8180) — realm <code>bankflow</code></li>
            <li>PostgreSQL 16 — <code>customer_db</code> + <code>transaction_db</code></li>
            <li>Prometheus · Grafana · Zipkin · Kafka UI</li>
        </ul>

        <BlogFigure
            src="/projects/bankflow-eureka.png"
            alt="Dashboard Eureka con API-GATEWAY, CUSTOMER, TRANSACTION UP"
            caption="Eureka — gateway + customer + transaction registrados"
        />

        <BlogFigure
            src="/projects/bankflow-kafka.png"
            alt="Kafka UI topics incluyendo customer.events y topics DLT/retry"
            caption="Kafka UI — customer.events + retry/DLT"
        />

        <BlogFigure
            src="/projects/bankflow-grafana.png"
            alt="Dashboard Grafana Bankflow Overview con request rate y JVM heap"
            caption="Grafana — Bankflow Overview (HTTP rate, JVM heap, 5xx)"
        />

        <h2>Layout hexagonal</h2>
        <p>
            Por servicio: <code>domain</code> → <code>application</code> →{" "}
            <code>infrastructure</code>. El dominio no importa Spring/JPA/Kafka.{" "}
            <code>commons</code> compartido: Mediator, commands,{" "}
            <code>CustomerCreatedMessage</code>.
        </p>

        <h2>API (vía Gateway)</h2>
        <ul>
            <li>
                <code>/api/customers</code> · <code>/api/accounts</code> ·{" "}
                <code>/api/movements</code>
            </li>
            <li>
                <code>GET /api/account-statements?customerId=&amp;startDate=&amp;endDate=&amp;format=JSON|PDF</code>
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Java 21 · Spring Boot 3.5 · Spring Cloud 2024.0.0</li>
            <li>Spring Kafka · Resilience4j · MapStruct · Lombok · iText PDF</li>
            <li>React 18 · TypeScript · Vite · Tailwind · keycloak-js</li>
            <li>Docker Compose · Helm umbrella chart</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>
                <code>mvn -DskipTests package</code> (JDK 21)
            </li>
            <li>
                <code>cd frontend && npm install && npm run build</code>
            </li>
            <li>
                <code>cd docker && cp .env.example .env && docker compose up --build -d</code>
            </li>
            <li>
                Frontend <code>http://localhost/</code> · Gateway <code>:8080</code> · Keycloak{" "}
                <code>:8180</code>
            </li>
            <li>
                K8s: <code>helm install bankflow ./helm/bankflow -n bankflow --create-namespace</code>
            </li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/bankflow"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/bankflow
            </a>
            .
        </p>
    </>
);

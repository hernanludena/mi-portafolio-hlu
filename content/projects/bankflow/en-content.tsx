import BlogFigure from "@/components/blog-figure";

export const bankflowDetailEn = (
    <>
        <p>
            Banking microservices platform with <strong>hexagonal architecture</strong> (ports
            &amp; adapters), <strong>Command/Handler/Mediator</strong>,{" "}
            <strong>Kafka</strong> event-driven integration, <strong>API Gateway</strong>,{" "}
            <strong>OAuth2/JWT</strong> (Keycloak), <strong>Resilience4j</strong>, and a{" "}
            <strong>React + Tailwind</strong> SPA. Runs on <strong>Docker Compose</strong> locally
            and <strong>Kubernetes (Helm)</strong> in cluster.
        </p>

        <BlogFigure
            src="/projects/bankflow-thumbnail-original.png"
            alt="Bankflow thumbnail — microservices, hexagonal, Kubernetes"
            caption="Preview — Spring Cloud · Kafka · Keycloak · Helm"
        />

        <h2>Domain</h2>
        <ul>
            <li>
                <strong>customer</strong> (:8081) — <code>Person</code> / <code>Customer</code>
            </li>
            <li>
                <strong>transaction</strong> (:8082) — <code>Account</code> / <code>Movement</code>,
                statements (JSON + Base64 PDF); debit on zero balance →{" "}
                <code>&quot;Saldo no disponible&quot;</code>
            </li>
        </ul>

        <h2>Integration</h2>
        <ul>
            <li>
                <strong>Async (Kafka):</strong> create customer →{" "}
                <code>CustomerCreatedMessage</code> on <code>customer.events</code> → transaction
                opens account (Strategy consumer). Retries +{" "}
                <code>customer.events-dlt</code> (DLT)
            </li>
            <li>
                <strong>Sync:</strong> WebClient via Eureka + Resilience4j circuit breaker for
                statement enrichment
            </li>
        </ul>

        <BlogFigure
            src="/projects/bankflow-login.png"
            alt="Keycloak Sign In for BANKFLOW realm bankflow"
            caption="Login — Keycloak realm bankflow (Authorization Code + PKCE)"
        />

        <BlogFigure
            src="/projects/bankflow-customers.png"
            alt="Bankflow SPA Customers page with customer table"
            caption="SPA — Customers CRUD"
        />

        <BlogFigure
            src="/projects/bankflow-accounts.png"
            alt="Bankflow SPA Accounts page with balances"
            caption="SPA — Accounts"
        />

        <BlogFigure
            src="/projects/bankflow-movements.png"
            alt="Bankflow SPA Movements page with credits and debits"
            caption="SPA — Movements (credit / debit)"
        />

        <BlogFigure
            src="/projects/bankflow-reports.png"
            alt="Bankflow SPA Reports with account statement and PDF download"
            caption="SPA — Account statements (JSON view + Download PDF)"
        />

        <h2>Platform</h2>
        <ul>
            <li>Spring Cloud Gateway (:8080) — JWT enforced at edge</li>
            <li>Eureka (:8761) + Config Server (:8880)</li>
            <li>Keycloak 25 (:8180) — realm <code>bankflow</code></li>
            <li>PostgreSQL 16 — <code>customer_db</code> + <code>transaction_db</code></li>
            <li>Prometheus · Grafana · Zipkin · Kafka UI</li>
        </ul>

        <BlogFigure
            src="/projects/bankflow-eureka.png"
            alt="Eureka dashboard with API-GATEWAY, CUSTOMER, TRANSACTION UP"
            caption="Eureka — gateway + customer + transaction registered"
        />

        <BlogFigure
            src="/projects/bankflow-kafka.png"
            alt="Kafka UI topics including customer.events and DLT/retry topics"
            caption="Kafka UI — customer.events + retry/DLT topics"
        />

        <BlogFigure
            src="/projects/bankflow-grafana.png"
            alt="Grafana Bankflow Overview dashboard with request rate and JVM heap"
            caption="Grafana — Bankflow Overview (HTTP rate, JVM heap, 5xx)"
        />

        <h2>Hexagonal layout</h2>
        <p>
            Per service: <code>domain</code> → <code>application</code> →{" "}
            <code>infrastructure</code>. Domain never imports Spring/JPA/Kafka. Shared{" "}
            <code>commons</code>: Mediator, commands, <code>CustomerCreatedMessage</code>.
        </p>

        <h2>API (via Gateway)</h2>
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

        <h2>How to run</h2>
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

import BlogFigure from "@/components/blog-figure";

export const springTemporalDetailEn = (
    <>
        <p>
            Credit approval monorepo built with <strong>Temporal</strong>, <strong>Spring Boot 3.5</strong>, and{" "}
            <strong>React + Vite</strong>. Clients submit applications, Temporal orchestrates a 6-step workflow with
            the Saga pattern, and an operator approves or rejects within a <strong>48-hour</strong> window.
        </p>

        <h2>Architecture</h2>
        <p>Monorepo with three main layers:</p>
        <ul>
            <li><strong>apps/web:</strong> React SPA — client form, status polling, and operator dashboard.</li>
            <li><strong>apps/api:</strong> Spring Boot + Temporal Worker — REST, JPA, and durable orchestration.</li>
            <li><strong>infra:</strong> Docker Compose — Temporal Server, Temporal UI, and PostgreSQL.</li>
        </ul>

        <h2>Key features</h2>
        <ul>
            <li><strong>6-step workflow</strong>: validate identity → bureau → score → pre-approve → await signal → disburse/reject.</li>
            <li><strong>3 signals</strong>: approve, reject, and request more documents.</li>
            <li><strong>Saga pattern</strong> with automatic compensation on failure or rejection.</li>
            <li><strong>48-hour timeout</strong> — auto-cancellation if the operator does not act.</li>
            <li>2-second frontend polling — no WebSockets for the MVP.</li>
            <li>Full audit trail in <strong>Temporal UI</strong> (<code>localhost:8088</code>).</li>
        </ul>

        <BlogFigure
            src="/projects/spring-temporal-apply.png"
            alt="Credit application form — Credit Approval System"
            caption="Client — credit application form"
        />

        <h2>Client flow</h2>
        <p>
            After submission, the system returns a UUID <code>applicationId</code>. The workflow starts in Temporal
            with ID <code>credit_&#123;id&#125;</code>, and the client can check status at any time.
        </p>
        <BlogFigure
            src="/projects/spring-temporal-submitted.png"
            alt="Submitted application with application ID"
            caption="Confirmation — application ID for tracking"
        />

        <h2>Status check</h2>
        <p>
            The <strong>Check Status</strong> tab polls <code>GET /api/status/&#123;id&#125;</code> and shows score,
            risk level, and current status (<code>PENDING</code>, <code>DISBURSED</code>, <code>REJECTED</code>,{" "}
            <code>CANCELLED</code>).
        </p>
        <BlogFigure
            src="/projects/spring-temporal-status.png"
            alt="Application status check screen"
            caption="Status — polling without WebSockets"
        />

        <h2>Operator dashboard</h2>
        <p>
            The operator searches by ID, reviews score and risk, and sends signals via REST: approve, reject with
            reason, or request additional documentation.
        </p>
        <BlogFigure
            src="/projects/spring-temporal-operator.png"
            alt="Operator Dashboard — search by application ID"
            caption="Operator — search and decision on applications"
        />

        <h2>How to run</h2>
        <ol>
            <li><code>make install</code> — backend and frontend dependencies.</li>
            <li><code>make infra-up</code> — Temporal + PostgreSQL in Docker.</li>
            <li><code>make dev-api</code> — API at <code>localhost:9191</code> (Swagger at <code>/swagger-ui.html</code>).</li>
            <li><code>make dev-web</code> — frontend at <code>localhost:5173</code>.</li>
        </ol>

        <p>
            Full documentation in the repo: architecture with Mermaid diagrams, end-to-end flow, signals, Saga pattern,
            and sample HTTP requests in <code>api-requests/</code>.
        </p>
    </>
);

import BlogFigure from "@/components/blog-figure";

export const springTemporalDetailEs = (
    <>
        <p>
            Monorepo de aprobación de créditos con <strong>Temporal</strong>, <strong>Spring Boot 3.5</strong> y{" "}
            <strong>React + Vite</strong>. El cliente envía solicitudes, Temporal orquesta un workflow de 6 pasos con
            patrón Saga, y un operador aprueba o rechaza dentro de una ventana de <strong>48 horas</strong>.
        </p>

        <h2>Arquitectura</h2>
        <p>Monorepo con tres capas principales:</p>
        <ul>
            <li><strong>apps/web:</strong> SPA React — formulario cliente, polling de estado y dashboard operador.</li>
            <li><strong>apps/api:</strong> Spring Boot + Temporal Worker — REST, JPA y orquestación durable.</li>
            <li><strong>infra:</strong> Docker Compose — Temporal Server, Temporal UI y PostgreSQL.</li>
        </ul>

        <h2>Características clave</h2>
        <ul>
            <li>Workflow de <strong>6 pasos</strong>: validar identidad → buró → score → pre-aprobar → esperar signal → desembolsar/rechazar.</li>
            <li><strong>3 signals</strong>: aprobar, rechazar y solicitar más documentos.</li>
            <li><strong>Patrón Saga</strong> con compensación automática ante fallos o rechazo.</li>
            <li><strong>Timeout 48h</strong> — auto-cancelación si el operador no actúa.</li>
            <li>Polling cada 2 s en frontend — sin WebSockets para el MVP.</li>
            <li>Auditoría completa en <strong>Temporal UI</strong> (<code>localhost:8088</code>).</li>
        </ul>

        <BlogFigure
            src="/projects/spring-temporal-apply.png"
            alt="Formulario de solicitud de crédito — Credit Approval System"
            caption="Cliente — formulario de solicitud de crédito"
        />

        <h2>Flujo del cliente</h2>
        <p>
            Tras enviar la solicitud, el sistema devuelve un <code>applicationId</code> UUID. El workflow arranca en
            Temporal con ID <code>credit_&#123;id&#125;</code> y el cliente puede consultar el estado en cualquier momento.
        </p>
        <BlogFigure
            src="/projects/spring-temporal-submitted.png"
            alt="Solicitud enviada con application ID"
            caption="Confirmación — ID de solicitud para seguimiento"
        />

        <h2>Consulta de estado</h2>
        <p>
            La pestaña <strong>Check Status</strong> hace polling a <code>GET /api/status/&#123;id&#125;</code> y muestra
            score, nivel de riesgo y estado actual (<code>PENDING</code>, <code>DISBURSED</code>, <code>REJECTED</code>,{" "}
            <code>CANCELLED</code>).
        </p>
        <BlogFigure
            src="/projects/spring-temporal-status.png"
            alt="Pantalla de consulta de estado de solicitud"
            caption="Estado — polling sin WebSockets"
        />

        <h2>Dashboard del operador</h2>
        <p>
            El operador busca por ID, revisa score y riesgo, y envía signals vía REST: aprobar, rechazar con motivo o
            pedir documentación adicional.
        </p>
        <BlogFigure
            src="/projects/spring-temporal-operator.png"
            alt="Operator Dashboard — búsqueda por application ID"
            caption="Operador — búsqueda y decisión sobre solicitudes"
        />

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li><code>make install</code> — dependencias backend y frontend.</li>
            <li><code>make infra-up</code> — Temporal + PostgreSQL en Docker.</li>
            <li><code>make dev-api</code> — API en <code>localhost:9191</code> (Swagger en <code>/swagger-ui.html</code>).</li>
            <li><code>make dev-web</code> — frontend en <code>localhost:5173</code>.</li>
        </ol>

        <p>
            Documentación completa en el repositorio: arquitectura con diagramas Mermaid, flujo end-to-end, signals,
            Saga y requests HTTP de ejemplo en <code>api-requests/</code>.
        </p>
    </>
);

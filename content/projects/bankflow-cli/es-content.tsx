import BlogFigure from "@/components/blog-figure";

export const bankflowCliDetailEs = (
    <>
        <p>
            <strong>bankflow-cli</strong> es un CLI en <strong>Python</strong> para operar la
            plataforma bancaria <strong>Bankflow</strong> (customer, transaction, gateway,
            Keycloak, Kafka, …) sin Postman, curl ni la SPA. Pensado para
            developers/DevOps — y listo para una capa MCP futura sobre los mismos{" "}
            <code>clients/</code>.
        </p>

        <BlogFigure
            src="/projects/bankflow-cli-thumbnail-original.png"
            alt="Miniatura Bankflow CLI — Python Typer DevOps terminal"
            caption="Vista previa — REST · Kafka · Keycloak · smoke tests"
        />

        <h2>Qué podés hacer</h2>
        <ul>
            <li>
                <code>bankflow dev up|status|logs</code> — ciclo de vida Compose local
            </li>
            <li>
                <code>bankflow auth login</code> — password grant Keycloak; token en keychain OS
            </li>
            <li>
                <code>customer</code> / <code>account</code> / <code>transaction</code> — CRUD +
                crédito/débito + estados de cuenta (JSON/PDF)
            </li>
            <li>
                <code>kafka topics|consume</code> · <code>obs health|metrics|traces</code>
            </li>
            <li>
                <code>test smoke</code> / <code>test resilience</code> — checks E2E
            </li>
        </ul>

        <BlogFigure
            src="/projects/bankflow-cli-dev-status.png"
            alt="Terminal bankflow dev status con 15 servicios running"
            caption="dev status — servicios Compose y puertos"
        />

        <BlogFigure
            src="/projects/bankflow-cli-obs-health.png"
            alt="Terminal bankflow obs health con gateway customer transaction UP"
            caption="obs health — actuator health vía gateway/servicios"
        />

        <BlogFigure
            src="/projects/bankflow-cli-customer-list.png"
            alt="Terminal bankflow customer list tabla Rich"
            caption="customer list — salida tabla Rich"
        />

        <BlogFigure
            src="/projects/bankflow-cli-transaction.png"
            alt="Terminal bankflow transaction credit registrando movimiento"
            caption="transaction credit — movimiento registrado"
        />

        <BlogFigure
            src="/projects/bankflow-cli-kafka-topics.png"
            alt="Terminal bankflow kafka topics listando customer.events y DLT"
            caption="kafka topics — customer.events + retry/DLT"
        />

        <h2>Arquitectura</h2>
        <p>
            Commands delgados sobre clients reutilizables — mismo diseño para un futuro{" "}
            <code>bankflow-mcp</code>:
        </p>
        <ul>
            <li>
                <strong>commands/</strong> — flags Typer + orquestar + emitir
            </li>
            <li>
                <strong>clients/</strong> — REST (httpx), Kafka, Keycloak, Compose/K8s
            </li>
            <li>
                <strong>models/</strong> — Pydantic espejo de DTOs Java
            </li>
            <li>
                <strong>output/</strong> — <code>table</code> (Rich) o <code>json</code> (sin ANSI)
            </li>
            <li>
                <strong>exceptions/</strong> — <code>CliError</code> tipado + exit codes
            </li>
        </ul>

        <h2>Modos de salida</h2>
        <ul>
            <li>
                <code>--output table</code> — default, legible
            </li>
            <li>
                <code>--output json</code> — scripts / agentes IA (sin markup Rich)
            </li>
            <li>
                <code>--debug</code> — traceback completo
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Python 3.12+ · Typer · Rich · httpx · Pydantic v2</li>
            <li>kafka-python · PyJWT · keyring · PyYAML</li>
            <li>uv + hatchling · pytest · ruff · mypy</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>Stack Bankflow arriba (Compose o Helm)</li>
            <li>
                <code>uv sync && uv tool install .</code>
            </li>
            <li>
                <code>export BANKFLOW_COMPOSE_FILE=…/docker-compose.yml</code>
            </li>
            <li>
                <code>bankflow auth login --username admin.test</code> →{" "}
                <code>bankflow customer list</code>
            </li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/bankflow-cli"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/bankflow-cli
            </a>
            · companion:{" "}
            <a href="/projects/bankflow" rel="noopener noreferrer">
                Bankflow
            </a>
            .
        </p>
    </>
);

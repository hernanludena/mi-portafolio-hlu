import BlogFigure from "@/components/blog-figure";

export const bankflowCliDetailEn = (
    <>
        <p>
            <strong>bankflow-cli</strong> is a <strong>Python</strong> CLI to operate the{" "}
            <strong>Bankflow</strong> banking microservices platform (customer, transaction,
            gateway, Keycloak, Kafka, …) without Postman, curl, or the web SPA. Built for
            developers/DevOps — and ready for a future MCP layer over the same{" "}
            <code>clients/</code>.
        </p>

        <BlogFigure
            src="/projects/bankflow-cli-thumbnail-original.png"
            alt="Bankflow CLI thumbnail — Python Typer DevOps terminal"
            caption="Preview — REST · Kafka · Keycloak · smoke tests"
        />

        <h2>What you can do</h2>
        <ul>
            <li>
                <code>bankflow dev up|status|logs</code> — local Compose lifecycle
            </li>
            <li>
                <code>bankflow auth login</code> — Keycloak password grant; token in OS keychain
            </li>
            <li>
                <code>customer</code> / <code>account</code> / <code>transaction</code> — CRUD +
                credit/debit + statements (JSON/PDF)
            </li>
            <li>
                <code>kafka topics|consume</code> · <code>obs health|metrics|traces</code>
            </li>
            <li>
                <code>test smoke</code> / <code>test resilience</code> — E2E checks
            </li>
        </ul>

        <BlogFigure
            src="/projects/bankflow-cli-dev-status.png"
            alt="Terminal bankflow dev status with 15 services running"
            caption="dev status — Compose services and ports"
        />

        <BlogFigure
            src="/projects/bankflow-cli-obs-health.png"
            alt="Terminal bankflow obs health showing gateway customer transaction UP"
            caption="obs health — actuator health via gateway/services"
        />

        <BlogFigure
            src="/projects/bankflow-cli-customer-list.png"
            alt="Terminal bankflow customer list Rich table"
            caption="customer list — Rich table output"
        />

        <BlogFigure
            src="/projects/bankflow-cli-transaction.png"
            alt="Terminal bankflow transaction credit registering movement"
            caption="transaction credit — movement registered"
        />

        <BlogFigure
            src="/projects/bankflow-cli-kafka-topics.png"
            alt="Terminal bankflow kafka topics listing customer.events and DLT"
            caption="kafka topics — customer.events + retry/DLT"
        />

        <h2>Architecture</h2>
        <p>
            Thin commands over reusable clients — same design goal as a future{" "}
            <code>bankflow-mcp</code>:
        </p>
        <ul>
            <li>
                <strong>commands/</strong> — Typer flags + orchestrate + emit
            </li>
            <li>
                <strong>clients/</strong> — REST (httpx), Kafka, Keycloak, Compose/K8s
            </li>
            <li>
                <strong>models/</strong> — Pydantic mirrors of Java DTOs
            </li>
            <li>
                <strong>output/</strong> — <code>table</code> (Rich) or <code>json</code> (no ANSI)
            </li>
            <li>
                <strong>exceptions/</strong> — typed <code>CliError</code> + exit codes
            </li>
        </ul>

        <h2>Output modes</h2>
        <ul>
            <li>
                <code>--output table</code> — default, human-readable
            </li>
            <li>
                <code>--output json</code> — scripts / AI agents (no Rich markup)
            </li>
            <li>
                <code>--debug</code> — full traceback
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Python 3.12+ · Typer · Rich · httpx · Pydantic v2</li>
            <li>kafka-python · PyJWT · keyring · PyYAML</li>
            <li>uv + hatchling · pytest · ruff · mypy</li>
        </ul>

        <h2>How to run</h2>
        <ol>
            <li>Bankflow stack up (Compose or Helm)</li>
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

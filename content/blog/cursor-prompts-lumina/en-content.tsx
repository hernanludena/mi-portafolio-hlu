import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const cursorPromptsLuminaContentEn = (
    <>
        <p>
            Building banking software is not the same as asking an assistant to “generate a CRUD”.
            The <strong>Lumina Bank Digital</strong> stack has its own contracts: REST Controllers,
            Services, database migration scripts, clients to external systems, and a frontend with
            global state, async effects, an authenticated HTTP client, and i18n.
        </p>
        <p>
            This post proposes <strong>eight prompting frameworks</strong> designed for that
            context. They are not “magic prompts”: they are short contracts that bound scope,
            layers, and compliance so Cursor follows the monorepo instead of inventing generic
            architecture.
        </p>

        <BlogFigure
            src="/blog/cursor-prompts-lumina-card.png"
            alt="Article cover: Cursor prompt frameworks for digital banking"
            caption="Eight custom frameworks to guide Cursor on the Lumina Bank Digital stack"
        />

        <blockquote>
            Lumina Bank is a fictional case study. Module names and examples are generic; they do
            not represent a real bank or confidential intellectual property.
        </blockquote>

        <h2>Reference stack</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Layer</th>
                        <th className="px-3 py-2 text-left">Technology / pattern</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Backend</td>
                        <td className="px-3 py-2">
                            Java / Spring Boot, Controllers, Services, Repositories, DB scripts
                            (Flyway/Liquibase), HTTP/SOAP clients
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Frontend</td>
                        <td className="px-3 py-2">
                            React, global store, async effects, authenticated HTTP client, i18n
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Auth</td>
                        <td className="px-3 py-2">
                            OAuth2 / PKCE, IdP, public vs authenticated endpoints (+ MFA/OTP when
                            needed)
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">CI/CD</td>
                        <td className="px-3 py-2">Git + PR, pipelines, GitOps</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Tickets</td>
                        <td className="px-3 py-2">Jira LUM-XXXX</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">Local</td>
                        <td className="px-3 py-2">Docker Compose, task runner, Maven</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>1. C-L-A-V-E — From business idea to technical spec</h2>
        <p>
            <strong>When to use it:</strong> before writing code. Turns a functional need into a
            technical story + test plan.
        </p>
        <p>
            In Spanish the letters stand for <em>Contexto, Límites, Arquitectura, Validación,
            Entregables</em> — Context, Limits, Architecture, Validation, Deliverables.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">C — Context</td>
                        <td className="px-3 py-2">User pain / functional gap</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Limits</td>
                        <td className="px-3 py-2">Acceptance criteria + SLA</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">A — Architecture</td>
                        <td className="px-3 py-2">
                            Controller + Service + DB script + client + UI + async layer
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">V — Validation</td>
                        <td className="px-3 py-2">Unit, local, E2E, regression</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">E — Deliverables</td>
                        <td className="px-3 py-2">What the prompt must produce</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Act as Tech Lead for Lumina Bank Digital.
Build a C-L-A-V-E from this need:

- Context: [problem / LUM-XXXX]
- Limits:
  - [AC 1]
  - [AC 2]
  - API latency < [X]ms in QA
- Architecture:
  - Backend: METHOD /api/v1/{resource} → Controller → Service
  - Versioned DB script (Flyway/Liquibase)
  - Repository if local persistence is needed
  - Client/Adapter for external integrations
  - Business error codes + i18n
  - Frontend: screen + async effect + authenticated HTTP client + permissions
- Validation:
  - required fields, ranges, permissions
  - happy path + external dependency errors (timeout, 503, invalid data)
  - module regression
- Deliverables:
  1. Controller skeleton + request/response DTOs
  2. DB migration script
  3. Frontend HTTP client contract
  4. i18n keys`}
        </pre>

        <h3>Example</h3>
        <ul>
            <li>
                <strong>Context:</strong> when editing a payroll product, the UI does not show the
                resolved account identifier.
            </li>
            <li>
                <strong>Limits:</strong> show entered alias + normalized identifier; do not break
                the scheduled debit.
            </li>
            <li>
                <strong>Architecture:</strong> modification endpoint + Service that separates
                “account id” vs “settlement identifier”; UI with two distinct fields.
            </li>
            <li>
                <strong>Validation:</strong> create with alias → edit → transfer job uses the
                settlement identifier.
            </li>
            <li>
                <strong>Deliverables:</strong> DTOs + DB script + i18n.
            </li>
        </ul>

        <h2>2. M-O-L-D-E — Briefing to generate code</h2>
        <p>
            <strong>When to use it:</strong> when you want code aligned with the repo style.
        </p>
        <p>
            Letters: <em>Módulo, Obligaciones, Lista de inputs, Diseños de referencia, Eco</em> —
            Module, Obligations, Input list, Reference designs, Echo (feedback).
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">M — Module</td>
                        <td className="px-3 py-2">Where you are working today</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">O — Obligations</td>
                        <td className="px-3 py-2">Non-negotiable patterns</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Input list</td>
                        <td className="px-3 py-2">Ticket, JSON, design, contract</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">D — Reference designs</td>
                        <td className="px-3 py-2">2 files from the repo</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">E — Echo</td>
                        <td className="px-3 py-2">Feedback from the previous iteration</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Generate code for Lumina Bank Digital with this M-O-L-D-E:

- Module: [e.g. payroll products in api/ + web/]
- Obligations:
  - Thin Controller; rules in Service
  - DDL only via versioned migration scripts
  - Domain error codes (no ad-hoc HTTP statuses)
  - Frontend: async effect + authenticated HTTP client
  - Mandatory i18n
  - MFA/OTP if the operation is transactional
- Input list:
  - Ticket: LUM-XXXX
  - Request/Response: { ... }
  - [integration contract / design capture]
- Reference designs:
  - Similar Service: [path]
  - Similar async effect: [path]
- Echo: [e.g. "Logic ended up in the HTTP client; move it to the Service"]

Follow the monorepo layout. Do not invent layers.`}
        </pre>

        <h2>3. A-N-C-L-A — Anchor the stack in the session</h2>
        <p>
            <strong>When to use it:</strong> at the start of a long session, or when Cursor drifts
            from project style.
        </p>
        <p>
            Letters: <em>Archivo, Normas, Contratos, Límites, Actitud</em> — Archive, Norms,
            Contracts, Limits, Attitude.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">A — Archive</td>
                        <td className="px-3 py-2">Monorepo / module history</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">N — Norms</td>
                        <td className="px-3 py-2">Forbidden / mandatory</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">C — Contracts</td>
                        <td className="px-3 py-2">Canonical layers</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Limits</td>
                        <td className="px-3 py-2">Security, compliance, context budget</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Attitude</td>
                        <td className="px-3 py-2">ACT vs PLAN + language</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Session A-N-C-L-A — Lumina Bank Digital:

- Archive:
  - Monorepo: api, backoffice, web, mobile
  - Backend: Controller → Service → Repository/Client
  - Integrations: core banking, payment rails, clearing, tax authority
  - [today's module]

- Norms — FORBIDDEN:
  - Business logic in Controller or frontend HTTP layer
  - DDL without a versioned script
  - Strings without i18n / unsolicited docs
  - Logging sensitive data

- Norms — MANDATORY:
  - Domain errors + i18n
  - FE: action → async effect → authenticated HTTP client
  - Minimal changes; reuse existing domain helpers

- Contracts: thin Controllers, Services orchestrate, versioned DB scripts

- Limits: MFA/OTP on tx, audit sensitive ops, do not inflate context

- Attitude: ACT by default; PLAN only if I ask. Spanish (or English if requested).

Before coding, ask for missing domain / ticket context.`}
        </pre>

        <h2>4. H-U-E-L-L-A — Post-mortem and lessons</h2>
        <p>
            <strong>When to use it:</strong> incidents, migrations, or complex refactors.
        </p>
        <p>
            Letters: <em>Hechos, Urgencia, Efecto, Lecciones, Lista, Archivos</em> — Facts,
            Urgency, Effect, Lessons, Action list, Files. (“Huella” = footprint.)
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">H — Facts</td>
                        <td className="px-3 py-2">Prior state</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">U — Urgency</td>
                        <td className="px-3 py-2">What broke</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">E — Effect</td>
                        <td className="px-3 py-2">Impact on users / transactions</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Lessons</td>
                        <td className="px-3 py-2">What we learned</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — List</td>
                        <td className="px-3 py-2">Corrective + preventive actions</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Files</td>
                        <td className="px-3 py-2">Paths to watch</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Write an H-U-E-L-L-A for Lumina Digital:
- Facts: [state before]
- Urgency: [incident / logs / prod ticket]
- Effect: [users, transactions, time window]
- Lessons: [what to avoid / automate / monitor]
- List:
  1. Timeline
  2. Root cause
  3. Immediate fixes
  4. Preventives (tests, alerts, null-guards)
- Files: [repo paths]

Internal doc / Jira comment format. No code unless explicitly asked.`}
        </pre>

        <h3>Example</h3>
        <ul>
            <li>
                <strong>Facts:</strong> payroll module in test.
            </li>
            <li>
                <strong>Urgency:</strong> external dependency 503 → NPE when reading customer
                without validating payload.
            </li>
            <li>
                <strong>Effect:</strong> queries down in QA.
            </li>
            <li>
                <strong>Lessons:</strong> never assume external client body shape.
            </li>
            <li>
                <strong>List:</strong> guard clause + dependency alert.
            </li>
            <li>
                <strong>Files:</strong> customer Service + core adapter.
            </li>
        </ul>

        <h2>5. S-O-N-D-A — Controlled POC</h2>
        <p>
            <strong>When to use it:</strong> evaluate a library, pattern, or integration before
            merging to develop.
        </p>
        <p>
            Letters: <em>Señal, Observables, Núcleo operativo, Dueño, Agenda</em> — Signal,
            Observables, Operating core, Owner, Agenda. (“Sonda” = probe.)
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">S — Signal</td>
                        <td className="px-3 py-2">What you want to prove</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">O — Observables</td>
                        <td className="px-3 py-2">Success / failure metrics</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">N — Operating core</td>
                        <td className="px-3 py-2">Branch, services, files</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">D — Owner</td>
                        <td className="px-3 py-2">Who sustains the experiment</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Agenda</td>
                        <td className="px-3 py-2">How long the POC lives</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Document an S-O-N-D-A for Lumina Digital:
- Signal: [Redis cache / new client / alternative to current async effect]
- Observables: [API ms, external calls, bundle size, error rate]
- Operating core:
  - Branch: feature/poc-[name]
  - Bring up local env + trial deploy
  - Files: [list]
- Owner: [team / lead]
- Agenda: [until retro / next release candidate]

Deliverables: summary, pros/cons, compliance risks,
recommendation (adopt/drop/iterate), migration plan.`}
        </pre>

        <h2>6. M-A-R-E-A — Sprint planning</h2>
        <p>
            <strong>When to use it:</strong> break an epic into actionable technical tickets.
        </p>
        <p>
            Letters: <em>Meta, Agenda, Resultados, Entradas, Alineación</em> — Goal, Agenda,
            Results, Inputs, Alignment. (“Marea” = tide.)
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">M — Goal</td>
                        <td className="px-3 py-2">Sprint increment</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">A — Agenda</td>
                        <td className="px-3 py-2">Cadence / ceremonies</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">R — Results</td>
                        <td className="px-3 py-2">Measurable outputs</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">E — Inputs</td>
                        <td className="px-3 py-2">External dependencies</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Alignment</td>
                        <td className="px-3 py-2">Jira → Git → CI → deploy</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Build the next sprint M-A-R-E-A — Lumina Bank Digital:
- Goal: [e.g. edit origin account on payroll product]
- Agenda: [2 weeks | daily | planning | review]
- Results:
  - [ ] Endpoints + Services + DB scripts
  - [ ] Screens + async effects + i18n
  - [ ] PRs merged
  - [ ] QA deployed
- Inputs: [core banking, payment rails, other teams]
- Alignment:
  - Jira LUM-XXXX
  - feature/[ticket]-[desc]
  - PR + pipeline + GitOps / local env

Generate tickets: title, technical description, ACs, components, deps, risks.`}
        </pre>

        <h2>7. R-U-T-A — Module onboarding</h2>
        <p>
            <strong>When to use it:</strong> document a module so another developer can operate it.
        </p>
        <p>
            Letters: <em>Recurso, Umbral de entrada, Trabajo de negocio, Artefactos</em> —
            Resource, Entry threshold, Business job, Artifacts. (“Ruta” = route.)
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">R — Resource</td>
                        <td className="px-3 py-2">Which module</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">U — Entry threshold</td>
                        <td className="px-3 py-2">Endpoint / frontend entry</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">T — Business job</td>
                        <td className="px-3 py-2">What problem it solves</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Artifacts</td>
                        <td className="px-3 py-2">Docs to generate</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Create an onboarding R-U-T-A — Lumina Digital:
- Resource: [payroll products module — api + web]
- Entry threshold:
  - BE: GET /api/v1/payroll-products/{id} → Controller → Service
  - FE: read action in the module HTTP client
- Business job: [what it solves]
- Artifacts:
  1. Flow diagram (create → scheduled job → debit)
  2. Table endpoint → Service → permission
  3. Key model fields (account id vs settlement identifier)
  4. How to test locally
  5. Common errors (external timeouts, business codes)
  6. Related tickets

Only real endpoints from the repo.`}
        </pre>

        <h2>8. C-R-I-B-A — Code review / QA</h2>
        <p>
            <strong>When to use it:</strong> audit a PR, Service, or UI component before merge.
        </p>
        <p>
            Letters: <em>Clase de cambio, Resultado esperado, Invariantes, Blindaje, Ajustes</em>
            — Change class, Expected result, Invariants, Shielding, Adjustments. (“Criba” =
            sieve.)
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letter</th>
                        <th className="px-3 py-2 text-left">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">C — Change class</td>
                        <td className="px-3 py-2">PR / Controller / Service / migration / UI</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">R — Expected result</td>
                        <td className="px-3 py-2">QA behavior</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">I — Invariants</td>
                        <td className="px-3 py-2">Layers, i18n, DB scripts</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">B — Shielding</td>
                        <td className="px-3 py-2">Security, nulls, OTP, logs</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Adjustments</td>
                        <td className="px-3 py-2">Line-by-line tweaks</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Run this diff through C-R-I-B-A — senior reviewer, Lumina Digital.
[Paste diff]

- Class: [PR feature/LUM-XXXX | Service | migration | UI]
- Expected result:
  - API OK in QA
  - complete validations
  - no regressions
- Invariants:
  - thin Controller; logic in Service
  - versioned DDL
  - no business logic in frontend HTTP layer
  - consistent errors + i18n
  - minimal change
- Shielding:
  - null-safe against external client responses
  - MFA/OTP if transactional
  - do not log sensitive data
- Adjustments: line-by-line improvements + proposed code

Return:
1. 🔴 Blockers
2. 🟡 Warnings
3. 🟢 OK
4. Focused refactors
5. Manual post-merge checklist`}
        </pre>

        <h3>Example</h3>
        <ul>
            <li>
                <strong>Class:</strong> PR modifying a payroll product.
            </li>
            <li>
                <strong>Result:</strong> Service persists the settlement identifier from ownership
                validation, not from raw input.
            </li>
            <li>
                <strong>Invariants:</strong> “account id” ≠ “settlement identifier”.
            </li>
            <li>
                <strong>Adjustments:</strong> debit job must use settlement identifier;
                re-validation must use account id.
            </li>
        </ul>

        <h2>Quick guide: which framework?</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Situation</th>
                        <th className="px-3 py-2 text-left">Framework</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Design before coding</td>
                        <td className="px-3 py-2 font-medium">C-L-A-V-E</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Cursor drifts / generate code</td>
                        <td className="px-3 py-2 font-medium">A-N-C-L-A + M-O-L-D-E</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Incident / post-mortem</td>
                        <td className="px-3 py-2 font-medium">H-U-E-L-L-A</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Try a technology</td>
                        <td className="px-3 py-2 font-medium">S-O-N-D-A</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Plan a sprint</td>
                        <td className="px-3 py-2 font-medium">M-A-R-E-A</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Module onboarding</td>
                        <td className="px-3 py-2 font-medium">R-U-T-A</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2">Review a PR</td>
                        <td className="px-3 py-2 font-medium">C-R-I-B-A</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Tips for Cursor on Lumina Digital</h2>
        <ol>
            <li>Reference real repo files with <code>@</code>.</li>
            <li>Agent mode to implement; Ask/Plan for C-L-A-V-E and M-A-R-E-A.</li>
            <li>One framework per message: do not mix M-O-L-D-E with C-R-I-B-A.</li>
            <li>Include ticket <code>LUM-XXXX</code> to bound scope.</li>
            <li>
                The <strong>Echo</strong> in M-O-L-D-E prevents repeating the same mistake on
                iteration 2.
            </li>
            <li>
                Reinforce repo rules: “thin Controller + Service + versioned DB script”.
            </li>
        </ol>

        <BlogClosingQuote>
            A good banking prompt does not ask for “more code”: it asks for clear contracts —
            layers, limits, and compliance — so the assistant accelerates without breaking the
            system.
        </BlogClosingQuote>
    </>
);

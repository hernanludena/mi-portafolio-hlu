import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const cursorPromptsLuminaContentEs = (
    <>
        <p>
            Construir software bancario no es lo mismo que pedirle a un asistente “generá un CRUD”.
            El stack de <strong>Lumina Bank Digital</strong> tiene contratos propios: Controllers
            REST, Services, scripts de migración de base de datos, clients hacia sistemas externos,
            y frontend con estado global, efectos asíncronos, cliente HTTP autenticado e i18n.
        </p>
        <p>
            Este post propone <strong>ocho frameworks de prompting</strong> diseñados para ese
            contexto. No son “prompts mágicos”: son contratos cortos que acotan scope, capas y
            compliance para que Cursor respete el monorepo en lugar de inventar arquitectura
            genérica.
        </p>

        <BlogFigure
            src="/blog/cursor-prompts-lumina-card.png"
            alt="Portada del artículo: frameworks de prompts para Cursor en banca digital"
            caption="Ocho frameworks propios para guiar a Cursor en el stack de Lumina Bank Digital"
        />

        <blockquote>
            Lumina Bank es un case study ficticio. Nombres de módulos y ejemplos son genéricos; no
            representan un banco real ni propiedad intelectual confidencial.
        </blockquote>

        <h2>Stack de referencia</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Capa</th>
                        <th className="px-3 py-2 text-left">Tecnología / patrón</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Backend</td>
                        <td className="px-3 py-2">
                            Java / Spring Boot, Controllers, Services, Repositories, scripts BD
                            (Flyway/Liquibase), clients HTTP/SOAP
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Frontend</td>
                        <td className="px-3 py-2">
                            React, store global, efectos asíncronos, cliente HTTP autenticado, i18n
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Auth</td>
                        <td className="px-3 py-2">
                            OAuth2 / PKCE, IdP, endpoints públicos vs autenticados (+ MFA/OTP si
                            aplica)
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

        <h2>1. C-L-A-V-E — De la idea de negocio a la spec técnica</h2>
        <p>
            <strong>Cuándo usarlo:</strong> antes de codear. Convierte un requerimiento funcional en
            historia técnica + plan de pruebas.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">C — Contexto</td>
                        <td className="px-3 py-2">Dolor del usuario / gap funcional</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Límites</td>
                        <td className="px-3 py-2">Criterios de aceptación + SLA</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">A — Arquitectura</td>
                        <td className="px-3 py-2">
                            Controller + Service + script BD + client + UI + capa async
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">V — Validación</td>
                        <td className="px-3 py-2">Unit, local, E2E, regresión</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">E — Entregables</td>
                        <td className="px-3 py-2">Qué debe salir del prompt</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Actúa como Tech Lead de Lumina Bank Digital.
Armá una C-L-A-V-E a partir de esta necesidad:

- Contexto: [problema / LUM-XXXX]
- Límites:
  - [CA 1]
  - [CA 2]
  - Latencia API < [X]ms en QA
- Arquitectura:
  - Backend: METHOD /api/v1/{recurso} → Controller → Service
  - Script BD versionado (Flyway/Liquibase)
  - Repository si hay persistencia
  - Client/Adapter si hay integración externa
  - Códigos de error de negocio + i18n
  - Frontend: pantalla + efecto async + cliente HTTP autenticado + permisos
- Validación:
  - campos obligatorios, rangos, permisos
  - happy path + errores de dependencia externa (timeout, 503, datos inválidos)
  - regresión del módulo
- Entregables:
  1. Esqueleto Controller + DTOs request/response
  2. Script de migración BD
  3. Contrato del cliente HTTP frontend
  4. Claves i18n`}
        </pre>

        <h3>Ejemplo</h3>
        <ul>
            <li>
                <strong>Contexto:</strong> al editar un producto de nómina, la UI no muestra el
                identificador de cuenta resuelto.
            </li>
            <li>
                <strong>Límites:</strong> mostrar alias ingresado + identificador normalizado; no
                romper el débito programado.
            </li>
            <li>
                <strong>Arquitectura:</strong> endpoint de modificación + Service que separa “id de
                cuenta” vs “identificador de liquidación”; UI con dos campos distintos.
            </li>
            <li>
                <strong>Validación:</strong> crear con alias → editar → job de transferencia usa el
                identificador de liquidación.
            </li>
            <li>
                <strong>Entregables:</strong> DTOs + script BD + i18n.
            </li>
        </ul>

        <h2>2. M-O-L-D-E — Briefing para generar código</h2>
        <p>
            <strong>Cuándo usarlo:</strong> cuando querés código alineado al estilo del repo.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">M — Módulo</td>
                        <td className="px-3 py-2">Dónde vivís hoy</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">O — Obligaciones</td>
                        <td className="px-3 py-2">Patrones no negociables</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Lista de inputs</td>
                        <td className="px-3 py-2">Ticket, JSON, diseño, contrato</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">D — Diseños de referencia</td>
                        <td className="px-3 py-2">2 archivos del repo</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">E — Eco</td>
                        <td className="px-3 py-2">Feedback de la iteración anterior</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Generá código para Lumina Bank Digital con este M-O-L-D-E:

- Módulo: [ej. productos de nómina en api/ + web/]
- Obligaciones:
  - Controller delgado; reglas en Service
  - DDL solo vía scripts de migración versionados
  - Códigos de error de dominio (no HTTP inventados)
  - Frontend: efecto async + cliente HTTP autenticado
  - i18n obligatorio
  - MFA/OTP si la operación es transaccional
- Lista de inputs:
  - Ticket: LUM-XXXX
  - Request/Response: { ... }
  - [contrato de integración / captura de diseño]
- Diseños de referencia:
  - Service similar: [ruta]
  - Efecto async similar: [ruta]
- Eco: [Ej. "La lógica quedó en el cliente HTTP; movela al Service"]

Seguí el layout del monorepo. No inventes capas.`}
        </pre>

        <h2>3. A-N-C-L-A — Fijar el stack en la sesión</h2>
        <p>
            <strong>Cuándo usarlo:</strong> al inicio de una sesión larga, o cuando Cursor se
            desvía del estilo del proyecto.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">A — Archivo</td>
                        <td className="px-3 py-2">Historia del monorepo / módulo</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">N — Normas</td>
                        <td className="px-3 py-2">Prohibido / obligatorio</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">C — Contratos</td>
                        <td className="px-3 py-2">Capas canónicas</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Límites</td>
                        <td className="px-3 py-2">Seguridad, compliance, contexto</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Actitud</td>
                        <td className="px-3 py-2">ACT vs PLAN + idioma</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`A-N-C-L-A de sesión — Lumina Bank Digital:

- Archivo:
  - Monorepo: api, backoffice, web, mobile
  - Backend: Controller → Service → Repository/Client
  - Integraciones: core banking, redes de pago, clearing, autoridad fiscal
  - [módulo de hoy]

- Normas — PROHIBIDO:
  - Lógica de negocio en Controller o en capa HTTP del frontend
  - DDL sin script versionado
  - Strings sin i18n / docs no pedidas
  - Log de datos sensibles

- Normas — OBLIGATORIO:
  - Errores de dominio + i18n
  - FE: acción → efecto async → cliente HTTP autenticado
  - Cambios mínimos; reusar helpers existentes del dominio

- Contratos: Controllers delgados, Services orquestan, scripts BD versionados

- Límites: MFA/OTP en tx, auditoría de ops sensibles, no inflar contexto

- Actitud: ACT por defecto; PLAN solo si lo pido. Español.

Antes de codear, pedí contexto faltante (dominio / ticket).`}
        </pre>

        <h2>4. H-U-E-L-L-A — Post-mortem y lecciones</h2>
        <p>
            <strong>Cuándo usarlo:</strong> incidentes, migraciones o refactors complejos.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">H — Hechos</td>
                        <td className="px-3 py-2">Estado previo</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">U — Urgencia</td>
                        <td className="px-3 py-2">Qué rompió</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">E — Efecto</td>
                        <td className="px-3 py-2">Impacto en usuarios / transacciones</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Lecciones</td>
                        <td className="px-3 py-2">Qué aprendimos</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">L — Lista</td>
                        <td className="px-3 py-2">Correctivas + preventivas</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Archivos</td>
                        <td className="px-3 py-2">Paths a vigilar</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Redactá una H-U-E-L-L-A para Lumina Digital:
- Hechos: [estado antes]
- Urgencia: [incidente / logs / ticket prod]
- Efecto: [usuarios, transacciones, ventana]
- Lecciones: [qué evitar / automatizar / monitorear]
- Lista:
  1. Timeline
  2. Root cause
  3. Correctivas inmediatas
  4. Preventivas (tests, alertas, null-guards)
- Archivos: [paths del repo]

Formato doc interno / comentario Jira. Sin código salvo que lo pida.`}
        </pre>

        <h3>Ejemplo</h3>
        <ul>
            <li>
                <strong>Hechos:</strong> módulo de nómina en ambiente de test.
            </li>
            <li>
                <strong>Urgencia:</strong> dependencia externa 503 → NPE al leer cliente sin
                validar payload.
            </li>
            <li>
                <strong>Efecto:</strong> consultas caídas en QA.
            </li>
            <li>
                <strong>Lecciones:</strong> no asumir el body del client externo.
            </li>
            <li>
                <strong>Lista:</strong> guard clause + alerta de dependencia.
            </li>
            <li>
                <strong>Archivos:</strong> Service de clientes + adapter del core.
            </li>
        </ul>

        <h2>5. S-O-N-D-A — POC controlada</h2>
        <p>
            <strong>Cuándo usarlo:</strong> evaluar librería, patrón o integración antes de merge a
            develop.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">S — Señal</td>
                        <td className="px-3 py-2">Qué se quiere probar</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">O — Observables</td>
                        <td className="px-3 py-2">Métricas de éxito / fracaso</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">N — Núcleo operativo</td>
                        <td className="px-3 py-2">Rama, servicios, archivos</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">D — Dueño</td>
                        <td className="px-3 py-2">Quién sostiene el experimento</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Agenda</td>
                        <td className="px-3 py-2">Hasta cuándo vive el POC</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Documentá una S-O-N-D-A para Lumina Digital:
- Señal: [caché Redis / nuevo client / alternativa al efecto async actual]
- Observables: [ms API, llamadas externas, tamaño bundle, tasa error]
- Núcleo operativo:
  - Rama: feature/poc-[nombre]
  - Levantar entorno local + deploy de prueba
  - Archivos: [lista]
- Dueño: [equipo / líder]
- Agenda: [hasta retrospectiva / próximo release candidate]

Entregables: resumen, pros/contras, riesgos compliance,
recomendación (adoptar/descartar/iterar), plan de migración.`}
        </pre>

        <h2>6. M-A-R-E-A — Planificación de sprint</h2>
        <p>
            <strong>Cuándo usarlo:</strong> partir un epic en tickets técnicos accionables.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">M — Meta</td>
                        <td className="px-3 py-2">Incremento del sprint</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">A — Agenda</td>
                        <td className="px-3 py-2">Ritmo / ceremonias</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">R — Resultados</td>
                        <td className="px-3 py-2">Outputs medibles</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">E — Entradas</td>
                        <td className="px-3 py-2">Dependencias externas</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Alineación</td>
                        <td className="px-3 py-2">Jira → Git → CI → deploy</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Armá la M-A-R-E-A del próximo sprint — Lumina Bank Digital:
- Meta: [ej. editar cuenta origen en producto de nómina]
- Agenda: [2 semanas | daily | planning | review]
- Resultados:
  - [ ] Endpoints + Services + scripts BD
  - [ ] Pantallas + efectos async + i18n
  - [ ] PRs mergeados
  - [ ] QA desplegado
- Entradas: [core banking, redes de pago, otros equipos]
- Alineación:
  - Jira LUM-XXXX
  - feature/[ticket]-[desc]
  - PR + pipeline + GitOps / entorno local

Generá tickets: título, desc técnica, CA, componentes, deps, riesgos.`}
        </pre>

        <h2>7. R-U-T-A — Onboarding de módulo</h2>
        <p>
            <strong>Cuándo usarlo:</strong> documentar un módulo para que otro desarrollador pueda
            operarlo.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">R — Recurso</td>
                        <td className="px-3 py-2">Qué módulo</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">U — Umbral de entrada</td>
                        <td className="px-3 py-2">Endpoint / entry del frontend</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">T — Trabajo de negocio</td>
                        <td className="px-3 py-2">Qué problema resuelve</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Artefactos</td>
                        <td className="px-3 py-2">Docs a generar</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Creá una R-U-T-A de onboarding — Lumina Digital:
- Recurso: [módulo de productos de nómina — api + web]
- Umbral de entrada:
  - BE: GET /api/v1/payroll-products/{id} → Controller → Service
  - FE: acción de lectura en el cliente HTTP del módulo
- Trabajo de negocio: [qué resuelve]
- Artefactos:
  1. Diagrama de flujo (alta → job programado → débito)
  2. Tabla endpoint → Service → permiso
  3. Campos clave del modelo (id de cuenta vs identificador de liquidación)
  4. Cómo probar en local
  5. Errores frecuentes (timeouts externos, códigos de negocio)
  6. Tickets relacionados

Solo endpoints reales del repo.`}
        </pre>

        <h2>8. C-R-I-B-A — Review de código / QA</h2>
        <p>
            <strong>Cuándo usarlo:</strong> auditar un PR, Service o componente UI antes del merge.
        </p>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Letra</th>
                        <th className="px-3 py-2 text-left">Significado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">C — Clase de cambio</td>
                        <td className="px-3 py-2">PR / Controller / Service / migration / UI</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">R — Resultado esperado</td>
                        <td className="px-3 py-2">Comportamiento en QA</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">I — Invariantes</td>
                        <td className="px-3 py-2">Capas, i18n, scripts BD</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">B — Blindaje</td>
                        <td className="px-3 py-2">Seguridad, nulls, OTP, logs</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">A — Ajustes</td>
                        <td className="px-3 py-2">Tweaks línea a línea</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>Template</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono whitespace-pre-wrap">
            {`Pasá este diff por la C-R-I-B-A — reviewer senior Lumina Digital.
[Pegar diff]

- Clase: [PR feature/LUM-XXXX | Service | migration | UI]
- Resultado esperado:
  - API ok en QA
  - validaciones completas
  - sin regresiones
- Invariantes:
  - Controller delgado; lógica en Service
  - DDL versionado
  - sin lógica de negocio en la capa HTTP del frontend
  - errores + i18n consistentes
  - cambio mínimo
- Blindaje:
  - null-safe ante respuestas de clients externos
  - MFA/OTP si es transaccional
  - no loguear datos sensibles
- Ajustes: mejoras línea a línea + código propuesto

Devolvé:
1. 🔴 Blockers
2. 🟡 Warnings
3. 🟢 OK
4. Refactors puntuales
5. Checklist manual post-merge`}
        </pre>

        <h3>Ejemplo</h3>
        <ul>
            <li>
                <strong>Clase:</strong> PR de modificación de producto de nómina.
            </li>
            <li>
                <strong>Resultado:</strong> el Service persiste el identificador de liquidación
                desde la validación de titularidad, no desde input crudo.
            </li>
            <li>
                <strong>Invariantes:</strong> “id de cuenta” ≠ “identificador de liquidación”.
            </li>
            <li>
                <strong>Ajustes:</strong> el job de débito debe usar el identificador de
                liquidación; la re-validación, el id de cuenta.
            </li>
        </ul>

        <h2>Guía rápida: ¿qué framework usar?</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Situación</th>
                        <th className="px-3 py-2 text-left">Framework</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Diseñar antes de codear</td>
                        <td className="px-3 py-2 font-medium">C-L-A-V-E</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Cursor se va de patrón / generar código</td>
                        <td className="px-3 py-2 font-medium">A-N-C-L-A + M-O-L-D-E</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Incidente / post-mortem</td>
                        <td className="px-3 py-2 font-medium">H-U-E-L-L-A</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Experimentar tecnología</td>
                        <td className="px-3 py-2 font-medium">S-O-N-D-A</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Planificar sprint</td>
                        <td className="px-3 py-2 font-medium">M-A-R-E-A</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Onboarding de módulo</td>
                        <td className="px-3 py-2 font-medium">R-U-T-A</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2">Revisar PR</td>
                        <td className="px-3 py-2 font-medium">C-R-I-B-A</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Tips para Cursor en Lumina Digital</h2>
        <ol>
            <li>Referenciá archivos reales del repo con <code>@</code>.</li>
            <li>
                Modo Agent para implementar; Ask/Plan para C-L-A-V-E y M-A-R-E-A.
            </li>
            <li>Un framework por mensaje: no mezclar M-O-L-D-E con C-R-I-B-A.</li>
            <li>Incluí el ticket <code>LUM-XXXX</code> para acotar scope.</li>
            <li>
                El <strong>Eco</strong> de M-O-L-D-E evita repetir el mismo error en la iteración
                2.
            </li>
            <li>
                Reforzá reglas del repo: “Controller delgado + Service + script BD versionado”.
            </li>
        </ol>

        <BlogClosingQuote>
            Un buen prompt en banca no pide “más código”: pide contratos claros — capas, límites
            y compliance — para que el asistente acelere sin romper el sistema.
        </BlogClosingQuote>
    </>
);

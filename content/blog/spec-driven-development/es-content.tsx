import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const specDrivenDevelopmentContentEs = (
    <>
        <p>
            Durante mucho tiempo, el desarrollo de software siguió una secuencia relativamente
            simple:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`requerimiento → diseño → código → pruebas`}
        </pre>
        <p>
            Con la llegada de los asistentes y agentes de inteligencia artificial capaces de generar
            grandes cantidades de código, esta secuencia empieza a cambiar.
        </p>
        <p>
            El problema ya no es únicamente cuánto código podemos producir, sino{" "}
            <strong>qué tan bien podemos expresar lo que realmente queremos construir</strong>.
        </p>
        <p>
            Un agente puede generar una API, una interfaz, pruebas y hasta modificar múltiples
            archivos en pocos minutos. Sin embargo, si la instrucción inicial es ambigua, el agente
            puede producir una solución técnicamente correcta pero conceptualmente equivocada.
        </p>
        <p>
            Aquí aparece <strong>Spec-Driven Development (SDD)</strong>.
        </p>
        <p>La idea central de este estudio es:</p>
        <blockquote>
            <strong>
                La especificación debe convertirse en el contrato que conecta la intención humana
                con la implementación realizada por humanos o agentes de IA.
            </strong>
        </blockquote>
        <p>En lugar de comenzar preguntando:</p>
        <blockquote>&ldquo;¿Qué código debería escribir?&rdquo;</blockquote>
        <p>comenzamos preguntando:</p>
        <blockquote>
            &ldquo;¿Qué comportamiento debe existir y cómo sabremos que está correctamente
            implementado?&rdquo;
        </blockquote>
        <p>
            Este artículo es un <strong>estudio propio</strong>: no atribuye el enfoque a una
            empresa ni a una persona concreta. SDD no tiene una única definición universal; hoy se
            usa tanto <em>Spec-Driven Development</em> como <em>Specification-Driven Development</em>
            . En esencia, ambas apuntan a la misma idea: hacer de la especificación un artefacto
            central que guíe la implementación y la validación.
        </p>

        <BlogFigure
            src="/blog/spec-driven-development-card.png"
            alt="Spec-Driven Development: de la intención a software verificable"
            caption="De la intención a un contrato verificable entre humanos y agentes"
        />

        <BlogFigure
            src="/blog/spec-driven-development-pipeline.png"
            alt="Pipeline SDD: Intent, Explore, Propose, Specify, Clarify, Design, Tasks, Implementation, Verify y feedback"
            caption="Figura 1 — Spec-Driven Development: de la intención a software verificable (ciclo vivo)"
        />

        <h2>1. ¿Qué es Spec-Driven Development?</h2>
        <p>
            SDD es un enfoque de desarrollo en el que una{" "}
            <strong>especificación estructurada precede y guía la implementación</strong>.
        </p>
        <p>La especificación describe principalmente:</p>
        <ul>
            <li>qué problema se quiere resolver;</li>
            <li>qué comportamiento se espera;</li>
            <li>cuáles son las reglas;</li>
            <li>cuáles son las restricciones;</li>
            <li>qué casos deben contemplarse;</li>
            <li>cómo se determinará que el trabajo está terminado.</li>
        </ul>
        <p>Posteriormente, esa especificación se transforma en diseño, tareas e implementación.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                    INTENCIÓN
                       │
                       ▼
                ┌──────────────┐
                │ Specification│
                └───────┬──────┘
                        │
                        ▼
                  ┌───────────┐
                  │   Design  │
                  └─────┬─────┘
                        │
                        ▼
                  ┌───────────┐
                  │   Tasks   │
                  └─────┬─────┘
                        │
                        ▼
              ┌──────────────────┐
              │ Human / AI Agent │
              └────────┬─────────┘
                       │
                       ▼
                    Código
                       │
                       ▼
                 Verificación`}
        </pre>
        <p>
            La diferencia fundamental está en que{" "}
            <strong>el código deja de ser el único artefacto que representa la solución</strong>.
            La especificación se convierte en una referencia permanente para comprobar si la
            implementación sigue representando la intención original.
        </p>

        <h2>2. ¿Por qué SDD se vuelve especialmente importante con IA?</h2>
        <p>La generación de código mediante IA cambia la economía del desarrollo.</p>
        <p>Antes:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Idea → Diseño → Horas de programación → Código`}
        </pre>
        <p>Ahora:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Idea → Prompt → Agente → Mucho código`}
        </pre>
        <p>
            El segundo proceso es mucho más rápido, pero introduce un riesgo:{" "}
            <strong>
                la velocidad de generación puede superar nuestra capacidad de validar lo generado
            </strong>
            .
        </p>
        <p>El agente puede:</p>
        <ul>
            <li>asumir requisitos inexistentes;</li>
            <li>inventar comportamientos;</li>
            <li>modificar componentes que no debía tocar;</li>
            <li>elegir una arquitectura incorrecta;</li>
            <li>omitir casos extremos;</li>
            <li>generar código funcional pero incompatible con las reglas del sistema.</li>
        </ul>
        <p>Por eso, el problema cambia.</p>
        <p>Antes el cuello de botella podía ser:</p>
        <blockquote>&ldquo;¿Cómo implementamos esto?&rdquo;</blockquote>
        <p>Con agentes de IA puede convertirse en:</p>
        <blockquote>
            &ldquo;¿Cómo definimos exactamente qué debe implementarse y cómo verificamos que se
            hizo correctamente?&rdquo;
        </blockquote>
        <p>La especificación funciona como mecanismo para reducir esa ambigüedad.</p>

        <h2>3. El problema de trabajar únicamente con prompts</h2>
        <p>Un prompt puede ser suficiente para una tarea pequeña:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Crea un endpoint para consultar una cuenta.`}
        </pre>
        <p>Pero resulta insuficiente cuando aparecen preguntas como:</p>
        <ul>
            <li>¿Qué significa cuenta inexistente?</li>
            <li>¿Qué ocurre si está bloqueada?</li>
            <li>¿Quién puede consultarla?</li>
            <li>¿Qué campos pueden devolverse?</li>
            <li>¿Qué códigos HTTP deben utilizarse?</li>
            <li>¿Existe paginación?</li>
            <li>¿Cómo se manejan errores?</li>
            <li>¿Qué reglas de seguridad aplican?</li>
            <li>¿Qué pruebas deben existir?</li>
        </ul>
        <p>
            Si cada una de estas decisiones queda implícita en el modelo, estamos delegando
            decisiones de negocio y arquitectura a un sistema probabilístico.
        </p>
        <p>SDD propone hacer lo contrario:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Prompt ambiguo → Suposiciones → Implementación → Retrabajo

versus

Especificación → Clarificación → Diseño → Tareas → Implementación → Verificación`}
        </pre>

        <h2>4. El workflow que propongo</h2>
        <p>
            A partir de mi análisis de SDD y de los workflows que he estudiado, considero que un
            flujo práctico puede dividirse en siete etapas principales (más Explore y Propose como
            entrada).
        </p>

        <h3>4.1 Explore</h3>
        <p>Primero se investiga el problema. No se empieza programando.</p>
        <p>Se analiza:</p>
        <ul>
            <li>código existente;</li>
            <li>arquitectura;</li>
            <li>dependencias;</li>
            <li>restricciones;</li>
            <li>documentación;</li>
            <li>comportamiento actual;</li>
            <li>requisitos conocidos.</li>
        </ul>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Problema → Exploración → Contexto técnico + funcional`}
        </pre>
        <p>
            El objetivo es evitar diseñar una solución sin conocer el sistema en el que será
            incorporada.
        </p>

        <h3>4.2 Propose</h3>
        <p>Se formula una propuesta inicial. Aquí se responde:</p>
        <ul>
            <li>¿qué queremos cambiar?</li>
            <li>¿por qué?</li>
            <li>¿qué componentes podrían verse afectados?</li>
            <li>¿qué alternativas existen?</li>
        </ul>
        <p>Todavía no estamos escribiendo código.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Exploración → Propuesta → ¿La dirección es correcta?`}
        </pre>
        <p>
            Esta etapa permite detectar problemas antes de invertir esfuerzo en diseño o
            implementación.
        </p>

        <h2>5. Specify</h2>
        <p>
            Aquí aparece el artefacto principal: <strong>la especificación</strong>.
        </p>
        <p>
            Una buena especificación debería expresar el comportamiento esperado de forma
            suficientemente precisa para que otra persona —o un agente— pueda implementarlo sin
            tener que inventar decisiones importantes.
        </p>
        <p>Puede contener:</p>
        <ul>
            <li>
                <strong>Objetivo</strong> — ¿Qué problema estamos resolviendo?
            </li>
            <li>
                <strong>Alcance</strong> — ¿Qué está incluido y qué está explícitamente fuera?
            </li>
            <li>
                <strong>Reglas de negocio</strong> — ¿Qué condiciones deben cumplirse?
            </li>
            <li>
                <strong>Comportamiento</strong> — ¿Qué debe ocurrir ante cada escenario?
            </li>
            <li>
                <strong>Casos límite</strong> — ¿Qué ocurre cuando algo falla?
            </li>
            <li>
                <strong>Criterios de aceptación</strong> — ¿Cómo determinamos que está terminada?
            </li>
        </ul>
        <p>Un ejemplo simplificado:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature: Consulta de cuenta

Given:
  el cliente está autenticado

When:
  solicita una cuenta existente

Then:
  el sistema devuelve los datos permitidos

And:
  no devuelve información sensible`}
        </pre>
        <p>
            La especificación no debería intentar describir cada línea de código. Su objetivo es
            describir <strong>el contrato del comportamiento</strong>.
        </p>

        <h2>6. Clarify</h2>
        <p>Una de las etapas que considero más importantes es la aclaración.</p>
        <p>Una especificación aparentemente completa puede esconder ambigüedades. Por ejemplo:</p>
        <blockquote>&ldquo;El usuario puede cancelar una transferencia.&rdquo;</blockquote>
        <p>Pero:</p>
        <ul>
            <li>¿puede cancelarla después de procesada?</li>
            <li>¿qué ocurre si está pendiente?</li>
            <li>¿qué ocurre si ya fue enviada al sistema externo?</li>
            <li>¿se devuelve el dinero inmediatamente?</li>
            <li>¿qué pasa si falla la cancelación?</li>
        </ul>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`¿Existe ambigüedad?
       │
   ┌───┴───┐
  Sí       No
  │         │
  ▼         ▼
Clarificar  Diseño`}
        </pre>
        <p>
            La finalidad es{" "}
            <strong>resolver las decisiones antes de que el agente tenga que inventarlas</strong>.
        </p>

        <h2>7. Design</h2>
        <p>Una vez estabilizada la especificación, se diseña la solución técnica.</p>
        <p>Aquí sí aparecen elementos como:</p>
        <ul>
            <li>arquitectura;</li>
            <li>componentes;</li>
            <li>APIs;</li>
            <li>modelos;</li>
            <li>persistencia;</li>
            <li>eventos;</li>
            <li>integraciones;</li>
            <li>seguridad;</li>
            <li>observabilidad;</li>
            <li>decisiones técnicas.</li>
        </ul>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Specification  →  define QUÉ
Design          →  define CÓMO
Implementation`}
        </pre>
        <p>
            La especificación establece el comportamiento. El diseño establece cómo conseguirlo.
        </p>

        <h2>8. Tasks</h2>
        <p>
            El diseño todavía puede ser demasiado grande para entregárselo directamente a un
            agente. Por eso se divide en tareas pequeñas y verificables.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature
 │
 ├── Crear modelo Account
 ├── Crear repository
 ├── Crear service
 ├── Crear endpoint
 ├── Implementar validaciones
 ├── Implementar manejo de errores
 ├── Crear pruebas unitarias
 └── Crear pruebas de integración`}
        </pre>
        <p>Cada tarea debería tener:</p>
        <ul>
            <li>alcance definido;</li>
            <li>dependencias;</li>
            <li>criterio de finalización;</li>
            <li>contexto suficiente;</li>
            <li>tamaño razonable.</li>
        </ul>
        <p>
            Esto permite que un agente trabaje sobre una unidad concreta sin tener que reinterpretar
            todo el proyecto.
        </p>

        <h2>9. Apply</h2>
        <p>Ahora sí entra el agente de IA.</p>
        <p>El agente recibe:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Contexto + Specification + Design + Task + Project Rules
                    ↓
            Código + Tests + Cambios`}
        </pre>
        <p>La IA deja de recibir simplemente:</p>
        <blockquote>&ldquo;Construye esta funcionalidad.&rdquo;</blockquote>
        <p>En cambio recibe algo mucho más cercano a:</p>
        <blockquote>
            &ldquo;Implementa esta tarea de acuerdo con esta especificación, este diseño y estas
            restricciones.&rdquo;
        </blockquote>
        <p>El cambio parece pequeño, pero conceptualmente es enorme.</p>

        <h2>10. Verify</h2>
        <p>La implementación no se considera correcta simplemente porque compile.</p>
        <p>Debe verificarse contra la especificación.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Specification → Implementation → Tests → Verification
                                          │
                         ┌────────────────┴────────────────┐
                         ▼                                 ▼
                      Correcto                         Incorrecto
                         │                                 │
                    continuar              modificar spec o implementación`}
        </pre>
        <p>La validación puede incluir:</p>
        <ul>
            <li>unit tests;</li>
            <li>integration tests;</li>
            <li>contract tests;</li>
            <li>E2E;</li>
            <li>análisis estático;</li>
            <li>seguridad;</li>
            <li>mutation testing;</li>
            <li>revisión humana;</li>
            <li>comparación contra criterios de aceptación.</li>
        </ul>
        <p>La especificación se convierte así en una referencia para la evaluación.</p>

        <h2>11. El verdadero ciclo de SDD</h2>
        <p>Por lo tanto, SDD no debería entenderse como:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Spec → Code`}
        </pre>
        <p>sino como un ciclo:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Specification → Clarify → Design → Tasks → Implement → Verify
                                                          │
                                                     Feedback
                                                          │
                                                          └→ Specification`}
        </pre>
        <p>
            Este punto es fundamental.{" "}
            <strong>La especificación debe evolucionar junto con el sistema.</strong>
        </p>
        <p>
            Si cambia el comportamiento deseado, primero cambia la especificación y posteriormente
            la implementación.
        </p>

        <BlogFigure
            src="/blog/spec-driven-development-spec-vs-code.png"
            alt="Comparación: enfoque centrado en código versus enfoque centrado en especificación"
            caption="Figura 2 — Del código como centro a la especificación como fuente de verdad"
        />

        <h2>12. SDD no significa eliminar el código</h2>
        <p>SDD no propone que el código deje de ser importante. El código sigue siendo necesario.</p>
        <p>La diferencia está en la relación entre ambos:</p>
        <h3>En un enfoque tradicional</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Requirement → Code → Tests`}
        </pre>
        <h3>En un enfoque SDD</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Requirement → Specification → Design → Tasks → Code → Tests → Verification`}
        </pre>
        <p>
            El código pasa a ser{" "}
            <strong>una implementación de una intención previamente definida</strong>.
        </p>

        <h2>13. Relación con TDD y BDD</h2>
        <p>SDD no reemplaza necesariamente a TDD o BDD. Más bien pueden complementarse.</p>

        <BlogFigure
            src="/blog/spec-driven-development-sdd-bdd-tdd.png"
            alt="SDD define el contrato; BDD el comportamiento; TDD verifica el código"
            caption="Figura 3 — SDD como capa de dirección sobre BDD y TDD"
        />

        <ul>
            <li>
                <strong>SDD</strong> responde: ¿Qué debemos construir?
            </li>
            <li>
                <strong>BDD</strong> ayuda a expresar: ¿Cómo debería comportarse desde la
                perspectiva del negocio?
            </li>
            <li>
                <strong>TDD</strong> ayuda a comprobar: ¿El código implementa correctamente ese
                comportamiento?
            </li>
        </ul>
        <p>
            No considero que SDD sea una evolución que haga innecesarias las metodologías
            anteriores. Es más apropiado verlo como{" "}
            <strong>una capa de dirección sobre el proceso de desarrollo</strong>.
        </p>

        <h2>14. SDD dentro de la ingeniería de software con IA</h2>
        <p>
            Una de las conclusiones de mi análisis es que SDD tiene más sentido cuando se observa
            como parte de una arquitectura mayor.
        </p>

        <BlogFigure
            src="/blog/spec-driven-development-layers.png"
            alt="Capas: Prompt, Context, SDD, Workflow, Loop, Harness, Agent, Delivery"
            caption="Figura 4 — SDD como contrato dentro de la ingeniería con agentes"
        />

        <p>Cada capa resuelve un problema diferente:</p>
        <ul>
            <li>
                <strong>Prompt Engineering</strong> — Cómo comunicarnos con el modelo.
            </li>
            <li>
                <strong>Context Engineering</strong> — Qué información debe conocer el modelo.
            </li>
            <li>
                <strong>SDD</strong> — Qué debe construirse y bajo qué condiciones.
            </li>
            <li>
                <strong>Workflow Engineering</strong> — Cómo organizar el proceso.
            </li>
            <li>
                <strong>Loop Engineering</strong> — Cómo establecer ciclos de ejecución y feedback.
            </li>
            <li>
                <strong>Harness Engineering</strong> — Qué entorno, herramientas, restricciones y
                mecanismos de evaluación rodean al agente.
            </li>
            <li>
                <strong>Agent Engineering</strong> — Cómo construir agentes capaces de ejecutar el
                trabajo.
            </li>
        </ul>
        <p>
            Desde esta perspectiva, SDD es especialmente importante porque proporciona{" "}
            <strong>el contrato que limita y orienta la autonomía del agente</strong>.
        </p>

        <h2>15. ¿Qué cambia para el desarrollador?</h2>
        <p>El desarrollador no desaparece. Su trabajo cambia de distribución.</p>
        <p>Antes:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Diseño       ███
Programación █████████
Testing      ██`}
        </pre>
        <p>Con agentes:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Comprensión del problema  █████
Especificación           █████
Arquitectura             ████
Orquestación              ████
Implementación            ██
Review / Verification    █████`}
        </pre>
        <p>El valor se desplaza progresivamente desde escribir código manualmente hacia:</p>
        <ul>
            <li>entender el dominio;</li>
            <li>tomar decisiones;</li>
            <li>definir restricciones;</li>
            <li>diseñar sistemas;</li>
            <li>escribir especificaciones;</li>
            <li>revisar resultados;</li>
            <li>validar comportamiento.</li>
        </ul>
        <p>
            Esto no significa que programar deje de ser necesario. Significa que{" "}
            <strong>
                la capacidad de escribir código deja de ser el único cuello de botella
            </strong>
            .
        </p>

        <h2>16. Ventajas</h2>
        <p>Entre los principales beneficios que identifico están:</p>
        <ul>
            <li>
                <strong>Menos ambigüedad</strong> — Las decisiones importantes se hacen explícitas.
            </li>
            <li>
                <strong>Menos retrabajo</strong> — Los problemas pueden descubrirse antes de
                implementar.
            </li>
            <li>
                <strong>Mayor trazabilidad</strong> — Requirement → Spec → Design → Task → Code →
                Test.
            </li>
            <li>
                <strong>Mejor colaboración humano-IA</strong> — El agente recibe un contrato más
                estable que una conversación informal.
            </li>
            <li>
                <strong>Mejor mantenimiento</strong> — La spec documenta la intención que el código
                por sí solo no siempre explica.
            </li>
            <li>
                <strong>Mayor capacidad de automatización</strong> — Tareas pequeñas y verificables
                permiten más autonomía.
            </li>
        </ul>

        <h2>17. Riesgos y limitaciones</h2>
        <p>
            SDD tampoco es una solución mágica. Una mala especificación simplemente produce{" "}
            <strong>código incorrecto de manera más organizada</strong>.
        </p>
        <ul>
            <li>
                <strong>Especificaciones excesivamente grandes</strong> — Documentar todo el
                sistema en un único documento vuelve a saturar el contexto.
            </li>
            <li>
                <strong>Especificaciones obsoletas</strong> — Una spec que no evoluciona termina
                siendo documentación histórica.
            </li>
            <li>
                <strong>Falsa sensación de precisión</strong> — Un documento puede parecer
                detallado y seguir teniendo ambigüedades.
            </li>
            <li>
                <strong>Sobreespecificación</strong> — Dictar cada detalle de implementación puede
                limitar innecesariamente el diseño.
            </li>
            <li>
                <strong>Coste inicial</strong> — Requiere invertir tiempo antes de escribir código.
            </li>
        </ul>
        <p>
            Por eso considero que su aplicación debe ser proporcional a la complejidad y criticidad
            del problema.
        </p>

        <h2>18. ¿Cuándo utilizarlo?</h2>
        <p>No todas las tareas necesitan el mismo nivel de formalidad.</p>
        <h3>Tarea pequeña</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Fix typo / Rename variable / Simple refactor`}
        </pre>
        <p>Probablemente no necesita un proceso SDD completo.</p>
        <h3>Feature mediana</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Nuevo endpoint / Nueva funcionalidad UI / Cambio de persistencia

Spec → Plan → Tasks → Implement → Verify`}
        </pre>
        <h3>Feature compleja</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Nuevo microservicio / Cambio arquitectónico / Integración bancaria
Proceso crítico / Migración

Explore → Propose → Specify → Clarify → Design → Tasks → Implement → Verify`}
        </pre>
        <p>Aquí considero especialmente valioso el flujo completo.</p>

        <h2>19. Mi conclusión</h2>
        <p>
            Después de analizar SDD y relacionarlo con el desarrollo asistido por agentes, mi
            conclusión es que{" "}
            <strong>
                el cambio más importante no consiste en generar más código, sino en cambiar qué
                consideramos el principal artefacto de ingeniería
            </strong>
            .
        </p>
        <p>Durante años, el código fue el centro:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`          CODE
        /  |  \\
      Tests Design Docs`}
        </pre>
        <p>Con SDD propongo pensar de esta manera:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`             SPECIFICATION
             /     |      \\
         Design   Tasks    Tests
            \\       |       /
             \\      |      /
              IMPLEMENTATION`}
        </pre>
        <p>
            El código continúa siendo fundamental, pero ahora existe una capa explícita que
            representa la intención que el código debe cumplir.
        </p>
        <p>
            En un entorno donde la IA puede generar software rápidamente,{" "}
            <strong>
                la especificación se convierte en una herramienta de control de esa velocidad
            </strong>
            .
        </p>
        <p>
            Mi hipótesis es que el desarrollador que mejor aproveche los agentes no será
            necesariamente quien escriba más código, sino quien sea capaz de:
        </p>
        <ol>
            <li>comprender mejor el problema;</li>
            <li>expresar claramente la intención;</li>
            <li>eliminar ambigüedades;</li>
            <li>diseñar buenas soluciones;</li>
            <li>dividir el trabajo correctamente;</li>
            <li>proporcionar contexto adecuado al agente;</li>
            <li>verificar rigurosamente el resultado.</li>
        </ol>
        <p>En otras palabras:</p>
        <blockquote>
            <strong>
                Cuando generar código se vuelve barato, definir correctamente qué código debe
                existir se vuelve más valioso.
            </strong>
        </blockquote>
        <p>
            Y ese es, para mí, el principal aporte de Spec-Driven Development al desarrollo de
            software en la era de los agentes de IA.
        </p>

        <h2>Nota sobre investigación</h2>
        <p>
            Hay una pequeña ambigüedad terminológica: actualmente encontrarás tanto{" "}
            <strong>Spec-Driven Development</strong> como{" "}
            <strong>Specification-Driven Development</strong>. La literatura reciente usa ambas
            expresiones. Para este artículo utilizo <strong>Spec-Driven Development (SDD)</strong>{" "}
            porque es el término más práctico y reconocible en el contexto de agentes de IA. La idea
            central coincide con trabajos recientes que mueven el foco desde la generación directa
            de código hacia una especificación como fuente de verdad compartida entre humanos y
            agentes.
        </p>
        <ul>
            <li>
                <a
                    href="https://www.ibm.com/think/topics/spec-driven-development"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    IBM — What is Spec-Driven Development?
                </a>
            </li>
            <li>
                <a
                    href="https://arxiv.org/abs/2602.00180"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    arXiv — Spec-Driven Development: From Code to Contract in the Age of AI Coding
                    Assistants
                </a>
            </li>
            <li>
                <a href="https://specdriven.ai/" target="_blank" rel="noopener noreferrer">
                    specdriven.ai
                </a>
            </li>
        </ul>

        <BlogClosingQuote>
            Cuando generar código se vuelve barato, definir correctamente qué código debe existir
            se vuelve más valioso.
        </BlogClosingQuote>
    </>
);

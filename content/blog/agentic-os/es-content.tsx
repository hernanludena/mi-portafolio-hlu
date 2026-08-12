import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const agenticOsContentEs = (
    <>
        <p>
            Revisé este tema con información disponible hasta{" "}
            <strong>agosto de 2026</strong>. Antes del artículo, una precisión
            importante: <strong>&ldquo;Graph Engineering&rdquo;</strong>,{" "}
            <strong>&ldquo;Dynamic Context Engineering&rdquo;</strong> y algunas
            de las demás etiquetas <strong>no constituyen todavía un estándar
            académico formal y universal</strong>. Son conceptos emergentes que
            se usan para describir capas de diseño de sistemas agénticos. Por
            eso los presento como <strong>un modelo conceptual propio de
            evolución</strong>, no como una taxonomía oficialmente aceptada.
        </p>
        <p>
            También incorporo la idea de que el contexto debe administrarse
            dinámicamente, que el <em>harness</em> es una capa de ingeniería por
            derecho propio y que los sistemas evolucionan desde loops implícitos
            hacia grafos explícitos y observables. Ver{" "}
            <a
                href="https://openai.com/index/harness-engineering/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Harness engineering (OpenAI)
            </a>
            .
        </p>

        <h2>Resumen</h2>
        <p>
            Durante los últimos años, la forma de construir aplicaciones basadas
            en inteligencia artificial ha cambiado radicalmente.
        </p>
        <p>
            Al principio, el desafío principal era conseguir que un modelo
            generativo produjera mejores respuestas. Eso dio lugar al{" "}
            <strong>Prompt Engineering</strong>: formular instrucciones,
            ejemplos y el resultado esperado.
        </p>
        <p>
            Cuando los modelos empezaron a usar herramientas, acceder a
            información externa, ejecutar código, mantener estado y realizar
            tareas de varios pasos, el prompt dejó de ser el problema principal.
        </p>
        <p>El desafío pasó a ser mucho más amplio:</p>

        <blockquote>
            <strong>¿Cómo diseñamos el sistema que rodea al modelo para que pueda resolver tareas complejas de forma confiable?</strong>
        </blockquote>

        <p>A partir de esa pregunta propongo esta evolución conceptual:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Chatbot
   ↓
Prompt Engineering
   ↓
Context Engineering
   ↓
Dynamic Context Engineering
   ↓
Workflow Engineering
   ↓
Graph Engineering
   ↓
Loop Engineering
   ↓
Harness Engineering
   ↓
Agent Engineering
   ↓
Multi-Agent Engineering
   ↓
Evaluation Engineering
   ↓
Agentic Runtime Engineering
   ↓
Self-Improving Agent Engineering
   ↓
Agentic Operating System`}
        </pre>

        <p>
            Esta secuencia no es una escalera estrictamente lineal. Algunas
            disciplinas se superponen y evolucionan a la vez.
        </p>
        <p>
            La idea central: pasamos de <strong>ingeniería de instrucciones</strong>{" "}
            a <strong>ingeniería de sistemas autónomos</strong>.
        </p>

        <BlogFigure
            src="/blog/agentic-os-card.png"
            alt="Evolución de Chatbot a Agentic OS: Prompt, Context, Workflow, Graph, Loop, Harness, Agent, Runtime"
            caption="Figura 1 — Evolución de AI Engineering: del chatbot al Agentic Operating System"
        />

        <h2>1. Introducción: de conversar con la IA a construir sistemas que trabajan</h2>

        <p>
            El primer paradigma de la IA generativa fue esencialmente
            conversacional.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Usuario
   ↓
Prompt
   ↓
Modelo
   ↓
Respuesta`}
        </pre>

        <p>El éxito dependía principalmente de la calidad de la instrucción.</p>
        <p>Por ejemplo:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"Explícame qué es Kafka."`}
        </pre>

        <p>podía transformarse en:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"Actúa como arquitecto de software.
Explícame Kafka para un desarrollador Java senior.
Incluye arquitectura, productores, consumidores,
particiones, offsets, grupos de consumidores y
un ejemplo aplicado a microservicios."`}
        </pre>

        <p>
            El segundo prompt probablemente produce una respuesta más útil. El
            prompt se convirtió en una nueva interfaz de programación.
        </p>
        <p>Pero apareció una limitación:</p>

        <blockquote>
            <strong>Un prompt solamente describe qué debería hacer el modelo; no construye el sistema necesario para hacerlo.</strong>
        </blockquote>

        <p>
            Cuando la tarea pasó de &ldquo;Explícame X&rdquo; a &ldquo;Investiga
            X, consulta documentación, modifica código, ejecuta pruebas, analiza
            errores, corrige y entrega un resultado validado&rdquo;, el problema
            cambió por completo.
        </p>
        <p>
            Ya no diseñamos solamente prompts. Diseñamos{" "}
            <strong>sistemas de ejecución</strong>.
        </p>

        <h2>2. La gran transición</h2>

        <p>Podemos visualizar la evolución en tres grandes eras.</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`┌──────────────────────────────────────────────────────────┐
│ ERA 1 — MODELOS CONVERSACIONALES                         │
│                                                          │
│ Usuario → Prompt → Modelo → Respuesta                    │
│                                                          │
│ Problema principal: calidad de la respuesta              │
└───────────────────────────────┬──────────────────────────┘
                                ↓
┌──────────────────────────────────────────────────────────┐
│ ERA 2 — MODELOS CON HERRAMIENTAS                         │
│                                                          │
│ Usuario → Modelo → Tool → Resultado → Modelo              │
│                                                          │
│ Problema principal: contexto + herramientas + ejecución   │
└───────────────────────────────┬──────────────────────────┘
                                ↓
┌──────────────────────────────────────────────────────────┐
│ ERA 3 — SISTEMAS AGÉNTICOS                               │
│                                                          │
│ Goal → Plan → Context → Graph → Tools → Verify → Loop    │
│             ↑                         ↓                  │
│             └──────── State ──────────┘                  │
│                                                          │
│ Problema principal: autonomía + control + confiabilidad  │
└──────────────────────────────────────────────────────────┘`}
        </pre>

        <BlogFigure
            src="/blog/agentic-os-prompt-to-system.png"
            alt="Comparación OLD User-Prompt-LLM-Response vs NEW Goal-Context-Graph-Agent-Harness-Runtime-Evaluation"
            caption="Figura 2 — Del prompt al sistema agentic: el modelo deja de ser todo el sistema"
        />
        <p>
            En la tercera etapa, el modelo es solamente uno de los componentes.
            El sistema completo puede contener modelos, memoria, contexto
            dinámico, herramientas, APIs, código ejecutable, bases de datos,
            workflows, grafos, agentes especializados, validadores, evaluadores,
            checkpoints, observabilidad, permisos, recuperación e intervención
            humana.
        </p>
        <p>
            El modelo sigue siendo importante. Pero{" "}
            <strong>ya no es todo el sistema</strong>.
        </p>

        <h2>3. Una nueva forma de pensar la ingeniería de IA</h2>

        <p>Una forma útil de entender la evolución es cambiar la pregunta.</p>

        <h3>Prompt Engineering</h3>
        <blockquote>
            <strong>¿Qué debo decirle al modelo?</strong>
        </blockquote>
        <h3>Context Engineering</h3>
        <blockquote>
            <strong>¿Qué necesita conocer el modelo?</strong>
        </blockquote>
        <h3>Dynamic Context Engineering</h3>
        <blockquote>
            <strong>¿Qué necesita conocer el modelo en este momento?</strong>
        </blockquote>
        <h3>Workflow Engineering</h3>
        <blockquote>
            <strong>¿Qué pasos debe realizar el sistema?</strong>
        </blockquote>
        <h3>Graph Engineering</h3>
        <blockquote>
            <strong>¿Cómo se conectan esos pasos, decisiones, agentes y estados?</strong>
        </blockquote>
        <h3>Loop Engineering</h3>
        <blockquote>
            <strong>¿Cómo puede continuar, verificar, corregir y repetir?</strong>
        </blockquote>
        <h3>Harness Engineering</h3>
        <blockquote>
            <strong>¿En qué entorno puede actuar y qué controles debe tener?</strong>
        </blockquote>
        <h3>Agent Engineering</h3>
        <blockquote>
            <strong>¿Cómo construyo una unidad autónoma capaz de tomar decisiones?</strong>
        </blockquote>
        <h3>Multi-Agent Engineering</h3>
        <blockquote>
            <strong>¿Cómo coordino varias unidades autónomas?</strong>
        </blockquote>
        <h3>Evaluation Engineering</h3>
        <blockquote>
            <strong>¿Cómo sé que el sistema realmente funciona?</strong>
        </blockquote>
        <h3>Agentic Runtime Engineering</h3>
        <blockquote>
            <strong>¿Cómo ejecuto y mantengo estos sistemas de forma durable y observable?</strong>
        </blockquote>
        <h3>Self-Improving Agent Engineering</h3>
        <blockquote>
            <strong>¿Cómo puede el sistema aprender de sus ejecuciones y mejorar?</strong>
        </blockquote>
        <h3>Agentic Operating System</h3>
        <blockquote>
            <strong>¿Cómo integro todo esto en una plataforma capaz de operar procesos completos?</strong>
        </blockquote>
        <h2>4. Chatbot: el punto de partida</h2>

        <p>Un chatbot tradicional tiene una estructura relativamente sencilla:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`User
 │
 ▼
Prompt
 │
 ▼
LLM
 │
 ▼
Response`}
        </pre>

        <p>
            Puede tener historial, pero su responsabilidad principal suele ser
            generar una respuesta. El usuario conserva gran parte del control.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Usuario: "Analiza este error."
IA: "El error probablemente está relacionado con una NullPointerException."
Usuario: "Ahora revisa el código."
IA: "Necesito que me envíes el código."
Usuario: "Aquí está."
IA: "Ahora creo que..."`}
        </pre>

        <p>
            La interacción depende de que el usuario conduzca el proceso. El
            chatbot responde. No necesariamente <strong>opera</strong>.
        </p>

        <h2>5. Prompt Engineering</h2>

        <p>
            El siguiente nivel optimiza las instrucciones: objetivo, rol,
            restricciones, formato, ejemplos, criterios de calidad y
            comportamiento esperado.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 PROMPT
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
    Objetivo    Reglas      Ejemplos
       │           │           │
       └───────────┼───────────┘
                   ▼
                  LLM
                   │
                   ▼
                Output`}
        </pre>

        <p>
            Fue fundamental: convirtió el lenguaje natural en una especie de
            interfaz de programación. Pero tiene una limitación:
        </p>

        <blockquote>
            <strong>No importa cuánto mejoremos el prompt si el modelo no dispone de la información, herramientas, estado o entorno necesarios para ejecutar la tarea.</strong>
        </blockquote>
        <h2>6. Context Engineering</h2>

        <p>
            Ya no preguntamos &ldquo;¿cómo escribo mejor el prompt?&rdquo; sino
            &ldquo;¿qué información necesita el modelo para tomar una buena
            decisión?&rdquo;
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Context
├── Instructions
├── Project rules
├── Documentation
├── Source code
├── User information
├── Memory
├── Tool descriptions
├── Tool results
├── Previous actions
├── Current state
├── Tests
└── External references`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                ┌───────────────┐
                │ Instructions  │
                ├───────────────┤
                │ Documentation │
                ├───────────────┤
                │ Memory        │
                ├───────────────┤
                │ Code          │
                ├───────────────┤
                │ Tools         │
                ├───────────────┤
                │ State         │
                └───────┬───────┘
                        ↓
                       LLM`}
        </pre>

        <p>El contexto se convierte en un recurso de ingeniería.</p>

        <h2>7. El contexto no debe crecer indefinidamente</h2>

        <p>
            Una idea clave: <strong>más contexto no significa necesariamente
            mejor contexto</strong>. Un contexto gigantesco puede aumentar
            costos y latencia, ocultar información importante, introducir
            instrucciones contradictorias, incluir datos obsoletos y consumir
            capacidad del modelo.
        </p>
        <p>Una buena arquitectura trata el contexto como un presupuesto:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Context Budget
│
├── Task
├── Relevant rules
├── Relevant memory
├── Relevant code
├── Relevant tools
└── Relevant observations`}
        </pre>

        <p>En lugar de volcar todo lo conocido:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Task
 ↓
Determine relevance
 ↓
Retrieve required information
 ↓
Build context
 ↓
LLM`}
        </pre>

        <p>
            El conocimiento debe ser navegable y relevante, no acumulado en un
            único archivo enorme (
            <a
                href="https://openai.com/index/harness-engineering/"
                target="_blank"
                rel="noopener noreferrer"
            >
                OpenAI
            </a>
            ).
        </p>

        <h2>8. Dynamic Context Engineering</h2>

        <p>El contexto deja de ser estático.</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 Task
                   │
                   ▼
           Context Selector
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
      Memory      Skills     Tools
        │          │          │
        └──────────┼──────────┘
                   ▼
                  LLM
                   │
                   ▼
               Action
                   │
                   ▼
             New Observation
                   │
                   ▼
            Context Update
                   │
                   └──────────────→ LLM`}
        </pre>

        <p>
            El sistema decide qué recordar, recuperar, descartar, resumir, qué
            herramienta necesita y qué resultado incorporar.
        </p>
        <p>
            <strong>Dynamic Context Engineering no es realmente una etapa
            posterior a Agent Engineering</strong>: es una evolución del Context
            Engineering que se vuelve crítica cuando aparecen agentes.
        </p>

        <h2>9. Progressive Disclosure</h2>

        <p>
            En lugar de dar el 100% del conocimiento al inicio, se ofrece un
            mapa y el agente carga más información solo cuando la necesita.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 Agent
                   │
                   ▼
              Discover
                   │
                   ▼
             Select Context
                   │
                   ▼
              Load Skill
                   │
                   ▼
             Execute Task`}
        </pre>

        <p>Patrón especialmente importante en proyectos grandes.</p>

        <h2>10. Workflow Engineering</h2>

        <p>Cuando la tarea requiere múltiples pasos aparece Workflow Engineering:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Receive Request
      ↓
Analyze
      ↓
Retrieve Data
      ↓
Process
      ↓
Validate
      ↓
Publish`}
        </pre>

        <p>
            El workflow define qué debe ocurrir y en qué orden. No todo debe
            convertirse en un agente autónomo. Muchas tareas funcionan mejor con
            procesos deterministas.
        </p>

        <h2>11. Workflow ≠ Agent</h2>

        <p>Esta distinción es fundamental.</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Workflow:  A → B → C → D

Agent:
A
 ↓
¿Qué hago ahora?
 ↓
Tool X
 ↓
¿Funcionó?
 ↓
Tool Y
 ↓
¿Necesito otra acción?`}
        </pre>

        <p>Una arquitectura robusta normalmente combina:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Deterministic Workflow
          +
Agentic Decisions`}
        </pre>
        <blockquote>
            <strong>Usar determinismo donde conocemos la solución y autonomía donde necesitamos exploración o decisión.</strong>
        </blockquote>
        <h2>12. Graph Engineering</h2>

        <p>
            Graph Engineering aparece cuando el workflow deja de ser solo una
            secuencia. Un grafo representa nodos, estados, transiciones,
            dependencias, condiciones, bifurcaciones, paralelismo,
            sincronización, recuperación, validación, intervención humana y
            ciclos.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                         START
                           │
                           ▼
                        Analyze
                           │
                  ┌────────┴────────┐
                  ▼                 ▼
               Simple             Complex
                  │                 │
                  ▼                 ▼
               Execute            Plan
                                    │
                         ┌──────────┼──────────┐
                         ▼          ▼          ▼
                       Agent A    Agent B    Agent C
                         │          │          │
                         └──────────┼──────────┘
                                    ▼
                                  Verify
                                    │
                             ┌──────┴──────┐
                             ▼             ▼
                           Valid         Invalid
                             │             │
                             ▼             ▼
                            END          Repair
                                           │
                                           └──────→ Verify`}
        </pre>

        <p>
            El objetivo: convertir el flujo de ejecución en una estructura
            explícita que pueda inspeccionarse, controlarse, versionarse y
            observarse.
        </p>
        <p>
            En 2026 el término está emergiendo para describir este enfoque;
            todavía no hay definición universal (
            <a
                href="https://www.analyticsvidhya.com/blog/2026/07/graph-engineering/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Analytics Vidhya
            </a>
            ).
        </p>

        <h2>13. Loop Engineering</h2>

        <p>Un loop es distinto de un workflow y de un grafo:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`        ┌──────────────┐
        │              ▼
Goal → Act → Observe → Evaluate
        ▲                 │
        │                 ▼
        └────── Correct ──┘`}
        </pre>

        <p>
            El agente analiza, decide, actúa, observa, verifica, corrige y
            repite.{" "}
            <a
                href="https://www.ibm.com/think/topics/loop-engineering"
                target="_blank"
                rel="noopener noreferrer"
            >
                IBM sobre Loop Engineering
            </a>
            .
        </p>

        <h2>14. Loop vs Graph</h2>

        <p>
            Un loop responde: <strong>¿cómo continúa trabajando este
            agente?</strong> Un grafo responde:{" "}
            <strong>¿cómo está estructurado todo el proceso y cómo se conectan
            sus componentes?</strong>
        </p>

        <blockquote>
            <strong>Graph Engineering permite estructurar múltiples loops, workflows, decisiones y componentes dentro de una topología de ejecución explícita.</strong>
        </blockquote>

        <p>
            No reemplaza Loop Engineering. Un grafo puede contener múltiples
            loops.
        </p>

        <BlogFigure
            src="/blog/agentic-os-loop-graph-aos.png"
            alt="Evolución Loop a Graph a Agentic OS: ciclo Act-Observe-Verify, grafo Planner-ABC, plataforma AOS"
            caption="Figura 4 — Del loop al grafo al Agentic OS: de iterar a componer y operar plataformas"
        />

        <h2>15. Harness Engineering</h2>

        <p>
            El agente necesita un entorno donde operar. El harness controla
            herramientas, permisos, filesystem, sandbox, comandos, tests,
            validaciones, límites de tiempo y costo, checkpoints, recuperación,
            observabilidad e intervención humana.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 HARNESS
                    │
      ┌─────────────┼──────────────┐
      ▼             ▼              ▼
    Tools        Permissions     Sandbox
      │             │              │
      ▼             ▼              ▼
   APIs          Policies        Files
      │             │              │
      └─────────────┼──────────────┘
                    ▼
                Validation
                    │
                    ▼
              Observability
                    │
                    ▼
               Feedback`}
        </pre>

        <p>
            Con coding agents y agentes de larga duración, la ingeniería se
            centra cada vez más en diseñar el entorno donde los agentes trabajan
            de forma confiable (
            <a
                href="https://openai.com/index/harness-engineering/"
                target="_blank"
                rel="noopener noreferrer"
            >
                OpenAI
            </a>
            ).
        </p>

        <h2>16. El Harness como sistema de control</h2>
        <blockquote>
            <strong>El modelo decide. El Harness determina qué puede hacer.</strong>
        </blockquote>
        <h2>17. Agent Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 GOAL
                  │
                  ▼
              PERCEPTION
                  │
                  ▼
               REASONING
                  │
                  ▼
                PLAN
                  │
                  ▼
                ACTION
                  │
                  ▼
               OBSERVE
                  │
                  └──────→ REASONING`}
        </pre>

        <p>
            El agente posee objetivo, contexto, herramientas, memoria, estado,
            decisión, recuperación y criterios de finalización. La diferencia
            respecto de un chatbot: capacidad de{" "}
            <strong>actuar sobre un entorno</strong>.
        </p>

        <h2>18. No todo sistema con un LLM es un agente</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`LLM:              Input → Model → Output

Workflow + LLM:   Step A → LLM → Step B → LLM → Step C

Agent:
Goal → LLM → Decide → Tool → Observe → Decide → Tool → ...`}
        </pre>

        <p>
            La característica fundamental no es usar un modelo: es{" "}
            <strong>capacidad de decisión y acción dentro de un entorno</strong>.
        </p>

        <h2>19. Multi-Agent Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                  Supervisor
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
     Research       Coding        Testing
      Agent          Agent         Agent
        │             │             │
        └─────────────┼─────────────┘
                      ▼
                   Review → Result`}
        </pre>

        <p>
            Cada agente puede tener objetivo, tools, permisos, contexto, memoria
            y evaluación propios. Reduce complejidad local; introduce complejidad
            global.
        </p>

        <h2>20. Multi-Agent no significa automáticamente mejor</h2>
        <blockquote>
            <strong>No utilizar múltiples agentes hasta que exista una razón arquitectónica clara para separarlos.</strong>
        </blockquote>

        <p>
            Razones válidas: responsabilidades, permisos, tools o contextos
            distintos; paralelismo; aislamiento de fallos; verificación
            independiente.
        </p>

        <h2>21. Evaluation Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 Agent
                   │
                   ▼
                Execute
                   │
                   ▼
                 Trace
                   │
                   ▼
               Evaluate
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
      Pass                  Failure
        │                     │
        ▼                     ▼
      Deploy              Diagnose → Improve`}
        </pre>

        <p>
            Medir: task success, precisión, tool selection, argumentos, pasos,
            costo, latencia, errores, recuperación, políticas, calidad,
            intervención humana.
        </p>

        <h2>22. Evaluar el resultado no es suficiente</h2>

        <p>
            En sistemas agentic hay que evaluar también la{" "}
            <strong>trayectoria</strong>.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Agent A: 5 steps, $0.20, 2 tool calls, 1 retry
Agent B: 47 steps, $4.80, 19 tool calls, 8 retries`}
        </pre>

        <p>
            Ambos pueden llegar al mismo resultado correcto. Arquitectónicamente
            son sistemas muy distintos.
        </p>

        <h2>23. Agentic Runtime Engineering</h2>

        <p>
            En producción: ¿cómo ejecutamos agentes durante minutos, horas o
            días sin perder estado?
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                Agentic Runtime
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
    Scheduler        State          Execution
       │               │                │
       ▼               ▼                ▼
    Retries         Checkpoints       Tools
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                 Observability → Recovery`}
        </pre>

        <p>
            El agente empieza a parecerse menos a una llamada a un modelo y más
            a un <strong>proceso distribuido</strong>.
        </p>

        <h2>24. De request/response a long-running execution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Request → Create Job → Agent Runtime → Plan → Execute
→ Checkpoint → Tool → Observe → Checkpoint → Continue
→ Verify → Complete`}
        </pre>

        <p>
            Aparecen conceptos de sistemas distribuidos: estados, eventos,
            persistencia, idempotencia, retries, timeouts, compensación,
            consistencia, trazabilidad.
        </p>

        <h2>25. Self-Improving Agent Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 Execute → Trace → Evaluate → Find Failure
                              │
                   ┌──────────┼──────────┐
                   ▼          ▼          ▼
                Context     Skill     Workflow
                   └──────────┼──────────┘
                              ▼
                           Improve → Re-execute`}
        </pre>
        <blockquote>
            <strong>El sistema ya no solamente ejecuta procesos; también puede mejorar la forma en que ejecuta esos procesos.</strong>
        </blockquote>

        <p>
            Frontera emergente: no equivale a afirmar que un agente se
            &ldquo;reprograma solo&rdquo; sin límites. En sistemas reales suele
            haber aprobación, versionado y evaluación antes de aceptar cambios.
        </p>

        <h2>26. Agentic Operating System</h2>

        <p>
            Un AOS no es &ldquo;una app con varios agentes&rdquo;. Es una
            plataforma que administra los recursos para ejecutar sistemas
            agénticos — una{" "}
            <strong>capa de coordinación y operación de agentes</strong>.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                     AGENTIC OS
                          │
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
    Agents             Context            Memory
       │                  │                  │
       ▼                  ▼                  ▼
    Skills             Graphs             State
       │                  │                  │
       └──────────────────┼──────────────────┘
                          ▼
                       Runtime
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
           Tools        Evals       Harness
             │            │            │
             └────────────┼────────────┘
                          ▼
                    Observability → Governance`}
        </pre>
        <h2>27. ¿Qué administra un AOS?</h2>

        <ul>
            <li>
                <strong>Agents</strong> — Who can act?
            </li>
            <li>
                <strong>Context</strong> — What can they know?
            </li>
            <li>
                <strong>Memory</strong> — What can they remember?
            </li>
            <li>
                <strong>Tools</strong> — What can they do?
            </li>
            <li>
                <strong>Graphs</strong> — How is work organized?
            </li>
            <li>
                <strong>Runtime</strong> — Where and how does execution happen?
            </li>
            <li>
                <strong>Harness</strong> — Under which constraints?
            </li>
            <li>
                <strong>Evaluation</strong> — How do we know it works?
            </li>
            <li>
                <strong>Governance</strong> — What is allowed?
            </li>
        </ul>

        <h2>28. La arquitectura completa</h2>

        <BlogFigure
            src="/blog/agentic-os-production-agent.png"
            alt="Arquitectura de producción: Agent con Context Memory Tools, Graph, Harness, Runtime, APIs DBs Services, Evaluation Improvement"
            caption="Figura 3 — Inside a Production Agent: del goal al entorno, con evaluación y mejora"
        />

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`USER → GOAL → CONTEXT ENGINE → GRAPH/WORKFLOW
→ AGENT(S) → HARNESS → AGENTIC RUNTIME
→ ENVIRONMENT → OBSERVABILITY → IMPROVEMENT`}
        </pre>
        <h2>29. La evolución completa</h2>

        <p>
            El modelo conceptual no es una cadena estrictamente lineal. El
            sistema completo es un ciclo: Context → Agent → Graph → Runtime →
            Evals → Improvement → Context.
        </p>

        <h2>30. Capas alternativas</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`┌─────────────────────────────────────────────────────────┐
│                    AGENTIC OS                            │
├─────────────────────────────────────────────────────────┤
│                 AGENTIC RUNTIME                         │
├─────────────────────────────────────────────────────────┤
│                    HARNESS                              │
├─────────────────────────────────────────────────────────┤
│               GRAPH / WORKFLOW / LOOP                   │
├─────────────────────────────────────────────────────────┤
│                    AGENTS                               │
├─────────────────────────────────────────────────────────┤
│                   CONTEXT                               │
├─────────────────────────────────────────────────────────┤
│                    MODEL                                │
└─────────────────────────────────────────────────────────┘`}
        </pre>
        <blockquote>
            <strong>El modelo es solamente una capa del sistema.</strong>
        </blockquote>
        <h2>31. Del prompt al sistema operativo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Prompt → "¿Cómo hablo con la IA?"
Context → "¿Qué necesita saber?"
Workflow/Graph/Loop → "¿Cómo debe trabajar?"
Harness → "¿Dónde puede trabajar y qué puede hacer?"
Agent → "¿Cómo puede actuar autónomamente?"
Multi-Agent → "¿Cómo colaboran?"
Runtime → "¿Cómo lo mantengo ejecutándose?"
Evaluation → "¿Cómo sé que funciona?"
Self-Improvement → "¿Cómo puede mejorar?"
Agentic OS → "¿Cómo opero todo esto como plataforma?"`}
        </pre>
        <h2>32. El cambio de rol del desarrollador</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Developer → Defines Intent → Designs Context → Designs Graph
→ Designs Harness → Defines Tests → Defines Evaluation
→ Agent Executes → Developer Reviews System`}
        </pre>

        <p>
            El desarrollador no desaparece: pasa de escribir cada instrucción de
            ejecución a <strong>diseñar el sistema que permite ejecutarlas
            correctamente</strong>.
        </p>

        <h2>33. Software Engineering y Agent Engineering</h2>

        <p>
            Agent Engineering no sustituye Software Engineering: agrega
            superficies (Context, Agents, Tools, Graphs, Loops, Harness, Evals,
            Runtime). Cuanto más autónomo el sistema, más críticas son
            arquitectura, seguridad, testing, observabilidad y resiliencia.
        </p>

        <h2>34. Un agente es un sistema distribuido disfrazado</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Failure · Timeout · Retry · Duplicate Action
Partial Completion · Lost State · Race Condition · Inconsistent State`}
        </pre>
        <h2>35. La importancia del estado</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`State
├── Goal
├── Current Step
├── Completed Steps
├── Pending Tasks
├── Tool Results
├── Decisions
├── Errors
├── Memory
└── Recovery Information`}
        </pre>
        <h2>36. Graph Engineering como puente</h2>

        <p>
            Un grafo hace explícito lo que en un agente simple está implícito:
            control de flujo, estado y recuperación (
            <a
                href="https://arxiv.org/abs/2604.11378"
                target="_blank"
                rel="noopener noreferrer"
            >
                arXiv: From Agent Loops to Structured Graphs
            </a>
            ).
        </p>

        <h2>37. Pero Graph Engineering también tiene un costo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Simple task              → Direct LLM
Tool use                 → Agent Loop
Multiple deterministic   → Workflow
Branches / recovery      → Graph
Independent roles        → Multi-Agent Graph
Long-running production  → Agentic Runtime
Multiple agentic procs   → Agentic Operating System`}
        </pre>
        <h2>38. La arquitectura híbrida será la más común</h2>
        <blockquote>
            <strong>No todo será agentes. Determinismo + autonomía dentro de un grafo — y humanos cuando haga falta.</strong>
        </blockquote>
        <h2>39. Context Engineering + Graph Engineering</h2>

        <p>
            Cada nodo puede tener su propio contexto. Evita el contexto
            gigantesco único para todo el proceso.
        </p>

        <h2>40. Contexto como flujo dentro del grafo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Context Engineering + Graph Engineering + State Management`}
        </pre>
        <h2>41. El problema del contexto acumulativo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Raw History → Summarize → Extract State
→ Persist Important Facts → Discard Noise → Build New Context`}
        </pre>
        <h2>42. Seguridad en sistemas agénticos</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`LLM decision → Policy → Authorization → Validation → Tool`}
        </pre>

        <p>
            Especialmente crítico con dinero, datos sensibles, producción,
            borrados o cambios irreversibles.
        </p>

        <h2>43. Observabilidad como requisito estructural</h2>

        <p>
            No basta request/response: necesitamos traces de goal, context,
            decision, tool I/O, state, retry, branch, handoff, validation y
            resultado. Debe diseñarse desde el inicio.
        </p>

        <h2>44. El nuevo ciclo de desarrollo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Define Goal → Design Context → Design Graph → Design Harness
→ Build Agent → Evaluate → Execute → Observe → Improve → Evaluate Again ↺`}
        </pre>
        <h2>45. La verdadera unidad de diseño deja de ser el prompt</h2>
        <blockquote>
            <strong>En un sistema agentic, el sistema de ejecución es el centro.</strong>
        </blockquote>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AGENTIC SYSTEM =
Prompt + Context + Memory + Tools + Graph + Workflow
+ Loop + Harness + State + Runtime + Evaluation + Governance`}
        </pre>
        <h2>46. Cinco dimensiones del modelo</h2>

        <ul>
            <li>
                <strong>Inteligencia</strong> — Prompt, Context, Dynamic Context
            </li>
            <li>
                <strong>Ejecución</strong> — Workflow, Graph, Loop
            </li>
            <li>
                <strong>Autonomía</strong> — Harness, Agent, Multi-Agent
            </li>
            <li>
                <strong>Operación</strong> — Evaluation, Runtime, Observability,
                Governance
            </li>
            <li>
                <strong>Evolución</strong> — Self-Improvement, Agentic OS
            </li>
        </ul>

        <h2>47. El mapa completo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                         AI ENGINEERING
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
  INTELLIGENCE             EXECUTION             AUTONOMY
       │                      │                      │
       └──────────────────────┼──────────────────────┘
                              ▼
                         OPERATIONS
                              │
                              ▼
                         EVOLUTION`}
        </pre>
        <h2>48. ¿Hacia dónde creo que evoluciona?</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Human → Intent → Agentic OS → Context → Graph
→ Agents → Tools → Environment → Evaluation → Learning → Improvement`}
        </pre>
        <blockquote>
            <strong>Autonomía dentro de límites explícitos.</strong>
        </blockquote>
        <h2>49. La paradoja de la autonomía</h2>

        <p>
            Cuanto más autónomo es un sistema, más importante se vuelve el
            control: límites, permisos, validaciones, checkpoints,
            observabilidad, evaluación y recuperación.
        </p>

        <blockquote>
            <strong>Automatizar dentro de un espacio de control bien diseñado.</strong>
        </blockquote>
        <h2>50. Conclusiones</h2>

        <p>
            Empezamos con Prompt → Response y evolucionamos hacia Goal →
            Context → Graph → Agent → Tools → Runtime → Evaluation →
            Improvement.
        </p>

        <blockquote>
            <strong>El futuro de la ingeniería de IA no consiste solamente en construir modelos más inteligentes. Consiste en construir sistemas capaces de proporcionarles el contexto adecuado, permitirles actuar, controlar sus acciones, verificar sus resultados y aprender de sus ejecuciones.</strong>
        </blockquote>

        <p>
            El modelo de lenguaje es una pieza fundamental. Pero el verdadero
            producto es el <strong>sistema que lo rodea</strong>.
        </p>

        <h2>51. Propuesta de evolución resumida</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`INSTRUCT → INFORM → ROUTE → ITERATE → CONTROL
→ ACT → COLLABORATE → MEASURE → OPERATE → IMPROVE → ORCHESTRATE`}
        </pre>

        <p>
            La primera escalera (Chatbot → AOS) es la evolución tecnológica. Esta
            segunda es la evolución de las responsabilidades de ingeniería.
        </p>

        <h2>52. Nota metodológica</h2>

        <p>
            Este artículo es una <strong>síntesis y propuesta conceptual
            propia</strong> basada en la evolución observada hasta agosto de
            2026. No existe una taxonomía universalmente aceptada con exactamente
            estas etapas. Términos como Graph Engineering, Dynamic Context
            Engineering, Agentic Runtime Engineering y Self-Improving Agent
            Engineering son categorías de análisis para organizar prácticas
            emergentes.
        </p>
        <p>
            Dejo abierta una cuestión: si Graph Engineering es un escalón de la
            evolución o una <strong>dimensión transversal</strong> junto a
            Context, Workflow y Loop. Mi posición actual es la segunda: un grafo
            puede contener workflows, loops, agentes, funciones deterministas,
            validadores y humanos. La literatura de 2026 todavía converge en esta
            definición.
        </p>

        <BlogClosingQuote>
            El prompt sigue existiendo. El centro ya no es la instrucción: es el
            sistema de ejecución que la rodea — y el AOS que lo opera.
        </BlogClosingQuote>
    </>
);

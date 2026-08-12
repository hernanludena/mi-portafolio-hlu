import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const evalsBottleneckContentEs = (
    <>
        <p>
            Durante los últimos años, gran parte de la evolución de la Inteligencia Artificial estuvo
            enfocada en mejorar la capacidad de los modelos para <strong>generar</strong>: mejores
            respuestas, código más preciso, razonamiento más complejo y mayor capacidad para seguir
            instrucciones.
        </p>
        <p>Pero con la aparición de sistemas agénticos el problema está cambiando.</p>
        <p>
            Un agente ya no se limita a responder una pregunta. Puede analizar un objetivo,
            planificar, utilizar herramientas, modificar información, ejecutar código, consultar
            sistemas externos y repetir el proceso hasta intentar alcanzar un resultado.
        </p>
        <p>Esto introduce una pregunta mucho más difícil:</p>
        <blockquote>
            <strong>¿Cómo sabemos que el agente realmente hizo bien su trabajo?</strong>
        </blockquote>
        <p>
            Mi conclusión es que, en esta nueva etapa,{" "}
            <strong>
                la capacidad de generar está avanzando más rápido que nuestra capacidad de evaluar lo
                generado
            </strong>
            .
        </p>
        <p>
            Por eso considero que las <em>evals</em> —evaluaciones sistemáticas de sistemas de IA—
            se están convirtiendo en{" "}
            <strong>
                uno de los principales cuellos de botella para desarrollar agentes confiables a
                escala
            </strong>
            . No es una ley universal: es una tesis sobre dónde se concentra hoy la fricción de
            ingeniería.
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-card.png"
            alt="Evals: el nuevo cuello de botella de la ingeniería de IA"
            caption="Generar avanza más rápido que evaluar — y con agentes el gap se agranda"
        />

        <BlogFigure
            src="/blog/evals-bottleneck-stages.png"
            alt="De generación a evaluación: etapa prompt/LLM vs agente con tools y feedback loop"
            caption="Figura principal — From Generation to Evaluation Bottleneck"
        />

        <h2>1. Del modelo al sistema</h2>
        <p>En un escenario tradicional podemos pensar en:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input → LLM → Output → Evaluación`}
        </pre>
        <p>
            La evaluación puede ser relativamente sencilla: comparar la respuesta con una respuesta
            esperada.
        </p>
        <p>Pero un agente introduce muchas más variables:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Objetivo → Agente → Planificación
              → Tool / API + Base de datos
              → Resultado / Estado → Nuevo paso → ...
              → Resultado → EVAL`}
        </pre>
        <p>
            El resultado final ya no depende únicamente del modelo. Depende del modelo, del contexto,
            de las instrucciones, de las herramientas, del estado, del entorno, del número de pasos y
            de las decisiones tomadas durante la ejecución.
        </p>
        <p>
            Por lo tanto:{" "}
            <strong>
                evaluar un agente no es simplemente evaluar una respuesta. Es evaluar un
                comportamiento.
            </strong>
        </p>

        <h2>2. ¿Qué es realmente una Eval?</h2>
        <p>
            Una <em>eval</em> puede entenderse como una prueba diseñada para responder una pregunta
            concreta sobre el comportamiento de un sistema de IA.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Caso de prueba → Sistema IA → Ejecución → Resultado → Grader → Score`}
        </pre>
        <p>Una evaluación necesita al menos:</p>
        <ul>
            <li>un objetivo;</li>
            <li>un escenario de prueba;</li>
            <li>un resultado esperado o criterios de éxito;</li>
            <li>una forma de medir el resultado;</li>
            <li>y, cuando sea necesario, una explicación del fallo.</li>
        </ul>
        <p>Por ejemplo, para un agente de programación:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Task: "Implementar autenticación JWT"
Agent → Lee código → Modifica → Tests → Corrige
Eval:
 ├── ¿Compila?
 ├── ¿Pasan los tests?
 ├── ¿Cumple los requisitos?
 ├── ¿Introdujo vulnerabilidades?
 └── ¿Modificó archivos innecesarios?`}
        </pre>
        <p>
            Un agente podría producir código que <strong>funciona</strong>, pero que usa una solución
            innecesariamente compleja, consume demasiados recursos, modifica componentes que no debía
            tocar, introduce una vulnerabilidad, usa herramientas incorrectamente o necesita diez
            veces más pasos que otra solución.
        </p>
        <p>
            Por eso,{" "}
            <strong>
                task completion no es suficiente para determinar la calidad de un agente
            </strong>
            .
        </p>

        <h2>3. El problema del resultado final</h2>
        <p>Uno de los errores más comunes es evaluar solamente el resultado.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input → Agent → Output → ¿Correcto?`}
        </pre>
        <p>Esto puede ocultar problemas importantes. Supongamos que dos agentes obtienen el mismo resultado:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Agent A: 5 pasos · 2 tool calls · $0.10 · 20s
Agent B: 37 pasos · 18 tool calls · $2.80 · 4 min
Ambos: SUCCESS = 1`}
        </pre>
        <p>Desde una perspectiva de ingeniería son sistemas muy diferentes.</p>
        <p>Por eso considero necesario evaluar al menos dos dimensiones:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`CALIDAD DEL AGENTE
        │
 ┌──────┴──────┐
 Resultado     Proceso
 ¿Lo consiguió? ¿Cómo lo consiguió?
 Correctness   Efficiency
 Completeness  Tool usage / Planning / Reliability`}
        </pre>
        <p>
            La evaluación debe pasar de <strong>&ldquo;¿Lo hizo?&rdquo;</strong> a{" "}
            <strong>
                &ldquo;¿Lo hizo correctamente, de forma segura, eficiente y consistente?&rdquo;
            </strong>
            .
        </p>

        <h2>4. El verdadero bottleneck</h2>
        <p>
            Crear una nueva versión de un agente puede ser relativamente rápido. Evaluarla
            correctamente es mucho más difícil.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Nuevo Agent → Ejecutar → EVAL → ¿Mejoró realmente?
                    ↙ NO              ↘ SÍ
                 Corregir            Deploy
                    ↓
              Nueva versión`}
        </pre>
        <p>
            Si la evaluación es lenta, costosa, subjetiva o poco confiable, todo el ciclo de
            desarrollo se ralentiza.
        </p>
        <p>
            Y existe un problema todavía mayor:{" "}
            <strong>
                si no podemos medir correctamente el progreso, tampoco sabemos con certeza si una
                nueva versión realmente es mejor
            </strong>
            .
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-funnel.png"
            alt="Embudo: Generate, Execute, Observe, Evaluate, Diagnose, Improve AI"
            caption="El embudo resume la tesis: la complejidad se desplaza hacia evaluar y diagnosticar"
        />

        <h2>5. El problema se multiplica con los agentes</h2>
        <p>
            En un modelo tradicional: <code>1 input → 1 output</code>. En un agente: plan, tools,
            resultados, nuevo razonamiento, estado, y así sucesivamente hasta el resultado final.
        </p>
        <p>Una evaluación puede necesitar analizar:</p>
        <ul>
            <li>el resultado final;</li>
            <li>cada acción y llamadas a herramientas;</li>
            <li>argumentos, secuencia de pasos y uso del contexto;</li>
            <li>cumplimiento de restricciones;</li>
            <li>tiempo, costo y errores;</li>
            <li>comportamiento ante situaciones inesperadas.</li>
        </ul>
        <p>
            Por eso la complejidad de la evaluación crece junto con la autonomía del sistema.
            Investigaciones recientes sobre agentes de larga duración muestran precisamente este
            problema: algunas tareas pueden requerir decenas de llamadas a herramientas y grandes
            cantidades de contexto, haciendo que la evaluación manual deje de ser escalable. (
            <a
                href="https://aclanthology.org/2026.acl-long.337/"
                target="_blank"
                rel="noopener noreferrer"
            >
                ACL Anthology — AgencyBench
            </a>
            )
        </p>

        <h2>6. Las diferentes capas de evaluación</h2>
        <p>No considero suficiente tener un único score. Una arquitectura más completa debería analizar diferentes niveles.</p>

        <BlogFigure
            src="/blog/evals-bottleneck-layers.png"
            alt="Capas del sistema de eval: Components, Process, Result, System, Business"
            caption="Capas de evaluación — del componente al valor de negocio"
        />

        <p>
            <strong>Nivel 1 — Componentes:</strong> selección de herramientas, argumentos, retrieval,
            clasificación, generación de código.
        </p>
        <p>
            <strong>Nivel 2 — Proceso:</strong> planificación, secuencia, pasos, uso de tools,
            recuperación ante errores, restricciones.
        </p>
        <p>
            <strong>Nivel 3 — Resultado:</strong> correctness, completeness, requisitos, calidad,
            seguridad.
        </p>
        <p>
            <strong>Nivel 4 — Sistema:</strong> latencia, costo, estabilidad, reproducibilidad,
            escalabilidad.
        </p>
        <p>
            <strong>Nivel 5 — Negocio:</strong> ¿el sistema genera valor real? Un agente
            técnicamente impresionante puede no tener valor empresarial.
        </p>

        <h2>7. El problema del LLM-as-a-Judge</h2>
        <p>Una solución evidente consiste en utilizar otro modelo para evaluar:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Agent → Output → LLM Judge → Score`}
        </pre>
        <p>
            Es útil, pero no resuelve completamente el problema. El evaluador también puede
            equivocarse: sesgos, inconsistencias, dificultad técnica, sensibilidad al wording,
            trazas largas, criterios demasiado subjetivos.
        </p>
        <p>
            Por eso no considero correcto reemplazar evaluación humana por LLM evaluation como si el
            segundo fuera automáticamente objetivo. Lo correcto es construir{" "}
            <strong>grados de evaluación</strong>.
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-graders.png"
            alt="Grados de evaluación: Determinista, LLM Judge, Humana"
            caption="Preferir determinista cuando el criterio es medible; LLM y humano para lo semántico y crítico"
        />

        <p>
            Cuando el criterio puede determinarse de forma determinista, prefiero una evaluación
            determinista (<code>HTTP status == 200</code>, tests passed, file exists, security rule).
            Para aspectos semánticos, un evaluador basado en modelos. Para casos críticos o ambiguos,
            evaluación humana.
        </p>

        <h2>8. Evals y software testing</h2>
        <p>
            Una conclusión importante es que{" "}
            <strong>las evals no sustituyen al testing tradicional</strong>. Son complementarias.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Software Testing          AI Evals
Unit / Integration       Behavior / Reasoning
E2E / Mutation           Tool usage / Quality
Security                 Semantic criteria
            └──────────┬──────────┘
                  AI System`}
        </pre>
        <p>
            Los tests tradicionales responden principalmente:{" "}
            <strong>¿el software funciona según lo especificado?</strong> Las evals agregan:{" "}
            <strong>
                ¿el agente es capaz de llegar correctamente a ese resultado bajo diferentes
                escenarios?
            </strong>
        </p>

        <h2>9. Evals como parte del Loop Engineering</h2>
        <p>
            Esta idea conecta directamente con <strong>Loop Engineering</strong>. Un agente puede
            ejecutar: Observe → Plan → Act → Evaluate → Correct → Repeat.
        </p>
        <p>
            Pero sin una buena evaluación: Act → ¿Está bien? → ??? El agente no tiene una señal
            confiable para decidir si debe continuar, corregirse o terminar.
        </p>
        <blockquote>
            <strong>
                El evaluator es una pieza fundamental del loop, no un componente externo agregado al
                final.
            </strong>
        </blockquote>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GOAL → AGENT → ACTION → ENVIRONMENT → RESULT → EVAL
                              │
                    SUCCESS → STOP
                    FAILURE → REPLAN → AGENT`}
        </pre>
        <p>Esto convierte a la evaluación en parte del mecanismo de control del agente.</p>

        <h2>10. El dataset es tan importante como el evaluator</h2>
        <p>
            Un buen evaluator necesita buenos casos de prueba. No basta con crear 100 preguntas. Es
            necesario construir escenarios que representen realmente el comportamiento esperado:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Normal · Edge · Failure · Adversarial · Regression · Real-world`}
        </pre>
        <p>Además, debería evolucionar:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Production → New failure → Capture case → Add to Eval Dataset
           → Run regression → New Agent Version`}
        </pre>
        <p>Cada fallo real puede convertirse en conocimiento permanente del sistema.</p>

        <h2>11. El verdadero objetivo: Regression Evals</h2>
        <p>Una de las funciones más importantes de las evals es detectar regresiones.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`V1 → 82% · V2 → 87% · V3 → 91% · V4 → 84%

V4 sin desglose: “mejor modelo” → asumimos mejora
V4 con evals:
 Overall 84% · Correctness 93% · Tool usage 79%
 Security 91% · Efficiency 61%`}
        </pre>
        <p>La nueva versión mejoró una dimensión, pero empeoró otra.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Change → Run Evals → Compare → Analyze regressions
      → Improve → Run Evals again`}
        </pre>
        <p>
            La evaluación se convierte así en una especie de{" "}
            <strong>sistema de control de calidad continuo para el comportamiento de la IA</strong>.
        </p>

        <h2>12. De Benchmark a Evaluation System</h2>
        <p>También considero importante diferenciar ambos conceptos.</p>
        <p>
            Un <strong>benchmark</strong> responde: ¿cómo se compara este sistema con otros bajo un
            conjunto determinado de tareas?
        </p>
        <p>
            Un <strong>evaluation system</strong> responde: ¿este sistema está mejorando y
            funcionando correctamente para nuestro caso de uso?
        </p>
        <p>Por eso un benchmark público no necesariamente es suficiente para producción:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Generic benchmark
  + Domain-specific evals
  + Regression suite
  + Production traces
  + Human feedback
  + Business metrics`}
        </pre>
        <p>
            Las investigaciones recientes también señalan una brecha entre buenos resultados en
            benchmarks y la viabilidad real en producción, especialmente cuando se consideran costo,
            seguridad, mantenibilidad e integración con workflows. (
            <a
                href="https://doi.org/10.1007/s10462-026-11571-0"
                target="_blank"
                rel="noopener noreferrer"
            >
                DOI — From benchmarks to deployment
            </a>
            )
        </p>

        <h2>13. La nueva métrica: no solamente accuracy</h2>
        <p>
            Durante mucho tiempo la conversación fue:{" "}
            <strong>¿qué modelo tiene mayor accuracy?</strong> Para agentes, considero que debemos
            ampliar la pregunta.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AGENT SCORE
 Correctness · Reliability · Efficiency
 + Safety · Security · Robustness
 + Maintainability · User satisfaction · Business value`}
        </pre>
        <p>
            Por tanto,{" "}
            <strong>
                un único score global puede ser útil para comparar, pero es insuficiente para
                diagnosticar
            </strong>
            . El verdadero valor está en saber <strong>por qué</strong> un sistema obtuvo determinado
            resultado.
        </p>

        <h2>14. El nuevo ciclo de ingeniería</h2>
        <p>A partir de todo esto, veo una evolución del ciclo tradicional:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Código → Tests → Deploy

hacia:

Specification → Agent → Execution → Evals → Analysis
→ Improvement → Regression Evals → Deploy
→ Production Feedback → New Evals → ↺`}
        </pre>
        <p>Esto conecta varias de las tendencias que he venido estudiando:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Prompt Engineering
    ↓ Context Engineering
    ↓ Specification / SDD
    ↓ Agent Engineering
    ↓ Loop Engineering
    ↓ Evaluation Engineering
    ↓ Continuous Improvement`}
        </pre>
        <blockquote>
            <strong>
                Si puedo construir agentes más rápido de lo que puedo evaluar sus resultados, la
                velocidad de desarrollo deja de ser el principal problema.
            </strong>
        </blockquote>
        <p>El cuello de botella pasa a ser la evaluación.</p>

        <h2>15. Mi conclusión</h2>
        <p>
            Después de analizar la evolución de los sistemas de IA, considero que estamos entrando en
            una etapa en la que <strong>la generación deja de ser el único problema central</strong>.
        </p>
        <p>
            Los modelos son cada vez más capaces de producir código, texto, planes y acciones. El
            desafío comienza a desplazarse hacia otra pregunta:
        </p>
        <blockquote>
            <strong>
                ¿Cómo podemos medir de manera confiable, reproducible y escalable si un sistema
                autónomo está haciendo realmente lo que debería hacer?
            </strong>
        </blockquote>
        <p>
            Por eso considero que las evals deben dejar de verse como una actividad posterior al
            desarrollo. Deben formar parte de la arquitectura.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AI ENGINEERING
 Generation · Execution · Evaluation
              ↓
         Improvement → Loop`}
        </pre>
        <p>Mi principal conclusión es:</p>
        <blockquote>
            <strong>
                En la era de los agentes, construir el sistema puede dejar de ser el principal
                desafío. Demostrar que funciona correctamente puede convertirse en el verdadero
                cuello de botella.
            </strong>
        </blockquote>
        <p>
            Y cuanto más autónomo sea el sistema, más importante será contar con evaluaciones capaces
            de analizar no solamente <strong>qué produjo</strong>, sino también{" "}
            <strong>cómo actuó, por qué falló, cuánto costó y qué valor generó</strong>.
        </p>
        <p>
            Por eso veo la <strong>Evaluation Engineering</strong> como una disciplina cada vez más
            importante dentro de la ingeniería de IA.
        </p>

        <h2>Fuentes principales consultadas</h2>
        <ul>
            <li>
                Anthropic —{" "}
                <em>Demystifying evals for AI agents</em>.{" "}
                <a
                    href="https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    anthropic.com
                </a>
            </li>
            <li>
                <em>A Survey on Evaluation of LLM-based Agents</em> — ACL Findings.{" "}
                <a
                    href="https://aclanthology.org/2026.findings-acl.1330/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ACL Anthology
                </a>
            </li>
            <li>
                <em>AgencyBench: Benchmarking the Frontiers of Autonomous Agents…</em>{" "}
                <a
                    href="https://aclanthology.org/2026.acl-long.337/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ACL Anthology
                </a>
            </li>
            <li>
                <em>From benchmarks to deployment: a comprehensive review of agentic AI evaluation</em>{" "}
                <a
                    href="https://doi.org/10.1007/s10462-026-11571-0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    DOI 10.1007/s10462-026-11571-0
                </a>
            </li>
            <li>
                <em>Holistic Evaluation and Failure Diagnosis of AI Agents</em>{" "}
                <a
                    href="https://arxiv.org/abs/2605.14865"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    arXiv:2605.14865
                </a>
            </li>
        </ul>

        <BlogClosingQuote>
            En la era de los agentes, generar ya no es el único problema central. Demostrar que el
            sistema funciona —de forma confiable, reproducible y escalable— puede ser el verdadero
            cuello de botella.
        </BlogClosingQuote>
    </>
);

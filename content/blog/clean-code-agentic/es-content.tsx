import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const cleanCodeAgenticContentEs = (
    <>
        <p>
            Durante años, una de las ideas más influyentes de la ingeniería de software ha sido{" "}
            <strong>Clean Code</strong>, popularizada por Robert C. Martin (<em>Uncle Bob</em>). Su
            propuesta puso mucho énfasis en escribir código legible, simple, mantenible y fácil de
            modificar.
        </p>
        <p>Sin embargo, el desarrollo de software está entrando en una nueva etapa.</p>
        <p>
            Los modelos de IA ya no solamente completan líneas de código. Hoy pueden analizar
            repositorios, modificar múltiples archivos, ejecutar comandos, escribir pruebas,
            corregir errores y repetir ciclos de implementación de manera autónoma.
        </p>
        <p>Esto me llevó a una pregunta:</p>
        <blockquote>
            <strong>
                Si un agente de IA puede escribir gran parte del código, ¿sigue teniendo sentido
                pensar en Clean Code de la misma manera que antes?
            </strong>
        </blockquote>
        <p>
            Después de revisar las ideas recientes de Robert C. Martin, Martin Fowler, Linus
            Torvalds y Andrej Karpathy, mi conclusión es que{" "}
            <strong>Clean Code no desaparece, pero cambia de contexto</strong>.
        </p>
        <p>
            El principal cambio no consiste en programar para la IA. Consiste en{" "}
            <strong>
                diseñar un entorno donde humanos y agentes puedan producir software confiable
            </strong>
            .
        </p>

        <BlogFigure
            src="/blog/clean-code-agentic-card.png"
            alt="De Clean Code a Agentic Engineering: el nuevo rol del desarrollador con agentes de IA"
            caption="Del código escrito a mano al sistema que orquesta agentes, harness y evidencia"
        />

        <BlogFigure
            src="/blog/clean-code-agentic-loop.png"
            alt="Loop circular: Intent, Context, Agent, Code, Test, Measure, Correct, Repeat"
            caption="Figura 4 — The Agentic Software Engineering Loop (visión del artículo)"
        />

        <h2>1. Del código escrito al código supervisado</h2>
        <p>El modelo tradicional puede representarse así:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`┌─────────────┐
│ Desarrollador
└──────┬──────┘
       │ escribe
       ▼
┌─────────────┐
│    Código   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Code Review │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Tests    │
└─────────────┘`}
        </pre>
        <p>
            El desarrollador era el principal productor de código y el code review era una de las
            principales barreras de calidad.
        </p>
        <p>Con los coding agents aparece otro modelo:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 ┌──────────────────┐
                 │     HUMANO       │
                 │ Reglas / Arquitectura
                 │ Objetivos / Criterios
                 └────────┬─────────┘
                          ▼
                 ┌──────────────────┐
                 │    AI AGENT      │
                 │ Analiza / Implementa
                 │ Ejecuta / Corrige
                 └────────┬─────────┘
                          ▼
              ┌─────────────────────────┐
              │       GAUNTLET          │
              │ Tests · Coverage        │
              │ Mutation · Static       │
              │ Architecture · Security │
              └───────────┬─────────────┘
                          ▼
                     ┌──────────┐
                     │ Evidencia│
                     └──────────┘`}
        </pre>
        <p>
            Aquí aparece un cambio importante:{" "}
            <strong>
                el ingeniero ya no necesariamente escribe la mayor parte del código; diseña y
                supervisa el sistema que produce y valida ese código
            </strong>
            .
        </p>
        <p>
            Martin Fowler describe este enfoque como <strong>Agentic Programming</strong>: humanos
            supervisan agentes que generan código, pero siguen siendo responsables de qué hace el
            software y cómo funciona. También lo diferencia de <em>vibe coding</em>, donde la
            persona prácticamente deja de preocuparse por el código producido. (
            <a
                href="https://martinfowler.com/bliki/AgenticProgramming.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                martinfowler.com
            </a>
            )
        </p>

        <BlogFigure
            src="/blog/clean-code-agentic-gauntlet.png"
            alt="Gauntlet de verificación: Tests, Coverage, Mutation, Security, Architecture, QA, Evidence"
            caption="Figura 2 — The AI Engineering Gauntlet"
        />

        <h2>2. ¿Qué dice Uncle Bob?</h2>
        <p>La posición reciente de Robert C. Martin es probablemente la más provocadora.</p>
        <p>
            En julio de 2026 explicó que su estrategia actual es{" "}
            <strong>no leer el código producido por sus agentes</strong>, porque considera que
            revisar todo manualmente eliminaría buena parte de la ventaja de productividad.
        </p>
        <p>
            En su lugar utiliza restricciones fuertes: unit tests, Gherkin, procedimientos de QA,
            métricas de calidad, mutation testing y cobertura, entre otras. (
            <a
                href="https://www.explainx.ai/blog/uncle-bob-ai-coding-gauntlet-tests-not-reviews-july-2026"
                target="_blank"
                rel="noopener noreferrer"
            >
                explainx.ai
            </a>
            )
        </p>
        <p>La idea puede resumirse así:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Antes:
AI → código → humano revisa código

Nueva estrategia:
AI → Código → Tests / Coverage / Mutation /
              Quality Metrics / Acceptance / QA
           → Evidencia → Humano`}
        </pre>
        <p>
            Esto no significa necesariamente que Uncle Bob haya abandonado Clean Code. De hecho, la{" "}
            <strong>segunda edición de Clean Code fue publicada en 2025</strong>, actualizando y
            ampliando el contenido original. (
            <a
                href="https://www.pearson.com/en-us/subject-catalog/p/clean-code-a-handbook-of-agile-software-craftsmanship-2nd-edition/P200000013239/9780135398579"
                target="_blank"
                rel="noopener noreferrer"
            >
                Pearson
            </a>
            )
        </p>
        <p>
            Lo que está cambiando es <strong>dónde coloca el mecanismo de confianza</strong>.
        </p>
        <p>
            Antes: <em>confío porque un humano leyó el código</em>. Ahora:{" "}
            <em>confío porque el código pasó un conjunto suficientemente fuerte de verificaciones</em>
            .
        </p>

        <h2>3. Entonces, ¿ya no importa Clean Code?</h2>
        <p>
            Mi respuesta es <strong>no</strong>.
        </p>
        <p>
            Creo que sería un error concluir: &ldquo;La IA entiende el código, así que ya no
            necesitamos Clean Code.&rdquo;
        </p>
        <p>La conclusión que considero más sólida es:</p>
        <blockquote>
            <strong>
                Clean Code sigue siendo importante, pero ahora debe funcionar dentro de un sistema
                diseñado para humanos y agentes.
            </strong>
        </blockquote>
        <p>
            Un código con buenos nombres, responsabilidades claras, módulos bien delimitados y
            arquitectura consistente sigue siendo más fácil de modificar. La diferencia es que ahora
            tenemos otro consumidor del código: <strong>el agente</strong>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Clean Code
    │
    ├── Legible para humanos
    ├── Predecible para agentes
    ├── Fácil de modificar
    └── Fácil de verificar`}
        </pre>
        <p>
            Por eso no creo que el objetivo sea escribir &ldquo;código para la IA&rdquo;. El objetivo
            debería ser construir <strong>codebases estructuradas, explícitas y verificables</strong>
            .
        </p>

        <BlogFigure
            src="/blog/clean-code-agentic-comparison.png"
            alt="Comparación Clean Code vs Agentic Engineering: legibilidad humana frente a legibilidad más verificación"
            caption="Figura 3 — Clean Code en la era de los agentes"
        />

        <h2>4. Martin Fowler: Agentic Programming</h2>
        <p>Martin Fowler aporta una distinción especialmente útil.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Vibe Coding
────────────
Prompt → AI genera código → humano casi no revisa

Agentic Programming
────────────────────
Humano define objetivo → Agente implementa
→ Humano supervisa → responsabilidad humana intacta`}
        </pre>
        <p>
            Fowler destaca que el desarrollador está pasando progresivamente de escribir código
            directamente a <strong>dirigir agentes que escriben código</strong>. (
            <a
                href="https://martinfowler.com/bliki/AgenticProgramming.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                martinfowler.com
            </a>
            )
        </p>
        <p>Esto cambia las habilidades que debemos desarrollar.</p>
        <p>
            Antes: lenguaje, diseño, debugging, testing, code review. Ahora se añaden: diseño de
            contexto, definición de restricciones, evaluación de agentes, automatización de
            verificación, arquitectura orientada a agentes, diseño de loops de feedback.
        </p>

        <h2>5. Harness Engineering: el concepto que conecta todo</h2>
        <p>
            Una de las ideas que más sentido me hizo durante este estudio es{" "}
            <strong>Harness Engineering</strong>.
        </p>
        <p>
            Martin Fowler y Birgitta Böckeler describen el <em>harness</em> como el conjunto de
            guías y sensores que rodean al agente para incrementar la confianza en sus resultados y
            permitir trabajar con menor supervisión. (
            <a
                href="https://martinfowler.com/articles/harness-engineering.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                martinfowler.com
            </a>
            )
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 ┌───────────────────┐
                 │     AI AGENT      │
                 └─────────┬─────────┘
              ┌────────────┴────────────┐
          GUÍAS                       SENSORES
      Architecture                 Tests
      Conventions                  Coverage
      Policies                     Static Analysis
      Constraints                  Security`}
        </pre>
        <p>
            Parte del conocimiento que antes estaba <strong>en la cabeza del desarrollador</strong>{" "}
            debe convertirse en <strong>reglas explícitas y automatizadas</strong>.
        </p>
        <blockquote>
            <strong>
                La arquitectura y las buenas prácticas dejan de ser solamente documentación; deben
                convertirse en mecanismos ejecutables.
            </strong>
        </blockquote>

        <h2>6. Linus Torvalds: IA como herramienta, no como autoridad</h2>
        <p>
            Linus Torvalds aporta una perspectiva diferente. Su postura reciente no es anti-IA. Ha
            defendido el uso de IA en el desarrollo y revisión del kernel cuando aporta valor, pero
            también ha criticado el ruido generado por análisis automáticos de baja calidad,
            especialmente reportes duplicados o poco verificados. (
            <a
                href="https://www.businessinsider.com/linux-creator-linus-torvalds-ai-holdouts-fork-off-2026-7"
                target="_blank"
                rel="noopener noreferrer"
            >
                Business Insider
            </a>
            )
        </p>
        <p>La lección que extraigo:</p>
        <blockquote>
            <strong>
                El problema no es utilizar IA; el problema es producir más trabajo para otros sin
                aportar suficiente valor.
            </strong>
        </blockquote>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AI genera 100 hallazgos
        │
        ▼
¿Están verificados?
   ┌────┴────┐
  NO        SÍ
   │         │
Ruido      Valor`}
        </pre>
        <p>
            La productividad de la IA no debería medirse solamente por &ldquo;¿cuánto código
            produjo?&rdquo; Una métrica mucho más útil:{" "}
            <strong>&ldquo;¿cuánto valor verificable produjo?&rdquo;</strong>
        </p>

        <h2>7. Andrej Karpathy y el paso hacia los loops autónomos</h2>
        <p>
            Andrej Karpathy llevó esta idea más lejos con <strong>AutoResearch</strong>. Su
            experimento permite que un agente modifique un programa, ejecute un experimento, mida el
            resultado, conserve los cambios que mejoran el resultado y descarte los que no
            funcionan. El ciclo puede repetirse automáticamente. (
            <a
                href="https://github.com/karpathy/autoresearch"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            )
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Objetivo → Modificar código → Ejecutar → Medir
              │
         Mejoró / Empeoró
              │
         Keep / Revert → Repetir`}
        </pre>
        <p>
            Aquí el agente deja de ser solamente un generador de código y pasa a formar parte de un{" "}
            <strong>sistema de optimización</strong>.
        </p>

        <h2>8. La verdadera evolución: del código al sistema</h2>
        <p>Después de revisar estas ideas, considero que estamos atravesando cuatro etapas:</p>

        <BlogFigure
            src="/blog/clean-code-agentic-evolution.png"
            alt="Evolución: Manual Coding, AI Assistant, Coding Agent, Autonomous Engineering"
            caption="Figura 1 — De programador a orquestador de agentes"
        />

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`1. Código manual
       ↓
2. AI-assisted coding
       ↓
3. Coding agents
       ↓
4. Autonomous engineering loops`}
        </pre>
        <p>
            <strong>Etapa 1 — Código manual:</strong> Diseñar → Programar → Probar → Revisar.
        </p>
        <p>
            <strong>Etapa 2 — AI-assisted coding:</strong> Humano + Copilot / Cursor / ChatGPT.
        </p>
        <p>
            <strong>Etapa 3 — Coding agents:</strong> Issue → Agent → Code → Tests → Fix → PR.
        </p>
        <p>
            <strong>Etapa 4 — Autonomous loops:</strong> Goal → Agent → Change → Execute → Measure →
            Keep/Revert → Repeat.
        </p>
        <p>
            La diferencia fundamental entre estas etapas no es solamente la capacidad del modelo. Es
            la capacidad del <strong>entorno para medir y corregir al modelo</strong>.
        </p>

        <h2>9. El nuevo rol del Senior Developer / Tech Lead</h2>
        <p>Esta evolución cambia especialmente el rol de un desarrollador senior.</p>
        <p>
            Antes, gran parte del valor estaba en: &ldquo;Sé escribir correctamente este
            código.&rdquo; Cada vez más, el valor estará en:{" "}
            <strong>
                &ldquo;Sé diseñar el sistema que permite a un agente producir correctamente este
                software.&rdquo;
            </strong>
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`BUSINESS
   ↓ Requirements
ARCHITECTURE
   ↓
AGENT CONTEXT
   ↓
AI AGENTS
   ↓
HARNESS (Tests · Security · Quality · Architecture)
   ↓
EVIDENCE`}
        </pre>
        <p>
            En mi opinión, este es uno de los cambios más importantes para el perfil{" "}
            <strong>Senior / Tech Lead</strong>.
        </p>

        <h2>10. ¿Qué prácticas considero esenciales?</h2>
        <p>
            Mi conclusión es que una estrategia moderna no debería reemplazar Clean Code por IA.
            Debería combinar:
        </p>
        <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/15 text-left">
                        <th className="py-2 pr-4 font-semibold">Práctica</th>
                        <th className="py-2 font-semibold">Objetivo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Clean Code</td>
                        <td className="py-2">Reducir complejidad y mantener claridad</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">SOLID</td>
                        <td className="py-2">Controlar responsabilidades y dependencias</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Arquitectura explícita</td>
                        <td className="py-2">Evitar decisiones arbitrarias del agente</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Tests + Mutation Testing</td>
                        <td className="py-2">Verificar comportamiento y calidad de tests</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Static / Architecture / Security</td>
                        <td className="py-2">Defectos, estructura y vulnerabilidades</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Acceptance Tests</td>
                        <td className="py-2">Verificar comportamiento de negocio</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Harness Engineering</td>
                        <td className="py-2">Guías y sensores alrededor del agente</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">Feedback Loops</td>
                        <td className="py-2">Que el agente corrija sus propios errores</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`HUMAN → Requirements + Constraints
       → AI AGENT → Implement + Test
       → HARNESS (Quality · Security · Architecture)
       → Evidence → HUMAN DECISION`}
        </pre>

        <h2>11. Mi conclusión</h2>
        <p>
            Después de estudiar las posiciones de estos referentes, mi conclusión es que la pregunta
            correcta no es &ldquo;¿seguirá existiendo Clean Code?&rdquo;.
        </p>
        <p>La pregunta correcta es:</p>
        <blockquote>
            <strong>
                ¿Cómo diseñamos ingeniería de software cuando el código puede ser producido mucho
                más rápido que lo que un humano puede leer?
            </strong>
        </blockquote>
        <p>
            Mi respuesta: el valor se está desplazando. No desaparece la ingeniería de software.{" "}
            <strong>La ingeniería se vuelve más sistémica.</strong>
        </p>
        <p>
            El desarrollador deja progresivamente de ser solamente <strong>programador</strong> y se
            convierte también en{" "}
            <strong>
                diseñador de restricciones, arquitectura, contexto, evaluación y loops de feedback
                para agentes
            </strong>
            .
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Human → Intent → Context + Architecture + Constraints
      → AI Agents → Harness + Tests + Metrics
      → Evidence → Human Decision → Continuous Feedback`}
        </pre>
        <p>
            <strong>Clean Code no desaparece.</strong> Pero deja de ser el único mecanismo de
            confianza.
        </p>
        <p>
            En la era de los agentes, una buena ingeniería de software necesitará combinar:{" "}
            <strong>
                código limpio + contexto claro + arquitectura explícita + agentes + verificación
                automatizada + feedback loops
            </strong>
            .
        </p>
        <p>
            Y probablemente esta sea una de las transformaciones más importantes de nuestra
            profesión desde la aparición de los frameworks y las metodologías ágiles.
        </p>

        <h2>Fuentes principales consultadas</h2>
        <ul>
            <li>
                Robert C. Martin — <em>Clean Code, 2nd Edition</em> (2025).{" "}
                <a
                    href="https://www.pearson.com/en-us/subject-catalog/p/clean-code-a-handbook-of-agile-software-craftsmanship-2nd-edition/P200000013239/9780135398579"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pearson
                </a>
            </li>
            <li>
                Martin Fowler — <em>Agentic Programming</em> (mayo 2026).{" "}
                <a
                    href="https://martinfowler.com/bliki/AgenticProgramming.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    martinfowler.com
                </a>
            </li>
            <li>
                Birgitta Böckeler / Martin Fowler — <em>Harness Engineering for Coding Agent Users</em>{" "}
                (abril 2026).{" "}
                <a
                    href="https://martinfowler.com/articles/harness-engineering.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    martinfowler.com
                </a>
            </li>
            <li>
                Robert C. Martin — declaraciones julio 2026 sobre agentes, constraints y testing.{" "}
                <a
                    href="https://www.explainx.ai/blog/uncle-bob-ai-coding-gauntlet-tests-not-reviews-july-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    explainx.ai
                </a>
            </li>
            <li>
                Linus Torvalds — discusiones 2026 sobre IA en Linux y ruido de reportes automáticos.{" "}
                <a
                    href="https://www.businessinsider.com/linux-creator-linus-torvalds-ai-holdouts-fork-off-2026-7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Business Insider
                </a>
            </li>
            <li>
                Andrej Karpathy — repositorio <em>autoresearch</em> (marzo 2026).{" "}
                <a
                    href="https://github.com/karpathy/autoresearch"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </li>
        </ul>

        <BlogClosingQuote>
            Clean Code no desaparece. En la era de los agentes, la confianza se construye con
            código limpio + contexto + arquitectura + harness + evidencia.
        </BlogClosingQuote>
    </>
);

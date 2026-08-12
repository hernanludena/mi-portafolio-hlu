import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const tokenOptimizationContentEs = (
    <>
        <p>
            Los <strong>AI Coding Agents</strong> realizan múltiples iteraciones durante una tarea:
            leen archivos, ejecutan comandos, analizan resultados, modifican código y vuelven a
            ejecutar herramientas. Cada interacción puede agregar contexto y consumo de tokens.
        </p>
        <p>
            Por eso, optimizar tokens no consiste únicamente en reducir el prompt, sino en
            optimizar todo el flujo.
        </p>

        <BlogFigure
            src="/blog/token-optimization-card.png"
            alt="Token Optimization en AI Coding Agents — compresión, caching, output shaping, model routing y AI gateway"
            caption="Optimizar el flujo completo — no solo el prompt: tool outputs, contexto, respuestas y routing"
        />

        <h2>1. ¿Dónde se consumen los tokens?</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AI Coding Agent
       │
       ├── System Context
       ├── User Prompt
       ├── Repository
       ├── Tool Outputs
       ├── Conversation History
       │
       ▼
      LLM
       │
       ├── Reasoning
       ├── Tool Calls
       └── Response`}
        </pre>

        <BlogFigure
            src="/blog/token-optimization-where-consumed.png"
            alt="Diagrama de consumo de tokens: agente, contexto, repositorio, tool outputs e historial hacia el LLM"
            caption="Mapa de consumo — system, prompt, repo, tool outputs e historial alimentan al LLM"
        />

        <p>Las principales oportunidades de optimización están en:</p>
        <ul>
            <li>
                <strong>Tool Output Compression</strong>
            </li>
            <li>
                <strong>Context Compression</strong>
            </li>
            <li>
                <strong>Caching</strong>
            </li>
            <li>
                <strong>Output Shaping</strong>
            </li>
            <li>
                <strong>Model Routing</strong>
            </li>
        </ul>

        <h2>2. RTK: reducir el output de las herramientas</h2>
        <p>Una parte importante del contexto proviene de comandos como:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`grep
find
git diff
git log
kubectl`}
        </pre>
        <p>
            Por ejemplo, un comando puede devolver cientos o miles de líneas cuando el agente
            solamente necesita una pequeña parte.
        </p>
        <p>RTK introduce una capa entre la herramienta y el agente:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`CLI Command
     │
     ▼
Raw Output
     │
     ▼
RTK
     │
     ▼
Compressed Output
     │
     ▼
AI Agent`}
        </pre>

        <BlogFigure
            src="/blog/token-optimization-rtk-flow.png"
            alt="Flujo RTK: comando CLI, raw output, capa RTK, output comprimido hacia el AI agent"
            caption="RTK como capa intermedia — comprime tool output antes de llegar al agente"
        />

        <p>El objetivo es sencillo:</p>
        <blockquote>
            <strong>Evitar enviar información innecesaria al modelo.</strong>
        </blockquote>
        <p>
            Su efectividad depende del workload. Un agente que ejecuta muchos comandos CLI puede
            beneficiarse considerablemente más que uno que utiliza principalmente herramientas
            nativas de lectura y edición.
        </p>

        <h2>3. Context Compression</h2>
        <p>Otra estrategia consiste en comprimir el contexto antes de enviarlo al modelo.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Large Context
      │
      ▼
Compression
      │
      ▼
Smaller Context
      │
      ▼
     LLM`}
        </pre>
        <p>Esto puede reducir:</p>
        <ul>
            <li>contenido repetido;</li>
            <li>tool outputs;</li>
            <li>historial;</li>
            <li>metadata;</li>
            <li>información poco relevante.</li>
        </ul>
        <p>Pero existe un riesgo:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Too much compression
        ↓
Information lost
        ↓
Additional tool calls
        ↓
Additional tokens`}
        </pre>

        <BlogFigure
            src="/blog/token-optimization-compression-tradeoff.png"
            alt="Trade-off de context compression: ruta saludable vs sobre-compresión que genera más tool calls"
            caption="Trade-off — comprimir ayuda; sobre-comprimir puede costar más tokens en reintentos"
        />

        <p>
            Por eso, <strong>la reducción de tokens debe medirse junto con la calidad de las
            tareas</strong>.
        </p>

        <h2>4. Output Shaping</h2>
        <p>Los agentes también pueden generar texto innecesario:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`I'll now analyze the file...
I've identified the issue...
Let me proceed with...`}
        </pre>
        <p>Output shaping intenta convertirlo en:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Found the issue.

Fixing validation logic.

Running tests.`}
        </pre>
        <p>
            Un benchmark reportó aproximadamente <strong>36.7% menos output tokens</strong>{" "}
            utilizando este enfoque.
        </p>
        <p>
            La ventaja es que actúa directamente sobre las respuestas generadas por el agente.
        </p>

        <h2>5. ¿Qué ocurre con Caveman?</h2>
        <p>
            El enfoque Caveman utiliza instrucciones adicionales para hacer que el agente responda
            de forma extremadamente concisa.
        </p>
        <p>La hipótesis es:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Less verbosity
      ↓
Less output tokens
      ↓
Lower cost`}
        </pre>
        <p>
            Sin embargo, los resultados experimentales muestran que el ahorro puede ser mucho menor
            que el anunciado inicialmente.
        </p>
        <p>
            Además, introducir otra instrucción de reducción de verbosidad puede generar conflictos
            cuando ya existe <strong>Output Shaping</strong>.
        </p>
        <p>Por eso:</p>
        <blockquote>
            <strong>
                Más instrucciones de optimización no necesariamente producen más ahorro.
            </strong>
        </blockquote>

        <h2>6. El problema de medir solamente tokens</h2>
        <p>Supongamos:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Baseline
100K tokens
1 tarea completada`}
        </pre>
        <p>Una optimización podría reducir el consumo:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`70K tokens`}
        </pre>
        <p>Pero si la compresión provoca que el agente necesite otra iteración:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`70K + 50K = 120K`}
        </pre>
        <p>el sistema terminó utilizando más tokens.</p>
        <p>Por eso una métrica más útil es:</p>
        <h3>Cost per Successful Engineering Task</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Total AI Cost
────────────────────────
Successful Tasks`}
        </pre>
        <p>Esto permite comparar realmente las estrategias.</p>

        <BlogFigure
            src="/blog/token-optimization-cost-metric.png"
            alt="Métrica Cost per Successful Task como KPI principal de eficiencia de AI coding agents"
            caption="KPI real — costo total dividido por tareas exitosas, no solo tokens ahorrados"
        />

        <h2>7. Métricas recomendadas</h2>
        <p>Un benchmark de AI Coding Agents debería medir:</p>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10 text-left">
                        <th className="py-2 pr-4 font-semibold">Métrica</th>
                        <th className="py-2 font-semibold">Objetivo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Input tokens</td>
                        <td className="py-2">Medir contexto enviado</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Output tokens</td>
                        <td className="py-2">Medir respuesta generada</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Total tokens</td>
                        <td className="py-2">Consumo total</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Cost</td>
                        <td className="py-2">Impacto financiero</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Tool calls</td>
                        <td className="py-2">Complejidad del workflow</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Turns</td>
                        <td className="py-2">Número de iteraciones</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Latency</td>
                        <td className="py-2">Impacto operacional</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Task success</td>
                        <td className="py-2">Calidad</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Tests passed</td>
                        <td className="py-2">Correctitud</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">Cost / successful task</td>
                        <td className="py-2">Eficiencia real</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>La métrica principal debería ser:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`              AI Cost
                 │
                 ▼
       Successful Tasks
                 │
                 ▼
      Cost / Successful Task`}
        </pre>

        <h2>8. AI Gateway</h2>
        <p>
            En una organización, estas optimizaciones pueden centralizarse mediante un{" "}
            <strong>AI Gateway</strong>:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Developers
    │
    ▼
AI Coding Agents
    │
    ▼
AI Gateway
    │
    ├── Compression
    ├── Caching
    ├── Model Routing
    ├── Observability
    ├── Cost Control
    └── Policies
    │
    ▼
LLM Providers`}
        </pre>

        <BlogFigure
            src="/blog/token-optimization-ai-gateway.png"
            alt="Arquitectura AI Gateway entre agentes y providers con compression, caching, routing y políticas"
            caption="AI Gateway — centraliza optimización, políticas, costo y métricas a nivel organización"
        />

        <p>
            Esto evita que cada desarrollador tenga que implementar y mantener sus propias
            estrategias de optimización.
        </p>
        <p>Además permite obtener métricas centralizadas:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Developer
    ↓
Agent
    ↓
AI Gateway
    ↓
Model
    ↓
Metrics
 ├── Tokens
 ├── Cost
 ├── Latency
 └── Success Rate`}
        </pre>

        <h2>9. Model Routing</h2>
        <p>Otra optimización importante es utilizar diferentes modelos según la complejidad:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Simple task
     ↓
Low-cost model

Medium task
     ↓
Medium model

Complex reasoning
     ↓
High-reasoning model`}
        </pre>

        <BlogFigure
            src="/blog/token-optimization-model-routing.png"
            alt="Model routing: tarea simple a modelo barato, media a medio, razonamiento complejo a modelo high-reasoning"
            caption="Routing por complejidad — no toda tarea necesita el modelo más caro"
        />

        <p>No todas las tareas necesitan el modelo más costoso.</p>
        <p>
            Esto puede generar un impacto mayor que optimizar pequeños porcentajes de tokens.
        </p>

        <h2>10. Metodología recomendada</h2>
        <p>Antes de incorporar cualquier herramienta de optimización:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Baseline
   ↓
Measure
   ↓
Enable optimization
   ↓
A/B Test
   ↓
Measure
   ↓
Compare
   ↓
Keep / Remove`}
        </pre>
        <p>El benchmark debe mantener constantes:</p>
        <ul>
            <li>modelo;</li>
            <li>repositorio;</li>
            <li>tarea;</li>
            <li>prompt;</li>
            <li>configuración.</li>
        </ul>
        <p>Y cambiar solamente la optimización evaluada.</p>

        <h2>11. Conclusión</h2>
        <p>La optimización de AI Coding Agents no debería perseguir simplemente:</p>
        <blockquote>
            <strong>&ldquo;usar menos tokens&rdquo;.</strong>
        </blockquote>
        <p>El objetivo debería ser:</p>
        <blockquote>
            <strong>
                Completar tareas de ingeniería exitosamente con el menor costo posible.
            </strong>
        </blockquote>
        <p>Por eso, las estrategias deben evaluarse de forma integral:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Token Reduction
       +
Cost Reduction
       +
Task Success
       +
Quality
       +
Latency
       ↓
Engineering ROI`}
        </pre>

        <h3>Recomendación</h3>
        <p>
            <strong>RTK:</strong> vale la pena probarlo si el workflow utiliza intensivamente CLI y
            grandes outputs.
        </p>
        <p>
            <strong>Caveman:</strong> no lo priorizaría frente a técnicas más estructurales como
            tool-output compression, caching, context management y model routing.
        </p>
        <p>
            <strong>AI Gateway:</strong> es la arquitectura más interesante para centralizar estas
            optimizaciones y medir su impacto a nivel organizacional.
        </p>
        <p>La pregunta definitiva no debería ser:</p>
        <blockquote>
            <strong>¿Cuántos tokens ahorramos?</strong>
        </blockquote>
        <p>sino:</p>
        <blockquote>
            <strong>
                ¿Cuánto cuesta completar exitosamente una tarea de ingeniería con AI?
            </strong>
        </blockquote>

        <BlogClosingQuote>
            Menos tokens no basta. El KPI es cost per successful engineering task — y el gateway
            es donde se mide.
        </BlogClosingQuote>
    </>
);

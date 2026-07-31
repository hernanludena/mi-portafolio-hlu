import BlogFigure from "@/components/blog-figure";

export const narrativeGamesDetailEs = (
    <>
        <p>
            Monorepo de juegos narrativos impulsados por <strong>LLM</strong> vía{" "}
            <strong>OpenRouter</strong>. Cada juego tiene historia, mecánicas y tema propios, con
            autenticación JWT, PostgreSQL y memoria de contexto para continuidad sin saturar tokens.
        </p>

        <h2>Arquitectura</h2>
        <p>Dos juegos independientes bajo <code>games/</code>:</p>
        <ul>
            <li>
                <strong>Narrative Classic:</strong> Python FastAPI + React/Ionic — aventura por
                decisiones ramificadas (fantasía/terror).
            </li>
            <li>
                <strong>Apocalypse Survivor:</strong> NestJS + React/Vite — supervivencia
                post-apocalíptica con gestión de recursos.
            </li>
        </ul>
        <p>
            Ambos comparten patrón: Frontend React → REST → Narrative Service → LLM Provider
            (OpenRouter) → Repositories → PostgreSQL.
        </p>

        <h2>Características clave</h2>
        <ul>
            <li>
                Cadena de <strong>fallback de 4 modelos</strong> (DeepSeek → Qwen → Llama → Claude)
                ante timeout o fallo.
            </li>
            <li>
                Prompts en JSON puro: narrativa + opciones + milestones / interacción NPC.
            </li>
            <li>
                Contexto persistente: <code>llm_memory</code>, <code>world_rules</code>, decisiones
                previas.
            </li>
            <li>Auth con registro/login (bcrypt + JWT) y rutas protegidas.</li>
            <li>Docker Compose por juego — Postgres + backend (+ frontend según setup).</li>
        </ul>

        <h2>Apocalypse Survivor</h2>
        <p>
            Supervivencia con recursos reales (comida, agua, combustible, medicina), NPCs dinámicos
            con memoria, hitos dinámicos y finales según moral + recursos. UI negra con verde
            terminal.
        </p>
        <div className="blog-figure-grid">
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-apocalypse-welcome.png"
                alt="Apocalypse Survivor — pantalla de bienvenida terminal"
                caption="Welcome — estética terminal/cyberpunk"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-apocalypse-register.png"
                alt="Apocalypse Survivor — registro de sobreviviente"
                caption="Registro — survivor name y meta"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-apocalypse-status.png"
                alt="Apocalypse Survivor — salud, ánimo y recursos"
                caption="Status — health, morale y recursos"
            />
        </div>

        <h2>Narrative Classic</h2>
        <p>
            Crónicas con branching libre, milestones predefinidos, NPCs estáticos y recursos
            genéricos (oro, energía). Tema medieval/fantasía; ejemplo de trama: terror / slasher en
            el Bosque Negro.
        </p>
        <div className="blog-figure-grid">
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-classic-welcome.png"
                alt="Crónicas Clásicas — pantalla de bienvenida"
                caption="Welcome — continuar o forjar héroe"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-classic-scene.png"
                alt="Crónicas Clásicas — escena en curso con opción de decisión"
                caption="Escena — narrativa LLM + elección"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-classic-sheet.png"
                alt="Crónicas Clásicas — ficha del héroe y hitos"
                caption="Ficha — atributos, meta e hitos"
            />
        </div>

        <h2>Cómo ejecutarlo</h2>
        <p>
            <strong>Apocalypse Survivor</strong> (recomendado):
        </p>
        <ol>
            <li>
                <code>cd games/apocalypse-survivor</code> y copiar{" "}
                <code>.env.example</code> → <code>.env</code> (backend y frontend).
            </li>
            <li>
                Setear <code>OPENROUTER_API_KEY</code> en backend.
            </li>
            <li>
                <code>docker-compose up</code> — frontend <code>:5173</code>, backend{" "}
                <code>:3000</code>.
            </li>
        </ol>
        <p>
            <strong>Narrative Classic:</strong> venv + <code>pip install</code> + Postgres vía
            Docker + <code>uvicorn</code>; frontend Ionic con <code>npm run dev</code>.
        </p>

        <p>
            Docs en el repo: <code>docs/ARCHITECTURE.md</code>, <code>LLM-STRATEGY.md</code>,{" "}
            <code>SETUP.md</code> y <code>QUICK_START.md</code>.
        </p>
    </>
);

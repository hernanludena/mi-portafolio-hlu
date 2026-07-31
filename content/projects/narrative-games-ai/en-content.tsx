import BlogFigure from "@/components/blog-figure";

export const narrativeGamesDetailEn = (
    <>
        <p>
            Monorepo of narrative games powered by <strong>LLMs</strong> via{" "}
            <strong>OpenRouter</strong>. Each game has its own story, mechanics, and theme, with JWT
            auth, PostgreSQL, and persistent context memory for continuity without blowing the token
            budget.
        </p>

        <h2>Architecture</h2>
        <p>Two independent games under <code>games/</code>:</p>
        <ul>
            <li>
                <strong>Narrative Classic:</strong> Python FastAPI + React/Ionic — branching-choice
                adventure (fantasy/horror).
            </li>
            <li>
                <strong>Apocalypse Survivor:</strong> NestJS + React/Vite — post-apocalyptic survival
                with resource management.
            </li>
        </ul>
        <p>
            Shared pattern: React frontend → REST → Narrative Service → LLM Provider (OpenRouter) →
            Repositories → PostgreSQL.
        </p>

        <h2>Key features</h2>
        <ul>
            <li>
                <strong>4-model fallback chain</strong> (DeepSeek → Qwen → Llama → Claude) on timeout
                or failure.
            </li>
            <li>Pure JSON prompts: narrative + choices + milestones / NPC interaction.</li>
            <li>
                Persistent context: <code>llm_memory</code>, <code>world_rules</code>, prior
                decisions.
            </li>
            <li>Register/login (bcrypt + JWT) and protected routes.</li>
            <li>Per-game Docker Compose — Postgres + backend (+ frontend depending on setup).</li>
        </ul>

        <h2>Apocalypse Survivor</h2>
        <p>
            Survival with realistic resources (food, water, fuel, medicine), dynamic NPCs with
            memory, dynamic milestones, and endings driven by morals + resources. Black UI with
            terminal green.
        </p>
        <div className="blog-figure-grid">
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-apocalypse-welcome.png"
                alt="Apocalypse Survivor — terminal-style welcome screen"
                caption="Welcome — terminal/cyberpunk theme"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-apocalypse-register.png"
                alt="Apocalypse Survivor — survivor registration"
                caption="Register — survivor name and goal"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-apocalypse-status.png"
                alt="Apocalypse Survivor — health, morale, and resources"
                caption="Status — health, morale, and resources"
            />
        </div>

        <h2>Narrative Classic</h2>
        <p>
            Free-branching chronicles, predefined milestones, static NPCs, and generic resources
            (gold, energy). Medieval/fantasy theme; sample plot: horror/slasher in the Black Forest.
        </p>
        <div className="blog-figure-grid">
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-classic-welcome.png"
                alt="Crónicas Clásicas — welcome screen"
                caption="Welcome — continue or forge a hero"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-classic-scene.png"
                alt="Crónicas Clásicas — scene in progress with a choice"
                caption="Scene — LLM narrative + choice"
            />
            <BlogFigure
                size="phone"
                src="/projects/narrative-games-classic-sheet.png"
                alt="Crónicas Clásicas — hero sheet and milestones"
                caption="Sheet — attributes, goal, and milestones"
            />
        </div>

        <h2>How to run</h2>
        <p>
            <strong>Apocalypse Survivor</strong> (recommended):
        </p>
        <ol>
            <li>
                <code>cd games/apocalypse-survivor</code> and copy <code>.env.example</code> →{" "}
                <code>.env</code> (backend and frontend).
            </li>
            <li>
                Set <code>OPENROUTER_API_KEY</code> in backend.
            </li>
            <li>
                <code>docker-compose up</code> — frontend <code>:5173</code>, backend{" "}
                <code>:3000</code>.
            </li>
        </ol>
        <p>
            <strong>Narrative Classic:</strong> venv + <code>pip install</code> + Postgres via Docker
            + <code>uvicorn</code>; Ionic frontend with <code>npm run dev</code>.
        </p>

        <p>
            Docs in the repo: <code>docs/ARCHITECTURE.md</code>, <code>LLM-STRATEGY.md</code>,{" "}
            <code>SETUP.md</code>, and <code>QUICK_START.md</code>.
        </p>
    </>
);

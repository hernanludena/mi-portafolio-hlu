import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const cleanCodeAgenticContentEn = (
    <>
        <p>
            For years, one of the most influential ideas in software engineering has been{" "}
            <strong>Clean Code</strong>, popularized by Robert C. Martin (<em>Uncle Bob</em>). The
            proposal put strong emphasis on writing readable, simple, maintainable code that is easy
            to change.
        </p>
        <p>Software development is entering a new stage.</p>
        <p>
            AI models no longer only complete lines of code. Today they can analyze repositories,
            edit multiple files, run commands, write tests, fix errors and repeat implementation
            cycles with growing autonomy.
        </p>
        <p>That led me to a question:</p>
        <blockquote>
            <strong>
                If an AI agent can write a large share of the code, does Clean Code still matter in
                the same way as before?
            </strong>
        </blockquote>
        <p>
            After reviewing recent ideas from Robert C. Martin, Martin Fowler, Linus Torvalds and
            Andrej Karpathy, my conclusion is that{" "}
            <strong>Clean Code does not disappear — its context changes</strong>.
        </p>
        <p>
            The main shift is not &ldquo;programming for the AI.&rdquo; It is{" "}
            <strong>
                designing an environment where humans and agents can produce reliable software
            </strong>
            .
        </p>

        <BlogFigure
            src="/blog/clean-code-agentic-card.png"
            alt="From Clean Code to Agentic Engineering: the developer's new role with AI agents"
            caption="From hand-written code to a system that orchestrates agents, harness and evidence"
        />

        <BlogFigure
            src="/blog/clean-code-agentic-loop.png"
            alt="Circular loop: Intent, Context, Agent, Code, Test, Measure, Correct, Repeat"
            caption="Figure 4 — The Agentic Software Engineering Loop (article vision)"
        />

        <h2>1. From written code to supervised code</h2>
        <p>The traditional model looked like this:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`┌─────────────┐
│  Developer  │
└──────┬──────┘
       │ writes
       ▼
┌─────────────┐
│    Code     │
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
            The developer was the main code producer, and code review was one of the primary quality
            gates.
        </p>
        <p>With coding agents another model appears:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                 ┌──────────────────┐
                 │      HUMAN       │
                 │ Rules / Architecture
                 │ Goals / Criteria
                 └────────┬─────────┘
                          ▼
                 ┌──────────────────┐
                 │    AI AGENT      │
                 │ Analyze / Implement
                 │ Execute / Fix
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
                     │ Evidence │
                     └──────────┘`}
        </pre>
        <p>
            An important shift:{" "}
            <strong>
                the engineer no longer necessarily writes most of the code; they design and supervise
                the system that produces and validates that code
            </strong>
            .
        </p>
        <p>
            Martin Fowler describes this as <strong>Agentic Programming</strong>: humans supervise
            agents that generate code, but remain responsible for what the software does and how it
            works. He also distinguishes it from <em>vibe coding</em>, where the person largely stops
            caring about the produced code. (
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
            alt="Verification gauntlet: Tests, Coverage, Mutation, Security, Architecture, QA, Evidence"
            caption="Figure 2 — The AI Engineering Gauntlet"
        />

        <h2>2. What does Uncle Bob say?</h2>
        <p>Robert C. Martin&apos;s recent position is probably the most provocative.</p>
        <p>
            In July 2026 he explained that his current strategy is{" "}
            <strong>not reading the code produced by his agents</strong>, because reviewing
            everything manually would erase much of the productivity advantage.
        </p>
        <p>
            Instead he relies on strong constraints: unit tests, Gherkin, QA procedures, quality
            metrics, mutation testing and coverage, among others. (
            <a
                href="https://www.explainx.ai/blog/uncle-bob-ai-coding-gauntlet-tests-not-reviews-july-2026"
                target="_blank"
                rel="noopener noreferrer"
            >
                explainx.ai
            </a>
            )
        </p>
        <p>The idea can be summarized as:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Before:
AI → code → human reviews code

New strategy:
AI → Code → Tests / Coverage / Mutation /
            Quality Metrics / Acceptance / QA
         → Evidence → Human`}
        </pre>
        <p>
            That does not necessarily mean Uncle Bob abandoned Clean Code. In fact, the{" "}
            <strong>second edition of Clean Code was published in 2025</strong>, updating and
            expanding the original. (
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
            What is changing is <strong>where trust is placed</strong>.
        </p>
        <p>
            Before: <em>I trust because a human read the code</em>. Now:{" "}
            <em>I trust because the code passed a sufficiently strong set of checks</em>.
        </p>

        <h2>3. So Clean Code no longer matters?</h2>
        <p>
            My answer is <strong>no</strong>.
        </p>
        <p>
            It would be a mistake to conclude: &ldquo;AI understands code, so we no longer need
            Clean Code.&rdquo;
        </p>
        <p>The stronger conclusion is:</p>
        <blockquote>
            <strong>
                Clean Code still matters, but it must now work inside a system designed for humans
                and agents.
            </strong>
        </blockquote>
        <p>
            Code with good names, clear responsibilities, well-bounded modules and consistent
            architecture is still easier to change. The difference is another consumer of the code:{" "}
            <strong>the agent</strong>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Clean Code
    │
    ├── Readable for humans
    ├── Predictable for agents
    ├── Easy to modify
    └── Easy to verify`}
        </pre>
        <p>
            So the goal is not writing &ldquo;code for the AI.&rdquo; The goal should be building{" "}
            <strong>structured, explicit, verifiable codebases</strong>.
        </p>

        <BlogFigure
            src="/blog/clean-code-agentic-comparison.png"
            alt="Comparison Clean Code vs Agentic Engineering: human readability vs readability plus verification"
            caption="Figure 3 — Clean Code in the age of agents"
        />

        <h2>4. Martin Fowler: Agentic Programming</h2>
        <p>Martin Fowler offers an especially useful distinction.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Vibe Coding
────────────
Prompt → AI generates code → human barely reviews

Agentic Programming
────────────────────
Human sets goal → Agent implements
→ Human supervises → human responsibility remains`}
        </pre>
        <p>
            Fowler notes that developers are progressively moving from writing code directly to{" "}
            <strong>directing agents that write code</strong>. (
            <a
                href="https://martinfowler.com/bliki/AgenticProgramming.html"
                target="_blank"
                rel="noopener noreferrer"
            >
                martinfowler.com
            </a>
            )
        </p>
        <p>That changes the skills we need.</p>
        <p>
            Before: language, design, debugging, testing, code review. Now also: context design,
            constraint definition, agent evaluation, verification automation, agent-oriented
            architecture, feedback-loop design.
        </p>

        <h2>5. Harness Engineering: the concept that connects everything</h2>
        <p>
            One of the ideas that made the most sense in this study is{" "}
            <strong>Harness Engineering</strong>.
        </p>
        <p>
            Martin Fowler and Birgitta Böckeler describe the <em>harness</em> as the set of guides
            and sensors around the agent that increase confidence in results and allow working with
            less supervision. (
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
          GUIDES                      SENSORS
      Architecture                 Tests
      Conventions                  Coverage
      Policies                     Static Analysis
      Constraints                  Security`}
        </pre>
        <p>
            Knowledge that used to live <strong>in the developer&apos;s head</strong> must become{" "}
            <strong>explicit, automated rules</strong>.
        </p>
        <blockquote>
            <strong>
                Architecture and good practices stop being documentation only; they must become
                executable mechanisms.
            </strong>
        </blockquote>

        <h2>6. Linus Torvalds: AI as a tool, not as an authority</h2>
        <p>
            Linus Torvalds brings a different angle. His recent stance is not anti-AI. He has
            defended AI use in kernel development and review when it adds value, while criticizing
            noise from low-quality automated analysis — especially duplicate or poorly verified
            reports. (
            <a
                href="https://www.businessinsider.com/linux-creator-linus-torvalds-ai-holdouts-fork-off-2026-7"
                target="_blank"
                rel="noopener noreferrer"
            >
                Business Insider
            </a>
            )
        </p>
        <p>The lesson I take:</p>
        <blockquote>
            <strong>
                The problem is not using AI; the problem is creating more work for others without
                enough value.
            </strong>
        </blockquote>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AI generates 100 findings
        │
        ▼
Are they verified?
   ┌────┴────┐
  NO        YES
   │         │
Noise      Value`}
        </pre>
        <p>
            AI productivity should not be measured only by &ldquo;how much code did it produce?&rdquo;
            A better metric: <strong>&ldquo;how much verifiable value did it produce?&rdquo;</strong>
        </p>

        <h2>7. Andrej Karpathy and the move toward autonomous loops</h2>
        <p>
            Andrej Karpathy pushed this further with <strong>AutoResearch</strong>. The experiment
            lets an agent modify a program, run an experiment, measure the result, keep improvements
            and discard failures. The cycle can repeat automatically. (
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
            {`Goal → Modify code → Execute → Measure
              │
         Improved / Worse
              │
         Keep / Revert → Repeat`}
        </pre>
        <p>
            Here the agent stops being only a code generator and becomes part of an{" "}
            <strong>optimization system</strong>.
        </p>

        <h2>8. The real evolution: from code to system</h2>
        <p>After reviewing these ideas, I see four stages:</p>

        <BlogFigure
            src="/blog/clean-code-agentic-evolution.png"
            alt="Evolution: Manual Coding, AI Assistant, Coding Agent, Autonomous Engineering"
            caption="Figure 1 — From programmer to agent orchestrator"
        />

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`1. Manual coding
       ↓
2. AI-assisted coding
       ↓
3. Coding agents
       ↓
4. Autonomous engineering loops`}
        </pre>
        <p>
            <strong>Stage 1 — Manual coding:</strong> Design → Program → Test → Review.
        </p>
        <p>
            <strong>Stage 2 — AI-assisted coding:</strong> Human + Copilot / Cursor / ChatGPT.
        </p>
        <p>
            <strong>Stage 3 — Coding agents:</strong> Issue → Agent → Code → Tests → Fix → PR.
        </p>
        <p>
            <strong>Stage 4 — Autonomous loops:</strong> Goal → Agent → Change → Execute → Measure →
            Keep/Revert → Repeat.
        </p>
        <p>
            The fundamental difference across stages is not only model capability. It is the{" "}
            <strong>environment&apos;s ability to measure and correct the model</strong>.
        </p>

        <h2>9. The new Senior Developer / Tech Lead role</h2>
        <p>This evolution especially changes the senior developer role.</p>
        <p>
            Before, much of the value was: &ldquo;I know how to write this code correctly.&rdquo;
            Increasingly the value is:{" "}
            <strong>
                &ldquo;I know how to design the system that lets an agent produce this software
                correctly.&rdquo;
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
            In my view, this is one of the most important shifts for the{" "}
            <strong>Senior / Tech Lead</strong> profile.
        </p>

        <h2>10. Which practices do I consider essential?</h2>
        <p>
            My conclusion: a modern strategy should not replace Clean Code with AI. It should
            combine:
        </p>
        <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/15 text-left">
                        <th className="py-2 pr-4 font-semibold">Practice</th>
                        <th className="py-2 font-semibold">Goal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Clean Code</td>
                        <td className="py-2">Reduce complexity and keep clarity</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">SOLID</td>
                        <td className="py-2">Control responsibilities and dependencies</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Explicit architecture</td>
                        <td className="py-2">Avoid arbitrary agent decisions</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Tests + Mutation Testing</td>
                        <td className="py-2">Verify behavior and test quality</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Static / Architecture / Security</td>
                        <td className="py-2">Defects, structure and vulnerabilities</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Acceptance Tests</td>
                        <td className="py-2">Verify business behavior</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/10">
                        <td className="py-2 pr-4">Harness Engineering</td>
                        <td className="py-2">Guides and sensors around the agent</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">Feedback Loops</td>
                        <td className="py-2">Let the agent correct its own mistakes</td>
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

        <h2>11. My conclusion</h2>
        <p>
            After studying these positions, my conclusion is that the right question is not
            &ldquo;Will Clean Code still exist?&rdquo;
        </p>
        <p>The right question is:</p>
        <blockquote>
            <strong>
                How do we design software engineering when code can be produced much faster than a
                human can read it?
            </strong>
        </blockquote>
        <p>
            My answer: value is shifting. Software engineering does not disappear.{" "}
            <strong>Engineering becomes more systemic.</strong>
        </p>
        <p>
            The developer gradually stops being only a <strong>programmer</strong> and also becomes
            a{" "}
            <strong>
                designer of constraints, architecture, context, evaluation and feedback loops for
                agents
            </strong>
            .
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Human → Intent → Context + Architecture + Constraints
      → AI Agents → Harness + Tests + Metrics
      → Evidence → Human Decision → Continuous Feedback`}
        </pre>
        <p>
            <strong>Clean Code does not disappear.</strong> But it stops being the only trust
            mechanism.
        </p>
        <p>
            In the age of agents, good software engineering will need to combine:{" "}
            <strong>
                clean code + clear context + explicit architecture + agents + automated verification
                + feedback loops
            </strong>
            .
        </p>
        <p>
            And this may be one of the most important transformations of our profession since
            frameworks and agile methodologies appeared.
        </p>

        <h2>Main sources consulted</h2>
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
                Martin Fowler — <em>Agentic Programming</em> (May 2026).{" "}
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
                (April 2026).{" "}
                <a
                    href="https://martinfowler.com/articles/harness-engineering.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    martinfowler.com
                </a>
            </li>
            <li>
                Robert C. Martin — July 2026 remarks on agents, constraints and testing.{" "}
                <a
                    href="https://www.explainx.ai/blog/uncle-bob-ai-coding-gauntlet-tests-not-reviews-july-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    explainx.ai
                </a>
            </li>
            <li>
                Linus Torvalds — 2026 discussions on AI in Linux and automated-report noise.{" "}
                <a
                    href="https://www.businessinsider.com/linux-creator-linus-torvalds-ai-holdouts-fork-off-2026-7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Business Insider
                </a>
            </li>
            <li>
                Andrej Karpathy — <em>autoresearch</em> repo (March 2026).{" "}
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
            Clean Code does not disappear. In the age of agents, trust is built with clean code +
            context + architecture + harness + evidence.
        </BlogClosingQuote>
    </>
);

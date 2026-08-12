import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const evalsBottleneckContentEn = (
    <>
        <p>
            For the last few years, much of AI progress focused on improving models&apos; ability to{" "}
            <strong>generate</strong>: better answers, more precise code, deeper reasoning, and
            stronger instruction following.
        </p>
        <p>With agentic systems, the problem is shifting.</p>
        <p>
            An agent no longer only answers a question. It can analyze a goal, plan, use tools, change
            state, run code, call external systems, and repeat until it tries to reach an outcome.
        </p>
        <p>That raises a harder question:</p>
        <blockquote>
            <strong>How do we know the agent actually did the job well?</strong>
        </blockquote>
        <p>
            My conclusion: in this new stage,{" "}
            <strong>generation capability is advancing faster than our ability to evaluate what is generated</strong>
            .
        </p>
        <p>
            That is why I see <em>evals</em> — systematic evaluations of AI systems — becoming{" "}
            <strong>
                one of the main bottlenecks for building reliable agents at scale
            </strong>
            . Not a universal law: a thesis about where engineering friction concentrates today.
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-card.png"
            alt="Evals: the new bottleneck of AI engineering"
            caption="Generation outpaces evaluation — and agents widen the gap"
        />

        <BlogFigure
            src="/blog/evals-bottleneck-stages.png"
            alt="From generation to evaluation: prompt/LLM stage vs agent with tools and feedback loop"
            caption="Main figure — From Generation to Evaluation Bottleneck"
        />

        <h2>1. From model to system</h2>
        <p>In a traditional scenario we can think:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input → LLM → Output → Evaluation`}
        </pre>
        <p>
            Evaluation can be relatively simple: compare the answer with an expected response.
        </p>
        <p>An agent introduces many more variables:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Goal → Agent → Planning
  → Tool / API + Database
  → Result / State → Next step → ...
  → Outcome → EVAL`}
        </pre>
        <p>
            The final result no longer depends only on the model. It depends on the model, context,
            instructions, tools, state, environment, number of steps, and decisions during execution.
        </p>
        <p>
            Therefore:{" "}
            <strong>
                evaluating an agent is not simply evaluating an answer. It is evaluating behavior.
            </strong>
        </p>

        <h2>2. What is an Eval, really?</h2>
        <p>
            An <em>eval</em> can be understood as a test designed to answer a concrete question about
            an AI system&apos;s behavior.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Test case → AI system → Execution → Result → Grader → Score`}
        </pre>
        <p>An evaluation needs at least:</p>
        <ul>
            <li>a goal;</li>
            <li>a test scenario;</li>
            <li>an expected result or success criteria;</li>
            <li>a way to measure the result;</li>
            <li>and, when needed, an explanation of the failure.</li>
        </ul>
        <p>For example, for a coding agent:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Task: "Implement JWT authentication"
Agent → Read code → Edit → Tests → Fix
Eval:
 ├── Does it compile?
 ├── Do tests pass?
 ├── Are requirements met?
 ├── Did it introduce vulnerabilities?
 └── Did it touch unnecessary files?`}
        </pre>
        <p>
            An agent might produce code that <strong>works</strong>, but is unnecessarily complex,
            burns too many resources, changes components it should not touch, introduces a
            vulnerability, misuses tools, or needs ten times more steps than another solution.
        </p>
        <p>
            That is why{" "}
            <strong>task completion is not enough to judge agent quality</strong>.
        </p>

        <h2>3. The final-result problem</h2>
        <p>One of the most common mistakes is evaluating only the outcome.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input → Agent → Output → Correct?`}
        </pre>
        <p>That can hide important problems. Suppose two agents get the same result:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Agent A: 5 steps · 2 tool calls · $0.10 · 20s
Agent B: 37 steps · 18 tool calls · $2.80 · 4 min
Both: SUCCESS = 1`}
        </pre>
        <p>From an engineering perspective they are very different systems.</p>
        <p>So I consider at least two dimensions necessary:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AGENT QUALITY
        │
 ┌──────┴──────┐
 Outcome       Process
 Did it succeed? How did it get there?
 Correctness   Efficiency
 Completeness  Tool usage / Planning / Reliability`}
        </pre>
        <p>
            Evaluation must move from <strong>&ldquo;Did it do it?&rdquo;</strong> to{" "}
            <strong>
                &ldquo;Did it do it correctly, safely, efficiently, and consistently?&rdquo;
            </strong>
            .
        </p>

        <h2>4. The real bottleneck</h2>
        <p>
            Shipping a new agent version can be relatively fast. Evaluating it correctly is much
            harder.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`New Agent → Run → EVAL → Did it really improve?
                ↙ NO              ↘ YES
             Fix                 Deploy
                ↓
          New version`}
        </pre>
        <p>
            If evaluation is slow, expensive, subjective, or unreliable, the whole development cycle
            slows down.
        </p>
        <p>
            And there is an even bigger problem:{" "}
            <strong>
                if we cannot measure progress correctly, we also cannot know with certainty whether a
                new version is actually better
            </strong>
            .
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-funnel.png"
            alt="Funnel: Generate, Execute, Observe, Evaluate, Diagnose, Improve AI"
            caption="The funnel captures the thesis: complexity shifts toward evaluate and diagnose"
        />

        <h2>5. The problem multiplies with agents</h2>
        <p>
            In a traditional model: <code>1 input → 1 output</code>. In an agent: plan, tools,
            results, new reasoning, state, and so on until the final outcome.
        </p>
        <p>An evaluation may need to analyze:</p>
        <ul>
            <li>the final result;</li>
            <li>each action and tool call;</li>
            <li>arguments, step sequence, and context use;</li>
            <li>constraint compliance;</li>
            <li>time, cost, and errors;</li>
            <li>behavior under unexpected situations.</li>
        </ul>
        <p>
            That is why evaluation complexity grows with system autonomy. Recent research on
            long-running agents shows exactly this: some tasks may require dozens of tool calls and
            large amounts of context, making manual evaluation no longer scalable. (
            <a
                href="https://aclanthology.org/2026.acl-long.337/"
                target="_blank"
                rel="noopener noreferrer"
            >
                ACL Anthology — AgencyBench
            </a>
            )
        </p>

        <h2>6. Different layers of evaluation</h2>
        <p>
            I do not consider a single score enough. A more complete evaluation architecture should
            analyze different levels.
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-layers.png"
            alt="Eval system layers: Components, Process, Result, System, Business"
            caption="Evaluation layers — from component to business value"
        />

        <p>
            <strong>Level 1 — Components:</strong> tool selection, arguments, retrieval,
            classification, code generation.
        </p>
        <p>
            <strong>Level 2 — Process:</strong> planning, sequence, steps, tool usage, error
            recovery, constraints.
        </p>
        <p>
            <strong>Level 3 — Result:</strong> correctness, completeness, requirements, quality,
            security.
        </p>
        <p>
            <strong>Level 4 — System:</strong> latency, cost, stability, reproducibility,
            scalability.
        </p>
        <p>
            <strong>Level 5 — Business:</strong> does the system create real value? A technically
            impressive agent may have no business value.
        </p>

        <h2>7. The LLM-as-a-Judge problem</h2>
        <p>An obvious solution is to use another model to evaluate:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Agent → Output → LLM Judge → Score`}
        </pre>
        <p>
            Useful, but it does not fully solve the problem. The judge can also be wrong: bias,
            inconsistency, technical blind spots, wording sensitivity, long traces, overly
            subjective criteria.
        </p>
        <p>
            So I do not consider it correct to replace human evaluation with LLM evaluation as if the
            latter were automatically objective. The right approach is to build{" "}
            <strong>grades of evaluation</strong>.
        </p>

        <BlogFigure
            src="/blog/evals-bottleneck-graders.png"
            alt="Grades of evaluation: Deterministic, LLM Judge, Human"
            caption="Prefer deterministic when criteria are measurable; LLM and human for semantic and critical cases"
        />

        <p>
            When the criterion can be determined deterministically, I prefer a deterministic eval (
            <code>HTTP status == 200</code>, tests passed, file exists, security rule). For semantic
            aspects, a model-based judge. For critical or ambiguous cases, human evaluation.
        </p>

        <h2>8. Evals and software testing</h2>
        <p>
            An important conclusion:{" "}
            <strong>evals do not replace traditional testing</strong>. They are complementary.
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
            Traditional tests mainly answer:{" "}
            <strong>does the software work as specified?</strong> Evals add:{" "}
            <strong>
                can the agent correctly reach that outcome under different scenarios?
            </strong>
        </p>

        <h2>9. Evals as part of Loop Engineering</h2>
        <p>
            This idea connects directly with <strong>Loop Engineering</strong>. An agent can run:
            Observe → Plan → Act → Evaluate → Correct → Repeat.
        </p>
        <p>
            Without good evaluation: Act → Is it good? → ??? The agent has no reliable signal to
            decide whether to continue, correct, or stop.
        </p>
        <blockquote>
            <strong>
                The evaluator is a core loop piece, not an external component bolted on at the end.
            </strong>
        </blockquote>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GOAL → AGENT → ACTION → ENVIRONMENT → RESULT → EVAL
                              │
                    SUCCESS → STOP
                    FAILURE → REPLAN → AGENT`}
        </pre>
        <p>That turns evaluation into part of the agent&apos;s control mechanism.</p>

        <h2>10. The dataset is as important as the evaluator</h2>
        <p>
            A good evaluator needs good test cases. Creating 100 questions is not enough. You need
            scenarios that truly represent expected behavior:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Normal · Edge · Failure · Adversarial · Regression · Real-world`}
        </pre>
        <p>It should also evolve:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Production → New failure → Capture case → Add to Eval Dataset
           → Run regression → New Agent Version`}
        </pre>
        <p>Each real failure can become permanent system knowledge.</p>

        <h2>11. The real goal: Regression Evals</h2>
        <p>One of the most important roles of evals is detecting regressions.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`V1 → 82% · V2 → 87% · V3 → 91% · V4 → 84%

V4 without breakdown: “better model” → assume improvement
V4 with evals:
 Overall 84% · Correctness 93% · Tool usage 79%
 Security 91% · Efficiency 61%`}
        </pre>
        <p>The new version improved one dimension but worsened another.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Change → Run Evals → Compare → Analyze regressions
      → Improve → Run Evals again`}
        </pre>
        <p>
            Evaluation becomes a kind of{" "}
            <strong>continuous quality-control system for AI behavior</strong>.
        </p>

        <h2>12. From Benchmark to Evaluation System</h2>
        <p>I also consider it important to distinguish both concepts.</p>
        <p>
            A <strong>benchmark</strong> answers: how does this system compare with others under a
            given task set?
        </p>
        <p>
            An <strong>evaluation system</strong> answers: is this system improving and working
            correctly for our use case?
        </p>
        <p>That is why a public benchmark is not necessarily enough for production:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Generic benchmark
  + Domain-specific evals
  + Regression suite
  + Production traces
  + Human feedback
  + Business metrics`}
        </pre>
        <p>
            Recent research also points to a gap between strong benchmark results and real production
            viability, especially when considering cost, safety, maintainability, and workflow
            integration. (
            <a
                href="https://doi.org/10.1007/s10462-026-11571-0"
                target="_blank"
                rel="noopener noreferrer"
            >
                DOI — From benchmarks to deployment
            </a>
            )
        </p>

        <h2>13. The new metric: not only accuracy</h2>
        <p>
            For a long time the conversation was:{" "}
            <strong>which model has higher accuracy?</strong> For agents, I think we must widen the
            question.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AGENT SCORE
 Correctness · Reliability · Efficiency
 + Safety · Security · Robustness
 + Maintainability · User satisfaction · Business value`}
        </pre>
        <p>
            Therefore,{" "}
            <strong>
                a single global score can be useful for comparison, but it is insufficient for
                diagnosis
            </strong>
            . The real value is knowing <strong>why</strong> a system got a given result.
        </p>

        <h2>14. The new engineering cycle</h2>
        <p>From all of this, I see an evolution of the traditional cycle:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Code → Tests → Deploy

toward:

Specification → Agent → Execution → Evals → Analysis
→ Improvement → Regression Evals → Deploy
→ Production Feedback → New Evals → ↺`}
        </pre>
        <p>This connects several trends I have been studying:</p>
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
                If I can build agents faster than I can evaluate their results, development speed
                stops being the main problem.
            </strong>
        </blockquote>
        <p>The bottleneck becomes evaluation.</p>

        <h2>15. My conclusion</h2>
        <p>
            After analyzing the evolution of AI systems, I believe we are entering a stage where{" "}
            <strong>generation stops being the only central problem</strong>.
        </p>
        <p>
            Models are increasingly able to produce code, text, plans, and actions. The challenge
            starts shifting toward another question:
        </p>
        <blockquote>
            <strong>
                How can we measure in a reliable, reproducible, and scalable way whether an
                autonomous system is really doing what it should?
            </strong>
        </blockquote>
        <p>
            That is why I believe evals should stop being seen as a post-development activity. They
            should be part of the architecture.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`AI ENGINEERING
 Generation · Execution · Evaluation
              ↓
         Improvement → Loop`}
        </pre>
        <p>My main conclusion:</p>
        <blockquote>
            <strong>
                In the age of agents, building the system may stop being the main challenge. Proving
                it works correctly may become the real bottleneck.
            </strong>
        </blockquote>
        <p>
            And the more autonomous the system, the more important it becomes to have evaluations
            that analyze not only <strong>what it produced</strong>, but also{" "}
            <strong>how it acted, why it failed, how much it cost, and what value it created</strong>
            .
        </p>
        <p>
            That is why I see <strong>Evaluation Engineering</strong> as an increasingly important
            discipline inside AI engineering.
        </p>

        <h2>Main sources consulted</h2>
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
            In the age of agents, generation is no longer the only central problem. Proving the
            system works — reliably, reproducibly, and at scale — may be the real bottleneck.
        </BlogClosingQuote>
    </>
);

import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const agenticOsContentEn = (
    <>
        <p>
            I reviewed this topic with information available through <strong>August 2026</strong>.
            An important methodological note first: <strong>Graph Engineering</strong>,{" "}
            <strong>Dynamic Context Engineering</strong>, and several other labels are{" "}
            <strong>not formal, universal academic standards</strong>. They are emerging names
            used to describe design layers in agentic systems. I present them as{" "}
            <strong>my own conceptual evolution model</strong>, not as an officially accepted
            taxonomy.
        </p>
        <p>
            This model also treats context as something that must be managed dynamically, the{" "}
            <em>harness</em> as its own engineering layer, and agentic systems as evolving from
            implicit loops toward explicit, observable graphs. See{" "}
            <a href="https://openai.com/index/harness-engineering/" target="_blank" rel="noopener noreferrer">
                Harness engineering (OpenAI)
            </a>
            .
        </p>

        <h2>Summary</h2>
        <p>
            In recent years, the way we build AI applications has changed radically. At first, the
            main challenge was getting a generative model to produce better answers. That created{" "}
            <strong>Prompt Engineering</strong>: writing instructions, examples, and the expected
            result.
        </p>
        <p>
            When models began using tools, accessing external information, running code,
            maintaining state, and completing multi-step tasks, the prompt stopped being the main
            problem.
        </p>
        <blockquote>
            <strong>How do we design the system around the model so it can solve complex tasks reliably?</strong>
        </blockquote>
        <p>A conceptual evolution from that question:</p>
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
            This is not a strictly linear ladder. Several disciplines overlap and evolve
            simultaneously. The central idea is a move from <strong>instruction engineering</strong>{" "}
            to <strong>autonomous-system engineering</strong>.
        </p>
        <BlogFigure
            src="/blog/agentic-os-card.png"
            alt="Evolution from Chatbot to Agentic OS through Prompt, Context, Workflow, Graph, Loop, Harness, Agent and Runtime"
            caption="Figure 1 — AI Engineering evolves from the chatbot to the Agentic Operating System"
        />

        <h2>1. From talking with AI to building systems that work</h2>
        <p>The first generative AI paradigm was essentially conversational:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`User
   ↓
Prompt
   ↓
Model
   ↓
Response`}
        </pre>
        <p>Success depended mainly on instruction quality.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"Act as a senior Java software architect.
Explain Kafka including architecture, producers,
consumers, partitions, offsets, consumer groups,
and a microservices example."`}
        </pre>
        <p>
            The prompt became a new programming interface. But a prompt only describes what the
            model should do; it does not build the system required to do it. Once tasks became{" "}
            <em>research, retrieve documentation, modify code, run tests, analyze failures, fix,
            and deliver a validated result</em>, we stopped designing only prompts. We started
            designing <strong>execution systems</strong>.
        </p>

        <h2>2. The great transition</h2>
        <p>The evolution can be visualized in three eras:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`┌──────────────────────────────────────────────────────────┐
│ ERA 1 — CONVERSATIONAL MODELS                           │
│ User → Prompt → Model → Response                        │
│ Main problem: response quality                          │
└───────────────────────────────┬──────────────────────────┘
                                ↓
┌──────────────────────────────────────────────────────────┐
│ ERA 2 — MODELS WITH TOOLS                                │
│ User → Model → Tool → Result → Model                     │
│ Main problem: context + tools + execution                │
└───────────────────────────────┬──────────────────────────┘
                                ↓
┌──────────────────────────────────────────────────────────┐
│ ERA 3 — AGENTIC SYSTEMS                                 │
│ Goal → Plan → Context → Graph → Tools → Verify → Loop    │
│             ↑                         ↓                  │
│             └──────── State ──────────┘                  │
│ Main problem: autonomy + control + reliability            │
└──────────────────────────────────────────────────────────┘`}
        </pre>
        <BlogFigure
            src="/blog/agentic-os-prompt-to-system.png"
            alt="OLD User-Prompt-LLM-Response compared with NEW Goal-Context-Graph-Agent-Harness-Runtime-Evaluation"
            caption="Figure 2 — From prompt to agentic system: the model is no longer the whole system"
        />
        <p>
            In the third era, the model is only one component. The complete system can include
            memory, dynamic context, tools, APIs, executable code, databases, workflows, graphs,
            specialized agents, validators, evaluators, checkpoints, observability, permissions,
            recovery, and human intervention. The model remains important, but{" "}
            <strong>it is no longer the whole system</strong>.
        </p>

        <h2>3. A new way to think about AI engineering</h2>
        <h3>Prompt Engineering</h3><blockquote><strong>What should I say to the model?</strong></blockquote>
        <h3>Context Engineering</h3><blockquote><strong>What does the model need to know?</strong></blockquote>
        <h3>Dynamic Context Engineering</h3><blockquote><strong>What does the model need to know right now?</strong></blockquote>
        <h3>Workflow Engineering</h3><blockquote><strong>Which steps must the system perform?</strong></blockquote>
        <h3>Graph Engineering</h3><blockquote><strong>How are steps, decisions, agents, and states connected?</strong></blockquote>
        <h3>Loop Engineering</h3><blockquote><strong>How can the system continue, verify, correct, and repeat?</strong></blockquote>
        <h3>Harness Engineering</h3><blockquote><strong>In what environment can it act, and which controls does it need?</strong></blockquote>
        <h3>Agent Engineering</h3><blockquote><strong>How do I build an autonomous decision-making unit?</strong></blockquote>
        <h3>Multi-Agent Engineering</h3><blockquote><strong>How do I coordinate several autonomous units?</strong></blockquote>
        <h3>Evaluation Engineering</h3><blockquote><strong>How do I know the system really works?</strong></blockquote>
        <h3>Agentic Runtime Engineering</h3><blockquote><strong>How do I execute and maintain these systems durably and observably?</strong></blockquote>
        <h3>Self-Improving Agent Engineering</h3><blockquote><strong>How can the system learn from executions and improve?</strong></blockquote>
        <h3>Agentic Operating System</h3><blockquote><strong>How do I integrate all of this into a platform that operates complete processes?</strong></blockquote>

        <h2>4. Chatbot: the starting point</h2>
        <p>A traditional chatbot is simple:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`User
 │
 ▼
Prompt
 │
 ▼
LLM
 │
 ▼
Response`}</pre>
        <p>
            It may have history, but its main responsibility is generating a response. The user
            drives the process. The chatbot responds; it does not necessarily{" "}
            <strong>operate</strong>.
        </p>

        <h2>5. Prompt Engineering</h2>
        <p>
            The next level optimizes objective, role, constraints, format, examples, quality
            criteria, and expected behavior.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                 PROMPT
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
    Goal        Rules      Examples
       └───────────┼───────────┘
                   ▼
                  LLM
                   ▼
                Output`}</pre>
        <p>
            It turned natural language into a programming-like interface. Its limit is clear:
            improving the prompt cannot compensate for missing information, tools, state, or
            execution environment.
        </p>

        <h2>6. Context Engineering</h2>
        <p>Now the question is: what information does the model need to make a good decision?</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Context
├── Instructions
├── Project rules
├── Documentation
├── Source code
├── User information
├── Memory
├── Tool descriptions and results
├── Previous actions
├── Current state
├── Tests
└── External references`}</pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                ┌───────────────┐
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
                       LLM`}</pre>
        <p>Context becomes an engineering resource.</p>

        <h2>7. Context must not grow forever</h2>
        <p>
            More context does not necessarily mean better context. Huge context increases cost and
            latency, hides important information, introduces contradictions, includes stale data,
            and consumes model capacity.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Context Budget
│
├── Task
├── Relevant rules
├── Relevant memory
├── Relevant code
├── Relevant tools
└── Relevant observations`}</pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Task
 ↓
Determine relevance
 ↓
Retrieve required information
 ↓
Build context
 ↓
LLM`}</pre>
        <p>
            Knowledge should be navigable and relevant, not accumulated in one enormous file (
            <a href="https://openai.com/index/harness-engineering/" target="_blank" rel="noopener noreferrer">OpenAI</a>
            ).
        </p>

        <h2>8. Dynamic Context Engineering</h2>
        <p>Context is no longer static:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                 Task
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
                   └──────────────→ LLM`}</pre>
        <p>
            The system decides what to remember, retrieve, discard, summarize, which tool to use,
            and which result to incorporate. This is an evolution of Context Engineering that
            becomes critical when agents appear, not necessarily a later ladder step.
        </p>

        <h2>9. Progressive Disclosure</h2>
        <p>
            Instead of giving the agent 100% of the knowledge at startup, provide a map and load
            more only when needed.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                 Agent
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
             Execute Task`}</pre>

        <h2>10. Workflow Engineering</h2>
        <p>Multi-step tasks introduce explicit workflows:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Receive Request
      ↓
Analyze → Retrieve Data → Process → Validate → Publish`}</pre>
        <p>
            A workflow defines what happens and in which order. Many tasks work better as
            deterministic processes; not everything should become an autonomous agent.
        </p>

        <h2>11. Workflow ≠ Agent</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Workflow: A → B → C → D

Agent: A → What should I do now? → Tool X → Did it work?
       → Tool Y → Do I need another action?`}</pre>
        <p>A robust architecture usually combines:</p>
        <blockquote><strong>Determinism where we know the solution; autonomy where exploration or decision is needed.</strong></blockquote>

        <h2>12. Graph Engineering</h2>
        <p>
            Graph Engineering appears when a workflow is more than a sequence. A graph represents
            nodes, states, transitions, dependencies, conditions, branches, parallelism,
            synchronization, recovery, validation, human intervention, and cycles.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`START → Analyze
          ├→ Simple → Execute ─────┐
          └→ Complex → Plan → Agent A/B/C
                              ↓
                           Verify
                         ├→ Valid → END
                         └→ Invalid → Repair ──→ Verify`}</pre>
        <p>
            The goal is an execution structure that can be inspected, controlled, versioned, and
            observed. The term remains emerging and has no universal definition (
            <a href="https://www.analyticsvidhya.com/blog/2026/07/graph-engineering/" target="_blank" rel="noopener noreferrer">Analytics Vidhya</a>
            ).
        </p>

        <h2>13. Loop Engineering</h2>
        <p>A loop differs from both a workflow and a graph:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Goal → Act → Observe → Evaluate
 ↑                         │
 └──────── Correct ────────┘`}</pre>
        <p>
            The agent analyzes, decides, acts, observes, verifies, corrects, and repeats (
            <a href="https://www.ibm.com/think/topics/loop-engineering" target="_blank" rel="noopener noreferrer">IBM on Loop Engineering</a>
            ).
        </p>

        <h2>14. Loop vs Graph</h2>
        <p>
            A loop asks: <strong>how does this agent continue working?</strong> A graph asks:{" "}
            <strong>how is the entire process structured and how are its components connected?</strong>
        </p>
        <blockquote><strong>Graph Engineering structures multiple loops, workflows, decisions, and components inside an explicit execution topology.</strong></blockquote>
        <p>
            It does not replace Loop Engineering. A graph can contain multiple loops. Graph
            Engineering is better understood as a transversal composition discipline than as a
            strict ladder step.
        </p>
        <BlogFigure
            src="/blog/agentic-os-loop-graph-aos.png"
            alt="Evolution from Loop to Graph to Agentic OS: Act-Observe-Verify cycle, Planner graph, and AOS platform"
            caption="Figure 4 — From loop to graph to Agentic OS: from iterating to composing and operating platforms"
        />

        <h2>15. Harness Engineering</h2>
        <p>
            An agent needs an environment in which to operate. The harness controls tools,
            permissions, filesystem, sandbox, commands, tests, validations, time and cost limits,
            checkpoints, recovery, observability, and human intervention.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                 HARNESS
                    │
      ┌─────────────┼──────────────┐
      ▼             ▼              ▼
    Tools        Permissions     Sandbox
      ▼             ▼              ▼
    APIs          Policies        Files
                    ▼
                Validation
                    ▼
              Observability
                    ▼
                 Feedback`}</pre>
        <p>
            With coding agents and long-running agents, engineering increasingly means designing
            the environment where agents work reliably (
            <a href="https://openai.com/index/harness-engineering/" target="_blank" rel="noopener noreferrer">OpenAI</a>
            ).
        </p>

        <h2>16. The harness as control system</h2>
        <blockquote><strong>The model decides. The harness determines what it can do.</strong></blockquote>

        <h2>17. Agent Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`GOAL → PERCEPTION → REASONING → PLAN → ACTION → OBSERVE
                         ↑                         │
                         └─────────────────────────┘`}</pre>
        <p>
            An agent has a goal, context, tools, memory, state, decision-making, recovery, and
            completion criteria. Its difference from a chatbot is the ability to{" "}
            <strong>act on an environment</strong>.
        </p>

        <h2>18. An LLM system is not automatically an agent</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`LLM:              Input → Model → Output
Workflow + LLM:   Step A → LLM → Step B → LLM → Step C
Agent:            Goal → LLM → Decide → Tool → Observe → Decide → ...`}</pre>
        <p>The defining feature is decision and action within an environment, not merely model usage.</p>

        <h2>19. Multi-Agent Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                  Supervisor
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       Research       Coding        Testing
        Agent          Agent         Agent
          └─────────────┼─────────────┘
                        ▼
                     Review → Result`}</pre>
        <p>
            Each agent may have its own goal, tools, permissions, context, memory, and evaluation.
            This reduces local complexity but introduces global complexity.
        </p>

        <h2>20. Multi-Agent does not automatically mean better</h2>
        <blockquote><strong>Do not use multiple agents until there is a clear architectural reason to separate them.</strong></blockquote>
        <p>
            Valid reasons include different responsibilities, permissions, tools, or contexts;
            parallelism; fault isolation; and independent verification.
        </p>

        <h2>21. Evaluation Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Agent → Execute → Trace → Evaluate
                         ├→ Pass → Deploy
                         └→ Failure → Diagnose → Improve`}</pre>
        <p>
            Measure task success, accuracy, tool selection and arguments, steps, cost, latency,
            errors, recovery, policies, quality, and human intervention.
        </p>

        <h2>22. Evaluating the result is not enough</h2>
        <p>Agentic systems must also evaluate the <strong>trajectory</strong>.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Agent A: 5 steps, $0.20, 2 tool calls, 1 retry
Agent B: 47 steps, $4.80, 19 tool calls, 8 retries`}</pre>
        <p>Both may reach the same correct result. Architecturally, they are very different systems.</p>

        <h2>23. Agentic Runtime Engineering</h2>
        <p>In production, how do we run agents for minutes, hours, or days without losing state?</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                Agentic Runtime
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
    Scheduler        State          Execution
       ▼               ▼                ▼
    Retries         Checkpoints       Tools
       └───────────────┼────────────────┘
                       ▼
                 Observability → Recovery`}</pre>
        <p>The agent starts to look less like a model call and more like a <strong>distributed process</strong>.</p>

        <h2>24. From request/response to long-running execution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Request → Create Job → Runtime → Plan → Execute
→ Checkpoint → Tool → Observe → Checkpoint → Continue
→ Verify → Complete`}</pre>
        <p>
            Distributed-system concepts appear: states, events, persistence, idempotency, retries,
            timeouts, compensation, consistency, and traceability.
        </p>

        <h2>25. Self-Improving Agent Engineering</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Execute → Trace → Evaluate → Find Failure
                         ↓
                 Context / Skill / Workflow
                         ↓
                    Improve → Re-execute`}</pre>
        <blockquote><strong>The system no longer only executes processes; it can improve how it executes them.</strong></blockquote>
        <p>
            This does not mean an agent reprograms itself without limits. Real systems usually
            require approval, versioning, and evaluation before accepting changes.
        </p>

        <h2>26. Agentic Operating System</h2>
        <p>
            An AOS is not simply an app with several agents. It is a platform that manages the
            resources needed to execute agentic systems: a <strong>coordination and operations
            layer for agents</strong>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                     AGENTIC OS
       ┌──────────────────┼──────────────────┐
       ▼                  ▼                  ▼
    Agents             Context            Memory
       ▼                  ▼                  ▼
    Skills             Graphs             State
       └──────────────────┼──────────────────┘
                          ▼
                       Runtime
             ┌────────────┼────────────┐
             ▼            ▼            ▼
           Tools        Evals        Harness
             └────────────┼────────────┘
                          ▼
                    Observability → Governance`}</pre>

        <h2>27. What does an AOS manage?</h2>
        <ul>
            <li><strong>Agents</strong> — Who can act?</li>
            <li><strong>Context</strong> — What can they know?</li>
            <li><strong>Memory</strong> — What can they remember?</li>
            <li><strong>Tools</strong> — What can they do?</li>
            <li><strong>Graphs</strong> — How is work organized?</li>
            <li><strong>Runtime</strong> — Where and how does execution happen?</li>
            <li><strong>Harness</strong> — Under which constraints?</li>
            <li><strong>Evaluation</strong> — How do we know it works?</li>
            <li><strong>Governance</strong> — What is allowed?</li>
        </ul>

        <h2>28. The complete architecture</h2>
        <BlogFigure
            src="/blog/agentic-os-production-agent.png"
            alt="Production architecture: Agent with Context, Memory, Tools, Graph, Harness, Runtime, APIs, databases, services, evaluation and improvement"
            caption="Figure 3 — Inside a Production Agent: from goal to environment, with evaluation and improvement"
        />
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`USER → GOAL → CONTEXT ENGINE → GRAPH / WORKFLOW
→ AGENT(S) → HARNESS → AGENTIC RUNTIME
→ ENVIRONMENT → OBSERVABILITY → IMPROVEMENT`}</pre>

        <h2>29. The complete evolution</h2>
        <p>
            The model is not a strictly linear chain. The complete system is a cycle:{" "}
            <strong>Context → Agent → Graph → Runtime → Evaluation → Improvement → Context</strong>.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Context → Agent → Graph → Runtime → Evaluation
   ↑                                      │
   └──────────── Improvement ────────────┘`}</pre>

        <h2>30. An alternative layered view</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`┌─────────────────────────────────────────┐
│              AGENTIC OS                 │
├─────────────────────────────────────────┤
│             AGENTIC RUNTIME             │
├─────────────────────────────────────────┤
│                HARNESS                  │
├─────────────────────────────────────────┤
│          GRAPH / WORKFLOW / LOOP        │
├─────────────────────────────────────────┤
│                AGENTS                  │
├─────────────────────────────────────────┤
│               CONTEXT                  │
├─────────────────────────────────────────┤
│                MODEL                   │
└─────────────────────────────────────────┘`}</pre>
        <blockquote><strong>The model is only one layer of the system.</strong></blockquote>

        <h2>31. From prompt to operating system</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Prompt → How do I talk to the AI?
Context → What does it need to know?
Workflow / Graph / Loop → How should it work?
Harness → Where can it work and what can it do?
Agent → How can it act autonomously?
Multi-Agent → How do agents collaborate?
Runtime → How do I keep it running?
Evaluation → How do I know it works?
Self-Improvement → How can it improve?
Agentic OS → How do I operate all of this as a platform?`}</pre>

        <h2>32. The developer's role changes</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Developer → Defines Intent → Designs Context → Designs Graph
→ Designs Harness → Defines Tests → Defines Evaluation
→ Agent Executes → Developer Reviews System`}</pre>
        <p>
            Developers do not disappear. They move from writing every execution instruction to{" "}
            <strong>designing the system that executes those instructions correctly</strong>.
        </p>

        <h2>33. Software Engineering and Agent Engineering</h2>
        <p>
            Agent Engineering does not replace Software Engineering. It adds surfaces: Context,
            Agents, Tools, Graphs, Loops, Harness, and Evaluations. The more autonomous the system,
            the more important architecture, security, testing, observability, and resilience become.
        </p>

        <h2>34. An agent is a distributed system in disguise</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Failure · Timeout · Retry · Duplicate Action
Partial Completion · Lost State · Race Condition · Inconsistent State`}</pre>

        <h2>35. The importance of state</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`State
├── Goal
├── Current Step
├── Completed Steps
├── Pending Tasks
├── Tool Results
├── Decisions
├── Errors
├── Memory
└── Recovery Information`}</pre>

        <h2>36. Graph Engineering as a bridge</h2>
        <p>
            A graph makes explicit what is implicit in a simple agent: flow control, state, and
            recovery (
            <a href="https://arxiv.org/abs/2604.11378" target="_blank" rel="noopener noreferrer">
                From Agent Loops to Structured Graphs (arXiv)
            </a>
            ).
        </p>

        <h2>37. Graph Engineering also has a cost</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Simple task             → Direct LLM
Tool use                → Agent Loop
Multiple deterministic  → Workflow
Branches / recovery     → Graph
Independent roles       → Multi-Agent Graph
Long-running production → Agentic Runtime
Multiple agentic procs  → Agentic Operating System`}</pre>

        <h2>38. Hybrid architecture will be most common</h2>
        <blockquote><strong>Not everything will be agents. Determinism and autonomy will coexist in a graph, with humans when needed.</strong></blockquote>

        <h2>39. Context Engineering + Graph Engineering</h2>
        <p>
            Each node can have its own context. This avoids one enormous context shared by the
            entire process.
        </p>

        <h2>40. Context as flow inside the graph</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Context Engineering + Graph Engineering + State Management`}</pre>

        <h2>41. The cumulative-context problem</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Raw History → Summarize → Extract State
→ Persist Important Facts → Discard Noise → Build New Context`}</pre>

        <h2>42. Security in agentic systems</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`LLM Decision → Policy → Authorization → Validation → Tool`}</pre>
        <p>This is especially critical with money, sensitive data, production, deletion, and irreversible changes.</p>

        <h2>43. Observability as a structural requirement</h2>
        <p>
            Request/response is not enough. We need traces for goal, context, decision, tool I/O,
            state, retry, branch, handoff, validation, and result. Observability must be designed
            from the start.
        </p>

        <h2>44. The new development cycle</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Define Goal → Design Context → Design Graph → Design Harness
→ Build Agent → Evaluate → Execute → Observe → Improve → Evaluate Again ↺`}</pre>

        <h2>45. The true unit of design is no longer the prompt</h2>
        <blockquote><strong>In an agentic system, the execution system is the center.</strong></blockquote>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`AGENTIC SYSTEM =
Prompt + Context + Memory + Tools + Graph + Workflow
+ Loop + Harness + State + Runtime + Evaluation + Governance`}</pre>

        <h2>46. Five dimensions of the model</h2>
        <ul>
            <li><strong>Intelligence</strong> — Prompt, Context, Dynamic Context</li>
            <li><strong>Execution</strong> — Workflow, Graph, Loop</li>
            <li><strong>Autonomy</strong> — Harness, Agent, Multi-Agent</li>
            <li><strong>Operations</strong> — Evaluation, Runtime, Observability, Governance</li>
            <li><strong>Evolution</strong> — Self-Improvement, Agentic OS</li>
        </ul>

        <h2>47. The complete map</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`                         AI ENGINEERING
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
  INTELLIGENCE             EXECUTION             AUTONOMY
       └──────────────────────┼──────────────────────┘
                              ▼
                         OPERATIONS
                              ▼
                         EVOLUTION`}</pre>

        <h2>48. Where do I think it evolves?</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`Human → Intent → Agentic OS → Context → Graph
→ Agents → Tools → Environment → Evaluation → Learning → Improvement`}</pre>
        <blockquote><strong>Autonomy within explicit boundaries.</strong></blockquote>

        <h2>49. The autonomy paradox</h2>
        <p>
            The more autonomous a system becomes, the more important control becomes: limits,
            permissions, validations, checkpoints, observability, evaluation, and recovery.
        </p>
        <blockquote><strong>Automate inside a well-designed control space.</strong></blockquote>

        <h2>50. Conclusions</h2>
        <p>
            We started with Prompt → Response and evolved toward Goal → Context → Graph → Agent →
            Tools → Runtime → Evaluation → Improvement.
        </p>
        <blockquote>
            <strong>
                The future of AI engineering is not only about building smarter models. It is about
                building systems that provide the right context, let models act, control their
                actions, verify results, and learn from executions.
            </strong>
        </blockquote>
        <p>The language model is a fundamental piece. But the real product is the <strong>system around it</strong>.</p>

        <h2>51. A summarized evolution proposal</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">{`INSTRUCT → INFORM → ROUTE → ITERATE → CONTROL
→ ACT → COLLABORATE → MEASURE → OPERATE → IMPROVE → ORCHESTRATE`}</pre>
        <p>
            The first ladder, Chatbot → AOS, describes technological evolution. This second one
            describes the evolution of engineering responsibilities.
        </p>

        <h2>52. Methodological note</h2>
        <p>
            This article is an <strong>original conceptual synthesis and proposal</strong> based
            on the evolution observed through August 2026. No universally accepted taxonomy has
            exactly these stages. Graph Engineering, Dynamic Context Engineering, Agentic Runtime
            Engineering, and Self-Improving Agent Engineering are analytical categories for
            organizing emerging practices.
        </p>
        <p>
            One question remains open: is Graph Engineering a ladder step or a{" "}
            <strong>transversal dimension</strong> alongside Context, Workflow, and Loop? My
            current position is the second. A graph can contain workflows, loops, agents,
            deterministic functions, validators, and humans. The 2026 literature is still
            converging on this definition.
        </p>

        <h2>53. Final perspective</h2>
        <p>
            The prompt still exists. It simply no longer carries the entire design burden. The
            durable engineering problem is context, execution, control, evaluation, and operation
            around the model.
        </p>
        <BlogClosingQuote>
            The prompt still exists. The center is no longer the instruction: it is the execution
            system around the model — and the AOS that operates it.
        </BlogClosingQuote>
    </>
);

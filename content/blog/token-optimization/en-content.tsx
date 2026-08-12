import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const tokenOptimizationContentEn = (
    <>
        <p>
            <strong>AI Coding Agents</strong> run many iterations during a task: they read files,
            execute commands, analyze results, edit code and call tools again. Each interaction can
            add context and token consumption.
        </p>
        <p>
            That is why optimizing tokens is not only about shortening the prompt — it means
            optimizing the whole flow.
        </p>

        <BlogFigure
            src="/blog/token-optimization-card.png"
            alt="Token Optimization in AI Coding Agents — compression, caching, output shaping, model routing and AI gateway"
            caption="Optimize the full flow — not just the prompt: tool outputs, context, responses and routing"
        />

        <h2>1. Where are tokens consumed?</h2>
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
            alt="Token consumption diagram: agent, context, repository, tool outputs and history into the LLM"
            caption="Consumption map — system, prompt, repo, tool outputs and history feed the LLM"
        />

        <p>Main optimization opportunities:</p>
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

        <h2>2. RTK: reduce tool output</h2>
        <p>A large share of context comes from commands such as:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`grep
find
git diff
git log
kubectl`}
        </pre>
        <p>
            A command may return hundreds or thousands of lines when the agent only needs a small
            slice.
        </p>
        <p>RTK inserts a layer between the tool and the agent:</p>
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
            alt="RTK flow: CLI command, raw output, RTK layer, compressed output into the AI agent"
            caption="RTK as a middle layer — compress tool output before it reaches the agent"
        />

        <p>The goal is simple:</p>
        <blockquote>
            <strong>Avoid sending unnecessary information to the model.</strong>
        </blockquote>
        <p>
            Effectiveness depends on workload. An agent that runs many CLI commands can benefit far
            more than one that mostly uses native read/edit tools.
        </p>

        <h2>3. Context Compression</h2>
        <p>Another strategy is compressing context before it reaches the model.</p>
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
        <p>This can reduce:</p>
        <ul>
            <li>repeated content;</li>
            <li>tool outputs;</li>
            <li>history;</li>
            <li>metadata;</li>
            <li>low-relevance information.</li>
        </ul>
        <p>But there is a risk:</p>
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
            alt="Context compression trade-off: healthy path vs over-compression causing more tool calls"
            caption="Trade-off — compression helps; over-compression can cost more tokens via retries"
        />

        <p>
            That is why <strong>token reduction must be measured together with task quality</strong>.
        </p>

        <h2>4. Output Shaping</h2>
        <p>Agents can also generate unnecessary text:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`I'll now analyze the file...
I've identified the issue...
Let me proceed with...`}
        </pre>
        <p>Output shaping aims to turn that into:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Found the issue.

Fixing validation logic.

Running tests.`}
        </pre>
        <p>
            One benchmark reported roughly <strong>36.7% fewer output tokens</strong> with this
            approach.
        </p>
        <p>The advantage: it acts directly on agent-generated responses.</p>

        <h2>5. What about Caveman?</h2>
        <p>
            The Caveman approach adds instructions so the agent answers in an extremely concise
            style.
        </p>
        <p>The hypothesis:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Less verbosity
      ↓
Less output tokens
      ↓
Lower cost`}
        </pre>
        <p>
            Experimental results show the savings can be much smaller than initially advertised.
        </p>
        <p>
            Adding yet another verbosity-reduction instruction can also conflict when{" "}
            <strong>Output Shaping</strong> is already in place.
        </p>
        <p>So:</p>
        <blockquote>
            <strong>More optimization instructions do not necessarily yield more savings.</strong>
        </blockquote>

        <h2>6. The problem of measuring tokens alone</h2>
        <p>Suppose:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Baseline
100K tokens
1 completed task`}
        </pre>
        <p>An optimization might cut consumption to:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`70K tokens`}
        </pre>
        <p>But if compression forces another iteration:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`70K + 50K = 120K`}
        </pre>
        <p>the system used more tokens overall.</p>
        <p>A more useful metric:</p>
        <h3>Cost per Successful Engineering Task</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Total AI Cost
────────────────────────
Successful Tasks`}
        </pre>
        <p>That is how strategies should really be compared.</p>

        <BlogFigure
            src="/blog/token-optimization-cost-metric.png"
            alt="Cost per Successful Task as the primary efficiency KPI for AI coding agents"
            caption="Real KPI — total cost divided by successful tasks, not tokens saved alone"
        />

        <h2>7. Recommended metrics</h2>
        <p>An AI Coding Agents benchmark should measure:</p>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10 text-left">
                        <th className="py-2 pr-4 font-semibold">Metric</th>
                        <th className="py-2 font-semibold">Goal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Input tokens</td>
                        <td className="py-2">Measure context sent</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Output tokens</td>
                        <td className="py-2">Measure generated response</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Total tokens</td>
                        <td className="py-2">Overall consumption</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Cost</td>
                        <td className="py-2">Financial impact</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Tool calls</td>
                        <td className="py-2">Workflow complexity</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Turns</td>
                        <td className="py-2">Iteration count</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Latency</td>
                        <td className="py-2">Operational impact</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Task success</td>
                        <td className="py-2">Quality</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Tests passed</td>
                        <td className="py-2">Correctness</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">Cost / successful task</td>
                        <td className="py-2">Real efficiency</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>The primary metric should be:</p>
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
            In an organization, these optimizations can be centralized behind an{" "}
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
            alt="AI Gateway architecture between agents and providers with compression, caching, routing and policies"
            caption="AI Gateway — centralizes optimization, policies, cost and metrics at org level"
        />

        <p>
            That way each developer does not have to implement and maintain their own optimization
            strategies.
        </p>
        <p>It also enables centralized metrics:</p>
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
        <p>Another important optimization: use different models by complexity:</p>
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
            alt="Model routing: simple task to low-cost model, medium to medium, complex reasoning to high-reasoning model"
            caption="Route by complexity — not every task needs the most expensive model"
        />

        <p>Not every task needs the most expensive model.</p>
        <p>This can have more impact than shaving small percentages of tokens.</p>

        <h2>10. Recommended methodology</h2>
        <p>Before adopting any optimization tool:</p>
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
        <p>Keep these constants in the benchmark:</p>
        <ul>
            <li>model;</li>
            <li>repository;</li>
            <li>task;</li>
            <li>prompt;</li>
            <li>configuration.</li>
        </ul>
        <p>Change only the optimization under evaluation.</p>

        <h2>11. Conclusion</h2>
        <p>AI Coding Agent optimization should not chase simply:</p>
        <blockquote>
            <strong>&ldquo;use fewer tokens&rdquo;.</strong>
        </blockquote>
        <p>The goal should be:</p>
        <blockquote>
            <strong>Complete engineering tasks successfully at the lowest possible cost.</strong>
        </blockquote>
        <p>Strategies must be evaluated holistically:</p>
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

        <h3>Recommendation</h3>
        <p>
            <strong>RTK:</strong> worth trying when the workflow is CLI-heavy with large outputs.
        </p>
        <p>
            <strong>Caveman:</strong> I would not prioritize it over structural techniques like
            tool-output compression, caching, context management and model routing.
        </p>
        <p>
            <strong>AI Gateway:</strong> the most interesting architecture to centralize these
            optimizations and measure org-level impact.
        </p>
        <p>The real question should not be:</p>
        <blockquote>
            <strong>How many tokens did we save?</strong>
        </blockquote>
        <p>but:</p>
        <blockquote>
            <strong>How much does it cost to successfully complete an engineering task with AI?</strong>
        </blockquote>

        <BlogClosingQuote>
            Fewer tokens is not enough. The KPI is cost per successful engineering task — and the
            gateway is where you measure it.
        </BlogClosingQuote>
    </>
);

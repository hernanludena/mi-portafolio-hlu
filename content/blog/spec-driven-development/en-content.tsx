import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const specDrivenDevelopmentContentEn = (
    <>
        <p>
            For a long time, software development followed a relatively simple sequence:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`requirement → design → code → tests`}
        </pre>
        <p>
            With assistants and AI agents able to generate large amounts of code, that sequence is
            starting to change.
        </p>
        <p>
            The problem is no longer only how much code we can produce, but{" "}
            <strong>how well we can express what we actually want to build</strong>.
        </p>
        <p>
            An agent can generate an API, a UI, tests, and even edit multiple files in minutes. If
            the initial instruction is ambiguous, though, it can produce something technically
            correct and conceptually wrong.
        </p>
        <p>
            That is where <strong>Spec-Driven Development (SDD)</strong> comes in.
        </p>
        <p>The central idea of this study is:</p>
        <blockquote>
            <strong>
                The specification should become the contract that connects human intent with
                implementation performed by humans or AI agents.
            </strong>
        </blockquote>
        <p>Instead of starting with:</p>
        <blockquote>&ldquo;What code should I write?&rdquo;</blockquote>
        <p>we start with:</p>
        <blockquote>
            &ldquo;What behavior must exist, and how will we know it is correctly
            implemented?&rdquo;
        </blockquote>
        <p>
            This article is a <strong>personal study</strong>: it does not attribute the approach
            to a company or a specific person. SDD has no single universal definition; today both{" "}
            <em>Spec-Driven Development</em> and <em>Specification-Driven Development</em> are used.
            In essence both point to the same idea: making the specification a central artifact that
            guides implementation and validation.
        </p>

        <BlogFigure
            src="/blog/spec-driven-development-card.png"
            alt="Spec-Driven Development: from intention to verifiable software"
            caption="From intention to a verifiable contract between humans and agents"
        />

        <BlogFigure
            src="/blog/spec-driven-development-pipeline.png"
            alt="SDD pipeline: Intent, Explore, Propose, Specify, Clarify, Design, Tasks, Implementation, Verify and feedback"
            caption="Figure 1 — Spec-Driven Development: from intention to verifiable software (living cycle)"
        />

        <h2>1. What is Spec-Driven Development?</h2>
        <p>
            SDD is a development approach where a{" "}
            <strong>structured specification precedes and guides implementation</strong>.
        </p>
        <p>The specification mainly describes:</p>
        <ul>
            <li>what problem we want to solve;</li>
            <li>what behavior is expected;</li>
            <li>what the rules are;</li>
            <li>what the constraints are;</li>
            <li>which cases must be covered;</li>
            <li>how we will know the work is done.</li>
        </ul>
        <p>That specification then becomes design, tasks, and implementation.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`                    INTENT
                       │
                       ▼
                ┌──────────────┐
                │ Specification│
                └───────┬──────┘
                        │
                        ▼
                  ┌───────────┐
                  │   Design  │
                  └─────┬─────┘
                        │
                        ▼
                  ┌───────────┐
                  │   Tasks   │
                  └─────┬─────┘
                        │
                        ▼
              ┌──────────────────┐
              │ Human / AI Agent │
              └────────┬─────────┘
                       │
                       ▼
                     Code
                       │
                       ▼
                 Verification`}
        </pre>
        <p>
            The fundamental difference is that{" "}
            <strong>code is no longer the only artifact that represents the solution</strong>. The
            specification becomes a permanent reference to check whether implementation still
            represents the original intent.
        </p>

        <h2>2. Why SDD becomes especially important with AI</h2>
        <p>AI code generation changes the economics of development.</p>
        <p>Before:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Idea → Design → Hours of coding → Code`}
        </pre>
        <p>Now:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Idea → Prompt → Agent → Lots of code`}
        </pre>
        <p>
            The second process is much faster, but it introduces a risk:{" "}
            <strong>
                generation speed can outpace our ability to validate what was generated
            </strong>
            .
        </p>
        <p>The agent can:</p>
        <ul>
            <li>assume requirements that do not exist;</li>
            <li>invent behaviors;</li>
            <li>touch components it should not;</li>
            <li>choose the wrong architecture;</li>
            <li>skip edge cases;</li>
            <li>produce working code that is incompatible with system rules.</li>
        </ul>
        <p>So the problem shifts.</p>
        <p>Before, the bottleneck could be:</p>
        <blockquote>&ldquo;How do we implement this?&rdquo;</blockquote>
        <p>With AI agents it can become:</p>
        <blockquote>
            &ldquo;How do we define exactly what must be implemented, and how do we verify it was
            done correctly?&rdquo;
        </blockquote>
        <p>The specification is a mechanism to reduce that ambiguity.</p>

        <h2>3. The problem of working only with prompts</h2>
        <p>A prompt can be enough for a small task:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Create an endpoint to look up an account.`}
        </pre>
        <p>But it falls short when questions appear such as:</p>
        <ul>
            <li>What does a missing account mean?</li>
            <li>What if it is blocked?</li>
            <li>Who can query it?</li>
            <li>Which fields may be returned?</li>
            <li>Which HTTP status codes must be used?</li>
            <li>Is there pagination?</li>
            <li>How are errors handled?</li>
            <li>Which security rules apply?</li>
            <li>Which tests must exist?</li>
        </ul>
        <p>
            If each of these decisions stays implicit in the model, we are delegating business and
            architecture decisions to a probabilistic system.
        </p>
        <p>SDD proposes the opposite:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Ambiguous prompt → Assumptions → Implementation → Rework

versus

Specification → Clarification → Design → Tasks → Implementation → Verification`}
        </pre>

        <h2>4. The workflow I propose</h2>
        <p>
            From my analysis of SDD and the workflows I have studied, a practical flow can be split
            into seven main stages (plus Explore and Propose as entry).
        </p>

        <h3>4.1 Explore</h3>
        <p>First, investigate the problem. Do not start by coding.</p>
        <p>Analyze:</p>
        <ul>
            <li>existing code;</li>
            <li>architecture;</li>
            <li>dependencies;</li>
            <li>constraints;</li>
            <li>documentation;</li>
            <li>current behavior;</li>
            <li>known requirements.</li>
        </ul>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Problem → Exploration → Technical + functional context`}
        </pre>
        <p>
            The goal is to avoid designing a solution without knowing the system it will join.
        </p>

        <h3>4.2 Propose</h3>
        <p>Form an initial proposal. Answer:</p>
        <ul>
            <li>what do we want to change?</li>
            <li>why?</li>
            <li>which components might be affected?</li>
            <li>what alternatives exist?</li>
        </ul>
        <p>We are still not writing code.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Exploration → Proposal → Is the direction correct?`}
        </pre>
        <p>
            This stage catches problems before investing effort in design or implementation.
        </p>

        <h2>5. Specify</h2>
        <p>
            Here the main artifact appears: <strong>the specification</strong>.
        </p>
        <p>
            A good specification should express expected behavior precisely enough that another
            person — or an agent — can implement it without inventing important decisions.
        </p>
        <p>It may include:</p>
        <ul>
            <li>
                <strong>Goal</strong> — What problem are we solving?
            </li>
            <li>
                <strong>Scope</strong> — What is in and explicitly out of scope?
            </li>
            <li>
                <strong>Business rules</strong> — What conditions must hold?
            </li>
            <li>
                <strong>Behavior</strong> — What should happen in each scenario?
            </li>
            <li>
                <strong>Edge cases</strong> — What happens when something fails?
            </li>
            <li>
                <strong>Acceptance criteria</strong> — How do we know it is done?
            </li>
        </ul>
        <p>A simplified example:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature: Account lookup

Given:
  the customer is authenticated

When:
  they request an existing account

Then:
  the system returns the allowed data

And:
  it does not return sensitive information`}
        </pre>
        <p>
            The specification should not try to describe every line of code. Its job is to describe{" "}
            <strong>the behavior contract</strong>.
        </p>

        <h2>6. Clarify</h2>
        <p>One of the stages I consider most important is clarification.</p>
        <p>A seemingly complete specification can hide ambiguity. For example:</p>
        <blockquote>&ldquo;The user can cancel a transfer.&rdquo;</blockquote>
        <p>But:</p>
        <ul>
            <li>can they cancel after it is processed?</li>
            <li>what if it is pending?</li>
            <li>what if it was already sent to the external system?</li>
            <li>is the money returned immediately?</li>
            <li>what if cancellation fails?</li>
        </ul>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Is there ambiguity?
       │
   ┌───┴───┐
  Yes      No
  │         │
  ▼         ▼
Clarify   Design`}
        </pre>
        <p>
            The goal is to{" "}
            <strong>resolve decisions before the agent has to invent them</strong>.
        </p>

        <h2>7. Design</h2>
        <p>Once the specification is stable, design the technical solution.</p>
        <p>Here elements appear such as:</p>
        <ul>
            <li>architecture;</li>
            <li>components;</li>
            <li>APIs;</li>
            <li>models;</li>
            <li>persistence;</li>
            <li>events;</li>
            <li>integrations;</li>
            <li>security;</li>
            <li>observability;</li>
            <li>technical decisions.</li>
        </ul>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Specification  →  defines WHAT
Design          →  defines HOW
Implementation`}
        </pre>
        <p>
            The specification establishes behavior. Design establishes how to achieve it.
        </p>

        <h2>8. Tasks</h2>
        <p>
            Design can still be too large to hand directly to an agent. So it is split into small,
            verifiable tasks.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature
 │
 ├── Create Account model
 ├── Create repository
 ├── Create service
 ├── Create endpoint
 ├── Implement validations
 ├── Implement error handling
 ├── Create unit tests
 └── Create integration tests`}
        </pre>
        <p>Each task should have:</p>
        <ul>
            <li>defined scope;</li>
            <li>dependencies;</li>
            <li>done criteria;</li>
            <li>enough context;</li>
            <li>reasonable size.</li>
        </ul>
        <p>
            That lets an agent work on a concrete unit without reinterpreting the whole project.
        </p>

        <h2>9. Apply</h2>
        <p>Now the AI agent enters.</p>
        <p>The agent receives:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Context + Specification + Design + Task + Project Rules
                    ↓
            Code + Tests + Changes`}
        </pre>
        <p>The AI no longer simply gets:</p>
        <blockquote>&ldquo;Build this feature.&rdquo;</blockquote>
        <p>Instead it gets something much closer to:</p>
        <blockquote>
            &ldquo;Implement this task according to this specification, this design, and these
            constraints.&rdquo;
        </blockquote>
        <p>The change looks small, but conceptually it is huge.</p>

        <h2>10. Verify</h2>
        <p>Implementation is not considered correct just because it compiles.</p>
        <p>It must be verified against the specification.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Specification → Implementation → Tests → Verification
                                          │
                         ┌────────────────┴────────────────┐
                         ▼                                 ▼
                      Correct                           Incorrect
                         │                                 │
                    continue              change spec or implementation`}
        </pre>
        <p>Validation may include:</p>
        <ul>
            <li>unit tests;</li>
            <li>integration tests;</li>
            <li>contract tests;</li>
            <li>E2E;</li>
            <li>static analysis;</li>
            <li>security;</li>
            <li>mutation testing;</li>
            <li>human review;</li>
            <li>comparison against acceptance criteria.</li>
        </ul>
        <p>The specification thus becomes a reference for evaluation.</p>

        <h2>11. The real SDD cycle</h2>
        <p>Therefore SDD should not be understood as:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Spec → Code`}
        </pre>
        <p>but as a cycle:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Specification → Clarify → Design → Tasks → Implement → Verify
                                                          │
                                                     Feedback
                                                          │
                                                          └→ Specification`}
        </pre>
        <p>
            This point is fundamental.{" "}
            <strong>The specification must evolve with the system.</strong>
        </p>
        <p>
            If desired behavior changes, the specification changes first, then the implementation.
        </p>

        <BlogFigure
            src="/blog/spec-driven-development-spec-vs-code.png"
            alt="Comparison: code-centric approach versus specification-centric approach"
            caption="Figure 2 — From code as the center to the specification as source of truth"
        />

        <h2>12. SDD does not mean removing code</h2>
        <p>SDD does not propose that code stops mattering. Code is still necessary.</p>
        <p>The difference is the relationship between the two:</p>
        <h3>In a traditional approach</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Requirement → Code → Tests`}
        </pre>
        <h3>In an SDD approach</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Requirement → Specification → Design → Tasks → Code → Tests → Verification`}
        </pre>
        <p>
            Code becomes{" "}
            <strong>an implementation of a previously defined intent</strong>.
        </p>

        <h2>13. Relationship with TDD and BDD</h2>
        <p>SDD does not necessarily replace TDD or BDD. They can complement each other.</p>

        <BlogFigure
            src="/blog/spec-driven-development-sdd-bdd-tdd.png"
            alt="SDD defines the contract; BDD the behavior; TDD verifies the code"
            caption="Figure 3 — SDD as a direction layer over BDD and TDD"
        />

        <ul>
            <li>
                <strong>SDD</strong> answers: What should we build?
            </li>
            <li>
                <strong>BDD</strong> helps express: How should it behave from a business view?
            </li>
            <li>
                <strong>TDD</strong> helps check: Does the code correctly implement that behavior?
            </li>
        </ul>
        <p>
            I do not see SDD as an evolution that makes prior methodologies unnecessary. It is
            better seen as{" "}
            <strong>a direction layer over the development process</strong>.
        </p>

        <h2>14. SDD inside AI-assisted software engineering</h2>
        <p>
            One conclusion from my analysis is that SDD makes more sense as part of a larger
            architecture.
        </p>

        <BlogFigure
            src="/blog/spec-driven-development-layers.png"
            alt="Layers: Prompt, Context, SDD, Workflow, Loop, Harness, Agent, Delivery"
            caption="Figure 4 — SDD as the contract inside agent engineering"
        />

        <p>Each layer solves a different problem:</p>
        <ul>
            <li>
                <strong>Prompt Engineering</strong> — How we communicate with the model.
            </li>
            <li>
                <strong>Context Engineering</strong> — What information the model must know.
            </li>
            <li>
                <strong>SDD</strong> — What must be built and under which conditions.
            </li>
            <li>
                <strong>Workflow Engineering</strong> — How to organize the process.
            </li>
            <li>
                <strong>Loop Engineering</strong> — How to set execution and feedback cycles.
            </li>
            <li>
                <strong>Harness Engineering</strong> — What environment, tools, constraints and
                evaluation mechanisms surround the agent.
            </li>
            <li>
                <strong>Agent Engineering</strong> — How to build agents that can do the work.
            </li>
        </ul>
        <p>
            From this view, SDD matters especially because it provides{" "}
            <strong>the contract that limits and orients agent autonomy</strong>.
        </p>

        <h2>15. What changes for the developer?</h2>
        <p>The developer does not disappear. The distribution of work changes.</p>
        <p>Before:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Design       ███
Coding       █████████
Testing      ██`}
        </pre>
        <p>With agents:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Problem understanding   █████
Specification          █████
Architecture           ████
Orchestration           ████
Implementation          ██
Review / Verification  █████`}
        </pre>
        <p>Value shifts progressively from writing code by hand toward:</p>
        <ul>
            <li>understanding the domain;</li>
            <li>making decisions;</li>
            <li>defining constraints;</li>
            <li>designing systems;</li>
            <li>writing specifications;</li>
            <li>reviewing results;</li>
            <li>validating behavior.</li>
        </ul>
        <p>
            That does not mean programming stops being necessary. It means{" "}
            <strong>the ability to write code is no longer the only bottleneck</strong>.
        </p>

        <h2>16. Advantages</h2>
        <p>Main benefits I identify:</p>
        <ul>
            <li>
                <strong>Less ambiguity</strong> — Important decisions become explicit.
            </li>
            <li>
                <strong>Less rework</strong> — Problems can be found before implementation.
            </li>
            <li>
                <strong>Better traceability</strong> — Requirement → Spec → Design → Task → Code →
                Test.
            </li>
            <li>
                <strong>Better human–AI collaboration</strong> — The agent gets a stabler contract
                than an informal chat.
            </li>
            <li>
                <strong>Better maintenance</strong> — The spec documents intent that code alone does
                not always explain.
            </li>
            <li>
                <strong>Higher automation potential</strong> — Small verifiable tasks enable more
                autonomy.
            </li>
        </ul>

        <h2>17. Risks and limitations</h2>
        <p>
            SDD is not magic either. A bad specification simply produces{" "}
            <strong>incorrect code in a more organized way</strong>.
        </p>
        <ul>
            <li>
                <strong>Oversized specifications</strong> — Documenting the whole system in one
                file saturates context again.
            </li>
            <li>
                <strong>Stale specifications</strong> — A spec that does not evolve becomes
                historical documentation.
            </li>
            <li>
                <strong>False sense of precision</strong> — A document can look detailed and still
                hide ambiguity.
            </li>
            <li>
                <strong>Overspecification</strong> — Dictating every implementation detail can
                constrain design unnecessarily.
            </li>
            <li>
                <strong>Upfront cost</strong> — Time must be invested before writing code.
            </li>
        </ul>
        <p>
            That is why I think application should be proportional to problem complexity and
            criticality.
        </p>

        <h2>18. When to use it?</h2>
        <p>Not every task needs the same formality.</p>
        <h3>Small task</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Fix typo / Rename variable / Simple refactor`}
        </pre>
        <p>Probably does not need a full SDD process.</p>
        <h3>Medium feature</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`New endpoint / New UI feature / Persistence change

Spec → Plan → Tasks → Implement → Verify`}
        </pre>
        <h3>Complex feature</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`New microservice / Architecture change / Banking integration
Critical process / Migration

Explore → Propose → Specify → Clarify → Design → Tasks → Implement → Verify`}
        </pre>
        <p>Here I consider the full flow especially valuable.</p>

        <h2>19. My conclusion</h2>
        <p>
            After analyzing SDD and relating it to agent-assisted development, my conclusion is that{" "}
            <strong>
                the most important change is not generating more code, but changing what we treat as
                the primary engineering artifact
            </strong>
            .
        </p>
        <p>For years, code was the center:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`          CODE
        /  |  \\
      Tests Design Docs`}
        </pre>
        <p>With SDD I propose thinking this way:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`             SPECIFICATION
             /     |      \\
         Design   Tasks    Tests
            \\       |       /
             \\      |      /
              IMPLEMENTATION`}
        </pre>
        <p>
            Code remains fundamental, but now there is an explicit layer that represents the intent
            code must fulfill.
        </p>
        <p>
            In an environment where AI can generate software quickly,{" "}
            <strong>
                the specification becomes a tool to control that speed
            </strong>
            .
        </p>
        <p>
            My hypothesis is that the developer who best leverages agents will not necessarily be
            the one who writes the most code, but the one who can:
        </p>
        <ol>
            <li>understand the problem better;</li>
            <li>express intent clearly;</li>
            <li>remove ambiguity;</li>
            <li>design good solutions;</li>
            <li>split work correctly;</li>
            <li>provide adequate context to the agent;</li>
            <li>verify the result rigorously.</li>
        </ol>
        <p>In other words:</p>
        <blockquote>
            <strong>
                When generating code becomes cheap, correctly defining which code must exist becomes
                more valuable.
            </strong>
        </blockquote>
        <p>
            And that is, for me, the main contribution of Spec-Driven Development to software
            development in the age of AI agents.
        </p>

        <h2>Research note</h2>
        <p>
            There is a small terminological ambiguity: you will currently find both{" "}
            <strong>Spec-Driven Development</strong> and{" "}
            <strong>Specification-Driven Development</strong>. Recent literature uses both. For
            this article I use <strong>Spec-Driven Development (SDD)</strong> because it is the
            most practical and recognizable term in the AI-agent context. The core idea also aligns
            with recent work that shifts focus from direct code generation toward a specification as
            a shared source of truth between humans and agents.
        </p>
        <ul>
            <li>
                <a
                    href="https://www.ibm.com/think/topics/spec-driven-development"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    IBM — What is Spec-Driven Development?
                </a>
            </li>
            <li>
                <a
                    href="https://arxiv.org/abs/2602.00180"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    arXiv — Spec-Driven Development: From Code to Contract in the Age of AI Coding
                    Assistants
                </a>
            </li>
            <li>
                <a href="https://specdriven.ai/" target="_blank" rel="noopener noreferrer">
                    specdriven.ai
                </a>
            </li>
        </ul>

        <BlogClosingQuote>
            When generating code becomes cheap, correctly defining which code must exist becomes
            more valuable.
        </BlogClosingQuote>
    </>
);

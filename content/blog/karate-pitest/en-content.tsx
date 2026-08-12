import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const karatePitestContentEn = (
    <>
        <p>
            <em>
                Scope note: this is a personal technical study, not tied to specific people,
                companies or projects. Karate and PIT technical claims are checked against current
                docs. PIT remains a Java/JVM mutation-testing tool with Maven, Gradle and other
                build integrations.
            </em>
        </p>
        <p>
            In modern backends it is common to hear: &ldquo;we have 80% coverage.&rdquo; That metric
            can create false confidence. A line executed by a test{" "}
            <strong>does not mean the test can detect a defect on that line</strong>.
        </p>
        <p>
            The more interesting question:{" "}
            <strong>how do I prove my tests can actually catch errors?</strong>
        </p>
        <p>
            I analyze complementary quality layers: <strong>Gherkin</strong> (how I describe
            behavior), <strong>Karate</strong> (how I run API scenarios),{" "}
            <strong>Testcontainers</strong> (real infrastructure in tests) and{" "}
            <strong>PITest (PIT)</strong> (how effective the tests are). They do not compete — each
            answers a different question.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Gherkin        → how I describe the scenario
Karate         → how I execute the scenario
Testcontainers → real infrastructure
PITest         → I evaluate test effectiveness
        │
        ▼
  HIGHER CONFIDENCE`}
        </pre>

        <BlogFigure
            src="/blog/karate-pitest-card.png"
            alt="Karate + PITest — from coverage to test confidence"
            caption="Two different questions — does the system work? vs can tests detect defects?"
        />

        <h2>1. The problem</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`public boolean approve(double amount) {
    return amount > 1000;
}

@Test
void shouldApproveLargeAmount() {
    assertTrue(service.approve(2000));
}`}
        </pre>
        <p>
            Coverage marks the line as executed. If someone changes it to{" "}
            <code>return amount &gt;= 1000;</code>, the test likely still passes. Coverage = OK;
            defect detection = NO. That is what mutation testing surfaces.
        </p>

        <h2>2. Coverage is not quality</h2>
        <p>
            Line / statement / branch / method coverage measure what ran — not whether assertions
            are strong. A test that only calls <code>paymentService.process(payment)</code> can
            touch many lines without verifying the outcome.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Line Coverage:       95%
Branch Coverage:     90%
Mutation Coverage:   55%`}
        </pre>
        <p>
            Lots of code executed; many incorrect behaviors the tests cannot catch. PIT: traditional
            coverage = what ran; mutation testing = whether tests detect artificial changes.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-coverage-vs-mutation.png"
            alt="Coverage (was it executed?) vs mutation testing (was the defect detected?)"
            caption="Executed ≠ detected — coverage and mutation answer different questions"
        />

        <h2>3. What role does Karate play?</h2>
        <p>
            Karate exercises behavior from the outside: HTTP → API / Controller → Service →
            Repository → Database. Not only <code>service.calculate()</code>, but POST /payments →
            HTTP 201 → JSON → DB state. Closer to real system behavior.
        </p>
        <p>
            It covers REST (GET/POST/PUT/DELETE), status codes, headers, JSON matching, multi-step
            flows and data-driven testing.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Scenario: Create payment
Given url baseUrl
And path '/payments'
And request { "accountId": "123", "amount": 1500 }
When method post
Then status 201
And match response.status == 'APPROVED'`}
        </pre>
        <p>
            What matters is the abstraction level — &ldquo;does the system respond correctly to
            this behavior?&rdquo;, not &ldquo;was this Java line executed?&rdquo;.
        </p>

        <h2>4. What is Gherkin?</h2>
        <p>
            <strong>Gherkin</strong> is a structured text language for writing human-readable test
            cases. It is used in BDD (Behavior-Driven Development) with tools such as Cucumber and
            Karate. It describes <strong>what the system should do</strong>, without focusing on how
            it is implemented.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature: Transfers

Scenario: Complete a successful transfer

  Given the user has an account with a balance of 1000 USD
  And the destination account exists
  When the user transfers 200 USD
  Then the transfer should be approved
  And the balance should be 800 USD`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature   → capability
Scenario  → scenario
Given     → precondition
When      → action
Then      → expected outcome
And       → additional step`}
        </pre>
        <p>
            It separates the <strong>what</strong> from the <strong>how</strong>: business, QA and
            engineering can read the same scenario. Business understands &ldquo;given $1,000, when
            I transfer $200, then balance is $800&rdquo; without Java, Spring, HTTP or SQL.
        </p>
        <p>
            <strong>Gherkin is not a testing tool by itself</strong> — it is a language/format for
            describing scenarios. Karate (or another runner) executes them.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-gherkin.png"
            alt="Gherkin: Feature, Scenario, Given/When/Then shared by QA and Developer"
            caption="Gherkin — shared language: what the system should do, not how it is built"
        />

        <h2>5. Gherkin + Karate</h2>
        <p>
            Karate uses Gherkin-based syntax, but it is not simply &ldquo;Cucumber for APIs&rdquo;.
            It interprets steps and runs HTTP operations:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Scenario: Query an account

  Given url baseUrl
  And path '/accounts/123'
  When method get
  Then status 200
  And match response.status == 'ACTIVE'`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Gherkin  → language/syntax
   │
Karate   → executes
   │
API / System`}
        </pre>
        <p>
            Without Gherkin: <code>@Test void shouldApprovePayment()</code> expresses the test
            implementation. With Gherkin: the scenario better expresses the{" "}
            <strong>expected behavior</strong>. Gherkin/Karate answers which behavior must work; PIT
            helps check how good the tests protecting the code are.
        </p>

        <h2>6. What problem does PITest solve?</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`return customer.getAge() >= 18;   // original
return customer.getAge() > 18;    // mutant

Test with age=25 → passes both → SURVIVED ❌`}
        </pre>
        <p>
            The test cannot tell <code>&gt;=</code> from <code>&gt;</code>. PIT generates
            mutations and runs tests: fail → <strong>killed</strong>; still pass →{" "}
            <strong>survived</strong>.
        </p>

        <h2>7. How PIT works</h2>
        <p>
            Code → compile → bytecode → PIT creates mutants → tests per mutant → KILLED / SURVIVED.
            It works on <strong>bytecode</strong>, not source-text replacement.
        </p>
        <p>
            Operators: conditions, returns, method calls, operators, logic, increments/decrements,
            call removal. Outcomes: Killed, Survived, No coverage, Non viable, Timed out, Memory
            error, Run error.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-mutation-flow.png"
            alt="PIT flow: code, bytecode, mutants, tests, killed vs survived"
            caption="PIT flow — mutations on bytecode; killed vs survived"
        />

        <h2>8. Mutation Score</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Mutation Score = Killed Mutants / Relevant Mutants

100 mutations → 80 killed → score 80%`}
        </pre>
        <p>
            Do not turn the number into a blind target. 90% ≠ &ldquo;safe system&rdquo;; 70% ≠
            &ldquo;bad software&rdquo;. Use it to{" "}
            <strong>find weaknesses in tests</strong>, not to win a percentage contest. Also:{" "}
            <strong>equivalent mutants</strong> — changes that do not alter observable behavior.
            100 mutations ≠ 100 potential defects.
        </p>

        <h2>9. Coverage vs mutation vs integration</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="text-left py-2 pr-4">Metric</th>
                        <th className="text-left py-2">Question</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Line coverage</td>
                        <td className="py-2">Was this line executed?</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Branch coverage</td>
                        <td className="py-2">Were these branches executed?</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Integration tests</td>
                        <td className="py-2">Do components work together?</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">Mutation testing</td>
                        <td className="py-2">Do tests detect incorrect changes?</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            Coverage and mutation are <strong>complementary</strong>, not substitutes. Karate and
            PIT also do not compete: Karate = external behavior (HTTP); PIT = internal
            effectiveness of unit tests.
        </p>

        <h2>10. One bug, two perspectives</h2>
        <p>
            API <code>POST /payments</code>, rule <code>amount &gt; 1000 → APPROVED</code>. Unit
            test with 1500 passes. Karate with 1500 passes. PIT mutates to <code>&gt;=</code>.
            Without a boundary test for <code>amount = 1000</code>, the mutant survives. Lesson:
            executing the condition is not enough — you must test the boundary.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-one-bug.png"
            alt="Change from > to >=: Karate may still pass; PIT reveals the missing boundary test"
            caption="One bug, two perspectives — Karate may pass; PIT demands the 1000 boundary"
        />

        <h2>11. Testing architecture</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Client → REST Controller → Service → Repository → Database

Unit tests (JUnit/Mockito)  → Service
Gherkin + Karate            → behavior + API
Testcontainers              → real DB/broker in the test
PIT                         → unit-test effectiveness`}
        </pre>
        <p>
            Pyramid: large unit base (fast/cheap); Karate for key integration behaviors;
            Testcontainers so infrastructure is not fake; PIT selectively on unit-test quality. Do
            not turn 1000 business rules into 1000 HTTP tests — slow, brittle, expensive.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-strategy.png"
            alt="Java strategy: unit tests, Karate integration, PIT mutation, CI/CD quality gate"
            caption="Strategy — each layer answers a different question"
        />

        <h2>12. Testcontainers: real infrastructure</h2>
        <p>
            A Gherkin/Karate scenario that asserts database state loses value if that DB is a
            shallow mock or an H2 unlike production. <strong>Testcontainers</strong> starts real
            containers (Postgres, Redis, Kafka, etc.) for the test and tears them down afterward.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Karate scenario
      │
      ▼
Spring Boot API
      │
      ▼
Testcontainers ──► Postgres / Redis / Kafka (Docker)
      │
      ▼
Assertions (HTTP + real state)`}
        </pre>
        <p>
            Integration stops being &ldquo;API + mock&rdquo; and gets closer to &ldquo;API +
            runtime-comparable infrastructure&rdquo;. CI/CD needs Docker available; the cost is
            more pipeline time in exchange for fewer production surprises.
        </p>
        <p>Fit in the stack:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Gherkin        → which behavior
Karate         → how I run it (HTTP)
Testcontainers → on which real infra
PIT            → how strong my unit tests are`}
        </pre>

        <BlogFigure
            src="/blog/karate-pitest-testcontainers.png"
            alt="Testing stack layers: Gherkin, Karate, Testcontainers and PITest"
            caption="Full stack — describe, execute, real infra, test effectiveness"
        />

        <h2>13. What to evaluate with PIT? With Karate?</h2>
        <p>
            <strong>Prioritize with PIT:</strong> business logic, services, validations, rules,
            calculations, transformations, important decisions.
        </p>
        <p>
            <strong>Be selective with PIT:</strong> DTOs, getters/setters, config, generated code,
            trivial adapters, logging.
        </p>
        <p>
            <strong>Karate + Gherkin:</strong> critical API flows described as behavior, not the
            whole strategy. <strong>Testcontainers:</strong> when the scenario depends on a real
            DB/broker. Unit tests = most volume; integration = less volume; E2E = few critical
            scenarios.
        </p>

        <h2>14. Realistic CI/CD</h2>
        <p>
            Mutation testing is expensive. PIT recommends frequent analysis on changed code. Not on
            every commit.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Unit tests              → every commit
Integration/Karate+TC   → every PR / pipeline
PIT                     → important PR / touched code / quality pipeline`}
        </pre>

        <BlogFigure
            src="/blog/karate-pitest-pipelines.png"
            alt="Three pipelines: fast, PR and quality with Karate and PIT at different moments"
            caption="Pipelines — fast feedback + deep quality, not everything always"
        />

        <h2>15. Maven, structure and metrics</h2>
        <p>
            PIT integrates via Maven/Gradle plugin and produces an HTML report (classes, methods,
            lines, killed/survived). Keep unit / integration / mutation separable. Testcontainers
            usually lives in the same integration module (JUnit + Docker).
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`project/
├── src/main/java
├── src/test/java          # unit (+ PIT)
├── karate/features/…      # Gherkin scenarios
└── pom.xml                # JUnit, Mockito, Karate, Testcontainers, PIT`}
        </pre>
        <p>
            Combine metrics (illustrative): line/branch coverage + mutation score + Karate
            scenarios. Each answers a different question. More tests ≠ better tests: what matters is{" "}
            <strong>which behavior each test protects</strong>.
        </p>

        <h2>16. Progressive confidence</h2>
        <ul>
            <li>
                <strong>Unit</strong> — does this unit work?
            </li>
            <li>
                <strong>Coverage</strong> — which code are we executing?
            </li>
            <li>
                <strong>PIT</strong> — do we detect incorrect changes?
            </li>
            <li>
                <strong>Gherkin</strong> — which behavior did we agree on?
            </li>
            <li>
                <strong>Karate + Testcontainers</strong> — does the integrated system behave
                correctly on real infra?
            </li>
            <li>
                <strong>E2E</strong> — does the full flow work?
            </li>
        </ul>
        <p>
            In microservices: each service with unit + PIT + Karate; Testcontainers for critical
            external dependencies; plus cross-service Karate scenarios when the flow crosses
            Customer → Payment → Notification.
        </p>

        <h2>17. What I would not do</h2>
        <ul>
            <li>100% coverage by obligation → artificial tests.</li>
            <li>100% mutation score → high effort, low value.</li>
            <li>Karate for absolutely everything → slow/brittle suite.</li>
            <li>PIT on absolutely everything → unnecessarily slow pipeline.</li>
            <li>
                Testcontainers for everything (including pure unit tests) → cost without benefit.
            </li>
            <li>
                Ignoring survived mutants: missing test? or does the mutation not matter?
            </li>
        </ul>

        <h2>18. Conclusion</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GHERKIN        → What should the system do?
KARATE         → Does it (via API)?
TESTCONTAINERS → On real infra?
PIT            → Would my tests detect if it stopped?`}
        </pre>
        <p>
            A mature strategy does not stop at &ldquo;85% coverage.&rdquo; It should answer: which
            behavior we describe, which code / scenarios / integrations we test, on which
            infrastructure, which errors tests can catch, which mutants survive, which risks remain.
        </p>
        <blockquote>
            <strong>Testing does not eliminate risk. It makes risk visible and controllable.</strong>
        </blockquote>
        <p>
            Chain: JUnit/Mockito → unit correctness → PIT → test effectiveness → Gherkin/Karate →
            integration correctness → Testcontainers → infra confidence → CI/CD → release
            confidence.
        </p>
        <p>
            Key evolution: from &ldquo;how much code do my tests execute?&rdquo; to{" "}
            <strong>
                &ldquo;how reliable is my evidence that the software works and that tests catch
                regressions?&rdquo;
            </strong>
        </p>
        <p>
            <em>
                There are no universal ideal percentages for coverage or mutation score: thresholds
                depend on risk, criticality and cost. Sources: official Karate, PIT and
                Testcontainers docs.
            </em>
        </p>

        <BlogClosingQuote>
            Gherkin describes the what. Karate runs it. Testcontainers gives real infra. PIT asks
            whether your tests actually protect the code.
        </BlogClosingQuote>
    </>
);

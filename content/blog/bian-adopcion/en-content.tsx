import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const bianAdopcionContentEn = (
    <>
        <p>
            Recently I have been studying{" "}
            <strong>BIAN (Banking Industry Architecture Network)</strong> and found an idea that
            stood out: <strong>adopting BIAN does not mean rebuilding an entire bank from scratch</strong>.
        </p>
        <p>
            One of the most common mistakes in banking modernization is assuming that the only
            option is a full Core Banking replacement spanning several years. In practice, that is
            rarely viable because of cost, risk, and complexity.
        </p>
        <p>
            BIAN proposes a different path:{" "}
            <strong>evolve the architecture gradually</strong>, decoupling business capabilities
            while existing systems keep running.
        </p>

        <h2>What does BIAN actually provide?</h2>
        <p>BIAN is not a framework or a technology.</p>
        <p>
            It is a standard that describes how to organize banking business capabilities through{" "}
            <strong>Service Domains</strong>.
        </p>
        <p>Some examples:</p>
        <ul>
            <li>Card Management</li>
            <li>Current Account</li>
            <li>Customer Management</li>
            <li>Loan Management</li>
            <li>Payments</li>
        </ul>
        <p>
            Each domain defines clear responsibilities, operations, and business objects so the
            whole organization can share one language.
        </p>
        <p>
            That improves interoperability across teams, vendors, and the bank&apos;s different
            systems.
        </p>

        <h2>Implementation does not start by writing code</h2>
        <p>
            One concept that stood out is splitting the work into two cells that move forward in
            parallel.
        </p>

        <h3>Design Cell</h3>
        <p>Its responsibility is to define the business architecture.</p>
        <p>It produces artifacts such as:</p>
        <ul>
            <li>Dependency diagrams.</li>
            <li>Capability models.</li>
            <li>Ontologies.</li>
            <li>Relationships between Service Domains.</li>
            <li>Decoupled design.</li>
        </ul>
        <p>
            That work is completely independent of Java, .NET, Go, or any other technology.
        </p>

        <h3>Implementation Cell</h3>
        <p>This cell takes those designs and turns them into technical solutions.</p>
        <p>Here technologies show up, for example:</p>
        <ul>
            <li>Java Spring Boot</li>
            <li>Go</li>
            <li>FastAPI</li>
            <li>Kubernetes</li>
            <li>Kafka</li>
            <li>Oracle</li>
        </ul>
        <p>
            By keeping roughly a one- or two-sprint gap between both cells, the development team
            always works on previously defined designs, reducing rework and ad-hoc decisions.
        </p>

        <BlogFigure
            src="/blog/bian-dos-celulas.png"
            alt="Two working cells: Design and Implementation, advancing in parallel with a 1–2 sprint lead"
            caption="Design and Implementation in parallel — artifacts first, code second"
        />

        <h2>An evolutionary adoption</h2>
        <p>Another interesting point: BIAN does not require a full migration.</p>
        <p>You can start with a single product.</p>
        <p>For example:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Card Management`}
        </pre>
        <p>While the rest of Core Banking remains a traditional monolith.</p>
        <p>Over time you can add more domains:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Customer Management

↓

Loan Management

↓

Payments

↓

Current Account`}
        </pre>
        <p>This hybrid approach significantly lowers transformation risk.</p>

        <BlogFigure
            src="/blog/bian-adopcion-evolutiva.png"
            alt="Evolutionary BIAN adoption: from monolithic Core to a decoupled Service Domain architecture"
            caption="From monolith to Service Domains — incremental evolution, not Big Bang"
        />

        <h2>Where does OpenAPI fit?</h2>
        <p>This is where a powerful combination appears.</p>
        <p>BIAN answers:</p>
        <p>
            <strong>Which capabilities should the business offer?</strong>
        </p>
        <p>OpenAPI answers:</p>
        <p>
            <strong>How is that capability exposed technically?</strong>
        </p>
        <p>Suppose BIAN defines the Service Domain:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Card Management`}
        </pre>
        <p>And a capability:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Retrieve Credit Card`}
        </pre>
        <p>An integration architect can turn it into an OpenAPI contract:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GET /credit-cards/{cardId}`}
        </pre>
        <p>That contract describes:</p>
        <ul>
            <li>Parameters.</li>
            <li>Responses.</li>
            <li>JSON schemas.</li>
            <li>Errors.</li>
            <li>Security.</li>
        </ul>
        <p>
            From that point on, frontend, QA, and backend can work against a shared contract.
        </p>

        <h2>Java implementation example</h2>
        <p>A simplified implementation could follow this flow:</p>

        <BlogFigure
            src="/blog/bian-openapi-java-flujo.png"
            alt="BIAN → OpenAPI → Java flow: from Card Management Service Domain to Oracle via Spring Boot"
            caption="BIAN → OpenAPI → Java — from business design to implementation"
        />

        <p>The developer does not need to invent the REST interface.</p>
        <p>
            OpenAPI can generate the Java interface automatically, while the team implements only
            the business logic.
        </p>
        <p>For example, a request:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GET /credit-cards/12345`}
        </pre>
        <p>Could return:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`{
  "cardId": "12345",
  "balance": 1200.50,
  "availableCredit": 3800.50,
  "currency": "USD"
}`}
        </pre>
        <p>
            This reduces inconsistencies and ensures every consumer uses exactly the same
            contract.
        </p>

        <h2>More than an architecture</h2>
        <p>BIAN&apos;s greatest value is not only technical organization.</p>
        <p>It is the ability to decouple the business from the programming language.</p>
        <p>
            The design can stay stable while implementations evolve with new technologies.
        </p>
        <p>Today one domain may be implemented in Java.</p>
        <p>Tomorrow another in Go.</p>
        <p>Another with Python and FastAPI.</p>
        <p>
            As long as everyone respects the same business model and integration contract, the
            architecture stays consistent.
        </p>

        <h2>Where does TOGAF fit?</h2>
        <p>
            While learning, I also found that BIAN does not aim to replace existing enterprise
            architecture frameworks — it complements them.
        </p>
        <p>
            That is where <strong>TOGAF (The Open Group Architecture Framework)</strong> comes in,
            one of the most widely used frameworks to design and govern enterprise architectures.
        </p>
        <p>
            While TOGAF provides a methodology to define an organization&apos;s architecture
            through phases such as vision, business, applications, data, and technology, BIAN
            contributes a specialized model for the banking domain.
        </p>
        <p>In other words:</p>
        <ul>
            <li>
                <strong>TOGAF</strong> helps answer{" "}
                <strong>how to evolve the organization&apos;s architecture</strong>.
            </li>
            <li>
                <strong>BIAN</strong> defines{" "}
                <strong>which banking capabilities should exist</strong> and how to organize them.
            </li>
            <li>
                <strong>OpenAPI</strong> specifies{" "}
                <strong>how to expose those capabilities technically via REST APIs</strong>.
            </li>
        </ul>
        <p>Far from competing, these standards reinforce each other.</p>
        <p>A typical scenario in a financial institution would look like:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`TOGAF
    │
    ▼
Defines strategy and enterprise architecture
    │
    ▼
BIAN
    │
    ▼
Models banking Service Domains
    │
    ▼
OpenAPI
    │
    ▼
Defines REST contracts
    │
    ▼
Java, Go, or Python implement the microservices`}
        </pre>
        <p>
            This keeps business, architecture, and implementation decisions aligned. Enterprise
            strategy guides the organization&apos;s evolution, BIAN provides a shared language for
            banking capabilities, and OpenAPI sets clear contracts so delivery teams build
            consistent, interoperable solutions.
        </p>

        <h2>Final thoughts</h2>
        <p>
            After reviewing several BIAN materials, one of the conclusions I find most important
            is that banking modernization should not be approached as a massive replacement
            project.
        </p>
        <p>
            An incremental strategy based on Service Domains, OpenAPI contracts, and specialized
            design and implementation teams reduces risk, speeds delivery, and keeps an
            architecture ready to evolve for years.
        </p>
        <p>
            Banking modernization does not depend solely on adopting microservices or moving to
            the cloud. It requires an enterprise architecture that connects business strategy with
            technical implementation. Along that path, TOGAF provides the method, BIAN the
            business model, and OpenAPI the integration contract. Together they form a solid
            foundation to build modern, decoupled banking platforms ready to evolve.
        </p>

        <BlogClosingQuote>
            TOGAF provides the method, BIAN the business model, and OpenAPI the contract.
            Together they connect strategy and implementation — without rewriting the bank in one
            shot.
        </BlogClosingQuote>
    </>
);

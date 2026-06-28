import Image from "next/image";

const diagramClass = "w-full h-auto";

export const npeContentEn = (
    <>
        <p>
            At scale, a simple logic failure can trigger catastrophic infrastructure collapse. This
            analysis examines a documented industry incident: a financial services platform processing
            asynchronous message batches, where a single corrupt record with a <code>null</code> value
            froze consumer threads, accumulated millions of queued events, and caused massive losses
            due to delayed transactions.
        </p>

        <blockquote>
            Anonymized case. No company names, customer data, or confidential intellectual property.
            Based on publicly documented incident patterns in software engineering.
        </blockquote>

        <h2>1. Executive summary</h2>
        <p>
            A basic error (<code>NullPointerException</code> in Java) escalated into a multi-hour
            service outage. The incident halted asynchronous payment processing, causing direct
            financial losses due to cascading failure across messaging consumers.
        </p>
        <ul>
            <li>
                <strong>Root cause:</strong> nested object access without null checks in a batch
                consumer.
            </li>
            <li>
                <strong>Impact:</strong> infinite retries on the same offset, million-message consumer
                lag, all user payments stopped.
            </li>
            <li>
                <strong>Solution:</strong> early validation, DLQ with partial commits, and defensive
                typing.
            </li>
        </ul>

        <h2>2. Original architecture and failure origin</h2>
        <p>The system used an event-driven distributed architecture:</p>
        <ul>
            <li>
                A microservices cluster published messages to an <strong>Apache Kafka</strong> queue.
            </li>
            <li>
                A group of <strong>Java (Spring Boot)</strong> consumers read messages in batches (500
                events) to process financial transactions.
            </li>
        </ul>

        <h3>Failure mechanism</h3>
        <ol>
            <li>
                <strong>Poison in the batch:</strong> a producer sent a malformed message where a
                required audit field was <code>null</code>.
            </li>
            <li>
                <strong>No sanitization:</strong> the consumer called a method on that field without
                checking object state, throwing a <code>NullPointerException</code>.
            </li>
            <li>
                <strong>Kafka infinite loop:</strong> when the entire batch failed, the consumer did
                not commit the offset. The framework, ensuring <em>at-least-once delivery</em>, kept
                retrying the same batch indefinitely.
            </li>
            <li>
                <strong>Cascading failure:</strong> the thread got stuck retrying the poison message.
                The queue accumulated millions of backlogged messages (lag), stopping payment
                processing for the entire platform.
            </li>
        </ol>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-collapse-diagram.png"
                alt="System collapse diagram: producers, Kafka, poison message in batch, Spring Boot consumers in infinite retry loop and accumulated lag"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                System collapse diagram — original architecture and failure origin
            </figcaption>
        </figure>

        <hr />

        <h2>3. Architectural redesign</h2>
        <p>
            To prevent a software bug from taking down infrastructure, the flow was redesigned with
            three resilience patterns:
        </p>

        <h3>A. Early validation (fail-fast layer)</h3>
        <p>
            Interceptor layer with schema validation (<strong>Avro</strong> or Jakarta Bean Validation
            with <code>@NotNull</code>) before the main processor touches the batch. If the object
            violates the contract, it is discarded or routed immediately.
        </p>

        <h3>B. Dead Letter Queue (DLQ) with non-blocking retries</h3>
        <p>A batch cannot fail because of a single corrupt message:</p>
        <ol>
            <li>
                <strong>Error isolation:</strong> on unexpected exceptions, the consumer separates
                the problematic message.
            </li>
            <li>
                <strong>Process the rest:</strong> commit the 499 valid messages in the batch to keep
                overall operations running.
            </li>
            <li>
                <strong>Route to DLQ:</strong> the corrupt message goes to a retry topic or directly
                to a <strong>Dead Letter Queue</strong>. A secondary service alerts without freezing
                the main pipeline.
            </li>
        </ol>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-dlq-resilience.png"
                alt="Resilience diagram: corrupt message isolated to DLQ while 499 valid messages flow to the database"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Dead Letter Queue pattern — corrupt message isolation
            </figcaption>
        </figure>

        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Aspect</th>
                        <th className="px-3 py-2 text-left">Before</th>
                        <th className="px-3 py-2 text-left">After</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Batch commit</td>
                        <td className="px-3 py-2">All or nothing</td>
                        <td className="px-3 py-2">Partial + DLQ</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Corrupt message</td>
                        <td className="px-3 py-2">Infinite retry</td>
                        <td className="px-3 py-2">Isolation and alert</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">Availability</td>
                        <td className="px-3 py-2">1 msg freezes all</td>
                        <td className="px-3 py-2">99.9% of transactions continue</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>C. Safe typing (defensive migration)</h3>
        <p>
            Eliminate null-prone direct access using strict <code>Optional</code>, or migrate the
            critical component to <strong>Kotlin</strong>, whose type system natively distinguishes
            nullable and non-nullable values, eliminating NPEs at compile time.
        </p>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-code-comparison.png"
                alt="Code comparison: NPE-vulnerable Java vs safe approach with Optional and Kotlin"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Traditional code vs safe approach with Optional and Kotlin
            </figcaption>
        </figure>

        <hr />

        <h2>4. Monitoring and trade-offs</h2>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-observability-dashboard.png"
                alt="Observability dashboard: Kafka consumer lag, DLQ messages and PagerDuty alerts"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Production observability dashboard — lag, DLQ and alert metrics
            </figcaption>
        </figure>

        <ul>
            <li>
                <strong>Observability:</strong> <strong>Prometheus</strong> metrics for consumer lag
                and DLQ diversion rate, with <strong>PagerDuty</strong> alerts when lag exceeds
                critical thresholds.
            </li>
            <li>
                <strong>Trade-off:</strong> routing messages to a DLQ may alter strict event ordering
                for corrupt records. In financial systems, sacrificing that order is justified to
                preserve high availability for 99.9% of legitimate transactions.
            </li>
        </ul>

        <h3>Key lessons</h3>
        <ul>
            <li>A one-line bug can take down entire infrastructure at scale.</li>
            <li>
                <em>At-least-once</em> without poison message handling is a silent trap.
            </li>
            <li>Resilience is designed: validation, DLQ, and observability are not optional.</li>
        </ul>

        <blockquote>
            Anyone can write code that works locally. Diagnosing how a system fails at scale and
            redesigning it with clear trade-offs is what separates a senior profile from someone who
            only writes code.
        </blockquote>
    </>
);

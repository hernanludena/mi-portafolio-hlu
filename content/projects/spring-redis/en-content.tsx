import BlogFigure from "@/components/blog-figure";

export const springRedisDetailEn = (
    <>
        <p>
            High-performance application built with <strong>Spring Boot 4</strong> and <strong>Java 25</strong>
            to manage, monitor, and distribute real-time exchange rates. Redis powers caching, messaging,
            and event processing — not just auxiliary storage.
        </p>

        <h2>Architecture</h2>
        <p>Clean Architecture across three layers:</p>
        <ul>
            <li><strong>domain:</strong> entities (<code>Currency</code>), events, and business rules.</li>
            <li><strong>application:</strong> use cases and orchestration.</li>
            <li><strong>infrastructure:</strong> REST API, Redis persistence, schedulers, and messaging.</li>
        </ul>

        <h2>Key features</h2>
        <ul>
            <li>Automatic price ingestion every <strong>30 seconds</strong> with <code>@Retryable</code>.</li>
            <li><strong>ShedLock</strong> so only one instance processes in clustered environments.</li>
            <li><strong>Pub/Sub</strong> for min/max price alerts on each batch.</li>
            <li><strong>Redis Streams</strong> for audit logging and async processing.</li>
            <li>Pipelines and rankings for sub-millisecond API responses.</li>
        </ul>

        <BlogFigure
            src="/projects/spring-redis-cover.png"
            alt="Redis Insight Browse view of the currency service"
            caption="Redis Insight: cache, streams, rate limit, and real-time metrics"
        />

        <h2>Pub/Sub in action</h2>
        <p>
            After each load, the service publishes the batch&apos;s highest and lowest prices on the{" "}
            <code>currency-notification</code> channel — instant alerts without blocking the API.
        </p>
        <BlogFigure
            src="/projects/spring-redis-pubsub.png"
            alt="currency-notification Pub/Sub channel in Redis Insight"
            caption="Pub/Sub — min/max price notifications per batch"
        />

        <h2>Read metrics</h2>
        <p>
            Per-currency counters (e.g. USD) track how many times each code was queried via{" "}
            <code>GET /currencies/&#123;code&#125;</code>.
        </p>
        <BlogFigure
            src="/projects/spring-redis-metricas.png"
            alt="Per-currency read metrics in Redis"
            caption="Metrics — read counters per currency code"
        />

        <h2>Rate limiting</h2>
        <p>
            Abuse protection: maximum <strong>10 requests per 60 seconds</strong> per user, implemented
            with Redis counters.
        </p>
        <BlogFigure
            src="/projects/spring-redis-ratelimit.png"
            alt="Per-userId rate limit in Redis"
            caption="Rate limit — 10 req / 60 s per user"
        />

        <h2>How to run</h2>
        <ol>
            <li><code>docker compose up -d</code> — Redis + Redis Insight at <code>localhost:5540</code>.</li>
            <li><code>./mvnw spring-boot:run</code> — starts the Spring Boot API.</li>
            <li>Try endpoints with <code>http/currency-api.http</code> or Postman.</li>
        </ol>

        <p>
            Full documentation in the repo: step-by-step guides, functional Redis docs, Streams (RF-09),
            retries (RNF-03), and OpenAPI at <code>src/main/resources/openapi.yaml</code>.
        </p>
    </>
);

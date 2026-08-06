import BlogFigure from "@/components/blog-figure";

export const kafkaSpringAsyncDetailEn = (
    <>
        <p>
            <strong>Async streaming</strong> demo with <strong>Spring Boot 3.3</strong>,{" "}
            <strong>Apache Kafka</strong>, and <strong>Spring Cloud Stream</strong>. Simulates
            rider events (location + status): the producer publishes via REST +{" "}
            <code>KafkaTemplate</code>; the consumer processes with functional beans (
            <code>java.util.function.Consumer</code>).
        </p>

        <BlogFigure
            src="/projects/kafka-spring-async-thumbnail-original.png"
            alt="Kafka Spring Async thumbnail — Async Streaming and Cloud Stream"
            caption="Preview — Spring Kafka + Cloud Stream"
        />

        <h2>Architecture</h2>
        <ul>
            <li>
                <strong>producer-service (:8080):</strong> REST →{" "}
                <code>DriverProducerService</code> → Kafka (key = <code>riderId</code>)
            </li>
            <li>
                <strong>Apache Kafka (:9092):</strong> topics{" "}
                <code>rider-location</code> and <code>rider-status</code> (3 partitions each)
            </li>
            <li>
                <strong>consumer-service (:8081):</strong> Spring Cloud Stream —{" "}
                <code>locationBinding</code> / <code>statusBinding</code> + events UI
            </li>
        </ul>

        <BlogFigure
            src="/projects/kafka-spring-async-ui.png"
            alt="Rider events consumer UI on localhost:8081"
            caption="Consumer UI — last 100 events (location / status)"
        />

        <h2>Data flow</h2>
        <ol>
            <li>
                Client hits producer REST (<code>/api/riders/location</code> or{" "}
                <code>/status</code>)
            </li>
            <li>
                Message with <strong>key = riderId</strong> → same partition for the same rider
                (sticky order)
            </li>
            <li>Cloud Stream consumer deserializes, logs, and feeds the UI</li>
        </ol>

        <h2>Producer API</h2>
        <ul>
            <li>
                <code>POST /api/riders/location</code> — JSON <code>LocationUpdate</code> body →{" "}
                <strong>202 Accepted</strong>
            </li>
            <li>
                <code>POST /api/riders/status?riderId=&amp;status=</code> →{" "}
                <strong>202 Accepted</strong>
            </li>
        </ul>

        <BlogFigure
            src="/projects/kafka-spring-async-location.png"
            alt="Postman POST location with 202 Accepted response"
            caption="Location — POST /api/riders/location → 202"
        />

        <BlogFigure
            src="/projects/kafka-spring-async-status.png"
            alt="Postman POST status with 202 Accepted response"
            caption="Status — POST /api/riders/status → 202"
        />

        <h2>Design decisions</h2>
        <ul>
            <li>3 partitions per topic → load balancing when scaling consumers</li>
            <li>
                Key <code>riderId</code> → per-rider order on the same partition
            </li>
            <li>
                Producer: Spring Kafka · Consumer: Cloud Stream functional (legacy{" "}
                <code>@KafkaListener</code> commented for comparison)
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Java 17 · Spring Boot 3.3.5</li>
            <li>spring-kafka · spring-cloud-starter-stream-kafka (2023.0.3)</li>
            <li>Confluent Kafka 7.4 + Zookeeper (Docker Compose)</li>
        </ul>

        <h2>How to run</h2>
        <ol>
            <li>
                <code>docker compose up -d</code> — Kafka on <code>:9092</code>
            </li>
            <li>
                <code>cd producer-service && mvn spring-boot:run</code> — creates topics
            </li>
            <li>
                <code>cd consumer-service && mvn spring-boot:run</code> — UI on{" "}
                <code>:8081</code>
            </li>
            <li>Smoke test with curl/Postman against <code>/api/riders/location</code></li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/kafka-spring-async"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/kafka-spring-async
            </a>
            .
        </p>
    </>
);

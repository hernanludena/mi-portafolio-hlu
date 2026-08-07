import BlogFigure from "@/components/blog-figure";

export const hexagonalArchitectureDetailEn = (
    <>
        <p>
            <strong>Spring Boot</strong> demo applying <strong>hexagonal architecture</strong>{" "}
            (ports &amp; adapters) with <strong>Apache Kafka</strong>, <strong>Avro</strong>, and{" "}
            <strong>Confluent Schema Registry</strong>. Domain stays free of Kafka/HTTP/DB; adapters
            wire the real tech.
        </p>

        <BlogFigure
            src="/projects/hexagonalarchitecture-thumbnail-original.png"
            alt="Hexagonal Architecture thumbnail — ports & adapters, Spring, Kafka, Avro"
            caption="Preview — Domain → Application → Infrastructure"
        />

        <h2>Architecture layers</h2>
        <ul>
            <li>
                <strong>Domain:</strong> entities (<code>User</code>, <code>Role</code>), domain
                events, ports (<code>UserRepository</code>, <code>UserEvent</code>)
            </li>
            <li>
                <strong>Application:</strong> commands + handlers + Mediator — use cases depend only
                on ports
            </li>
            <li>
                <strong>Infrastructure:</strong> REST, Kafka producer/consumer, DB, MapStruct mappers
            </li>
        </ul>

        <h2>Driving vs driven</h2>
        <ul>
            <li>
                <strong>Driving:</strong> <code>UserController</code> (REST) ·{" "}
                <code>UserKafkaEventConsumer</code> (Kafka)
            </li>
            <li>
                <strong>Driven:</strong> <code>UserRepositoryImpl</code> (DB) ·{" "}
                <code>UserEventProducer</code> (Kafka via port)
            </li>
        </ul>

        <h2>Kafka topics</h2>
        <ul>
            <li>
                <code>user.events</code> — create / email update / delete (API publish + consumer)
            </li>
            <li>
                <code>user.validation.events</code> — verification / deactivation after handlers
            </li>
        </ul>

        <h2>Two publish paths</h2>
        <ol>
            <li>
                <strong>Direct (demo):</strong> Controller → <code>KafkaProducer</code> →{" "}
                <code>user.events</code> — kicks the pipeline from Postman
            </li>
            <li>
                <strong>Via port (preferred):</strong> Handler → <code>UserEvent</code> →{" "}
                <code>UserEventProducer</code> → <code>user.validation.events</code>
            </li>
        </ol>

        <h2>End-to-end smoke</h2>
        <ol>
            <li>
                <code>GET /api/v1/users/create</code> → publish to <code>user.events</code>
            </li>
            <li>
                Consumer → Specific consumer → Mediator → <code>UserCreatedHandler</code> → save
            </li>
            <li>
                Handler publishes via port → <code>user.validation.events</code>
            </li>
            <li>
                Optional: <code>GET /api/v1/users/1</code> — read persisted user
            </li>
        </ol>

        <BlogFigure
            src="/projects/hexagonalarchitecture-create.png"
            alt="Postman GET /api/v1/users/create with 200 OK"
            caption="Create — GET /api/v1/users/create → publishes UserCreatedEvent"
        />

        <BlogFigure
            src="/projects/hexagonalarchitecture-consult.png"
            alt="Postman GET /api/v1/users/1 returning user JSON"
            caption="Consult — GET /api/v1/users/1 after consumer persists"
        />

        <BlogFigure
            src="/projects/hexagonalarchitecture-control-center.png"
            alt="Confluent Control Center cluster overview on localhost:9021"
            caption="Control Center — Kafka cluster overview (:9021)"
        />

        <h2>Stack</h2>
        <ul>
            <li>Java 21 · Spring Boot 3.5.5 · Spring Kafka</li>
            <li>Apache Avro · Confluent Schema Registry</li>
            <li>Lombok · MapStruct · Actuator · Spring Kafka Test</li>
            <li>Docker Compose: Kafka, Zookeeper, Schema Registry, Control Center</li>
        </ul>

        <h2>How to run</h2>
        <ol>
            <li>
                <code>docker compose up -d</code>
            </li>
            <li>
                <code>./mvnw clean compile && ./mvnw spring-boot:run</code>
            </li>
            <li>
                App <code>:8080</code> · Control Center{" "}
                <a href="http://localhost:9021" target="_blank" rel="noopener noreferrer">
                    :9021
                </a>
            </li>
            <li>
                Smoke: <code>GET /api/v1/users/create</code> then{" "}
                <code>GET /api/v1/users/1</code>
            </li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/hexagonalarchitecture"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/hexagonalarchitecture
            </a>
            .
        </p>
    </>
);

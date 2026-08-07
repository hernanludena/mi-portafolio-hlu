import BlogFigure from "@/components/blog-figure";

export const hexagonalArchitectureDetailEs = (
    <>
        <p>
            Demo <strong>Spring Boot</strong> con <strong>arquitectura hexagonal</strong> (ports
            &amp; adapters) + <strong>Apache Kafka</strong>, <strong>Avro</strong> y{" "}
            <strong>Confluent Schema Registry</strong>. El dominio no depende de Kafka/HTTP/DB; los
            adapters conectan la tecnología real.
        </p>

        <BlogFigure
            src="/projects/hexagonalarchitecture-thumbnail-original.png"
            alt="Miniatura Hexagonal Architecture — ports & adapters, Spring, Kafka, Avro"
            caption="Vista previa — Domain → Application → Infrastructure"
        />

        <h2>Capas</h2>
        <ul>
            <li>
                <strong>Domain:</strong> entidades (<code>User</code>, <code>Role</code>), eventos
                de dominio, puertos (<code>UserRepository</code>, <code>UserEvent</code>)
            </li>
            <li>
                <strong>Application:</strong> commands + handlers + Mediator — casos de uso solo
                dependen de puertos
            </li>
            <li>
                <strong>Infrastructure:</strong> REST, Kafka producer/consumer, DB, mappers MapStruct
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
                <code>UserEventProducer</code> (Kafka vía puerto)
            </li>
        </ul>

        <h2>Topics Kafka</h2>
        <ul>
            <li>
                <code>user.events</code> — create / update email / delete (API + consumer)
            </li>
            <li>
                <code>user.validation.events</code> — verificación / desactivación tras handlers
            </li>
        </ul>

        <h2>Dos caminos de publicación</h2>
        <ol>
            <li>
                <strong>Directo (demo):</strong> Controller → <code>KafkaProducer</code> →{" "}
                <code>user.events</code> — dispara el pipeline desde Postman
            </li>
            <li>
                <strong>Vía puerto (preferido):</strong> Handler → <code>UserEvent</code> →{" "}
                <code>UserEventProducer</code> → <code>user.validation.events</code>
            </li>
        </ol>

        <h2>Smoke end-to-end</h2>
        <ol>
            <li>
                <code>GET /api/v1/users/create</code> → publica en <code>user.events</code>
            </li>
            <li>
                Consumer → Specific consumer → Mediator → <code>UserCreatedHandler</code> → save
            </li>
            <li>
                Handler publica vía puerto → <code>user.validation.events</code>
            </li>
            <li>
                Opcional: <code>GET /api/v1/users/1</code> — lee usuario persistido
            </li>
        </ol>

        <BlogFigure
            src="/projects/hexagonalarchitecture-create.png"
            alt="Postman GET /api/v1/users/create con 200 OK"
            caption="Create — GET /api/v1/users/create → publica UserCreatedEvent"
        />

        <BlogFigure
            src="/projects/hexagonalarchitecture-consult.png"
            alt="Postman GET /api/v1/users/1 devolviendo JSON de usuario"
            caption="Consult — GET /api/v1/users/1 tras persistir el consumer"
        />

        <BlogFigure
            src="/projects/hexagonalarchitecture-control-center.png"
            alt="Confluent Control Center overview del cluster en localhost:9021"
            caption="Control Center — overview del cluster Kafka (:9021)"
        />

        <h2>Stack</h2>
        <ul>
            <li>Java 21 · Spring Boot 3.5.5 · Spring Kafka</li>
            <li>Apache Avro · Confluent Schema Registry</li>
            <li>Lombok · MapStruct · Actuator · Spring Kafka Test</li>
            <li>Docker Compose: Kafka, Zookeeper, Schema Registry, Control Center</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
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
                Smoke: <code>GET /api/v1/users/create</code> luego{" "}
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

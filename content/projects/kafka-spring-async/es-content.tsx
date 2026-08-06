import BlogFigure from "@/components/blog-figure";

export const kafkaSpringAsyncDetailEs = (
    <>
        <p>
            Demo de <strong>streaming asíncrono</strong> con <strong>Spring Boot 3.3</strong>,{" "}
            <strong>Apache Kafka</strong> y <strong>Spring Cloud Stream</strong>. Simula eventos de
            riders (ubicación + estado): el producer publica vía REST +{" "}
            <code>KafkaTemplate</code>; el consumer procesa con beans funcionales (
            <code>java.util.function.Consumer</code>).
        </p>

        <BlogFigure
            src="/projects/kafka-spring-async-thumbnail-original.png"
            alt="Miniatura Kafka Spring Async — Async Streaming y Cloud Stream"
            caption="Vista previa — Spring Kafka + Cloud Stream"
        />

        <h2>Arquitectura</h2>
        <ul>
            <li>
                <strong>producer-service (:8080):</strong> REST →{" "}
                <code>DriverProducerService</code> → Kafka (key = <code>riderId</code>)
            </li>
            <li>
                <strong>Apache Kafka (:9092):</strong> topics{" "}
                <code>rider-location</code> y <code>rider-status</code> (3 particiones c/u)
            </li>
            <li>
                <strong>consumer-service (:8081):</strong> Spring Cloud Stream — bindings{" "}
                <code>locationBinding</code> / <code>statusBinding</code> + UI de eventos
            </li>
        </ul>

        <BlogFigure
            src="/projects/kafka-spring-async-ui.png"
            alt="UI Rider events del consumer en localhost:8081"
            caption="Consumer UI — últimos 100 eventos (location / status)"
        />

        <h2>Flujo de datos</h2>
        <ol>
            <li>Cliente llama producer REST (<code>/api/riders/location</code> o{" "}
                <code>/status</code>)</li>
            <li>
                Mensaje con <strong>key = riderId</strong> → misma partición para el mismo rider
                (orden sticky)
            </li>
            <li>Consumer Cloud Stream deserializa, loguea y alimenta la UI</li>
        </ol>

        <h2>API producer</h2>
        <ul>
            <li>
                <code>POST /api/riders/location</code> — body JSON{" "}
                <code>LocationUpdate</code> → <strong>202 Accepted</strong>
            </li>
            <li>
                <code>POST /api/riders/status?riderId=&amp;status=</code> →{" "}
                <strong>202 Accepted</strong>
            </li>
        </ul>

        <BlogFigure
            src="/projects/kafka-spring-async-location.png"
            alt="Postman POST location con respuesta 202 Accepted"
            caption="Location — POST /api/riders/location → 202"
        />

        <BlogFigure
            src="/projects/kafka-spring-async-status.png"
            alt="Postman POST status con respuesta 202 Accepted"
            caption="Status — POST /api/riders/status → 202"
        />

        <h2>Decisiones de diseño</h2>
        <ul>
            <li>3 particiones por topic → balanceo al escalar consumers</li>
            <li>
                Key <code>riderId</code> → orden por rider en la misma partición
            </li>
            <li>
                Producer: Spring Kafka · Consumer: Cloud Stream functional (legacy{" "}
                <code>@KafkaListener</code> comentado para comparar)
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Java 17 · Spring Boot 3.3.5</li>
            <li>spring-kafka · spring-cloud-starter-stream-kafka (2023.0.3)</li>
            <li>Confluent Kafka 7.4 + Zookeeper (Docker Compose)</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>
                <code>docker compose up -d</code> — Kafka en <code>:9092</code>
            </li>
            <li>
                <code>cd producer-service && mvn spring-boot:run</code> — crea topics
            </li>
            <li>
                <code>cd consumer-service && mvn spring-boot:run</code> — UI en{" "}
                <code>:8081</code>
            </li>
            <li>Smoke test con curl/Postman a <code>/api/riders/location</code></li>
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

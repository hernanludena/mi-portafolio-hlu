import BlogFigure from "@/components/blog-figure";

export const springRedisDetailEs = (
    <>
        <p>
            Aplicación de alto rendimiento con <strong>Spring Boot 4</strong> y <strong>Java 25</strong> para
            gestionar, monitorear y distribuir tipos de cambio en tiempo real. Redis actúa como motor de
            caché, mensajería y procesamiento de eventos — no solo como almacén auxiliar.
        </p>

        <h2>Arquitectura</h2>
        <p>Clean Architecture en tres capas:</p>
        <ul>
            <li><strong>domain:</strong> entidades (<code>Currency</code>), eventos y reglas de negocio.</li>
            <li><strong>application:</strong> casos de uso y orquestación.</li>
            <li><strong>infrastructure:</strong> API REST, persistencia Redis, schedulers y mensajería.</li>
        </ul>

        <h2>Características clave</h2>
        <ul>
            <li>Ingesta automática de precios cada <strong>30 segundos</strong> con <code>@Retryable</code>.</li>
            <li><strong>ShedLock</strong> para que solo una instancia procese en entornos clusterizados.</li>
            <li><strong>Pub/Sub</strong> para alertas de precios mínimos/máximos en cada lote.</li>
            <li><strong>Redis Streams</strong> para auditoría y procesamiento asíncrono.</li>
            <li>Pipelines y rankings para respuestas API en tiempos sub-milisegundo.</li>
        </ul>

        <BlogFigure
            src="/projects/spring-redis-cover.png"
            alt="Redis Insight — vista Browse del servicio de divisas"
            caption="Redis Insight: caché, streams, rate limit y métricas en tiempo real"
        />

        <h2>Pub/Sub en acción</h2>
        <p>
            Tras cada carga, el servicio publica en el canal <code>currency-notification</code> el precio
            más alto y más bajo del lote — un megáfono para cambios críticos sin bloquear la API.
        </p>
        <BlogFigure
            src="/projects/spring-redis-pubsub.png"
            alt="Canal Pub/Sub currency-notification en Redis Insight"
            caption="Pub/Sub — notificaciones de precios mín/máx por lote"
        />

        <h2>Métricas de lectura</h2>
        <p>
            Contadores por código de divisa (ej. USD) registran cuántas veces se consultó cada moneda
            vía <code>GET /currencies/&#123;code&#125;</code>.
        </p>
        <BlogFigure
            src="/projects/spring-redis-metricas.png"
            alt="Métricas de lectura por divisa en Redis"
            caption="Métricas — contadores de consultas por código de divisa"
        />

        <h2>Rate limiting</h2>
        <p>
            Protección anti-abuso: máximo <strong>10 peticiones por 60 segundos</strong> por usuario,
            implementado con contadores en Redis.
        </p>
        <BlogFigure
            src="/projects/spring-redis-ratelimit.png"
            alt="Rate limit por userId en Redis"
            caption="Rate limit — 10 req / 60 s por usuario"
        />

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li><code>docker compose up -d</code> — Redis + Redis Insight en <code>localhost:5540</code>.</li>
            <li><code>./mvnw spring-boot:run</code> — levanta la API Spring Boot.</li>
            <li>Probar endpoints con <code>http/currency-api.http</code> o Postman.</li>
        </ol>

        <p>
            Documentación completa en el repositorio: guías desde cero, Redis funcional, Streams (RF-09),
            reintentos (RNF-03) y OpenAPI en <code>src/main/resources/openapi.yaml</code>.
        </p>
    </>
);

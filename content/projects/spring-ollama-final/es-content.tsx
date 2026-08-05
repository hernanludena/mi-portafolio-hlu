import BlogFigure from "@/components/blog-figure";

export const springOllamaDetailEs = (
    <>
        <p>
            Demo <strong>Spring Boot 3.4</strong> + <strong>Spring AI</strong> que combina{" "}
            <strong>Ollama</strong> (chat + embeddings) y <strong>Redis</strong>: genera vectores,
            los persiste, y deja que el LLM invoque esas operaciones con{" "}
            <strong>tool calling</strong>.
        </p>

        <BlogFigure
            src="/projects/spring-ollama-thumbnail-original.png"
            alt="Miniatura Spring Ollama — Spring AI, tool calling y Redis"
            caption="Vista previa — Spring AI + Ollama + Redis"
        />

        <h2>Qué hace</h2>
        <ul>
            <li>Embed de texto vía <code>EmbeddingModel</code> (Ollama <code>nomic-embed-text</code>)</li>
            <li>CRUD directo en Redis: keys <code>embedding:&lt;clave&gt;</code></li>
            <li>
                Chat con tool calling: el modelo puede llamar <code>saveEmbedding</code> /{" "}
                <code>getEmbedding</code>
            </li>
        </ul>

        <BlogFigure
            src="/projects/spring-ollama-chat.png"
            alt="Postman — POST /redis-embedding/chat con respuesta 200 OK"
            caption="Chat local — POST /redis-embedding/chat vía Ollama"
        />

        <h2>Arquitectura</h2>
        <ul>
            <li>
                <strong>EmbeddingRedisController:</strong> REST bajo{" "}
                <code>/redis-embedding</code>; arma <code>ChatClient</code> desde{" "}
                <code>ChatModel</code>
            </li>
            <li>
                <strong>EmbeddingRedisService:</strong> embed + Redis; métodos anotados{" "}
                <code>@Tool</code> / <code>@ToolParam</code>
            </li>
            <li>
                <strong>Ollama:</strong> chat (ej. <code>qwen2.5:0.5b</code>) + embeddings en{" "}
                <code>:11434</code>
            </li>
            <li>
                <strong>Redis:</strong> <code>StringRedisTemplate</code> en <code>:6379</code>
            </li>
        </ul>

        <h2>API</h2>
        <ul>
            <li>
                <code>POST /redis-embedding/guardar?clave=&amp;texto=</code> — embed + save
            </li>
            <li>
                <code>GET /redis-embedding/obtener?clave=</code> — leer vector
            </li>
            <li>
                <code>POST /redis-embedding/chat?mensaje=</code> — chat; el modelo puede usar tools
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Java 17 · Spring Boot 3.4.3</li>
            <li>Spring AI 1.0.0-M6 (<code>spring-ai-ollama-spring-boot-starter</code>)</li>
            <li>Redis · Maven Wrapper · puerto <code>8080</code></li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>
                Ollama up + pull modelos chat y <code>nomic-embed-text</code>
            </li>
            <li>
                Redis en <code>localhost:6379</code>
            </li>
            <li>
                <code>./mvnw spring-boot:run</code>
            </li>
            <li>
                Probar <code>/guardar</code>, <code>/obtener</code> y <code>/chat</code>
            </li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/spring-ollama-final"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/spring-ollama-final
            </a>
            .
        </p>
    </>
);

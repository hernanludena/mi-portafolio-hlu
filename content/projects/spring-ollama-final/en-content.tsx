import BlogFigure from "@/components/blog-figure";

export const springOllamaDetailEn = (
    <>
        <p>
            <strong>Spring Boot 3.4</strong> + <strong>Spring AI</strong> demo combining{" "}
            <strong>Ollama</strong> (chat + embeddings) and <strong>Redis</strong>: generate
            vectors, persist them, and let the LLM invoke those operations via{" "}
            <strong>tool calling</strong>.
        </p>

        <BlogFigure
            src="/projects/spring-ollama-thumbnail-original.png"
            alt="Spring Ollama thumbnail — Spring AI, tool calling, and Redis"
            caption="Preview — Spring AI + Ollama + Redis"
        />

        <h2>What it does</h2>
        <ul>
            <li>Embed text via <code>EmbeddingModel</code> (Ollama <code>nomic-embed-text</code>)</li>
            <li>Direct Redis CRUD: keys <code>embedding:&lt;key&gt;</code></li>
            <li>
                Chat with tool calling: model may call <code>saveEmbedding</code> /{" "}
                <code>getEmbedding</code>
            </li>
        </ul>

        <BlogFigure
            src="/projects/spring-ollama-chat.png"
            alt="Postman — POST /redis-embedding/chat with 200 OK response"
            caption="Local chat — POST /redis-embedding/chat via Ollama"
        />

        <h2>Architecture</h2>
        <ul>
            <li>
                <strong>EmbeddingRedisController:</strong> REST under{" "}
                <code>/redis-embedding</code>; builds <code>ChatClient</code> from{" "}
                <code>ChatModel</code>
            </li>
            <li>
                <strong>EmbeddingRedisService:</strong> embed + Redis; methods annotated{" "}
                <code>@Tool</code> / <code>@ToolParam</code>
            </li>
            <li>
                <strong>Ollama:</strong> chat (e.g. <code>qwen2.5:0.5b</code>) + embeddings on{" "}
                <code>:11434</code>
            </li>
            <li>
                <strong>Redis:</strong> <code>StringRedisTemplate</code> on <code>:6379</code>
            </li>
        </ul>

        <h2>API</h2>
        <ul>
            <li>
                <code>POST /redis-embedding/guardar?clave=&amp;texto=</code> — embed + save
            </li>
            <li>
                <code>GET /redis-embedding/obtener?clave=</code> — read vector
            </li>
            <li>
                <code>POST /redis-embedding/chat?mensaje=</code> — chat; model may use tools
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>Java 17 · Spring Boot 3.4.3</li>
            <li>Spring AI 1.0.0-M6 (<code>spring-ai-ollama-spring-boot-starter</code>)</li>
            <li>Redis · Maven Wrapper · port <code>8080</code></li>
        </ul>

        <h2>How to run</h2>
        <ol>
            <li>
                Ollama up + pull chat model and <code>nomic-embed-text</code>
            </li>
            <li>
                Redis on <code>localhost:6379</code>
            </li>
            <li>
                <code>./mvnw spring-boot:run</code>
            </li>
            <li>
                Try <code>/guardar</code>, <code>/obtener</code>, and <code>/chat</code>
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

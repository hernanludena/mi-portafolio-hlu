import BlogFigure from "@/components/blog-figure";

export const jobsSearchDetailEs = (
    <>
        <p>
            <strong>Jobs Search Reporter</strong> es un CLI en <strong>Java 21</strong> para buscar
            empleos remotos vía la API de <strong>RemoteOK</strong>. Parsea args → llama al API →
            filtra en memoria (keyword, location, full-time, página) → imprime resultados formateados.
        </p>

        <BlogFigure
            src="/projects/jobs-search-cli.png"
            alt="Salida del CLI jobs-search con ofertas remotas"
            caption="Resultados en terminal — company, position, location, tags y URL"
        />

        <h2>Qué hace</h2>
        <ul>
            <li>
                Comando: <code>job-search [OPTIONS] &lt;KEYWORD&gt;</code>
            </li>
            <li>
                Flags: <code>--location</code> / <code>-l</code>, <code>--page</code> /{" "}
                <code>-p</code>, <code>--full-time</code>, <code>--help</code>
            </li>
            <li>Paginación: 50 resultados por página (desde 0)</li>
            <li>Fat JAR: <code>target/job-search.jar</code></li>
        </ul>

        <BlogFigure
            src="/projects/jobs-search-cli-help.png"
            alt="Ayuda del CLI jobs-search"
            caption="Uso — flags y ejemplo de búsqueda por location + keyword"
        />

        <h2>Arquitectura</h2>
        <p>
            Diseño en capas fino + estilo funcional (<code>static</code> en interfaces,{" "}
            <code>Optional</code>, streams). Sin framework DI: el wiring vive en{" "}
            <code>JobSearch.main</code>.
        </p>
        <ul>
            <li>
                <strong>CLI:</strong> <code>CLIArguments</code>, <code>CLIFunctions</code>,
                validators JCommander
            </li>
            <li>
                <strong>Application:</strong> <code>JobSearch</code>,{" "}
                <code>CommanderFunctions</code>, <code>SearchParameters</code> (record)
            </li>
            <li>
                <strong>API:</strong> <code>JobsAPI</code> (Feign), <code>APIFunctions</code>,{" "}
                <code>APIResult</code> (sealed)
            </li>
        </ul>

        <h2>Flujo de ejecución</h2>
        <ol>
            <li>
                <code>JCommander.parse</code> → <code>CLIArguments</code>
            </li>
            <li>
                <code>CLIFunctions.toSearchParameters</code> → <code>SearchParameters</code>
            </li>
            <li>
                Feign <code>GET https://remoteok.com/api</code> → <code>List&lt;JobPosition&gt;</code>{" "}
                (skip metadata)
            </li>
            <li>Filtro keyword / location / full-time → page + limit 50</li>
            <li>
                <code>APIResult.Success | Empty | Error</code> → stdout
            </li>
        </ol>

        <h2>Stack técnico</h2>
        <ul>
            <li>JDK 21+ (record patterns en <code>switch</code>)</li>
            <li>JCommander 1.82 — parsing CLI</li>
            <li>OpenFeign 13.1 + Gson — cliente HTTP tipado</li>
            <li>Maven assembly — fat JAR con <code>Main-Class</code></li>
            <li>JUnit Jupiter — tests unitarios</li>
        </ul>

        <h2>Features de lenguaje</h2>
        <ul>
            <li>Records: <code>JobPosition</code>, <code>SearchParameters</code>,{" "}
                <code>APIResult.*</code></li>
            <li>Sealed interface + switch pattern matching en <code>APIResult.formatResult()</code></li>
            <li>Text blocks, streams + <code>.toList()</code>, compact constructors</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>
                <code>mvn clean package</code> → <code>target/job-search.jar</code>
            </li>
            <li>
                <code>java -jar target/job-search.jar --location tokyo java</code>
            </li>
            <li>
                <code>java -jar target/job-search.jar --location remote --full-time python</code>
            </li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/jobs-search-hlu"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/jobs-search-hlu
            </a>
            .
        </p>
    </>
);

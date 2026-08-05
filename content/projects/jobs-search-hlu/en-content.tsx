import BlogFigure from "@/components/blog-figure";

export const jobsSearchDetailEn = (
    <>
        <p>
            <strong>Jobs Search Reporter</strong> is a <strong>Java 21</strong> CLI to search remote
            jobs via the <strong>RemoteOK</strong> API. Parses args → calls the API → filters in
            memory (keyword, location, full-time, page) → prints formatted results.
        </p>

        <BlogFigure
            src="/projects/jobs-search-cli.png"
            alt="jobs-search CLI output with remote job listings"
            caption="Terminal results — company, position, location, tags, and URL"
        />

        <h2>Features</h2>
        <ul>
            <li>
                Command: <code>job-search [OPTIONS] &lt;KEYWORD&gt;</code>
            </li>
            <li>
                Flags: <code>--location</code> / <code>-l</code>, <code>--page</code> /{" "}
                <code>-p</code>, <code>--full-time</code>, <code>--help</code>
            </li>
            <li>Pagination: 50 results per page (starts at 0)</li>
            <li>Fat JAR: <code>target/job-search.jar</code></li>
        </ul>

        <BlogFigure
            src="/projects/jobs-search-cli-help.png"
            alt="jobs-search CLI help output"
            caption="Usage — flags and location + keyword example"
        />

        <h2>Architecture</h2>
        <p>
            Thin layered design + functional style (<code>static</code> methods on interfaces,{" "}
            <code>Optional</code>, streams). No DI framework: wiring lives in{" "}
            <code>JobSearch.main</code>.
        </p>
        <ul>
            <li>
                <strong>CLI:</strong> <code>CLIArguments</code>, <code>CLIFunctions</code>,
                JCommander validators
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

        <h2>Execution flow</h2>
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
            <li>Filter keyword / location / full-time → page + limit 50</li>
            <li>
                <code>APIResult.Success | Empty | Error</code> → stdout
            </li>
        </ol>

        <h2>Tech stack</h2>
        <ul>
            <li>JDK 21+ (record patterns in <code>switch</code>)</li>
            <li>JCommander 1.82 — CLI parsing</li>
            <li>OpenFeign 13.1 + Gson — typed HTTP client</li>
            <li>Maven assembly — fat JAR with <code>Main-Class</code></li>
            <li>JUnit Jupiter — unit tests</li>
        </ul>

        <h2>Language features</h2>
        <ul>
            <li>Records: <code>JobPosition</code>, <code>SearchParameters</code>,{" "}
                <code>APIResult.*</code></li>
            <li>Sealed interface + switch pattern matching in{" "}
                <code>APIResult.formatResult()</code></li>
            <li>Text blocks, streams + <code>.toList()</code>, compact constructors</li>
        </ul>

        <h2>How to run</h2>
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

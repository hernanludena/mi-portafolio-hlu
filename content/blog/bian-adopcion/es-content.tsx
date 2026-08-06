import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const bianAdopcionContentEs = (
    <>
        <p>
            En los últimos días estuve estudiando{" "}
            <strong>BIAN (Banking Industry Architecture Network)</strong> y encontré una idea que
            me pareció especialmente interesante:{" "}
            <strong>adoptar BIAN no implica reconstruir todo un banco desde cero</strong>.
        </p>
        <p>
            Uno de los errores más comunes al hablar de modernización bancaria es asumir que la
            única alternativa es reemplazar completamente el Core Bancario mediante un proyecto de
            varios años. En la práctica, esto rara vez es viable por el costo, el riesgo y la
            complejidad.
        </p>
        <p>
            BIAN propone un enfoque diferente:{" "}
            <strong>evolucionar la arquitectura de manera gradual</strong>, desacoplando
            capacidades del negocio mientras los sistemas existentes continúan operando.
        </p>

        <h2>¿Qué aporta realmente BIAN?</h2>
        <p>BIAN no es un framework ni una tecnología.</p>
        <p>
            Es un estándar que describe cómo organizar las capacidades del negocio bancario
            mediante <strong>Service Domains</strong>.
        </p>
        <p>Algunos ejemplos son:</p>
        <ul>
            <li>Card Management</li>
            <li>Current Account</li>
            <li>Customer Management</li>
            <li>Loan Management</li>
            <li>Payments</li>
        </ul>
        <p>
            Cada dominio define responsabilidades claras, operaciones y objetos de negocio,
            permitiendo que toda la organización utilice un mismo lenguaje.
        </p>
        <p>
            Esto facilita la interoperabilidad entre equipos, proveedores y diferentes sistemas del
            banco.
        </p>

        <h2>La implementación no comienza escribiendo código</h2>
        <p>
            Uno de los conceptos que más me llamó la atención es la separación del trabajo en dos
            células que avanzan en paralelo.
        </p>

        <h3>Célula de Diseño</h3>
        <p>Su responsabilidad consiste en definir la arquitectura del negocio.</p>
        <p>Produce artefactos como:</p>
        <ul>
            <li>Diagramas de dependencias.</li>
            <li>Modelos de capacidades.</li>
            <li>Ontologías.</li>
            <li>Relaciones entre Service Domains.</li>
            <li>Diseño desacoplado.</li>
        </ul>
        <p>
            Su trabajo es completamente independiente de Java, .NET, Go o cualquier otra
            tecnología.
        </p>

        <h3>Célula de Implementación</h3>
        <p>Esta célula toma esos diseños y los convierte en soluciones técnicas.</p>
        <p>Aquí ya aparecen tecnologías como:</p>
        <ul>
            <li>Java Spring Boot</li>
            <li>Go</li>
            <li>FastAPI</li>
            <li>Kubernetes</li>
            <li>Kafka</li>
            <li>Oracle</li>
        </ul>
        <p>
            Al mantenerse una diferencia aproximada de uno o dos sprints entre ambas células, el
            equipo de desarrollo siempre trabaja sobre diseños previamente definidos, reduciendo
            retrabajos y decisiones improvisadas.
        </p>

        <BlogFigure
            src="/blog/bian-dos-celulas.png"
            alt="Las dos células de trabajo: Diseño e Implementación, avanzando en paralelo con ventaja de 1 a 2 sprints"
            caption="Diseño e Implementación en paralelo — artefactos primero, código después"
        />

        <h2>Una adopción evolutiva</h2>
        <p>Otro aspecto interesante es que BIAN no exige una migración completa.</p>
        <p>Es posible comenzar únicamente con un producto específico.</p>
        <p>Por ejemplo:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Card Management`}
        </pre>
        <p>Mientras el resto del Core Bancario continúa siendo un monolito tradicional.</p>
        <p>Con el tiempo pueden incorporarse nuevos dominios:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Customer Management

↓

Loan Management

↓

Payments

↓

Current Account`}
        </pre>
        <p>
            Este enfoque híbrido disminuye considerablemente el riesgo de transformación.
        </p>

        <BlogFigure
            src="/blog/bian-adopcion-evolutiva.png"
            alt="Adopción evolutiva de BIAN: del Core monolítico a una arquitectura desacoplada por Service Domains"
            caption="Del monolito a Service Domains — evolución incremental, no Big Bang"
        />

        <h2>¿Dónde entra OpenAPI?</h2>
        <p>Aquí es donde aparece una combinación que considero muy poderosa.</p>
        <p>BIAN responde a la pregunta:</p>
        <p>
            <strong>¿Qué capacidades debe ofrecer el negocio?</strong>
        </p>
        <p>Mientras que OpenAPI responde:</p>
        <p>
            <strong>¿Cómo se expone técnicamente esa capacidad?</strong>
        </p>
        <p>Supongamos que BIAN define el Service Domain:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Card Management`}
        </pre>
        <p>Y una capacidad:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Retrieve Credit Card`}
        </pre>
        <p>El arquitecto de integración puede transformarla en un contrato OpenAPI:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GET /credit-cards/{cardId}`}
        </pre>
        <p>Ese contrato describe:</p>
        <ul>
            <li>Parámetros.</li>
            <li>Respuestas.</li>
            <li>Esquemas JSON.</li>
            <li>Errores.</li>
            <li>Seguridad.</li>
        </ul>
        <p>
            A partir de ese momento, el frontend, QA y el backend pueden trabajar sobre un
            contrato común.
        </p>

        <h2>Ejemplo de implementación en Java</h2>
        <p>Una implementación simplificada podría seguir este flujo:</p>

        <BlogFigure
            src="/blog/bian-openapi-java-flujo.png"
            alt="Flujo BIAN → OpenAPI → Java: del Service Domain Card Management hasta Oracle vía Spring Boot"
            caption="BIAN → OpenAPI → Java — del diseño de negocio a la implementación"
        />

        <p>El desarrollador no necesita inventar la interfaz REST.</p>
        <p>
            OpenAPI puede generar automáticamente la interfaz Java, mientras que el equipo
            implementa únicamente la lógica del negocio.
        </p>
        <p>Por ejemplo, una solicitud:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GET /credit-cards/12345`}
        </pre>
        <p>Podría devolver:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`{
  "cardId": "12345",
  "balance": 1200.50,
  "availableCredit": 3800.50,
  "currency": "USD"
}`}
        </pre>
        <p>
            Este enfoque reduce inconsistencias y garantiza que todos los consumidores utilicen
            exactamente el mismo contrato.
        </p>

        <h2>Más que una arquitectura</h2>
        <p>
            Lo que más valor aporta BIAN no es únicamente la organización técnica.
        </p>
        <p>
            Es la posibilidad de desacoplar el negocio del lenguaje de programación.
        </p>
        <p>
            El diseño puede permanecer estable mientras las implementaciones evolucionan con
            nuevas tecnologías.
        </p>
        <p>Hoy un dominio puede implementarse en Java.</p>
        <p>Mañana otro en Go.</p>
        <p>Otro utilizando Python y FastAPI.</p>
        <p>
            Mientras todos respeten el mismo modelo de negocio y el mismo contrato de integración,
            la arquitectura permanece consistente.
        </p>

        <h2>¿Dónde encaja TOGAF?</h2>
        <p>
            Durante el proceso de aprendizaje también encontré que BIAN no pretende reemplazar
            los marcos de arquitectura empresarial existentes, sino complementarlos.
        </p>
        <p>
            Aquí es donde aparece <strong>TOGAF (The Open Group Architecture Framework)</strong>,
            uno de los frameworks más utilizados para diseñar y gobernar arquitecturas
            empresariales.
        </p>
        <p>
            Mientras TOGAF proporciona una metodología para definir la arquitectura de una
            organización mediante fases como visión, arquitectura de negocio, aplicaciones, datos
            y tecnología, BIAN aporta un modelo especializado para el dominio bancario.
        </p>
        <p>En otras palabras:</p>
        <ul>
            <li>
                <strong>TOGAF</strong> ayuda a responder{" "}
                <strong>cómo evolucionar la arquitectura de la organización</strong>.
            </li>
            <li>
                <strong>BIAN</strong> define{" "}
                <strong>qué capacidades bancarias deben existir</strong> y cómo organizarlas.
            </li>
            <li>
                <strong>OpenAPI</strong> especifica{" "}
                <strong>cómo exponer técnicamente esas capacidades mediante APIs REST</strong>.
            </li>
        </ul>
        <p>Lejos de competir, estos estándares se complementan.</p>
        <p>Un escenario típico en una institución financiera sería:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`TOGAF
    │
    ▼
Define la estrategia y la arquitectura empresarial
    │
    ▼
BIAN
    │
    ▼
Modela los Service Domains bancarios
    │
    ▼
OpenAPI
    │
    ▼
Define los contratos REST
    │
    ▼
Java, Go o Python implementan los microservicios`}
        </pre>
        <p>
            Este enfoque permite que las decisiones de negocio, arquitectura e implementación
            permanezcan alineadas. La estrategia empresarial guía la evolución de la organización,
            BIAN proporciona un lenguaje común para las capacidades del negocio bancario y OpenAPI
            establece contratos claros para que los equipos de desarrollo implementen soluciones
            consistentes e interoperables.
        </p>

        <h2>Reflexión final</h2>
        <p>
            Después de revisar distintos materiales sobre BIAN, una de las conclusiones que
            considero más importantes es que la modernización bancaria no debería abordarse como
            un proyecto de reemplazo masivo.
        </p>
        <p>
            Una estrategia incremental, basada en Service Domains, contratos OpenAPI y equipos
            especializados en diseño e implementación, permite reducir riesgos, acelerar entregas
            y mantener una arquitectura preparada para evolucionar durante muchos años.
        </p>
        <p>
            La modernización bancaria no depende únicamente de adoptar microservicios o migrar a
            la nube. Requiere una arquitectura empresarial que conecte la estrategia del negocio
            con la implementación técnica. En ese recorrido, TOGAF aporta el método, BIAN el
            modelo de negocio y OpenAPI el contrato de integración. Juntos forman una base sólida
            para construir plataformas bancarias modernas, desacopladas y preparadas para
            evolucionar.
        </p>

        <BlogClosingQuote>
            TOGAF aporta el método, BIAN el modelo de negocio y OpenAPI el contrato. Juntos
            conectan estrategia e implementación — sin reescribir el banco de un golpe.
        </BlogClosingQuote>
    </>
);

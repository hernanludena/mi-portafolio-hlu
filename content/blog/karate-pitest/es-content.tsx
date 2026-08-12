import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const karatePitestContentEs = (
    <>
        <p>
            <em>
                Nota de alcance: estudio técnico propio, sin asociarlo a personas, empresas o
                proyectos concretos. La parte técnica de Karate y PIT está contrastada con su
                documentación actual. PIT se mantiene como herramienta de mutation testing para
                Java/JVM con integración Maven, Gradle y otros sistemas de build.
            </em>
        </p>
        <p>
            En backends modernos es común escuchar: &ldquo;tenemos 80% de coverage.&rdquo; Esa
            métrica puede generar falsa seguridad. Que una línea haya sido ejecutada por un test{" "}
            <strong>no significa que el test detecte un defecto en esa línea</strong>.
        </p>
        <p>
            La pregunta más interesante:{" "}
            <strong>¿cómo comprobar que mis pruebas realmente detectan errores?</strong>
        </p>
        <p>
            Analizo capas complementarias de calidad: <strong>Gherkin</strong> (cómo describo el
            comportamiento), <strong>Karate</strong> (cómo ejecuto escenarios de API),{" "}
            <strong>Testcontainers</strong> (infraestructura real en tests) y{" "}
            <strong>PITest (PIT)</strong> (qué tan efectivos son los tests). No compiten — cada una
            responde una pregunta distinta.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Gherkin        → cómo describo el escenario
Karate         → cómo ejecuto el escenario
Testcontainers → infraestructura real
PITest         → evalúo la efectividad de los tests
        │
        ▼
  MAYOR CONFIANZA`}
        </pre>

        <BlogFigure
            src="/blog/karate-pitest-card.png"
            alt="Karate + PITest — de coverage a confianza en los tests"
            caption="Dos preguntas distintas — ¿funciona el sistema? vs ¿los tests detectan defectos?"
        />

        <h2>1. El problema</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`public boolean approve(double amount) {
    return amount > 1000;
}

@Test
void shouldApproveLargeAmount() {
    assertTrue(service.approve(2000));
}`}
        </pre>
        <p>
            Coverage marca la línea ejecutada. Si alguien cambia a{" "}
            <code>return amount &gt;= 1000;</code>, el test probablemente sigue pasando. Coverage =
            OK; detección del error = NO. Eso revela mutation testing.
        </p>

        <h2>2. Coverage no es calidad</h2>
        <p>
            Line / statement / branch / method coverage miden qué se ejecutó — no si los assertions
            son fuertes. Un test que solo llama <code>paymentService.process(payment)</code> puede
            tocar muchas líneas sin verificar el resultado.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Line Coverage:       95%
Branch Coverage:     90%
Mutation Coverage:   55%`}
        </pre>
        <p>
            Mucho código ejecutado; muchos comportamientos incorrectos que los tests no detectan.
            PIT: coverage tradicional = qué se ejecutó; mutation testing = si los tests detectan
            cambios artificiales.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-coverage-vs-mutation.png"
            alt="Comparación coverage (¿se ejecutó?) vs mutation testing (¿se detectó el defecto?)"
            caption="Ejecutado ≠ detectado — coverage y mutation responden preguntas distintas"
        />

        <h2>3. ¿Qué papel juega Karate?</h2>
        <p>
            Karate prueba el comportamiento desde fuera: HTTP → API / Controller → Service →
            Repository → Database. No solo <code>service.calculate()</code>, sino POST /payments →
            HTTP 201 → JSON → estado en DB. Más cerca del comportamiento real.
        </p>
        <p>
            Cubre REST (GET/POST/PUT/DELETE), status codes, headers, validación JSON, flujos
            multi-paso y data-driven testing.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Scenario: Create payment
Given url baseUrl
And path '/payments'
And request { "accountId": "123", "amount": 1500 }
When method post
Then status 201
And match response.status == 'APPROVED'`}
        </pre>
        <p>
            Lo importante: nivel de abstracción — &ldquo;¿el sistema responde bien ante este
            comportamiento?&rdquo;, no &ldquo;¿se ejecutó esta línea Java?&rdquo;.
        </p>

        <h2>4. ¿Qué es Gherkin?</h2>
        <p>
            <strong>Gherkin</strong> es un lenguaje de texto estructurado para escribir casos de
            prueba legibles por humanos. Se usa en BDD (Behavior-Driven Development) con
            herramientas como Cucumber y Karate. Describe{" "}
            <strong>qué debe hacer el sistema</strong>, sin centrarse en cómo está implementado.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature: Transferencias

Scenario: Realizar una transferencia exitosa

  Given el usuario tiene una cuenta con saldo de 1000 USD
  And la cuenta destino existe
  When el usuario transfiere 200 USD
  Then la transferencia debe ser aprobada
  And el saldo debe quedar en 800 USD`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Feature   → funcionalidad
Scenario  → escenario
Given     → condición inicial
When      → acción
Then      → resultado esperado
And       → condición/acción adicional`}
        </pre>
        <p>
            Separa el <strong>qué</strong> del <strong>cómo</strong>: negocio, QA y desarrollo
            pueden leer el mismo escenario. El negocio entiende &ldquo;dado $1.000, cuando
            transfiero $200, entonces saldo $800&rdquo; sin Java, Spring, HTTP o SQL.
        </p>
        <p>
            <strong>Gherkin no es una herramienta de testing por sí mismo</strong> — es un
            lenguaje/formato para describir escenarios. Karate (u otra herramienta) es quien los
            ejecuta.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-gherkin.png"
            alt="Gherkin: Feature, Scenario, Given/When/Then compartidos por QA y Developer"
            caption="Gherkin — lenguaje compartido: qué debe hacer el sistema, no cómo se implementa"
        />

        <h2>5. Gherkin + Karate</h2>
        <p>
            Karate usa sintaxis basada en Gherkin, pero no es simplemente &ldquo;Cucumber para
            APIs&rdquo;. Interpreta pasos y ejecuta operaciones HTTP:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Scenario: Consultar una cuenta

  Given url baseUrl
  And path '/accounts/123'
  When method get
  Then status 200
  And match response.status == 'ACTIVE'`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Gherkin  → lenguaje/sintaxis
   │
Karate   → ejecuta
   │
API / Sistema`}
        </pre>
        <p>
            Sin Gherkin: <code>@Test void shouldApprovePayment()</code> expresa la implementación
            del test. Con Gherkin: el escenario expresa mejor el{" "}
            <strong>comportamiento esperado</strong>. Gherkin/Karate responde qué comportamiento
            debe funcionar; PIT ayuda a comprobar qué tan buenos son los tests que protegen el
            código.
        </p>

        <h2>6. ¿Qué problema resuelve PITest?</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`return customer.getAge() >= 18;   // original
return customer.getAge() > 18;    // mutante

Test con age=25 → pasa en ambos → SURVIVED ❌`}
        </pre>
        <p>
            El test no distingue <code>&gt;=</code> de <code>&gt;</code>. PIT genera mutaciones,
            corre los tests: si fallan → <strong>killed</strong>; si siguen pasando →{" "}
            <strong>survived</strong>.
        </p>

        <h2>7. Cómo funciona PIT</h2>
        <p>
            Código → compilación → bytecode → PIT genera mutantes → tests por mutante → KILLED /
            SURVIVED. Trabaja sobre <strong>bytecode</strong>, no reemplazo de texto en fuente.
        </p>
        <p>
            Operadores: condiciones, retornos, llamadas, operadores, lógica,
            incrementos/decrementos, eliminación de llamadas. Estados: Killed, Survived, No
            coverage, Non viable, Timed out, Memory error, Run error.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-mutation-flow.png"
            alt="Flujo PIT: código, bytecode, mutantes, tests, killed vs survived"
            caption="Flujo PIT — mutaciones sobre bytecode; killed vs survived"
        />

        <h2>8. Mutation Score</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Mutation Score = Killed Mutants / Relevant Mutants

100 mutations → 80 killed → score 80%`}
        </pre>
        <p>
            No convertir el número en objetivo ciego. 90% no = sistema &ldquo;seguro&rdquo;; 70%
            no = software malo. Sirve para <strong>encontrar debilidades en los tests</strong>, no
            para competir por porcentajes. Además existen{" "}
            <strong>equivalent mutants</strong>: mutaciones que no cambian el comportamiento
            observable — 100 mutaciones ≠ 100 defectos potenciales.
        </p>

        <h2>9. Coverage vs mutation vs integración</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <th className="text-left py-2 pr-4">Métrica</th>
                        <th className="text-left py-2">Pregunta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Line coverage</td>
                        <td className="py-2">¿Se ejecutó esta línea?</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Branch coverage</td>
                        <td className="py-2">¿Se ejecutaron estas ramas?</td>
                    </tr>
                    <tr className="border-b border-black/5 dark:border-white/5">
                        <td className="py-2 pr-4">Integration tests</td>
                        <td className="py-2">¿Los componentes funcionan juntos?</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4">Mutation testing</td>
                        <td className="py-2">¿Los tests detectan cambios incorrectos?</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p>
            Coverage y mutation son <strong>complementarios</strong>, no sustitutos. Karate y PIT
            tampoco compiten: Karate = comportamiento externo (HTTP); PIT = efectividad interna de
            los unit tests.
        </p>

        <h2>10. Un bug, dos perspectivas</h2>
        <p>
            API <code>POST /payments</code>, regla <code>amount &gt; 1000 → APPROVED</code>. Unit
            test con 1500 pasa. Karate con 1500 pasa. PIT muta a <code>&gt;=</code>. Sin test en
            el límite <code>amount = 1000</code>, el mutante sobrevive. Lección: no basta ejecutar
            la condición — hay que probar la frontera.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-one-bug.png"
            alt="Un cambio de > a >=: Karate puede seguir pasando; PIT revela el test de frontera faltante"
            caption="Un bug, dos perspectivas — Karate puede pasar; PIT exige el límite 1000"
        />

        <h2>11. Arquitectura de testing</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Client → REST Controller → Service → Repository → Database

Unit tests (JUnit/Mockito)  → Service
Gherkin + Karate            → comportamiento + API
Testcontainers              → DB/broker reales en el test
PIT                         → efectividad de unit tests`}
        </pre>
        <p>
            Pirámide: base grande de unitarios (rápidos/baratos); Karate para comportamientos de
            integración clave; Testcontainers para no fingir la infraestructura; PIT selectivo
            sobre calidad de unit tests. No 1000 reglas vía 1000 tests HTTP — lento, frágil, caro.
        </p>

        <BlogFigure
            src="/blog/karate-pitest-strategy.png"
            alt="Estrategia Java: unit tests, Karate integración, PIT mutation, CI/CD quality gate"
            caption="Estrategia — cada capa responde una pregunta distinta"
        />

        <h2>12. Testcontainers: infraestructura real</h2>
        <p>
            Un escenario Gherkin/Karate que valida estado en base de datos pierde valor si esa DB
            es un mock superficial o un H2 distinto al motor de producción.{" "}
            <strong>Testcontainers</strong> levanta contenedores reales (Postgres, Redis, Kafka,
            etc.) durante el test y los destruye al terminar.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Karate scenario
      │
      ▼
Spring Boot API
      │
      ▼
Testcontainers ──► Postgres / Redis / Kafka (Docker)
      │
      ▼
Assertions (HTTP + estado real)`}
        </pre>
        <p>
            Así la integración deja de ser &ldquo;API + mock&rdquo; y se acerca a &ldquo;API +
            infraestructura comparable a runtime&rdquo;. En CI/CD hace falta Docker disponible;
            el costo es más tiempo de pipeline a cambio de menos sorpresas en producción.
        </p>
        <p>
            Encaje en el stack:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Gherkin        → qué comportamiento
Karate         → cómo lo ejecuto (HTTP)
Testcontainers → sobre qué infra real
PIT            → qué tan fuertes son mis unit tests`}
        </pre>

        <BlogFigure
            src="/blog/karate-pitest-testcontainers.png"
            alt="Capas del stack de testing: Gherkin, Karate, Testcontainers e PITest"
            caption="Stack completo — describir, ejecutar, infra real, efectividad de tests"
        />

        <h2>13. ¿Qué evaluar con PIT? ¿Qué con Karate?</h2>
        <p>
            <strong>PIT priorizar:</strong> lógica de negocio, servicios, validaciones, reglas,
            cálculos, transformaciones, decisiones importantes.
        </p>
        <p>
            <strong>PIT selectivo:</strong> DTOs, getters/setters, config, código generado,
            adaptadores triviales, logging.
        </p>
        <p>
            <strong>Karate + Gherkin:</strong> flujos API críticos descritos como comportamiento,
            no toda la estrategia. <strong>Testcontainers:</strong> cuando el escenario depende de
            DB/broker real. Unit tests = mayor volumen; integración = menor volumen; E2E = pocos
            escenarios críticos.
        </p>

        <h2>14. CI/CD realista</h2>
        <p>
            Mutation testing es costoso. PIT recomienda análisis frecuente sobre código modificado.
            No en cada commit.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Unit tests              → cada commit
Integración/Karate+TC   → cada PR / pipeline
PIT                     → PR importante / código tocado / pipeline de calidad`}
        </pre>

        <BlogFigure
            src="/blog/karate-pitest-pipelines.png"
            alt="Tres pipelines: rápido, PR y calidad con Karate y PIT en momentos distintos"
            caption="Pipelines — feedback rápido + calidad profunda, no todo siempre"
        />

        <h2>15. Maven, estructura y métricas</h2>
        <p>
            PIT se integra vía plugin Maven/Gradle y genera reporte HTML (clases, métodos, líneas,
            killed/survived). Separar unit / integration / mutation para ejecutar independientes.
            Testcontainers suele vivir en el mismo módulo de integración (JUnit + Docker).
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`project/
├── src/main/java
├── src/test/java          # unit (+ PIT)
├── karate/features/…      # Gherkin scenarios
└── pom.xml                # JUnit, Mockito, Karate, Testcontainers, PIT`}
        </pre>
        <p>
            Combinar métricas (ilustrativas): line/branch coverage + mutation score + escenarios
            Karate. Cada una responde una pregunta distinta. Más tests ≠ mejores tests: importa{" "}
            <strong>qué comportamiento protege cada test</strong>.
        </p>

        <h2>16. Confianza progresiva</h2>
        <ul>
            <li>
                <strong>Unit</strong> — ¿esta unidad funciona?
            </li>
            <li>
                <strong>Coverage</strong> — ¿qué código ejecutamos?
            </li>
            <li>
                <strong>PIT</strong> — ¿detectamos cambios incorrectos?
            </li>
            <li>
                <strong>Gherkin</strong> — ¿qué comportamiento acordamos?
            </li>
            <li>
                <strong>Karate + Testcontainers</strong> — ¿el sistema integrado se comporta bien
                sobre infra real?
            </li>
            <li>
                <strong>E2E</strong> — ¿el flujo completo funciona?
            </li>
        </ul>
        <p>
            En microservicios: cada servicio con unit + PIT + Karate; Testcontainers por
            dependencia externa crítica; más escenarios cross-service con Karate cuando el flujo
            cruza Customer → Payment → Notification.
        </p>

        <h2>17. Lo que no haría</h2>
        <ul>
            <li>100% coverage por obligación → tests artificiales.</li>
            <li>100% mutation score → mucho esfuerzo, poco valor.</li>
            <li>Karate para absolutamente todo → suite lenta/frágil.</li>
            <li>PIT sobre absolutamente todo → pipeline innecesariamente lento.</li>
            <li>
                Testcontainers para todo (incluido unit puro) → costo sin beneficio.
            </li>
            <li>
                Ignorar survived: ¿falta un test? ¿o la mutación no importa?
            </li>
        </ul>

        <h2>18. Conclusión</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`GHERKIN        → ¿Qué debe hacer el sistema?
KARATE         → ¿Lo hace (vía API)?
TESTCONTAINERS → ¿Sobre infra real?
PIT            → ¿Mis tests detectarían si dejara de hacerlo?`}
        </pre>
        <p>
            Una estrategia madura no se queda en &ldquo;85% coverage&rdquo;. Debe poder responder:
            qué comportamiento describimos, qué código / escenarios / integraciones probamos, sobre
            qué infraestructura, qué errores detectan los tests, qué mutaciones sobreviven, qué
            riesgos permanecen.
        </p>
        <blockquote>
            <strong>Testing no elimina el riesgo. Lo hace visible y controlable.</strong>
        </blockquote>
        <p>
            Cadena: JUnit/Mockito → unit correctness → PIT → test effectiveness → Gherkin/Karate →
            integration correctness → Testcontainers → infra confidence → CI/CD → release
            confidence.
        </p>
        <p>
            Evolución clave: de &ldquo;¿cuánto código ejecutan mis tests?&rdquo; a{" "}
            <strong>
                &ldquo;¿qué tan confiable es la evidencia de que el software funciona y de que los
                tests detectan regresiones?&rdquo;
            </strong>
        </p>
        <p>
            <em>
                No hay porcentajes ideales universales de coverage o mutation score: umbrales según
                riesgo, criticidad y costo. Fuentes: documentación oficial Karate, PIT y
                Testcontainers.
            </em>
        </p>

        <BlogClosingQuote>
            Gherkin describe el qué. Karate lo ejecuta. Testcontainers le da infra real. PIT
            pregunta si tus tests realmente protegen el código.
        </BlogClosingQuote>
    </>
);

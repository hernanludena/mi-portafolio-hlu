import Image from "next/image";

const diagramClass = "w-full h-auto";

export const npeContentEs = (
    <>
        <p>
            En sistemas a gran escala, un fallo de lógica simple puede desencadenar un colapso
            catastrófico en la infraestructura. Este análisis examina un incidente documentado en la
            industria: una plataforma de servicios financieros que procesaba cargas de mensajes
            asíncronos en lotes, donde un solo registro corrupto con valor <code>null</code> congeló
            los hilos de los consumidores, acumuló millones de eventos encolados y provocó pérdidas
            masivas por retrasos en las transacciones.
        </p>

        <blockquote>
            Caso anonimizado. Sin nombres de empresa, clientes ni propiedad intelectual
            confidencial. Basado en patrones de incidentes públicos documentados en ingeniería de
            software.
        </blockquote>

        <h2>1. Resumen ejecutivo</h2>
        <p>
            Un error elemental (<code>NullPointerException</code> en Java) escaló hasta convertirse
            en una interrupción de servicios de varias horas. El incidente detuvo el procesamiento
            de pagos asíncronos, generando pérdidas financieras directas debido al bloqueo en
            cascada de los consumidores del sistema de mensajería.
        </p>
        <ul>
            <li>
                <strong>Causa raíz:</strong> acceso a objeto anidado sin validar nulidad en un lote
                batch.
            </li>
            <li>
                <strong>Efecto:</strong> reintentos infinitos del mismo offset, consumer lag
                millonario, pagos de todos los usuarios detenidos.
            </li>
            <li>
                <strong>Solución:</strong> validación temprana, DLQ con commits parciales y tipado
                defensivo.
            </li>
        </ul>

        <h2>2. Arquitectura original y origen del fallo</h2>
        <p>El sistema utilizaba una arquitectura distribuida basada en eventos:</p>
        <ul>
            <li>
                Un clúster de microservicios publicaba mensajes en una cola de{" "}
                <strong>Apache Kafka</strong>.
            </li>
            <li>
                Un grupo de consumidores en <strong>Java (Spring Boot)</strong> leía los mensajes en
                lotes (batches de 500 eventos) para procesar transacciones financieras.
            </li>
        </ul>

        <h3>El mecanismo de falla</h3>
        <ol>
            <li>
                <strong>El veneno en el lote:</strong> un productor envió un mensaje malformado
                donde un campo obligatorio de auditoría venía como <code>null</code>.
            </li>
            <li>
                <strong>Falta de sanitización:</strong> el consumidor ejecutó un método sobre ese
                campo sin verificar el estado del objeto, disparando un{" "}
                <code>NullPointerException</code>.
            </li>
            <li>
                <strong>El bucle infinito de Kafka:</strong> al fallar el lote completo, el
                consumidor no realizó el commit del offset. El framework, buscando asegurar el
                procesamiento (<em>at-least-once delivery</em>), volvió a reintentar el mismo lote
                indefinidamente.
            </li>
            <li>
                <strong>Bloqueo en cascada:</strong> el hilo quedó atrapado reintentando el mensaje
                envenenado. La cola acumuló millones de mensajes atrasados (lag), deteniendo el
                procesamiento de pagos de toda la plataforma.
            </li>
        </ol>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-collapse-diagram.png"
                alt="Diagrama del colapso: productores, Kafka, batch con mensaje envenenado, consumidores Spring Boot en bucle infinito y lag acumulado"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Diagrama del colapso — arquitectura original y origen del fallo
            </figcaption>
        </figure>

        <hr />

        <h2>3. Rediseño arquitectónico</h2>
        <p>
            Para evitar que un error de software tire la infraestructura, el flujo se rediseñó con
            tres patrones de resiliencia:
        </p>

        <h3>A. Validación temprana (fail-fast layer)</h3>
        <p>
            Capa de interceptores con validación de esquemas (<strong>Avro</strong> o Bean
            Validation con <code>@NotNull</code> de Jakarta) antes de que el procesador principal
            toque el lote. Si el objeto no cumple el contrato, se descarta o desvía de inmediato.
        </p>

        <h3>B. Dead Letter Queue (DLQ) con reintentos no bloqueantes</h3>
        <p>Un lote no puede fallar por culpa de un único mensaje corrupto:</p>
        <ol>
            <li>
                <strong>Aislamiento del error:</strong> al capturar una excepción inesperada, el
                consumidor separa el mensaje problemático.
            </li>
            <li>
                <strong>Procesamiento del resto:</strong> commit de los 499 mensajes válidos del lote
                para no frenar la operación general.
            </li>
            <li>
                <strong>Enrutamiento al DLQ:</strong> el mensaje corrupto va a un retry topic o
                directamente a una <strong>Dead Letter Queue</strong>. Un servicio secundario alerta
                sin congelar el pipeline principal.
            </li>
        </ol>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-dlq-resilience.png"
                alt="Diagrama de resiliencia: mensaje corrupto aislado hacia DLQ mientras 499 mensajes válidos fluyen a la base de datos"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Patrón Dead Letter Queue — aislamiento del mensaje corrupto
            </figcaption>
        </figure>

        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Aspecto</th>
                        <th className="px-3 py-2 text-left">Antes</th>
                        <th className="px-3 py-2 text-left">Después</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Commit del lote</td>
                        <td className="px-3 py-2">Todo o nada</td>
                        <td className="px-3 py-2">Parcial + DLQ</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Mensaje corrupto</td>
                        <td className="px-3 py-2">Reintento infinito</td>
                        <td className="px-3 py-2">Aislamiento y alerta</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">Disponibilidad</td>
                        <td className="px-3 py-2">1 msg congela todo</td>
                        <td className="px-3 py-2">99.9% de transacciones sigue</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h3>C. Tipado seguro (migración defensiva)</h3>
        <p>
            Erradicar accesos directos propensos a nulidad usando <code>Optional</code> de forma
            estricta, o migrar el componente crítico a <strong>Kotlin</strong>, cuyo sistema de
            tipos distingue nativamente valores nulos y no nulos, eliminando NPEs en tiempo de
            compilación.
        </p>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-code-comparison.png"
                alt="Comparativa de código: Java vulnerable a NPE vs enfoque seguro con Optional y Kotlin"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Código tradicional vs enfoque seguro con Optional y Kotlin
            </figcaption>
        </figure>

        <hr />

        <h2>4. Monitoreo y trade-offs</h2>

        <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
            <Image
                src="/blog/npe-observability-dashboard.png"
                alt="Dashboard de observabilidad: Kafka consumer lag, mensajes en DLQ y alertas PagerDuty"
                width={1400}
                height={900}
                className={diagramClass}
            />
            <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                Dashboard de observabilidad — métricas de lag, DLQ y alertas en producción
            </figcaption>
        </figure>

        <ul>
            <li>
                <strong>Observabilidad:</strong> métricas en <strong>Prometheus</strong> para
                consumer lag y tasa de mensajes desviados al DLQ, con alertas a{" "}
                <strong>PagerDuty</strong> si el lag supera umbral crítico.
            </li>
            <li>
                <strong>Trade-off:</strong> desviar mensajes a DLQ puede alterar el orden estricto
                de eventos corruptos. En sistemas financieros, se justifica sacrificar ese orden a
                cambio de mantener la alta disponibilidad del 99.9% de transacciones legítimas.
            </li>
        </ul>

        <h3>Lecciones clave</h3>
        <ul>
            <li>Un bug de una línea puede tumbar toda la infraestructura a escala.</li>
            <li>
                <em>At-least-once</em> sin manejo de poison messages es una trampa silenciosa.
            </li>
            <li>La resiliencia se diseña: validación, DLQ y observabilidad no son opcionales.</li>
        </ul>

        <blockquote>
            Cualquiera puede escribir código que funcione en local. Diagnosticar cómo falla un
            sistema a gran escala y rediseñarlo con trade-offs claros es lo que separa un perfil
            senior de uno que solo pica código.
        </blockquote>
    </>
);

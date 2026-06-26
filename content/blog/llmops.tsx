import Image from "next/image";
import type { BlogPost } from "@/types/blog";

export const llmopsPost: BlogPost = {
    slug: "llmops",
    title: "Large Language Model Operations (LLMOps)",
    excerpt:
        "Qué implica llevar modelos de lenguaje a producción: despliegue, monitoreo, costos y evaluación continua en entornos empresariales.",
    image: "/image-5.jpg",
    date: "26/06/2026",
    updatedAt: "26/06/2026",
    readTime: "9 min",
    tags: ["AIEngineering", "LLM", "LLMApplications"],
    content: (
        <>
            <p>
                LLMOps son las prácticas, procesos e infraestructura necesarios para gestionar, desplegar
                y mantener aplicaciones basadas en modelos de lenguaje. No basta con llamar a una API:
                en producción necesitas eficiencia, escalabilidad y control de riesgo.
            </p>
            <p>
                Este artículo cubre el ciclo de vida de una aplicación LLM — desde la ideación hasta la
                operación — y los retos que encontré al acercar IA generativa a sistemas críticos de
                banca y fintech.
            </p>

            <h2>Etapas del ciclo de vida de aplicaciones LLM</h2>

            <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
                <Image
                    src="/image-5.jpg"
                    alt="Etapas del ciclo de vida LLMOps"
                    width={1200}
                    height={630}
                    className="object-cover w-full h-56 md:h-72"
                />
                <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                    Etapas del ciclo de vida de aplicaciones LLM
                </figcaption>
            </figure>

            <h3>Ideación</h3>
            <p>Planificar el problema de negocio e identificar qué datos y qué modelo base usar.</p>
            <ul>
                <li>
                    <strong>Data sourcing:</strong> identificar fuentes, transformar datos y evaluar costos
                    de acceso.
                </li>
                <li>
                    <strong>Selección del modelo base:</strong> elegir entre modelos propietarios u
                    open-source según privacidad, costo y capacidad de personalización.
                </li>
            </ul>

            <h3>Desarrollo</h3>
            <p>Construir la aplicación: prompts, cadenas, agentes, RAG o fine-tuning, y pruebas.</p>

            <h3>Operación</h3>
            <p>Desplegar, monitorear, controlar costos y aplicar gobernanza y seguridad.</p>

            <hr />

            <h2>Fase de ideación</h2>

            <h3>Data sourcing</h3>
            <p>Tres preguntas guían esta etapa:</p>
            <ol>
                <li><strong>¿Los datos son relevantes?</strong> Deben responder al caso de uso concreto.</li>
                <li>
                    <strong>¿Están disponibles?</strong> Hay que transformarlos, crear bases adicionales y
                    evaluar costos o restricciones de acceso.
                </li>
                <li>
                    <strong>¿Cumplen estándares?</strong> Calidad, gobernanza y cumplimiento normativo
                    (crítico en banca).
                </li>
            </ol>

            <h3>Selección del modelo base</h3>
            <p>La mayoría de organizaciones parten de modelos pre-entrenados. La primera decisión es
                propietario vs. open-source.</p>

            <div className="grid gap-4 my-6 md:grid-cols-2">
                <div className="p-4 border rounded-xl border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03]">
                    <h4 className="font-semibold text-secondary">Modelos propietarios</h4>
                    <p className="mt-2 text-sm opacity-90">
                        <strong>Ventajas:</strong> setup rápido, calidad, disponibilidad.
                    </p>
                    <p className="mt-1 text-sm opacity-90">
                        <strong>Limitaciones:</strong> datos salen del perímetro, personalización limitada.
                    </p>
                </div>
                <div className="p-4 border rounded-xl border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03]">
                    <h4 className="font-semibold text-secondary">Modelos open-source</h4>
                    <p className="mt-2 text-sm opacity-90">
                        <strong>Ventajas:</strong> hosting interno, transparencia, customización total.
                    </p>
                    <p className="mt-1 text-sm opacity-90">
                        <strong>Limitaciones:</strong> soporte, licencias comerciales, operación propia.
                    </p>
                </div>
            </div>

            <p>Factores clave: rendimiento, ventana de contexto, fine-tunability, licencia, costo e impacto ambiental.</p>

            <hr />

            <h2>Fase de desarrollo</h2>

            <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
                <Image
                    src="/image-6.jpg"
                    alt="Fase de desarrollo LLMOps"
                    width={1200}
                    height={630}
                    className="object-cover w-full h-56 md:h-72"
                />
                <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                    Fase de desarrollo
                </figcaption>
            </figure>

            <h3>Prompt engineering</h3>
            <p>
                El prompt es el corazón de la app. Mejora rendimiento, controla la salida y reduce sesgos
                y alucinaciones.
            </p>
            <ul>
                <li>Experimentar con temperatura, max tokens y patrones de diseño.</li>
                <li>Usar un playground para probar modelos y configuraciones.</li>
                <li>Registrar prompt, output, modelo y settings (versionado o prompt manager).</li>
                <li>Crear plantillas reutilizables con placeholders para distintos inputs.</li>
            </ul>

            <h3>Chains y Agents</h3>
            <p>
                Una <strong>chain</strong> conecta pasos deterministas: entrada → procesamiento → salida.
                Un <strong>agent</strong> elige qué herramienta usar según el contexto.
            </p>

            <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="border-b border-black/15 dark:border-white/15">
                            <th className="px-3 py-2 text-left">Aspecto</th>
                            <th className="px-3 py-2 text-left">Chains</th>
                            <th className="px-3 py-2 text-left">Agents</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-black/10 dark:border-white/10">
                            <td className="px-3 py-2 font-medium">Flujo</td>
                            <td className="px-3 py-2">Determinista, pasos fijos</td>
                            <td className="px-3 py-2">Adaptativo, el LLM decide</td>
                        </tr>
                        <tr className="border-b border-black/10 dark:border-white/10">
                            <td className="px-3 py-2 font-medium">Cuándo usar</td>
                            <td className="px-3 py-2">Flujos conocidos y repetibles</td>
                            <td className="px-3 py-2">Muchas acciones, secuencia incierta</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-2 font-medium">Riesgo</td>
                            <td className="px-3 py-2">Bajo, predecible</td>
                            <td className="px-3 py-2">Mayor costo y latencia</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>RAG y fine-tuning</h3>

            <h4>Retrieval Augmented Generation (RAG)</h4>
            <p>Combina razonamiento del LLM con conocimiento externo en tres pasos:</p>
            <ol>
                <li><strong>Retrieve:</strong> embedding del input, búsqueda en vector DB, top-k documentos.</li>
                <li><strong>Augment:</strong> combinar input con documentos en el prompt.</li>
                <li><strong>Generate:</strong> el modelo produce la respuesta final.</li>
            </ol>

            <figure className="my-8 overflow-hidden border rounded-2xl border-black/10 dark:border-white/10">
                <Image
                    src="/image-7.jpg"
                    alt="Proceso RAG"
                    width={1200}
                    height={630}
                    className="object-cover w-full h-56 md:h-72"
                />
                <figcaption className="px-4 py-3 text-sm text-center opacity-70 bg-black/[0.03] dark:bg-white/5">
                    Proceso RAG: Retrieve → Augment → Generate
                </figcaption>
            </figure>

            <h4>Fine-tuning</h4>
            <p>Ajusta los pesos del modelo con datos propios. Dos enfoques:</p>
            <ul>
                <li><strong>Supervised fine-tuning:</strong> pares input-output de demostración.</li>
                <li><strong>RLHF:</strong> feedback humano y modelo de recompensa.</li>
            </ul>

            <div className="grid gap-4 my-6 md:grid-cols-2">
                <div className="p-4 border rounded-xl border-black/10 dark:border-white/10">
                    <h4 className="font-semibold">RAG ✅</h4>
                    <p className="mt-2 text-sm">Conocimiento factual, fácil de actualizar, mantiene capacidades base.</p>
                    <p className="mt-1 text-sm opacity-70">❌ Componentes extra, ingeniería cuidadosa.</p>
                </div>
                <div className="p-4 border rounded-xl border-black/10 dark:border-white/10">
                    <h4 className="font-semibold">Fine-tuning ✅</h4>
                    <p className="mt-2 text-sm">Especialización de dominio, control total, sin componentes extra.</p>
                    <p className="mt-1 text-sm opacity-70">❌ Datos etiquetados, riesgo de sesgo y olvido catastrófico.</p>
                </div>
            </div>

            <h3>Testing</h3>
            <p>Los LLM se equivocan. Hay que definir cuándo la app está lista para producción.</p>
            <ol>
                <li><strong>Test set:</strong> datos que reflejen escenarios reales.</li>
                <li><strong>Métricas:</strong> accuracy si hay respuesta correcta; similitud textual o LLM-judge si hay referencia; ratings humanos o unsupervised si no hay ground truth.</li>
                <li><strong>Métricas secundarias:</strong> sesgo, toxicidad, latencia, costo y uso de memoria.</li>
            </ol>

            <hr />

            <h2>Fase operacional</h2>

            <h3>Deployment</h3>
            <p>
                No hay receta única. Puede incluir chain/agent, vector DB, LLM y APIs propias. Cada
                componente se despliega y debe funcionar en conjunto.
            </p>
            <ul>
                <li><strong>Hosting:</strong> cloud público/privado u on-premise.</li>
                <li><strong>API design:</strong> escalabilidad, costo y seguridad con API keys.</li>
                <li><strong>Ejecución:</strong> contenedores, serverless o servicios managed.</li>
            </ul>
            <p>
                CI/CD: build → test → registry → deploy a staging/producción. Escalar horizontal para
                tráfico; vertical para confiabilidad y velocidad.
            </p>

            <h3>Monitoreo y observabilidad</h3>
            <ul>
                <li><strong>Logs, métricas y trazas</strong> para entender el estado interno.</li>
                <li><strong>Input monitoring:</strong> drift de datos, errores, contenido malicioso.</li>
                <li><strong>Functional monitoring:</strong> latencia, volumen, errores, costo por request.</li>
                <li><strong>Output monitoring:</strong> calidad, sesgo, toxicidad; detectar model drift.</li>
            </ul>

            <h3>Gestión de costos</h3>
            <p>
                El costo escala con hosting y uso. Self-hosted paga por tiempo de servidor; propietarios
                por tokens o llamadas.
            </p>
            <ul>
                <li>Elegir el modelo más barato que cumpla el objetivo.</li>
                <li>Comprimir prompts y optimizar RAG (menos documentos).</li>
                <li>Batching, caché de respuestas, límites de rate y cuotas.</li>
            </ul>

            <h3>Gobernanza y seguridad</h3>
            <p>
                Políticas, RBAC, zero trust y auditoría. Amenazas comunes:
            </p>
            <ul>
                <li><strong>Prompt injection:</strong> tratar al LLM como usuario no confiable.</li>
                <li><strong>Output manipulation:</strong> limitar permisos downstream.</li>
                <li><strong>DoS:</strong> rate limiting y tope de recursos por request.</li>
                <li><strong>Data poisoning:</strong> fuentes confiables y filtros en entrenamiento.</li>
            </ul>
            <p>
                Referencia útil:{" "}
                <a
                    href="https://owasp.org/www-project-top-10-for-large-language-model-applications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline-offset-2 hover:underline"
                >
                    OWASP Top 10 for LLM Applications
                </a>
                .
            </p>

            <hr />

            <p>
                LLMOps marca un cambio respecto al MLOps clásico: prompts, costos por token y amenazas
                propias de modelos de lenguaje exigen un enfoque de punta a punta — desde la selección
                del modelo hasta monitoreo y gobernanza continua.
            </p>

            <blockquote>
                El futuro de las aplicaciones LLM no es solo tener acceso a modelos potentes; es tener la
                excelencia operacional para desplegarlos de forma responsable y sostenible.
            </blockquote>

            <p className="text-sm opacity-70">
                Inspirado en el enfoque de{" "}
                <a
                    href="https://www.bryan-aguilar.com/blog/llmops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline-offset-2 hover:underline"
                >
                    Bryan Aguilar
                </a>
                . Artículo adaptado con perspectiva de ingeniería de software empresarial.
            </p>
        </>
    ),
};

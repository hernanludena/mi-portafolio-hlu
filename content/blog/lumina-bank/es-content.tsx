import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const luminaContentEs = (
    <>
        <p>
            Construir software para un banco no es lo mismo que construir una web tradicional. Los
            sistemas financieros deben estar disponibles 24/7, proteger información sensible,
            procesar miles de transacciones por segundo y seguir operando aunque componentes
            individuales fallen.
        </p>
        <p>
            En este case study diseñé la arquitectura de <strong>Lumina Bank</strong>, un banco
            digital ficticio capaz de soportar <strong>10 millones de usuarios concurrentes</strong>{" "}
            con alta disponibilidad, escalabilidad horizontal y seguridad de nivel enterprise.
        </p>

        <blockquote>
            Lumina Bank es un case study de diseño arquitectónico. Basado en un ejercicio de
            arquitectura empresarial; no representa un despliegue productivo ni datos reales de
            clientes.
        </blockquote>

        <h2>Desafío de negocio</h2>
        <p>
            Lumina Bank planea lanzar su plataforma de banca digital a nivel nacional con adopción
            digital superior al 90%. La solución debe soportar:
        </p>
        <ul>
            <li>Más de <strong>10 millones de usuarios concurrentes</strong></li>
            <li>Canales móvil y web</li>
            <li>Operación continua 7×24</li>
            <li><strong>99.8%</strong> de disponibilidad</li>
            <li>Transacciones financieras seguras</li>
            <li>Escalabilidad horizontal y recuperación ante desastres</li>
            <li>Monitoreo y alertas proactivas</li>
        </ul>

        <BlogFigure
            src="/blog/lumina-bank-requirements.png"
            alt="Desafío de negocio Lumina Bank: 10M usuarios, 99.8% uptime, operación 7x24"
            caption="Business Challenge — escala, disponibilidad y operación continua"
        />

        <h2>Requerimientos funcionales</h2>
        <p>La plataforma gestiona entidades core bancarias:</p>
        <ul>
            <li>Clientes, sucursales y cuentas (con múltiples titulares)</li>
            <li>Consignaciones, retiros e historial de transacciones</li>
        </ul>
        <p>Usuarios administrativos pueden crear clientes, abrir cuentas, activar/desactivar cuentas, consultar historial y gestionar sucursales.</p>

        <h2>Requerimientos no funcionales</h2>

        <h3>1. Escalabilidad</h3>
        <p>El sistema debe absorber picos de tráfico sin degradar el rendimiento:</p>
        <ul>
            <li>Servicios stateless y escalado horizontal</li>
            <li>Auto Scaling y Load Balancing</li>
            <li>Redis Cache y réplicas de lectura</li>
            <li>Arquitectura event-driven con Kafka</li>
        </ul>

        <h3>2. Alta disponibilidad</h3>
        <ul>
            <li>Múltiples instancias y despliegue multi-zona</li>
            <li>Health checks, failover automático y rolling deployments</li>
            <li>Sitio de contingencia con arquitectura espejo</li>
        </ul>
        <p>
            Objetivo de disponibilidad: <strong>99.8%</strong>
        </p>

        <h3>3. Seguridad</h3>
        <ul>
            <li>OAuth2, JWT y MFA</li>
            <li>HTTPS, WAF y OWASP Top 10</li>
            <li>Auditoría, cifrado en tránsito y en reposo</li>
            <li>Sesión única por usuario</li>
        </ul>

        <BlogFigure
            src="/blog/lumina-bank-security.png"
            alt="Estrategia de seguridad enterprise con JWT y OAuth2"
            caption="Enterprise Security — OAuth2, JWT, WAF y audit trail distribuido"
        />

        <h2>Arquitectura de alto nivel</h2>
        <p>Plataforma cloud-native basada en microservicios independientes:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Usuarios → CDN → Load Balancer → API Gateway
  → Authentication / Customer / Account / Transaction Services
  → Kafka Event Bus → Redis Cache → Primary DB → Read Replicas
  → Monitoring Stack`}
        </pre>

        <BlogFigure
            src="/blog/lumina-bank-architecture.png"
            alt="Arquitectura de alto nivel Lumina Bank con microservicios Spring Boot, Redis y Kafka"
            caption="High Level Architecture — API Gateway, microservicios y capa de datos"
        />

        <h2>Estrategia de escalabilidad</h2>
        <ul>
            <li><strong>Escalado horizontal:</strong> instancias automáticas en picos de tráfico.</li>
            <li><strong>Servicios stateless:</strong> ninguna sesión en el servidor de aplicación.</li>
            <li><strong>Caché Redis:</strong> reduce carga sobre la base de datos.</li>
            <li><strong>Procesamiento asíncrono:</strong> operaciones largas vía eventos Kafka.</li>
            <li><strong>Replicación:</strong> lecturas distribuidas en réplicas; escrituras en primaria.</li>
            <li><strong>Data sharding:</strong> partición por rango de customer ID.</li>
        </ul>

        <BlogFigure
            src="/blog/lumina-bank-scaling.png"
            alt="Estrategia de escalabilidad horizontal con microservicios y Kafka"
            caption="Horizontal Scaling — auto-scale, sharding y sitio de contingencia"
        />

        <h2>Monitoreo y observabilidad</h2>
        <p>Stack de monitoreo continuo:</p>
        <ul>
            <li>Prometheus, Grafana, OpenTelemetry y ELK Stack</li>
            <li>Health checks y distributed tracing</li>
            <li>Integración con PagerDuty para alertas</li>
        </ul>
        <p>Métricas clave: tiempo de respuesta API, CPU/memoria, tasa de error, transacciones fallidas, fallos de autenticación, rendimiento de BD y usuarios concurrentes.</p>

        <BlogFigure
            src="/blog/lumina-bank-monitoring.png"
            alt="Dashboard de monitoreo Prometheus Grafana con alertas PagerDuty"
            caption="Monitoring & Observability — telemetría distribuida y alertas"
        />

        <h2>Equipo del proyecto</h2>
        <p>Entregar un sistema de esta escala requiere roles especializados:</p>
        <ul>
            <li>Software Architect, Backend/Frontend Developers, QA</li>
            <li>DevOps, Security Engineer, DBA</li>
            <li>Product Owner y Scrum Master</li>
        </ul>

        <h2>Métricas de éxito</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Métrica</th>
                        <th className="px-3 py-2 text-left">Objetivo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Disponibilidad</td>
                        <td className="px-3 py-2">99.8%</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Tiempo de respuesta</td>
                        <td className="px-3 py-2">&lt; 300 ms</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Transacciones fallidas</td>
                        <td className="px-3 py-2">&lt; 0.1%</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Autenticación exitosa</td>
                        <td className="px-3 py-2">&gt; 99%</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2">Despliegues a producción</td>
                        <td className="px-3 py-2">100% exitosos (zero-downtime)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Lecciones aprendidas</h2>
        <p>
            Diseñar sistemas bancarios enterprise exige más que implementar funcionalidad de negocio.
            Escalabilidad, disponibilidad, seguridad y observabilidad deben considerarse desde el
            inicio — no como parches posteriores.
        </p>

        <h2>Tecnologías</h2>
        <p>
            Java, Spring Boot, React, Oracle, Redis, Kafka, Docker, Kubernetes, Azure/AWS, REST,
            OAuth2, JWT, Prometheus, Grafana, OpenTelemetry, ELK y microservicios.
        </p>

        <BlogClosingQuote>
            La banca enterprise no es CRUD — es diseñar sistemas que sigan siendo correctos bajo
            carga, fallos y ataques.
        </BlogClosingQuote>
    </>
);

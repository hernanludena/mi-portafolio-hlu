import BlogFigure from "@/components/blog-figure";

export const patientManagementDetailEs = (
    <>
        <p>
            Monorepo de microservicios con <strong>Java 21</strong> y <strong>Spring Boot</strong> para gestionar
            pacientes, citas, facturación, autenticación y analytics. Cada servicio es un proyecto Maven independiente
            orquestado con <strong>Docker Compose</strong> y desplegable en AWS ECS vía CDK + LocalStack.
        </p>

        <h2>Arquitectura</h2>
        <p>Seis microservicios con responsabilidades claras:</p>
        <ul>
            <li><strong>api-gateway:</strong> entrada HTTP pública — login y rutas protegidas con filtro JWT.</li>
            <li><strong>auth-service:</strong> emisión y validación de tokens JWT (BCrypt + PostgreSQL).</li>
            <li><strong>patient-service:</strong> CRUD de pacientes, cliente gRPC a billing y productor Kafka.</li>
            <li><strong>billing-service:</strong> servidor gRPC — crea cuenta de facturación al registrar paciente.</li>
            <li><strong>appointment-service:</strong> CRUD de citas con validación HTTP del paciente.</li>
            <li><strong>analytics-service:</strong> consumidor Kafka de eventos <code>PatientEvent</code>.</li>
        </ul>

        <h2>Características clave</h2>
        <ul>
            <li><strong>API Gateway</strong> con validación JWT antes de enrutar a <code>/api/patients/**</code>.</li>
            <li><strong>gRPC</strong> síncrono entre patient-service y billing-service al crear paciente.</li>
            <li><strong>Kafka</strong> asíncrono — topic <code>patient</code> con payload Protobuf.</li>
            <li>Dos bases <strong>PostgreSQL</strong> aisladas: <code>patientdb</code> y <code>authdb</code>.</li>
            <li>Frontend React para pruebas manuales — login, CRUD pacientes y citas.</li>
            <li>Módulo <strong>infrastructure/</strong> con AWS CDK + LocalStack para despliegue tipo producción.</li>
        </ul>

        <BlogFigure
            src="/projects/patient-management-dashboard.png"
            alt="Patient Management — React test client con login JWT"
            caption="Frontend — login por gateway, CRUD pacientes y citas"
        />

        <h2>API Gateway</h2>
        <p>
            Punto de entrada único en <code>:4004</code>. Enruta <code>/auth/**</code> a auth-service y{" "}
            <code>/api/patients/**</code> a patient-service tras validar JWT. Analytics y citas tienen rutas
            dedicadas según el servicio.
        </p>
        <BlogFigure
            src="/projects/patient-management-gateway.png"
            alt="Diagrama API Gateway — enrutamiento a microservicios"
            caption="API Gateway — entrada HTTP y enrutamiento interno"
        />

        <h2>Autenticación JWT</h2>
        <p>
            El cliente hace <code>POST /auth/login</code> vía gateway, recibe un JWT y lo envía en{" "}
            <code>Authorization: Bearer</code> para rutas protegidas. El gateway valida el token con auth-service
            antes de reenviar a patient-service.
        </p>
        <BlogFigure
            src="/projects/patient-management-auth.png"
            alt="Diagrama de flujo de autenticación JWT"
            caption="Auth — login, validación de token y enrutamiento"
        />

        <h2>CRUD de pacientes y citas</h2>
        <p>
            Pacientes protegidos en <code>/api/patients</code> (gateway :4004). Citas públicas en{" "}
            <code>appointment-service</code> (:4002) con validación de <code>patientId</code> vía HTTP.
        </p>
        <BlogFigure
            src="/projects/patient-management-crud.png"
            alt="Dashboard con lista de pacientes y cita creada"
            caption="UI — 22 pacientes registrados y cita SCHEDULED"
        />

        <h2>Pipeline Kafka</h2>
        <p>
            Al crear un paciente: persistencia en PostgreSQL → gRPC a billing → publicación de{" "}
            <code>PatientEvent</code> → consumo en analytics-service.
        </p>
        <BlogFigure
            src="/projects/patient-management-kafka.png"
            alt="Diagrama Kafka — patient-service producer y analytics consumer"
            caption="Kafka — eventos asíncronos al crear paciente"
        />

        <h2>Despliegue en AWS ECS</h2>
        <p>
            El módulo CDK despliega ALB, ECS tasks, RDS y MSK Kafka en subnets privadas — topology
            production-like emulada con LocalStack.
        </p>
        <BlogFigure
            src="/projects/patient-management-ecs.png"
            alt="Arquitectura ECS con ALB, microservicios, RDS y MSK"
            caption="AWS ECS — ALB, servicios, RDS y MSK Kafka"
        />

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li><code>docker compose up --build</code> — stack completo desde la raíz del repo.</li>
            <li>Login: <code>http://localhost:4004/auth/login</code></li>
            <li>Pacientes: <code>http://localhost:4004/api/patients</code> (con Bearer token)</li>
            <li>Citas: <code>http://localhost:4002/appointments</code></li>
            <li>Frontend: <code>cd frontend && npm run dev</code> → <code>localhost:5173</code></li>
        </ol>

        <p>
            Documentación completa en el repositorio: diagramas Mermaid en <code>docs/ARCHITECTURE.md</code>,
            flujos de auth en <code>docs/AUTH.md</code>, requests HTTP en <code>requests/</code> e
            infraestructura en <code>infrastructure/README.md</code>.
        </p>
    </>
);

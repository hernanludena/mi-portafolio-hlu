import BlogFigure from "@/components/blog-figure";

export const patientManagementDetailEn = (
    <>
        <p>
            Java 21 microservices monorepo built with <strong>Spring Boot</strong> to manage patients,
            appointments, billing, authentication, and analytics. Each service is an independent Maven project
            orchestrated with <strong>Docker Compose</strong> and deployable to AWS ECS via CDK + LocalStack.
        </p>

        <h2>Architecture</h2>
        <p>Six microservices with clear responsibilities:</p>
        <ul>
            <li><strong>api-gateway:</strong> public HTTP entry point — login and JWT-protected routes.</li>
            <li><strong>auth-service:</strong> JWT issuance and validation (BCrypt + PostgreSQL).</li>
            <li><strong>patient-service:</strong> patient CRUD, gRPC client to billing, and Kafka producer.</li>
            <li><strong>billing-service:</strong> gRPC server — creates billing account on patient registration.</li>
            <li><strong>appointment-service:</strong> appointment CRUD with HTTP patient validation.</li>
            <li><strong>analytics-service:</strong> Kafka consumer for <code>PatientEvent</code> messages.</li>
        </ul>

        <h2>Key features</h2>
        <ul>
            <li><strong>API Gateway</strong> with JWT validation before routing to <code>/api/patients/**</code>.</li>
            <li><strong>gRPC</strong> synchronous call between patient-service and billing-service on create.</li>
            <li><strong>Kafka</strong> async — <code>patient</code> topic with Protobuf payload.</li>
            <li>Two isolated <strong>PostgreSQL</strong> databases: <code>patientdb</code> and <code>authdb</code>.</li>
            <li>React frontend for manual testing — login, patient CRUD, and appointments.</li>
            <li><strong>infrastructure/</strong> module with AWS CDK + LocalStack for production-like deployment.</li>
        </ul>

        <BlogFigure
            src="/projects/patient-management-dashboard.png"
            alt="Patient Management — React test client with JWT login"
            caption="Frontend — gateway login, patient CRUD, and appointments"
        />

        <h2>API Gateway</h2>
        <p>
            Single entry point on <code>:4004</code>. Routes <code>/auth/**</code> to auth-service and{" "}
            <code>/api/patients/**</code> to patient-service after JWT validation. Analytics and appointments
            have dedicated routes per service.
        </p>
        <BlogFigure
            src="/projects/patient-management-gateway.png"
            alt="API Gateway diagram — routing to microservices"
            caption="API Gateway — HTTP entry point and internal routing"
        />

        <h2>JWT authentication</h2>
        <p>
            The client calls <code>POST /auth/login</code> via the gateway, receives a JWT, and sends it in{" "}
            <code>Authorization: Bearer</code> for protected routes. The gateway validates the token with
            auth-service before forwarding to patient-service.
        </p>
        <BlogFigure
            src="/projects/patient-management-auth.png"
            alt="JWT authentication flow diagram"
            caption="Auth — login, token validation, and routing"
        />

        <h2>Patient and appointment CRUD</h2>
        <p>
            Patients are protected at <code>/api/patients</code> (gateway :4004). Appointments are public on{" "}
            <code>appointment-service</code> (:4002) with HTTP <code>patientId</code> validation.
        </p>
        <BlogFigure
            src="/projects/patient-management-crud.png"
            alt="Dashboard with patient list and created appointment"
            caption="UI — 22 registered patients and SCHEDULED appointment"
        />

        <h2>Kafka pipeline</h2>
        <p>
            On patient creation: PostgreSQL persistence → gRPC to billing → <code>PatientEvent</code> publish →
            analytics-service consumption.
        </p>
        <BlogFigure
            src="/projects/patient-management-kafka.png"
            alt="Kafka diagram — patient-service producer and analytics consumer"
            caption="Kafka — async events on patient creation"
        />

        <h2>AWS ECS deployment</h2>
        <p>
            The CDK module deploys ALB, ECS tasks, RDS, and MSK Kafka in private subnets — production-like
            topology emulated with LocalStack.
        </p>
        <BlogFigure
            src="/projects/patient-management-ecs.png"
            alt="ECS architecture with ALB, microservices, RDS, and MSK"
            caption="AWS ECS — ALB, services, RDS, and MSK Kafka"
        />

        <h2>How to run</h2>
        <ol>
            <li><code>docker compose up --build</code> — full stack from the repo root.</li>
            <li>Login: <code>http://localhost:4004/auth/login</code></li>
            <li>Patients: <code>http://localhost:4004/api/patients</code> (with Bearer token)</li>
            <li>Appointments: <code>http://localhost:4002/appointments</code></li>
            <li>Frontend: <code>cd frontend && npm run dev</code> → <code>localhost:5173</code></li>
        </ol>

        <p>
            Full documentation in the repo: Mermaid diagrams in <code>docs/ARCHITECTURE.md</code>, auth flows in{" "}
            <code>docs/AUTH.md</code>, HTTP requests in <code>requests/</code>, and infrastructure in{" "}
            <code>infrastructure/README.md</code>.
        </p>
    </>
);

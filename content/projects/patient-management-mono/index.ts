import type { ProjectDetailDefinition } from "@/types/project";
import { patientManagementDetailEs } from "./es-content";
import { patientManagementDetailEn } from "./en-content";

export const patientManagementProject: ProjectDetailDefinition = {
    slug: "patient-management-microservices",
    image: "/projects/patient-management-thumbnail.png",
    tags: ["Java 21", "Spring Boot", "Kafka", "gRPC", "PostgreSQL"],
    urlGithub: "https://github.com/hernanludena/patient-management-mono",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Patient Management — Microservices",
            description:
                "Monorepo de microservicios para pacientes, citas, billing y analytics. API Gateway con JWT, gRPC, Kafka y despliegue ECS con AWS CDK.",
            metrics: [
                { value: "6", label: "microservicios" },
                { value: "JWT", label: "API Gateway" },
                { value: "gRPC", label: "+ Kafka" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Patient Management — Microservices",
            description:
                "Microservices monorepo for patients, appointments, billing, and analytics. JWT API Gateway, gRPC, Kafka, and ECS deployment with AWS CDK.",
            metrics: [
                { value: "6", label: "microservices" },
                { value: "JWT", label: "API Gateway" },
                { value: "gRPC", label: "+ Kafka" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Patient Management — Microservices",
            subtitle: "Stack distribuido con Spring Boot, API Gateway, gRPC, Kafka y PostgreSQL",
            content: patientManagementDetailEs,
        },
        en: {
            title: "Patient Management — Microservices",
            subtitle: "Distributed stack with Spring Boot, API Gateway, gRPC, Kafka, and PostgreSQL",
            content: patientManagementDetailEn,
        },
    },
};

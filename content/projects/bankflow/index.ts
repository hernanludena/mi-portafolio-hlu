import type { ProjectDetailDefinition } from "@/types/project";
import { bankflowDetailEs } from "./es-content";
import { bankflowDetailEn } from "./en-content";

export const bankflowProject: ProjectDetailDefinition = {
    slug: "bankflow",
    image: "/projects/bankflow-thumbnail.png",
    tags: [
        "Java 21",
        "Spring Boot",
        "Hexagonal",
        "Kafka",
        "Keycloak",
        "Kubernetes",
        "React",
    ],
    urlGithub: "https://github.com/hernanludena/bankflow",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Bankflow",
            description:
                "Plataforma bancaria microservicios: hexagonal, Gateway + OAuth2/JWT (Keycloak), Kafka con DLT, Eureka, React SPA. Docker Compose y Helm/K8s.",
            metrics: [
                { value: "2", label: "servicios core" },
                { value: "Kafka", label: "+ DLT retries" },
                { value: "Helm", label: "chart K8s" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Bankflow",
            description:
                "Banking microservices platform: hexagonal, Gateway + OAuth2/JWT (Keycloak), Kafka with DLT, Eureka, React SPA. Docker Compose and Helm/K8s.",
            metrics: [
                { value: "2", label: "core services" },
                { value: "Kafka", label: "+ DLT retries" },
                { value: "Helm", label: "K8s chart" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Bankflow",
            subtitle:
                "Microservicios bancarios hexagonales — Spring Cloud, Kafka, Keycloak, React y Helm",
            content: bankflowDetailEs,
        },
        en: {
            title: "Bankflow",
            subtitle:
                "Hexagonal banking microservices — Spring Cloud, Kafka, Keycloak, React, and Helm",
            content: bankflowDetailEn,
        },
    },
};

import type { ProjectDetailDefinition } from "@/types/project";
import { springRedisDetailEs } from "./es-content";
import { springRedisDetailEn } from "./en-content";

export const springRedisProject: ProjectDetailDefinition = {
    slug: "spring-redis-currency-service",
    image: "/projects/spring-redis-thumbnail.png",
    tags: ["Java 25", "Spring Boot", "Redis", "Docker", "Clean Architecture"],
    urlGithub: "https://github.com/hernanludena/spring-redis-master-v3",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Spring Redis Currency Service",
            description:
                "API de tipos de cambio en tiempo real con Redis como caché, Pub/Sub y Streams. Clean Architecture, ShedLock y consultas sub-milisegundo.",
            metrics: [
                { value: "30s", label: "ingesta automática" },
                { value: "Sub-ms", label: "respuesta API" },
                { value: "Pub/Sub", label: "+ Streams" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Spring Redis Currency Service",
            description:
                "Real-time exchange rate API with Redis as cache, Pub/Sub, and Streams. Clean Architecture, ShedLock, and sub-millisecond queries.",
            metrics: [
                { value: "30s", label: "auto ingestion" },
                { value: "Sub-ms", label: "API response" },
                { value: "Pub/Sub", label: "+ Streams" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Spring Redis Currency Service",
            subtitle: "Tipos de cambio en tiempo real con Redis, Spring Boot 4 y Java 25",
            content: springRedisDetailEs,
        },
        en: {
            title: "Spring Redis Currency Service",
            subtitle: "Real-time exchange rates with Redis, Spring Boot 4, and Java 25",
            content: springRedisDetailEn,
        },
    },
};

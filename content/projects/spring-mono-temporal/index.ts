import type { ProjectDetailDefinition } from "@/types/project";
import { springTemporalDetailEs } from "./es-content";
import { springTemporalDetailEn } from "./en-content";

export const springTemporalProject: ProjectDetailDefinition = {
    slug: "spring-mono-temporal-credit-workflow",
    image: "/projects/spring-temporal-thumbnail.png",
    tags: ["Java 21", "Spring Boot", "Temporal", "React", "PostgreSQL"],
    urlGithub: "https://github.com/hernanludena/spring-mono-temporal",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Spring Mono Temporal — Credit Workflow",
            description:
                "Aprobación de créditos con Temporal, Spring Boot y React. Workflow durable de 6 pasos, Saga, 3 signals y ventana de 48 h para decisión del operador.",
            metrics: [
                { value: "6", label: "pasos workflow" },
                { value: "3", label: "signals" },
                { value: "48h", label: "timeout operador" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Spring Mono Temporal — Credit Workflow",
            description:
                "Credit approval with Temporal, Spring Boot, and React. Durable 6-step workflow, Saga pattern, 3 signals, and a 48-hour operator decision window.",
            metrics: [
                { value: "6", label: "workflow steps" },
                { value: "3", label: "signals" },
                { value: "48h", label: "operator timeout" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Spring Mono Temporal — Credit Workflow",
            subtitle: "Orquestación durable de créditos con Temporal, Spring Boot 3.5 y React",
            content: springTemporalDetailEs,
        },
        en: {
            title: "Spring Mono Temporal — Credit Workflow",
            subtitle: "Durable credit orchestration with Temporal, Spring Boot 3.5, and React",
            content: springTemporalDetailEn,
        },
    },
};

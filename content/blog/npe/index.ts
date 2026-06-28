import type { BlogPostDefinition } from "@/types/blog";
import { npeContentEs } from "./es-content";
import { npeContentEn } from "./en-content";

export const npePostDefinition: BlogPostDefinition = {
    slug: "npe-millones-consumidores-asincronos",
    image: "/blog/npe-hero-thumbnail.png",
    date: "26/06/2026",
    updatedAt: "26/06/2026",
    tags: ["Architecture", "Java", "Kafka"],
    locales: {
        es: {
            title: "Análisis de arquitectura: el NPE de los millones y consumidores asíncronos resilientes",
            excerpt:
                "Un NullPointerException en un batch de Kafka escaló a horas de caída, lag millonario y pérdidas por retraso en pagos. Cómo rediseñar el pipeline.",
            readTime: "8 min",
            content: npeContentEs,
        },
        en: {
            title: "Architecture analysis: the million-dollar NPE and resilient async consumers",
            excerpt:
                "A NullPointerException in a Kafka batch escalated to hours of downtime, million-message lag, and payment delays. How to redesign the pipeline.",
            readTime: "8 min",
            content: npeContentEn,
        },
    },
};

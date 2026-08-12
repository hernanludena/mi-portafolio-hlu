import type { BlogPostDefinition } from "@/types/blog";
import { bianAdopcionContentEs } from "./es-content";
import { bianAdopcionContentEn } from "./en-content";

export const bianAdopcionPostDefinition: BlogPostDefinition = {
    slug: "adoptando-bian-openapi-microservicios",
    image: "/blog/bian-adopcion-card.png",
    date: "14/08/2024",
    updatedAt: "14/08/2024",
    tags: ["SoftwareArchitecture", "BIAN", "OpenAPI", "Banking", "Java"],
    locales: {
        es: {
            title: "Adoptando BIAN sin reescribir el banco: una estrategia evolutiva con OpenAPI y microservicios",
            excerpt:
                "Cómo adoptar BIAN de forma incremental: Service Domains, células de diseño/implementación, contratos OpenAPI y un ejemplo Java — sin Big Bang del Core.",
            readTime: "10 min",
            content: bianAdopcionContentEs,
        },
        en: {
            title: "Adopting BIAN without rewriting the bank: an evolutionary strategy with OpenAPI and microservices",
            excerpt:
                "How to adopt BIAN incrementally: Service Domains, design/implementation cells, OpenAPI contracts, and a Java example — without a Core Big Bang.",
            readTime: "10 min",
            content: bianAdopcionContentEn,
        },
    },
};

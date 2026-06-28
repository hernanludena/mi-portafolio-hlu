import type { BlogPostDefinition } from "@/types/blog";
import { luminaContentEs } from "./es-content";
import { luminaContentEn } from "./en-content";

export const luminaPostDefinition: BlogPostDefinition = {
    slug: "lumina-bank-scalable-architecture",
    image: "/blog/lumina-bank-hero.png",
    date: "28/06/2026",
    updatedAt: "28/06/2026",
    tags: ["SoftwareArchitecture", "Cloud", "Java", "Banking"],
    locales: {
        es: {
            title: "Diseño de Lumina Bank: plataforma bancaria escalable para 10 millones de usuarios concurrentes",
            excerpt:
                "Case study de arquitectura cloud-native: 10M usuarios, 99.8% disponibilidad, microservicios Spring Boot, Kafka, Redis y seguridad enterprise.",
            readTime: "9 min",
            content: luminaContentEs,
        },
        en: {
            title: "Designing Lumina Bank: A Scalable Banking Platform for 10 Million Concurrent Users",
            excerpt:
                "Cloud-native architecture case study: 10M users, 99.8% availability, Spring Boot microservices, Kafka, Redis, and enterprise security.",
            readTime: "9 min",
            content: luminaContentEn,
        },
    },
};

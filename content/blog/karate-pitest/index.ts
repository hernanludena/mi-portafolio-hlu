import type { BlogPostDefinition } from "@/types/blog";
import { karatePitestContentEs } from "./es-content";
import { karatePitestContentEn } from "./en-content";

export const karatePitestPostDefinition: BlogPostDefinition = {
    slug: "karate-pitest-test-confidence",
    image: "/blog/karate-pitest-card.png",
    date: "12/08/2026",
    updatedAt: "12/08/2026",
    tags: [
        "Java",
        "Testing",
        "Karate",
        "PITest",
        "MutationTesting",
        "IntegrationTests",
        "Quality",
    ],
    locales: {
        es: {
            title: "Karate + PITest: de probar que el sistema funciona a comprobar que tus pruebas realmente lo protegen",
            excerpt:
                "Estudio técnico: Karate para integración de APIs y PIT para mutation testing — coverage no basta; cómo medir si los tests detectan defectos reales.",
            readTime: "22 min",
            content: karatePitestContentEs,
        },
        en: {
            title: "Karate + PITest: from proving the system works to proving your tests actually protect it",
            excerpt:
                "Technical study: Karate for API integration and PIT for mutation testing — coverage is not enough; how to measure whether tests detect real defects.",
            readTime: "22 min",
            content: karatePitestContentEn,
        },
    },
};

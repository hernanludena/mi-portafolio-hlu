import type { BlogPostDefinition } from "@/types/blog";
import { karatePitestContentEs } from "./es-content";
import { karatePitestContentEn } from "./en-content";

export const karatePitestPostDefinition: BlogPostDefinition = {
    slug: "karate-pitest-test-confidence",
    image: "/blog/karate-pitest-card.png",
    date: "17/07/2025",
    updatedAt: "17/07/2025",
    tags: [
        "Java",
        "Testing",
        "Karate",
        "Gherkin",
        "Testcontainers",
        "PITest",
        "MutationTesting",
        "BDD",
        "IntegrationTests",
        "Quality",
    ],
    locales: {
        es: {
            title: "Karate + PITest: de probar que el sistema funciona a comprobar que tus pruebas realmente lo protegen",
            excerpt:
                "Gherkin describe el qué, Karate lo ejecuta, Testcontainers aporta infra real y PIT mide si los tests detectan defectos — coverage no basta.",
            readTime: "26 min",
            content: karatePitestContentEs,
        },
        en: {
            title: "Karate + PITest: from proving the system works to proving your tests actually protect it",
            excerpt:
                "Gherkin describes the what, Karate runs it, Testcontainers supplies real infra and PIT measures whether tests catch defects — coverage is not enough.",
            readTime: "26 min",
            content: karatePitestContentEn,
        },
    },
};

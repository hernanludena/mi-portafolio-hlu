import type { BlogPostDefinition } from "@/types/blog";
import { cleanCodeAgenticContentEs } from "./es-content";
import { cleanCodeAgenticContentEn } from "./en-content";

export const cleanCodeAgenticPostDefinition: BlogPostDefinition = {
    slug: "clean-code-to-agentic-engineering",
    image: "/blog/clean-code-agentic-card.png",
    date: "16/06/2026",
    updatedAt: "16/06/2026",
    tags: [
        "CleanCode",
        "AgenticEngineering",
        "AI",
        "Agents",
        "HarnessEngineering",
        "SoftwareEngineering",
        "TechLead",
    ],
    locales: {
        es: {
            title: "De Clean Code a Agentic Engineering: cómo cambia el trabajo del desarrollador con la IA",
            excerpt:
                "Estudio personal: Clean Code no desaparece — cambia de contexto. Coding agents, harness engineering y el nuevo rol del ingeniero que diseña restricciones, evidencia y loops de feedback.",
            readTime: "26 min",
            content: cleanCodeAgenticContentEs,
        },
        en: {
            title: "From Clean Code to Agentic Engineering: how AI is changing the developer's job",
            excerpt:
                "Personal study: Clean Code does not disappear — its context shifts. Coding agents, harness engineering, and the new engineer role that designs constraints, evidence and feedback loops.",
            readTime: "26 min",
            content: cleanCodeAgenticContentEn,
        },
    },
};

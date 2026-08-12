import type { BlogPostDefinition } from "@/types/blog";
import { specDrivenDevelopmentContentEs } from "./es-content";
import { specDrivenDevelopmentContentEn } from "./en-content";

export const specDrivenDevelopmentPostDefinition: BlogPostDefinition = {
    slug: "spec-driven-development",
    image: "/blog/spec-driven-development-card.png",
    date: "04/08/2026",
    updatedAt: "04/08/2026",
    tags: [
        "SDD",
        "SpecDrivenDevelopment",
        "AI",
        "Agents",
        "SoftwareEngineering",
        "BDD",
        "TDD",
        "TechLead",
    ],
    locales: {
        es: {
            title:
                "Spec-Driven Development: del código como centro a la especificación como fuente de verdad",
            excerpt:
                "Estudio personal: con agentes de IA el cuello de botella ya no es escribir código, sino definir y verificar qué debe existir. SDD como contrato entre intención humana e implementación.",
            readTime: "28 min",
            content: specDrivenDevelopmentContentEs,
        },
        en: {
            title:
                "Spec-Driven Development: from code as the center to the specification as source of truth",
            excerpt:
                "Personal study: with AI agents the bottleneck is no longer writing code, but defining and verifying what must exist. SDD as the contract between human intent and implementation.",
            readTime: "28 min",
            content: specDrivenDevelopmentContentEn,
        },
    },
};

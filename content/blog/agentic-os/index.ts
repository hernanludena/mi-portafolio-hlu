import type { BlogPostDefinition } from "@/types/blog";
import { agenticOsContentEs } from "./es-content";
import { agenticOsContentEn } from "./en-content";

export const agenticOsPostDefinition: BlogPostDefinition = {
    slug: "from-prompt-engineering-to-agentic-os",
    image: "/blog/agentic-os-card.png",
    date: "19/05/2026",
    updatedAt: "19/05/2026",
    tags: [
        "AI",
        "Agents",
        "Architecture",
        "ContextEngineering",
        "GraphEngineering",
        "AgenticOS",
    ],
    locales: {
        es: {
            title: "De Prompt Engineering a Agentic Operating Systems",
            excerpt:
                "Propuesta conceptual de evolución: del chatbot al Agentic OS — context, graphs, loops, harness, runtime, evaluación y sistemas auto-mejorables. Modelo propio, no taxonomía oficial.",
            readTime: "28 min",
            content: agenticOsContentEs,
        },
        en: {
            title: "From Prompt Engineering to Agentic Operating Systems",
            excerpt:
                "A conceptual evolution proposal: from chatbot to Agentic OS — context, graphs, loops, harness, runtime, evaluation and self-improving systems. Own model, not an official taxonomy.",
            readTime: "28 min",
            content: agenticOsContentEn,
        },
    },
};

import type { BlogPostDefinition } from "@/types/blog";
import { evalsBottleneckContentEs } from "./es-content";
import { evalsBottleneckContentEn } from "./en-content";

export const evalsBottleneckPostDefinition: BlogPostDefinition = {
    slug: "evals-ai-engineering-bottleneck",
    image: "/blog/evals-bottleneck-card.png",
    date: "08/07/2026",
    updatedAt: "08/07/2026",
    tags: [
        "Evals",
        "AI",
        "Agents",
        "EvaluationEngineering",
        "LoopEngineering",
        "AgenticEngineering",
        "SoftwareEngineering",
    ],
    locales: {
        es: {
            title: "Evals: el nuevo cuello de botella de la ingeniería de IA",
            excerpt:
                "Estudio personal: generar avanza más rápido que evaluar. Con agentes autónomos, la evaluación se convierte en uno de los principales cuellos de botella para sistemas confiables a escala.",
            readTime: "28 min",
            content: evalsBottleneckContentEs,
        },
        en: {
            title: "Evals: the new bottleneck of AI engineering",
            excerpt:
                "Personal study: generation outpaces evaluation. With autonomous agents, evaluation becomes one of the main bottlenecks for reliable systems at scale.",
            readTime: "28 min",
            content: evalsBottleneckContentEn,
        },
    },
};

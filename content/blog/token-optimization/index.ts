import type { BlogPostDefinition } from "@/types/blog";
import { tokenOptimizationContentEs } from "./es-content";
import { tokenOptimizationContentEn } from "./en-content";

export const tokenOptimizationPostDefinition: BlogPostDefinition = {
    slug: "token-optimization-ai-coding-agents",
    image: "/blog/token-optimization-card.png",
    date: "12/08/2026",
    updatedAt: "12/08/2026",
    tags: ["AI", "CodingAgents", "Tokens", "RTK", "Architecture", "Cost"],
    locales: {
        es: {
            title: "Optimización de Tokens en AI Coding Agents: RTK, Compresión y Output Shaping",
            excerpt:
                "Optimizar tokens no es solo acortar el prompt: RTK, context compression, output shaping, AI Gateway y model routing — midiendo cost per successful engineering task.",
            readTime: "14 min",
            content: tokenOptimizationContentEs,
        },
        en: {
            title: "Token Optimization in AI Coding Agents: RTK, Compression and Output Shaping",
            excerpt:
                "Token optimization is not just a shorter prompt: RTK, context compression, output shaping, AI Gateway and model routing — measured as cost per successful engineering task.",
            readTime: "14 min",
            content: tokenOptimizationContentEn,
        },
    },
};

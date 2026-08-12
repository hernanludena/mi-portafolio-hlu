import type { BlogPostDefinition } from "@/types/blog";
import { cursorPromptsLuminaContentEs } from "./es-content";
import { cursorPromptsLuminaContentEn } from "./en-content";

export const cursorPromptsLuminaPostDefinition: BlogPostDefinition = {
    slug: "cursor-prompt-frameworks-lumina-bank",
    image: "/blog/cursor-prompts-lumina-card.png",
    date: "14/02/2026",
    updatedAt: "14/02/2026",
    tags: ["Cursor", "AI", "PromptEngineering", "Banking", "Java", "React"],
    locales: {
        es: {
            title: "8 frameworks de prompts para Cursor en banca digital (Lumina Bank)",
            excerpt:
                "C-L-A-V-E, M-O-L-D-E, A-N-C-L-A y más: contratos de prompting para Controllers, Services, scripts de BD y React con i18n en Lumina Bank Digital.",
            readTime: "12 min",
            content: cursorPromptsLuminaContentEs,
        },
        en: {
            title: "8 Cursor prompt frameworks for digital banking (Lumina Bank)",
            excerpt:
                "C-L-A-V-E, M-O-L-D-E, A-N-C-L-A and more: prompting contracts for Controllers, Services, DB scripts, and React with i18n on Lumina Bank Digital.",
            readTime: "12 min",
            content: cursorPromptsLuminaContentEn,
        },
    },
};

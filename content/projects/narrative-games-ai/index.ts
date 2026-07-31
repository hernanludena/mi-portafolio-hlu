import type { ProjectDetailDefinition } from "@/types/project";
import { narrativeGamesDetailEs } from "./es-content";
import { narrativeGamesDetailEn } from "./en-content";

export const narrativeGamesProject: ProjectDetailDefinition = {
    slug: "narrative-games-ai",
    image: "/projects/narrative-games-thumbnail.png",
    tags: ["NestJS", "FastAPI", "React", "OpenRouter", "PostgreSQL"],
    urlGithub: "https://github.com/hernanludena/narrative-games-ai",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Narrative Games AI",
            description:
                "Monorepo de juegos narrativos con LLM vía OpenRouter. Dos stacks (FastAPI/Ionic y NestJS/Vite), JWT, PostgreSQL y memoria de contexto persistente.",
            metrics: [
                { value: "2", label: "juegos" },
                { value: "4", label: "modelos fallback" },
                { value: "JWT", label: "+ PostgreSQL" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Narrative Games AI",
            description:
                "Monorepo of LLM-powered narrative games via OpenRouter. Two stacks (FastAPI/Ionic and NestJS/Vite), JWT, PostgreSQL, and persistent context memory.",
            metrics: [
                { value: "2", label: "games" },
                { value: "4", label: "fallback models" },
                { value: "JWT", label: "+ PostgreSQL" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Narrative Games AI",
            subtitle: "Monorepo de aventuras narrativas impulsadas por LLM (OpenRouter)",
            content: narrativeGamesDetailEs,
        },
        en: {
            title: "Narrative Games AI",
            subtitle: "Monorepo of LLM-powered narrative adventures (OpenRouter)",
            content: narrativeGamesDetailEn,
        },
    },
};

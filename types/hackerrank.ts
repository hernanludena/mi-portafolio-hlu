import type { ReactNode } from "react";

export type HackerRankLang = "es" | "en";
export type HackerRankDifficulty = "Easy" | "Medium" | "Hard";

export interface HackerRankCardLocale {
    title: string;
    description: string;
}

export interface HackerRankDefinition {
    slug: string;
    image: string;
    difficulty: HackerRankDifficulty;
    tags: string[];
    urlProblem: string;
    urlSolution: string;
    locales: Record<HackerRankLang, HackerRankCardLocale>;
}

export interface HackerRankDetailLocale {
    title: string;
    subtitle: string;
    content: ReactNode;
}

export interface HackerRankDetailDefinition extends HackerRankDefinition {
    detailLocales: Record<HackerRankLang, HackerRankDetailLocale>;
}

export interface HackerRankCard extends HackerRankCardLocale {
    slug: string;
    image: string;
    difficulty: HackerRankDifficulty;
    tags: string[];
    urlProblem: string;
    urlSolution: string;
}

export function resolveHackerRankCard(def: HackerRankDefinition, lang: HackerRankLang): HackerRankCard {
    const locale = def.locales[lang];
    return {
        slug: def.slug,
        image: def.image,
        difficulty: def.difficulty,
        tags: def.tags,
        urlProblem: def.urlProblem,
        urlSolution: def.urlSolution,
        title: locale.title,
        description: locale.description,
    };
}

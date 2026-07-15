import type { ReactNode } from "react";

export type GameLang = "es" | "en";

export interface GameCardLocale {
    label: string;
    title: string;
    description: string;
}

export interface GameDefinition {
    slug: string;
    image: string;
    tags: string[];
    urlGithub: string;
    urlPlay: string;
    locales: Record<GameLang, GameCardLocale>;
}

export interface GameDetailLocale {
    title: string;
    subtitle: string;
    content: ReactNode;
}

export interface GameDetailDefinition extends GameDefinition {
    detailLocales: Record<GameLang, GameDetailLocale>;
}

export interface GameCard extends GameCardLocale {
    slug: string;
    image: string;
    tags: string[];
    urlGithub: string;
    urlPlay: string;
}

export function resolveGameCard(def: GameDefinition, lang: GameLang): GameCard {
    const locale = def.locales[lang];
    return {
        slug: def.slug,
        image: def.image,
        tags: def.tags,
        urlGithub: def.urlGithub,
        urlPlay: def.urlPlay,
        label: locale.label,
        title: locale.title,
        description: locale.description,
    };
}

import type { GameDetailDefinition, GameLang } from "@/types/game";
import { resolveGameCard } from "@/types/game";

const gameDefinitions: GameDetailDefinition[] = [];

const gamesBySlug = Object.fromEntries(
    gameDefinitions.map((def) => [def.slug, def])
) as Record<string, GameDetailDefinition>;

export function getGameDefinition(slug: string): GameDetailDefinition | undefined {
    return gamesBySlug[slug];
}

export function getAllGameDefinitions(): GameDetailDefinition[] {
    return gameDefinitions;
}

export function getAllGameSlugs(): string[] {
    return gameDefinitions.map((def) => def.slug);
}

export function getAllGameCards(lang: GameLang = "es") {
    return gameDefinitions.map((def) => resolveGameCard(def, lang));
}

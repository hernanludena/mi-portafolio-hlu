import type { HackerRankDetailDefinition, HackerRankLang } from "@/types/hackerrank";
import { resolveHackerRankCard } from "@/types/hackerrank";

const hackerrankDefinitions: HackerRankDetailDefinition[] = [];

const hackerrankBySlug = Object.fromEntries(
    hackerrankDefinitions.map((def) => [def.slug, def])
) as Record<string, HackerRankDetailDefinition>;

export function getHackerRankDefinition(slug: string): HackerRankDetailDefinition | undefined {
    return hackerrankBySlug[slug];
}

export function getAllHackerRankDefinitions(): HackerRankDetailDefinition[] {
    return hackerrankDefinitions;
}

export function getAllHackerRankSlugs(): string[] {
    return hackerrankDefinitions.map((def) => def.slug);
}

export function getAllHackerRankCards(lang: HackerRankLang = "es") {
    return hackerrankDefinitions.map((def) => resolveHackerRankCard(def, lang));
}

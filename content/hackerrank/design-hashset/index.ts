import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { designHashsetDetailEs } from "./es-content";
import { designHashsetDetailEn } from "./en-content";

export const designHashsetChallenge: HackerRankDetailDefinition = {
    slug: "design-hashset",
    difficulty: "Easy",
    tags: ["Java","Hash Table","Design","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Design HashSet",
            description: "HashSet con chaining: add, remove, contains.",
        },
        en: {
            title: "Design HashSet",
            description: "HashSet with chaining: add, remove, contains.",
        },
    },
    detailLocales: {
        es: {
            title: "Design HashSet",
            subtitle: "Buckets con LinkedList y hash % 1000",
            content: designHashsetDetailEs,
        },
        en: {
            title: "Design HashSet",
            subtitle: "Buckets with LinkedList and hash % 1000",
            content: designHashsetDetailEn,
        },
    },
};

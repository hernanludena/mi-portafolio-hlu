import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { primeGroupsDetailEs } from "./es-content";
import { primeGroupsDetailEn } from "./en-content";

export const primeGroupsChallenge: HackerRankDetailDefinition = {
    slug: "prime-groups",
    difficulty: "Hard",
    tags: ["Java","Backtracking","Primes","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Prime Groups",
            description: "Particionar dígitos en grupos con al menos un primo.",
        },
        en: {
            title: "Prime Groups",
            description: "Partition digits into groups with at least one prime.",
        },
    },
    detailLocales: {
        es: {
            title: "Prime Groups",
            subtitle: "Backtracking + verificación de primalidad",
            content: primeGroupsDetailEs,
        },
        en: {
            title: "Prime Groups",
            subtitle: "Backtracking + primality check",
            content: primeGroupsDetailEn,
        },
    },
};

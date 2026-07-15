import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { approximateMatchingDetailEs } from "./es-content";
import { approximateMatchingDetailEn } from "./en-content";

export const approximateMatchingChallenge: HackerRankDetailDefinition = {
    slug: "approximate-matching",
    difficulty: "Hard",
    tags: ["Java","Strings","Brute Force","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Approximate Matching",
            description: "Subcadena de text con máximo prefixScore + suffixScore; desempate lexicográfico.",
        },
        en: {
            title: "Approximate Matching",
            description: "Substring of text maximizing prefixScore + suffixScore; lexicographic tie-break.",
        },
    },
    detailLocales: {
        es: {
            title: "Approximate Matching",
            subtitle: "Probar todas las subcadenas y puntuar coincidencias",
            content: approximateMatchingDetailEs,
        },
        en: {
            title: "Approximate Matching",
            subtitle: "Try all substrings and score matches",
            content: approximateMatchingDetailEn,
        },
    },
};

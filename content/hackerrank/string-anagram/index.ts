import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { stringAnagramDetailEs } from "./es-content";
import { stringAnagramDetailEn } from "./en-content";

export const stringAnagramChallenge: HackerRankDetailDefinition = {
    slug: "string-anagram",
    difficulty: "Medium",
    tags: ["Java","HashMap","Sorting","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/string-anagram/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "String Anagram",
            description: "Contar anagramas del diccionario para cada query.",
        },
        en: {
            title: "String Anagram",
            description: "Count dictionary anagrams for each query.",
        },
    },
    detailLocales: {
        es: {
            title: "String Anagram",
            subtitle: "Clave = letras ordenadas; HashMap de frecuencias",
            content: stringAnagramDetailEs,
        },
        en: {
            title: "String Anagram",
            subtitle: "Key = sorted letters; frequency HashMap",
            content: stringAnagramDetailEn,
        },
    },
};

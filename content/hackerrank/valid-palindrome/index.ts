import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { validPalindromeDetailEs } from "./es-content";
import { validPalindromeDetailEn } from "./en-content";

export const validPalindromeChallenge: HackerRankDetailDefinition = {
    slug: "valid-palindrome",
    difficulty: "Easy",
    tags: ["Java","Two Pointers","Strings","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Valid Palindrome",
            description: "Verificar palíndromo ignorando caracteres no alfanuméricos.",
        },
        en: {
            title: "Valid Palindrome",
            description: "Check palindrome ignoring non-alphanumeric characters.",
        },
    },
    detailLocales: {
        es: {
            title: "Valid Palindrome",
            subtitle: "Normalizar string y comparar con two pointers",
            content: validPalindromeDetailEs,
        },
        en: {
            title: "Valid Palindrome",
            subtitle: "Normalize string and compare with two pointers",
            content: validPalindromeDetailEn,
        },
    },
};

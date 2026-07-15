import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { longestPalindromicSubstringDetailEs } from "./es-content";
import { longestPalindromicSubstringDetailEn } from "./en-content";

export const longestPalindromicSubstringChallenge: HackerRankDetailDefinition = {
    slug: "longest-palindromic-substring",
    difficulty: "Medium",
    tags: ["Java", "Two Pointers", "String", "HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Longest Palindromic Substring",
            description:
                "Expandir desde el centro para encontrar el substring palindrómico más largo.",
        },
        en: {
            title: "Longest Palindromic Substring",
            description:
                "Expand from the center to find the longest palindromic substring.",
        },
    },
    detailLocales: {
        es: {
            title: "Longest Palindromic Substring",
            subtitle: "Expand around center para palíndromos de longitud par e impar",
            content: longestPalindromicSubstringDetailEs,
        },
        en: {
            title: "Longest Palindromic Substring",
            subtitle: "Expand around center for even and odd-length palindromes",
            content: longestPalindromicSubstringDetailEn,
        },
    },
};

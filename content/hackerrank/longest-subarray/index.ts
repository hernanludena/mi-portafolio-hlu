import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { longestSubarrayDetailEs } from "./es-content";
import { longestSubarrayDetailEn } from "./en-content";

export const longestSubarrayChallenge: HackerRankDetailDefinition = {
    slug: "longest-subarray",
    difficulty: "Medium",
    tags: ["Java","Sliding Window","TreeMap","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/longest-subarray/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Longest Subarray",
            description: "Subarreglo más largo con ≤2 valores distintos y diferencia ≤1.",
        },
        en: {
            title: "Longest Subarray",
            description: "Longest subarray with ≤2 distinct values differing by at most 1.",
        },
    },
    detailLocales: {
        es: {
            title: "Longest Subarray",
            subtitle: "Sliding window + TreeMap para min/max en ventana",
            content: longestSubarrayDetailEs,
        },
        en: {
            title: "Longest Subarray",
            subtitle: "Sliding window + TreeMap for min/max in window",
            content: longestSubarrayDetailEn,
        },
    },
};

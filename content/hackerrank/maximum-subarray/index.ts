import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { maximumSubarrayDetailEs } from "./es-content";
import { maximumSubarrayDetailEn } from "./en-content";

export const maximumSubarrayChallenge: HackerRankDetailDefinition = {
    slug: "maximum-subarray",
    difficulty: "Easy",
    tags: ["Java","Kadane","Dynamic Programming","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/subarrays/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "The Maximum Subarray",
            description: "Máximo subarreglo contiguo (Kadane) y máxima subsecuencia.",
        },
        en: {
            title: "The Maximum Subarray",
            description: "Maximum contiguous subarray (Kadane) and maximum subsequence.",
        },
    },
    detailLocales: {
        es: {
            title: "The Maximum Subarray",
            subtitle: "Kadane para contiguo; suma de positivos para subsecuencia",
            content: maximumSubarrayDetailEs,
        },
        en: {
            title: "The Maximum Subarray",
            subtitle: "Kadane for contiguous; sum positives for subsequence",
            content: maximumSubarrayDetailEn,
        },
    },
};

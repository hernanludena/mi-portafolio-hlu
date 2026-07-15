import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { mergeIntervalsDetailEs } from "./es-content";
import { mergeIntervalsDetailEn } from "./en-content";

export const mergeIntervalsChallenge: HackerRankDetailDefinition = {
    slug: "merge-intervals",
    difficulty: "Medium",
    tags: ["Java","Sorting","Intervals","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Merge Intervals",
            description: "Fusionar intervalos solapados y devolver conjunto no solapado.",
        },
        en: {
            title: "Merge Intervals",
            description: "Merge overlapping intervals and return non-overlapping set.",
        },
    },
    detailLocales: {
        es: {
            title: "Merge Intervals",
            subtitle: "Sort por start → merge si nextStart ≤ currentEnd",
            content: mergeIntervalsDetailEs,
        },
        en: {
            title: "Merge Intervals",
            subtitle: "Sort by start → merge if nextStart ≤ currentEnd",
            content: mergeIntervalsDetailEn,
        },
    },
};

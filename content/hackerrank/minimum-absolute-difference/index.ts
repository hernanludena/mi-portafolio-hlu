import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { minimumAbsoluteDifferenceDetailEs } from "./es-content";
import { minimumAbsoluteDifferenceDetailEn } from "./en-content";

export const minimumAbsoluteDifferenceChallenge: HackerRankDetailDefinition = {
    slug: "minimum-absolute-difference",
    difficulty: "Easy",
    tags: ["Java", "Sorting", "Array", "HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Minimum Absolute Difference",
            description:
                "Ordena el arreglo y compara vecinos para hallar la menor diferencia absoluta.",
        },
        en: {
            title: "Minimum Absolute Difference",
            description:
                "Sort the array and scan neighbors to find the smallest absolute difference.",
        },
    },
    detailLocales: {
        es: {
            title: "Minimum Absolute Difference in an Array",
            subtitle: "Patrón sort → scan neighbors → track minimum",
            content: minimumAbsoluteDifferenceDetailEs,
        },
        en: {
            title: "Minimum Absolute Difference in an Array",
            subtitle: "Sort → scan neighbors → track minimum pattern",
            content: minimumAbsoluteDifferenceDetailEn,
        },
    },
};

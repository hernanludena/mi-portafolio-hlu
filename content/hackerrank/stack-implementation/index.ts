import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { stackImplementationDetailEs } from "./es-content";
import { stackImplementationDetailEn } from "./en-content";

export const stackImplementationChallenge: HackerRankDetailDefinition = {
    slug: "stack-implementation",
    difficulty: "Easy",
    tags: ["Java","Stack","Array","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Stack Implementation",
            description: "Stack con array: push, pop, peek, isEmpty, isFull (LIFO).",
        },
        en: {
            title: "Stack Implementation",
            description: "Array-based stack: push, pop, peek, isEmpty, isFull (LIFO).",
        },
    },
    detailLocales: {
        es: {
            title: "Stack Implementation",
            subtitle: "Array fijo con puntero top",
            content: stackImplementationDetailEs,
        },
        en: {
            title: "Stack Implementation",
            subtitle: "Fixed array with top pointer",
            content: stackImplementationDetailEn,
        },
    },
};

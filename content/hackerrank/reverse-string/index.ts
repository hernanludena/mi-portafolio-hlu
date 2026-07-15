import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { reverseStringDetailEs } from "./es-content";
import { reverseStringDetailEn } from "./en-content";

export const reverseStringChallenge: HackerRankDetailDefinition = {
    slug: "reverse-string",
    difficulty: "Easy",
    tags: ["Java", "String", "StringBuilder", "HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Reverse String",
            description:
                "Invertir un string con StringBuilder y con un loop manual de dos enfoques.",
        },
        en: {
            title: "Reverse String",
            description:
                "Reverse a string using StringBuilder and a manual loop — two approaches.",
        },
    },
    detailLocales: {
        es: {
            title: "Reverse String",
            subtitle: "Dos formas de invertir un string en Java",
            content: reverseStringDetailEs,
        },
        en: {
            title: "Reverse String",
            subtitle: "Two ways to reverse a string in Java",
            content: reverseStringDetailEn,
        },
    },
};

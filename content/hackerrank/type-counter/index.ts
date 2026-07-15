import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { typeCounterDetailEs } from "./es-content";
import { typeCounterDetailEn } from "./en-content";

export const typeCounterChallenge: HackerRankDetailDefinition = {
    slug: "type-counter",
    difficulty: "Easy",
    tags: ["Java","Parsing","Strings","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Type Counter",
            description: "Contar tokens string, integer y double en una oración.",
        },
        en: {
            title: "Type Counter",
            description: "Count string, integer, and double tokens in a sentence.",
        },
    },
    detailLocales: {
        es: {
            title: "Type Counter",
            subtitle: "Split por espacios y clasificar con parseInt/parseDouble",
            content: typeCounterDetailEs,
        },
        en: {
            title: "Type Counter",
            subtitle: "Split by spaces and classify with parseInt/parseDouble",
            content: typeCounterDetailEn,
        },
    },
};

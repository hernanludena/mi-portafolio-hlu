import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { integerToRomanDetailEs } from "./es-content";
import { integerToRomanDetailEn } from "./en-content";

export const integerToRomanChallenge: HackerRankDetailDefinition = {
    slug: "integer-to-roman",
    difficulty: "Medium",
    tags: ["Java","Math","Lookup Table","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Integer to Roman",
            description: "Convertir entero (1–3999) a numeral romano con tablas por posición.",
        },
        en: {
            title: "Integer to Roman",
            description: "Convert integer (1–3999) to Roman numeral using positional lookup tables.",
        },
    },
    detailLocales: {
        es: {
            title: "Integer to Roman",
            subtitle: "Extraer dígitos por posición y concatenar símbolos",
            content: integerToRomanDetailEs,
        },
        en: {
            title: "Integer to Roman",
            subtitle: "Extract digits by position and concatenate symbols",
            content: integerToRomanDetailEn,
        },
    },
};

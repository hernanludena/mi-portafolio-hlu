import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { romanToIntegerDetailEs } from "./es-content";
import { romanToIntegerDetailEn } from "./en-content";

export const romanToIntegerChallenge: HackerRankDetailDefinition = {
    slug: "roman-to-integer",
    difficulty: "Easy",
    tags: ["Java","HashMap","Strings","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Roman to Integer",
            description: "Convertir un numeral romano a entero con notación subtractiva.",
        },
        en: {
            title: "Roman to Integer",
            description: "Convert a Roman numeral string to integer with subtractive notation.",
        },
    },
    detailLocales: {
        es: {
            title: "Roman to Integer",
            subtitle: "Mapa de símbolos y corrección cuando el valor actual supera al anterior",
            content: romanToIntegerDetailEs,
        },
        en: {
            title: "Roman to Integer",
            subtitle: "Symbol map and correction when current value exceeds previous",
            content: romanToIntegerDetailEn,
        },
    },
};

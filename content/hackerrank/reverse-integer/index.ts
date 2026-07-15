import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { reverseIntegerDetailEs } from "./es-content";
import { reverseIntegerDetailEn } from "./en-content";

export const reverseIntegerChallenge: HackerRankDetailDefinition = {
    slug: "reverse-integer",
    difficulty: "Medium",
    tags: ["Java","Math","Overflow","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Reverse Integer",
            description: "Invertir dígitos de un entero de 32 bits; devolver 0 si hay overflow.",
        },
        en: {
            title: "Reverse Integer",
            description: "Reverse digits of a 32-bit integer; return 0 on overflow.",
        },
    },
    detailLocales: {
        es: {
            title: "Reverse Integer",
            subtitle: "Extraer dígitos con % 10 y reconstruir con * 10",
            content: reverseIntegerDetailEs,
        },
        en: {
            title: "Reverse Integer",
            subtitle: "Extract digits with % 10 and rebuild with * 10",
            content: reverseIntegerDetailEn,
        },
    },
};

import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { migratoryBirdsDetailEs } from "./es-content";
import { migratoryBirdsDetailEn } from "./en-content";

export const migratoryBirdsChallenge: HackerRankDetailDefinition = {
    slug: "migratory-birds",
    difficulty: "Easy",
    tags: ["Java", "Array", "Counting", "HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/migratory-birds/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Migratory Birds",
            description:
                "Encuentra el tipo de ave más frecuente. En empate, devuelve el ID más bajo.",
        },
        en: {
            title: "Migratory Birds",
            description:
                "Find the most frequent bird type. On ties, return the lowest ID.",
        },
    },
    detailLocales: {
        es: {
            title: "Migratory Birds",
            subtitle: "Conteo de frecuencias con array fijo y desempate por ID mínimo",
            content: migratoryBirdsDetailEs,
        },
        en: {
            title: "Migratory Birds",
            subtitle: "Frequency counting with a fixed array and lowest-ID tie-break",
            content: migratoryBirdsDetailEn,
        },
    },
};

import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { simpleArraySumDetailEs } from "./es-content";
import { simpleArraySumDetailEn } from "./en-content";

export const simpleArraySumChallenge: HackerRankDetailDefinition = {
    slug: "simple-array-sum",
    difficulty: "Easy",
    tags: ["Java","Arrays","Loops","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/simple-array-sum/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Simple Array Sum",
            description: "Sumar todos los elementos de un arreglo de enteros.",
        },
        en: {
            title: "Simple Array Sum",
            description: "Sum all elements in an integer array.",
        },
    },
    detailLocales: {
        es: {
            title: "Simple Array Sum",
            subtitle: "Recorrer el arreglo y acumular el total",
            content: simpleArraySumDetailEs,
        },
        en: {
            title: "Simple Array Sum",
            subtitle: "Iterate the array and accumulate the total",
            content: simpleArraySumDetailEn,
        },
    },
};

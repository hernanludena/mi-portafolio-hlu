import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { fizzBuzzDetailEs } from "./es-content";
import { fizzBuzzDetailEn } from "./en-content";

export const fizzBuzzChallenge: HackerRankDetailDefinition = {
    slug: "fizz-buzz",
    difficulty: "Easy",
    tags: ["Java","Math","Conditionals","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/fizzbuzz/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "FizzBuzz",
            description: "Imprimir números del 1 al n reemplazando múltiplos de 3, 5 y ambos.",
        },
        en: {
            title: "FizzBuzz",
            description: "Print numbers 1 to n replacing multiples of 3, 5, and both.",
        },
    },
    detailLocales: {
        es: {
            title: "FizzBuzz",
            subtitle: "Condicionales y módulo para clasificar cada número",
            content: fizzBuzzDetailEs,
        },
        en: {
            title: "FizzBuzz",
            subtitle: "Conditionals and modulo to classify each number",
            content: fizzBuzzDetailEn,
        },
    },
};

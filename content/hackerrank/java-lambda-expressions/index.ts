import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { javaLambdaExpressionsDetailEs } from "./es-content";
import { javaLambdaExpressionsDetailEn } from "./en-content";

export const javaLambdaExpressionsChallenge: HackerRankDetailDefinition = {
    slug: "java-lambda-expressions",
    difficulty: "Easy",
    tags: ["Java","Lambda","Functional Interface","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/lambda-expressions/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Java Lambda Expressions",
            description: "Lambdas para isOdd, isPrime e isPalindrome numérico.",
        },
        en: {
            title: "Java Lambda Expressions",
            description: "Lambdas for isOdd, isPrime, and numeric isPalindrome.",
        },
    },
    detailLocales: {
        es: {
            title: "Java Lambda Expressions",
            subtitle: "PerformOperation interface + expresiones lambda",
            content: javaLambdaExpressionsDetailEs,
        },
        en: {
            title: "Java Lambda Expressions",
            subtitle: "PerformOperation interface + lambda expressions",
            content: javaLambdaExpressionsDetailEn,
        },
    },
};

import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { lotteryCouponsDetailEs } from "./es-content";
import { lotteryCouponsDetailEn } from "./en-content";

export const lotteryCouponsChallenge: HackerRankDetailDefinition = {
    slug: "lottery-coupons",
    difficulty: "Easy",
    tags: ["Java", "HashMap", "Counting", "Digit Sum", "HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Lottery Coupons",
            description:
                "Conteo por suma de dígitos con HashMap. Encontrar cuántos grupos empatan con la frecuencia máxima.",
        },
        en: {
            title: "Lottery Coupons",
            description:
                "Digit-sum counting with HashMap. Find how many groups tie for the maximum frequency.",
        },
    },
    detailLocales: {
        es: {
            title: "Lottery Coupons",
            subtitle: "Agrupar por suma de dígitos y contar cuántos valores alcanzan el máximo número de ganadores",
            content: lotteryCouponsDetailEs,
        },
        en: {
            title: "Lottery Coupons",
            subtitle: "Group by digit sum and count how many values reach the maximum number of winners",
            content: lotteryCouponsDetailEn,
        },
    },
};

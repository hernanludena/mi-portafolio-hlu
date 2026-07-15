import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { electronicsShopDetailEs } from "./es-content";
import { electronicsShopDetailEn } from "./en-content";

export const electronicsShopChallenge: HackerRankDetailDefinition = {
    slug: "electronics-shop",
    difficulty: "Easy",
    tags: ["Java", "Brute Force", "Streams", "HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/electronics-shop/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Electronics Shop",
            description:
                "Combina un teclado y una USB para gastar el máximo posible sin pasar el presupuesto.",
        },
        en: {
            title: "Electronics Shop",
            description:
                "Pair one keyboard and one USB drive to spend as much as possible within budget.",
        },
    },
    detailLocales: {
        es: {
            title: "Electronics Shop",
            subtitle: "Explorar todas las combinaciones y quedarse con la suma máxima válida",
            content: electronicsShopDetailEs,
        },
        en: {
            title: "Electronics Shop",
            subtitle: "Try every pair and keep the maximum valid sum",
            content: electronicsShopDetailEn,
        },
    },
};

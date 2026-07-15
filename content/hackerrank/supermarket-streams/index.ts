import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { supermarketStreamsDetailEs } from "./es-content";
import { supermarketStreamsDetailEn } from "./en-content";

export const supermarketStreamsChallenge: HackerRankDetailDefinition = {
    slug: "supermarket-streams",
    difficulty: "Medium",
    tags: ["Java","Streams","Collectors","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Supermarket Inventory (Streams)",
            description: "Kata Streams: productos por categoría, totales y promedios.",
        },
        en: {
            title: "Supermarket Inventory (Streams)",
            description: "Streams kata: products by category, totals, and averages.",
        },
    },
    detailLocales: {
        es: {
            title: "Supermarket Inventory (Streams)",
            subtitle: "filter, min, groupingBy, averagingDouble, parallelStream",
            content: supermarketStreamsDetailEs,
        },
        en: {
            title: "Supermarket Inventory (Streams)",
            subtitle: "filter, min, groupingBy, averagingDouble, parallelStream",
            content: supermarketStreamsDetailEn,
        },
    },
};

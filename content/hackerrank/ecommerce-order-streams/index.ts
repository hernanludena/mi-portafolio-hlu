import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { ecommerceOrderStreamsDetailEs } from "./es-content";
import { ecommerceOrderStreamsDetailEn } from "./en-content";

export const ecommerceOrderStreamsChallenge: HackerRankDetailDefinition = {
    slug: "ecommerce-order-streams",
    difficulty: "Medium",
    tags: ["Java","Streams","Builder","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "E-Commerce Order Processing (Streams)",
            description: "Streams sobre órdenes: totales, filtros, descuentos y revenue.",
        },
        en: {
            title: "E-Commerce Order Processing (Streams)",
            description: "Streams on orders: totals, filters, discounts, and revenue.",
        },
    },
    detailLocales: {
        es: {
            title: "E-Commerce Order Processing (Streams)",
            subtitle: "flatMap, filter, mapToDouble, groupingBy",
            content: ecommerceOrderStreamsDetailEs,
        },
        en: {
            title: "E-Commerce Order Processing (Streams)",
            subtitle: "flatMap, filter, mapToDouble, groupingBy",
            content: ecommerceOrderStreamsDetailEn,
        },
    },
};

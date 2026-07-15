import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { libraryStreamsDetailEs } from "./es-content";
import { libraryStreamsDetailEn } from "./en-content";

export const libraryStreamsChallenge: HackerRankDetailDefinition = {
    slug: "library-streams",
    difficulty: "Medium",
    tags: ["Java","Streams","Collectors","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Library Inventory (Streams)",
            description: "Kata de Streams: filtrar, agrupar, sumar y ordenar libros.",
        },
        en: {
            title: "Library Inventory (Streams)",
            description: "Streams kata: filter, group, sum, and sort books.",
        },
    },
    detailLocales: {
        es: {
            title: "Library Inventory (Streams)",
            subtitle: "filter, groupingBy, summing, parallelStream",
            content: libraryStreamsDetailEs,
        },
        en: {
            title: "Library Inventory (Streams)",
            subtitle: "filter, groupingBy, summing, parallelStream",
            content: libraryStreamsDetailEn,
        },
    },
};

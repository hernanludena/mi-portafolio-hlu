import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { onlineLearningStreamsDetailEs } from "./es-content";
import { onlineLearningStreamsDetailEn } from "./en-content";

export const onlineLearningStreamsChallenge: HackerRankDetailDefinition = {
    slug: "online-learning-streams",
    difficulty: "Medium",
    tags: ["Java","Streams","FlatMap","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Online Learning Platform (Streams)",
            description: "Streams sobre cursos: filtros, revenue, estudiantes únicos.",
        },
        en: {
            title: "Online Learning Platform (Streams)",
            description: "Streams on courses: filters, revenue, unique students.",
        },
    },
    detailLocales: {
        es: {
            title: "Online Learning Platform (Streams)",
            subtitle: "flatMap, distinct, groupingBy, mapToDouble",
            content: onlineLearningStreamsDetailEs,
        },
        en: {
            title: "Online Learning Platform (Streams)",
            subtitle: "flatMap, distinct, groupingBy, mapToDouble",
            content: onlineLearningStreamsDetailEn,
        },
    },
};

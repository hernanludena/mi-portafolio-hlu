import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { processRuntimeConsolidationDetailEs } from "./es-content";
import { processRuntimeConsolidationDetailEn } from "./en-content";

export const processRuntimeConsolidationChallenge: HackerRankDetailDefinition = {
    slug: "process-runtime-consolidation",
    difficulty: "Medium",
    tags: ["Java", "Intervals", "Sorting", "Merge", "HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Process Runtime Consolidation",
            description:
                "Agrupa intervalos por proceso, fusiona solapamientos y suma el tiempo total de ejecución.",
        },
        en: {
            title: "Process Runtime Consolidation",
            description:
                "Group intervals by process, merge overlaps, and sum total runtime.",
        },
    },
    detailLocales: {
        es: {
            title: "Process Runtime Consolidation",
            subtitle: "Patrón group → sort → merge overlapping → sum durations",
            content: processRuntimeConsolidationDetailEs,
        },
        en: {
            title: "Process Runtime Consolidation",
            subtitle: "Group → sort → merge overlapping → sum durations pattern",
            content: processRuntimeConsolidationDetailEn,
        },
    },
};

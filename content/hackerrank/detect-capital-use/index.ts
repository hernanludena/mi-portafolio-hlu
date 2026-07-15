import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { detectCapitalUseDetailEs } from "./es-content";
import { detectCapitalUseDetailEn } from "./en-content";

export const detectCapitalUseChallenge: HackerRankDetailDefinition = {
    slug: "detect-capital-use",
    difficulty: "Easy",
    tags: ["Java","Strings","Predicates","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Detect Capital Use",
            description: "Validar si una palabra usa mayúsculas correctamente.",
        },
        en: {
            title: "Detect Capital Use",
            description: "Validate whether a word uses correct capitalization.",
        },
    },
    detailLocales: {
        es: {
            title: "Detect Capital Use",
            subtitle: "Detectar patrón: todo minúsculas, Title Case o ALL CAPS",
            content: detectCapitalUseDetailEs,
        },
        en: {
            title: "Detect Capital Use",
            subtitle: "Detect pattern: all lower, Title Case, or ALL CAPS",
            content: detectCapitalUseDetailEn,
        },
    },
};

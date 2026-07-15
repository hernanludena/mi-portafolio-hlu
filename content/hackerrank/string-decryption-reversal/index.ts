import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { stringDecryptionReversalDetailEs } from "./es-content";
import { stringDecryptionReversalDetailEn } from "./en-content";

export const stringDecryptionReversalChallenge: HackerRankDetailDefinition = {
    slug: "string-decryption-reversal",
    difficulty: "Medium",
    tags: ["Java","Strings","Parsing","HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "String Decryption and Reversal",
            description: "Expandir run-length por palabra y revertir orden de palabras.",
        },
        en: {
            title: "String Decryption and Reversal",
            description: "Expand run-length per word and reverse word order.",
        },
    },
    detailLocales: {
        es: {
            title: "String Decryption and Reversal",
            subtitle: "Letra + dígito = repetir; luego Collections.reverse",
            content: stringDecryptionReversalDetailEs,
        },
        en: {
            title: "String Decryption and Reversal",
            subtitle: "Letter + digit = repeat; then Collections.reverse",
            content: stringDecryptionReversalDetailEn,
        },
    },
};

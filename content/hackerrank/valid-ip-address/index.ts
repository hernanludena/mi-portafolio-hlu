import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { validIpAddressDetailEs } from "./es-content";
import { validIpAddressDetailEn } from "./en-content";

export const validIpAddressChallenge: HackerRankDetailDefinition = {
    slug: "valid-ip-address",
    difficulty: "Medium",
    tags: ["Java","Regex","Validation","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/ip-address-validation/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Valid IP Address (Regex)",
            description: "Regex para validar direcciones IPv4 con octetos 0–255.",
        },
        en: {
            title: "Valid IP Address (Regex)",
            description: "Regex to validate IPv4 addresses with octets 0–255.",
        },
    },
    detailLocales: {
        es: {
            title: "Valid IP Address (Regex)",
            subtitle: "Patrón de octeto repetido 4 veces con anclas ^ $",
            content: validIpAddressDetailEs,
        },
        en: {
            title: "Valid IP Address (Regex)",
            subtitle: "Octet pattern repeated 4 times with ^ $ anchors",
            content: validIpAddressDetailEn,
        },
    },
};

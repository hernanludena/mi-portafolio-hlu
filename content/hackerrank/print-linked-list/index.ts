import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { printLinkedListDetailEs } from "./es-content";
import { printLinkedListDetailEn } from "./en-content";

export const printLinkedListChallenge: HackerRankDetailDefinition = {
    slug: "print-linked-list",
    difficulty: "Easy",
    tags: ["Java","Linked List","Traversal","HackerRank"],
    urlProblem: "https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-from-head-to-tail-if-non-empty-conditional/problem",
    urlSolution: "",
    locales: {
        es: {
            title: "Print Linked List",
            description: "Recorrer e imprimir una lista enlazada simple de cabeza a cola.",
        },
        en: {
            title: "Print Linked List",
            description: "Traverse and print a singly linked list from head to tail.",
        },
    },
    detailLocales: {
        es: {
            title: "Print Linked List",
            subtitle: "Puntero current avanza con current.next",
            content: printLinkedListDetailEs,
        },
        en: {
            title: "Print Linked List",
            subtitle: "Current pointer advances with current.next",
            content: printLinkedListDetailEn,
        },
    },
};

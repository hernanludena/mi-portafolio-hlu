import type { HackerRankDetailDefinition } from "@/types/hackerrank";
import { treeReviewDetailEs } from "./es-content";
import { treeReviewDetailEn } from "./en-content";

export const treeReviewChallenge: HackerRankDetailDefinition = {
    slug: "tree-review",
    difficulty: "Easy",
    tags: ["Java", "BST", "Recursion", "Tree", "HackerRank"],
    urlProblem: "",
    urlSolution: "",
    locales: {
        es: {
            title: "Tree Review — BST",
            description:
                "Árbol binario de búsqueda: inserción recursiva y recorrido inorder.",
        },
        en: {
            title: "Tree Review — BST",
            description:
                "Binary search tree: recursive insertion and inorder traversal.",
        },
    },
    detailLocales: {
        es: {
            title: "Tree Review — Binary Search Tree",
            subtitle: "Insertar nodos en un BST y recorrer con inorder",
            content: treeReviewDetailEs,
        },
        en: {
            title: "Tree Review — Binary Search Tree",
            subtitle: "Insert nodes into a BST and traverse with inorder",
            content: treeReviewDetailEn,
        },
    },
};

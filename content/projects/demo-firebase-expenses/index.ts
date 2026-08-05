import type { ProjectDetailDefinition } from "@/types/project";
import { demoFirebaseExpensesDetailEs } from "./es-content";
import { demoFirebaseExpensesDetailEn } from "./en-content";

export const demoFirebaseExpensesProject: ProjectDetailDefinition = {
    slug: "demo-firebase-expenses",
    image: "/projects/demo-firebase-expenses-thumbnail.png",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Firestore", "MVVM"],
    urlGithub: "https://github.com/hernanludena/DemoFirebaseExpenses",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Expenses — Firebase Android",
            description:
                "App Android nativa para registrar y consultar gastos en la nube. Kotlin, Jetpack Compose, Firestore y arquitectura MVVM.",
            metrics: [
                { value: "MVVM", label: "arquitectura" },
                { value: "Compose", label: "UI declarativa" },
                { value: "Firestore", label: "tiempo real" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Expenses — Firebase Android",
            description:
                "Native Android app to log and review expenses in the cloud. Kotlin, Jetpack Compose, Firestore, and MVVM architecture.",
            metrics: [
                { value: "MVVM", label: "architecture" },
                { value: "Compose", label: "declarative UI" },
                { value: "Firestore", label: "real-time" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Expenses — Firebase Android",
            subtitle: "Registro de gastos en Android con Kotlin, Compose y Firestore",
            content: demoFirebaseExpensesDetailEs,
        },
        en: {
            title: "Expenses — Firebase Android",
            subtitle: "Expense tracking on Android with Kotlin, Compose, and Firestore",
            content: demoFirebaseExpensesDetailEn,
        },
    },
};

import type { ProjectDetailDefinition } from "@/types/project";
import { springOllamaDetailEs } from "./es-content";
import { springOllamaDetailEn } from "./en-content";

export const springOllamaProject: ProjectDetailDefinition = {
    slug: "spring-ollama-final",
    image: "/projects/spring-ollama-thumbnail.png",
    tags: ["Java 17", "Spring Boot", "Spring AI", "Ollama", "Redis"],
    urlGithub: "https://github.com/hernanludena/spring-ollama-final",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Spring Ollama — Tool Calling",
            description:
                "Demo Spring Boot + Spring AI con Ollama: embeddings, Redis y tool calling para que el LLM guarde o recupere vectores vía lenguaje natural.",
            metrics: [
                { value: "3", label: "endpoints REST" },
                { value: "2", label: "tools LLM" },
                { value: "Local", label: "Ollama + Redis" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Spring Ollama — Tool Calling",
            description:
                "Spring Boot + Spring AI demo with Ollama: embeddings, Redis, and tool calling so the LLM can save or fetch vectors via natural language.",
            metrics: [
                { value: "3", label: "REST endpoints" },
                { value: "2", label: "LLM tools" },
                { value: "Local", label: "Ollama + Redis" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Spring Ollama — Tool Calling",
            subtitle: "Embeddings, Redis y tool calling con Spring AI y Ollama local",
            content: springOllamaDetailEs,
        },
        en: {
            title: "Spring Ollama — Tool Calling",
            subtitle: "Embeddings, Redis, and tool calling with Spring AI and local Ollama",
            content: springOllamaDetailEn,
        },
    },
};

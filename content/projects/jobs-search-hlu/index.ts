import type { ProjectDetailDefinition } from "@/types/project";
import { jobsSearchDetailEs } from "./es-content";
import { jobsSearchDetailEn } from "./en-content";

export const jobsSearchProject: ProjectDetailDefinition = {
    slug: "jobs-search-hlu",
    image: "/projects/jobs-search-thumbnail.png",
    tags: ["Java 21", "CLI", "OpenFeign", "JCommander", "RemoteOK"],
    urlGithub: "https://github.com/hernanludena/jobs-search-hlu",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Jobs Search — Java CLI",
            description:
                "CLI en Java 21 para buscar empleos remotos vía RemoteOK. JCommander, OpenFeign, records, sealed types y filtros en memoria.",
            metrics: [
                { value: "Java 21", label: "records + sealed" },
                { value: "Feign", label: "cliente HTTP" },
                { value: "50", label: "resultados / página" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Jobs Search — Java CLI",
            description:
                "Java 21 CLI to search remote jobs via RemoteOK. JCommander, OpenFeign, records, sealed types, and in-memory filters.",
            metrics: [
                { value: "Java 21", label: "records + sealed" },
                { value: "Feign", label: "HTTP client" },
                { value: "50", label: "results / page" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Jobs Search — Java CLI",
            subtitle: "Búsqueda de empleos remotos con Java 21, Feign y RemoteOK",
            content: jobsSearchDetailEs,
        },
        en: {
            title: "Jobs Search — Java CLI",
            subtitle: "Remote job search with Java 21, Feign, and RemoteOK",
            content: jobsSearchDetailEn,
        },
    },
};

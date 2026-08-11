import type { ProjectDetailDefinition } from "@/types/project";
import { bankflowCliDetailEs } from "./es-content";
import { bankflowCliDetailEn } from "./en-content";

export const bankflowCliProject: ProjectDetailDefinition = {
    slug: "bankflow-cli",
    image: "/projects/bankflow-cli-thumbnail.png",
    tags: ["Python 3.12", "Typer", "Rich", "httpx", "Kafka", "Keycloak", "uv"],
    urlGithub: "https://github.com/hernanludena/bankflow-cli",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Bankflow CLI",
            description:
                "CLI Python para operar Bankflow: dev up/status, auth Keycloak, customers/accounts/movimientos, Kafka, obs y smoke tests. Table o JSON para scripts/AI.",
            metrics: [
                { value: "10+", label: "grupos cmd" },
                { value: "JSON", label: "+ table" },
                { value: "MCP", label: "ready core" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Bankflow CLI",
            description:
                "Python CLI to operate Bankflow: dev up/status, Keycloak auth, customers/accounts/movements, Kafka, obs, and smoke tests. Table or JSON for scripts/AI.",
            metrics: [
                { value: "10+", label: "cmd groups" },
                { value: "JSON", label: "+ table" },
                { value: "MCP", label: "ready core" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Bankflow CLI",
            subtitle: "Operá la plataforma Bankflow desde la terminal — Typer, Rich, Keycloak, Kafka",
            content: bankflowCliDetailEs,
        },
        en: {
            title: "Bankflow CLI",
            subtitle: "Operate the Bankflow platform from the terminal — Typer, Rich, Keycloak, Kafka",
            content: bankflowCliDetailEn,
        },
    },
};

import type { BlogPostDefinition } from "@/types/blog";
import { pythonCliControlPlaneContentEs } from "./es-content";
import { pythonCliControlPlaneContentEn } from "./en-content";

export const pythonCliControlPlanePostDefinition: BlogPostDefinition = {
    slug: "python-cli-developer-control-plane",
    image: "/blog/python-cli-control-plane-card-v2.png",
    date: "09/05/2026",
    updatedAt: "09/05/2026",
    tags: ["Python", "CLI", "Architecture", "DevOps", "AI", "MCP"],
    locales: {
        es: {
            title: "Python CLI como Developer Control Plane: de la automatización a la integración con IA",
            excerpt:
                "Cómo un CLI en Python deja de ser un script y se convierte en capa de integración unificada sobre cloud, CI/CD, bases de datos, seguridad, observabilidad y agentes de IA (MCP).",
            readTime: "16 min",
            content: pythonCliControlPlaneContentEs,
        },
        en: {
            title: "Python CLI as a Developer Control Plane: From Automation to AI Integration",
            excerpt:
                "How a Python CLI stops being a script and becomes a unified integration layer over cloud, CI/CD, databases, security, observability and AI agents (MCP).",
            readTime: "16 min",
            content: pythonCliControlPlaneContentEn,
        },
    },
};

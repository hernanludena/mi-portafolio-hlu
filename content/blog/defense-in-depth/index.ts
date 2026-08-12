import type { BlogPostDefinition } from "@/types/blog";
import { defenseInDepthContentEs } from "./es-content";
import { defenseInDepthContentEn } from "./en-content";

export const defenseInDepthPostDefinition: BlogPostDefinition = {
    slug: "defense-in-depth-banca-movil",
    image: "/blog/defense-in-depth-card.png",
    date: "21/01/2025",
    updatedAt: "21/01/2025",
    tags: ["SoftwareArchitecture", "CyberSecurity", "Mobile", "Banking", "Java"],
    locales: {
        es: {
            title: "Defense in Depth: Cómo diseñamos múltiples capas de seguridad para proteger una aplicación bancaria móvil",
            excerpt:
                "Arquitectura de referencia: desde el dispositivo hasta el HSM — SSL Pinning, Cloudflare, NetScaler, MFA, PIN Block y mitigación de replay attacks en banca móvil.",
            readTime: "14 min",
            content: defenseInDepthContentEs,
        },
        en: {
            title: "Defense in Depth: Designing multiple security layers for a mobile banking application",
            excerpt:
                "Reference architecture from device to HSM — SSL Pinning, Cloudflare, NetScaler, MFA, PIN Block, and replay-attack mitigation in mobile banking.",
            readTime: "14 min",
            content: defenseInDepthContentEn,
        },
    },
};

import type { BlogPostDefinition } from "@/types/blog";
import { mobileThreatsMitigationsContentEs } from "./es-content";
import { mobileThreatsMitigationsContentEn } from "./en-content";

export const mobileThreatsMitigationsPostDefinition: BlogPostDefinition = {
    slug: "amenazas-mitigaciones-banca-movil",
    image: "/blog/mobile-threats-mitigations-card.png",
    date: "30/04/2025",
    updatedAt: "30/04/2025",
    tags: ["SoftwareArchitecture", "CyberSecurity", "Mobile", "Banking"],
    locales: {
        es: {
            title: "Amenazas y mitigaciones en banca móvil: del MITM al Memory Dump",
            excerpt:
                "Doce amenazas reales en apps bancarias — MITM, replay, tampering, hooking, overlays — y las contramedidas que suelen usarse en producción.",
            readTime: "16 min",
            content: mobileThreatsMitigationsContentEs,
        },
        en: {
            title: "Threats and mitigations in mobile banking: from MITM to Memory Dump",
            excerpt:
                "Twelve real threats in banking apps — MITM, replay, tampering, hooking, overlays — and the countermeasures typically used in production.",
            readTime: "16 min",
            content: mobileThreatsMitigationsContentEn,
        },
    },
};

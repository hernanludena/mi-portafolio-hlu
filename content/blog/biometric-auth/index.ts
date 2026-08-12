import type { BlogPostDefinition } from "@/types/blog";
import { biometricAuthContentEs } from "./es-content";
import { biometricAuthContentEn } from "./en-content";

export const biometricAuthPostDefinition: BlogPostDefinition = {
    slug: "replay-resistant-biometric-auth",
    image: "/blog/biometric-auth-card.png",
    date: "03/11/2024",
    updatedAt: "03/11/2024",
    tags: ["SoftwareArchitecture", "CyberSecurity", "Authentication", "Java"],
    locales: {
        es: {
            title: "Case Study: flujo biométrico resistente a replay en banca móvil",
            excerpt:
                "Cómo eliminar un Authentication Bypass por replay: challenge de un solo uso, consumo atómico del nonce y rotación de token biométrico en Java + React/Cordova.",
            readTime: "12 min",
            content: biometricAuthContentEs,
        },
        en: {
            title: "Case Study: Designing a Replay-Resistant Biometric Authentication Flow",
            excerpt:
                "Eliminating an Authentication Bypass via secure architecture: one-time challenge, atomic nonce consumption, and biometric token rotation in Java + React/Cordova.",
            readTime: "12 min",
            content: biometricAuthContentEn,
        },
    },
};

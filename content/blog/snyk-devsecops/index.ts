import type { BlogPostDefinition } from "@/types/blog";
import { snykDevsecopsContentEs } from "./es-content";
import { snykDevsecopsContentEn } from "./en-content";

export const snykDevsecopsPostDefinition: BlogPostDefinition = {
    slug: "snyk-devsecops-security-sdlc",
    image: "/blog/snyk-devsecops-card.png",
    date: "05/11/2025",
    updatedAt: "05/11/2025",
    tags: [
        "DevSecOps",
        "Snyk",
        "SCA",
        "SAST",
        "Container",
        "IaC",
        "CyberSecurity",
        "CI/CD",
    ],
    locales: {
        es: {
            title: "Snyk: Seguridad integrada en el ciclo de desarrollo de software",
            excerpt:
                "Estudio práctico DevSecOps: SCA, SAST, contenedores, IaC, Security Gates, SBOM y monitoreo continuo — y cómo encaja Snyk frente a SonarQube, Trivy, Semgrep y GitHub Advanced Security.",
            readTime: "24 min",
            content: snykDevsecopsContentEs,
        },
        en: {
            title: "Snyk: Security integrated into the software development lifecycle",
            excerpt:
                "A practical DevSecOps study: SCA, SAST, containers, IaC, Security Gates, SBOM and continuous monitoring — plus how Snyk fits next to SonarQube, Trivy, Semgrep and GitHub Advanced Security.",
            readTime: "24 min",
            content: snykDevsecopsContentEn,
        },
    },
};

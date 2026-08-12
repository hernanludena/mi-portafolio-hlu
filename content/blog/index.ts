import { agenticOsPostDefinition } from "./agentic-os";
import { bianAdopcionPostDefinition } from "./bian-adopcion";
import { biometricAuthPostDefinition } from "./biometric-auth";
import { cleanCodeAgenticPostDefinition } from "./clean-code-agentic";
import { cursorPromptsLuminaPostDefinition } from "./cursor-prompts-lumina";
import { defenseInDepthPostDefinition } from "./defense-in-depth";
import { evalsBottleneckPostDefinition } from "./evals-bottleneck";
import { karatePitestPostDefinition } from "./karate-pitest";
import { luminaPostDefinition } from "./lumina-bank";
import { mobileThreatsMitigationsPostDefinition } from "./mobile-threats-mitigations";
import { npePostDefinition } from "./npe";
import { pythonCliControlPlanePostDefinition } from "./python-cli-control-plane";
import { snykDevsecopsPostDefinition } from "./snyk-devsecops";
import { specDrivenDevelopmentPostDefinition } from "./spec-driven-development";
import { tokenOptimizationPostDefinition } from "./token-optimization";
import type { BlogLang, BlogPost, BlogPostDefinition } from "@/types/blog";
import { resolveBlogPost } from "@/types/blog";

const blogPostDefinitions: BlogPostDefinition[] = [
    specDrivenDevelopmentPostDefinition, // 04/08/2026
    evalsBottleneckPostDefinition, // 08/07/2026
    cleanCodeAgenticPostDefinition, // 16/06/2026
    agenticOsPostDefinition, // 19/05/2026
    tokenOptimizationPostDefinition, // 28/04/2026
    pythonCliControlPlanePostDefinition, // 11/03/2026
    cursorPromptsLuminaPostDefinition, // 22/01/2026
    snykDevsecopsPostDefinition, // 05/11/2025
    karatePitestPostDefinition, // 17/07/2025
    mobileThreatsMitigationsPostDefinition, // 30/04/2025
    defenseInDepthPostDefinition, // 12/02/2025
    biometricAuthPostDefinition, // 25/10/2024
    bianAdopcionPostDefinition, // 09/07/2024
    luminaPostDefinition, // 18/04/2024
    npePostDefinition, // 27/01/2024
];

const blogPostsBySlug = Object.fromEntries(
    blogPostDefinitions.map((def) => [def.slug, def])
) as Record<string, BlogPostDefinition>;

export function getBlogPostDefinition(slug: string): BlogPostDefinition | undefined {
    return blogPostsBySlug[slug];
}

export function getBlogPost(slug: string, lang: BlogLang = "en"): BlogPost | undefined {
    const def = getBlogPostDefinition(slug);
    if (!def) return undefined;
    return resolveBlogPost(def, lang);
}

export function getAllBlogPostDefinitions(): BlogPostDefinition[] {
    return blogPostDefinitions;
}

export function getAllBlogPosts(lang: BlogLang = "en"): BlogPost[] {
    return blogPostDefinitions.map((def) => resolveBlogPost(def, lang));
}

export function getAllBlogSlugs(): string[] {
    return blogPostDefinitions.map((def) => def.slug);
}

export {
    specDrivenDevelopmentPostDefinition,
    evalsBottleneckPostDefinition,
    cleanCodeAgenticPostDefinition,
    karatePitestPostDefinition,
    snykDevsecopsPostDefinition,
    agenticOsPostDefinition,
    tokenOptimizationPostDefinition,
    pythonCliControlPlanePostDefinition,
    mobileThreatsMitigationsPostDefinition,
    defenseInDepthPostDefinition,
    bianAdopcionPostDefinition,
    biometricAuthPostDefinition,
    cursorPromptsLuminaPostDefinition,
    luminaPostDefinition,
    npePostDefinition,
};

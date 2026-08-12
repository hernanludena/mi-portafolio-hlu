import { agenticOsPostDefinition } from "./agentic-os";
import { bianAdopcionPostDefinition } from "./bian-adopcion";
import { biometricAuthPostDefinition } from "./biometric-auth";
import { cursorPromptsLuminaPostDefinition } from "./cursor-prompts-lumina";
import { defenseInDepthPostDefinition } from "./defense-in-depth";
import { karatePitestPostDefinition } from "./karate-pitest";
import { luminaPostDefinition } from "./lumina-bank";
import { mobileThreatsMitigationsPostDefinition } from "./mobile-threats-mitigations";
import { npePostDefinition } from "./npe";
import { pythonCliControlPlanePostDefinition } from "./python-cli-control-plane";
import { snykDevsecopsPostDefinition } from "./snyk-devsecops";
import { tokenOptimizationPostDefinition } from "./token-optimization";
import type { BlogLang, BlogPost, BlogPostDefinition } from "@/types/blog";
import { resolveBlogPost } from "@/types/blog";

const blogPostDefinitions: BlogPostDefinition[] = [
    karatePitestPostDefinition, // 12/08/2026
    snykDevsecopsPostDefinition, // 12/08/2026
    agenticOsPostDefinition, // 12/08/2026
    tokenOptimizationPostDefinition, // 12/08/2026
    pythonCliControlPlanePostDefinition, // 09/05/2026
    cursorPromptsLuminaPostDefinition, // 14/02/2026
    mobileThreatsMitigationsPostDefinition, // 16/04/2025
    defenseInDepthPostDefinition, // 21/01/2025
    biometricAuthPostDefinition, // 03/11/2024
    bianAdopcionPostDefinition, // 14/08/2024
    luminaPostDefinition, // 08/05/2024
    npePostDefinition, // 19/02/2024
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

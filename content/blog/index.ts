import { bianAdopcionPostDefinition } from "./bian-adopcion";
import { biometricAuthPostDefinition } from "./biometric-auth";
import { cursorPromptsLuminaPostDefinition } from "./cursor-prompts-lumina";
import { defenseInDepthPostDefinition } from "./defense-in-depth";
import { luminaPostDefinition } from "./lumina-bank";
import { mobileThreatsMitigationsPostDefinition } from "./mobile-threats-mitigations";
import { npePostDefinition } from "./npe";
import { pythonCliControlPlanePostDefinition } from "./python-cli-control-plane";
import type { BlogLang, BlogPost, BlogPostDefinition } from "@/types/blog";
import { resolveBlogPost } from "@/types/blog";

const blogPostDefinitions: BlogPostDefinition[] = [
    pythonCliControlPlanePostDefinition,
    mobileThreatsMitigationsPostDefinition,
    defenseInDepthPostDefinition,
    bianAdopcionPostDefinition,
    cursorPromptsLuminaPostDefinition,
    biometricAuthPostDefinition,
    luminaPostDefinition,
    npePostDefinition,
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
    pythonCliControlPlanePostDefinition,
    mobileThreatsMitigationsPostDefinition,
    defenseInDepthPostDefinition,
    bianAdopcionPostDefinition,
    biometricAuthPostDefinition,
    cursorPromptsLuminaPostDefinition,
    luminaPostDefinition,
    npePostDefinition,
};

import { npePostDefinition } from "./npe";
import type { BlogLang, BlogPost, BlogPostDefinition } from "@/types/blog";
import { resolveBlogPost } from "@/types/blog";

const blogPostDefinitions: BlogPostDefinition[] = [npePostDefinition];

const blogPostsBySlug = Object.fromEntries(
    blogPostDefinitions.map((def) => [def.slug, def])
) as Record<string, BlogPostDefinition>;

export function getBlogPostDefinition(slug: string): BlogPostDefinition | undefined {
    return blogPostsBySlug[slug];
}

export function getBlogPost(slug: string, lang: BlogLang = "es"): BlogPost | undefined {
    const def = getBlogPostDefinition(slug);
    if (!def) return undefined;
    return resolveBlogPost(def, lang);
}

export function getAllBlogPostDefinitions(): BlogPostDefinition[] {
    return blogPostDefinitions;
}

export function getAllBlogPosts(lang: BlogLang = "es"): BlogPost[] {
    return blogPostDefinitions.map((def) => resolveBlogPost(def, lang));
}

export function getAllBlogSlugs(): string[] {
    return blogPostDefinitions.map((def) => def.slug);
}

export { npePostDefinition };

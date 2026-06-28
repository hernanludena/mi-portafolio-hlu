import type { ReactNode } from "react";

export type BlogLang = "es" | "en";

export interface BlogPostLocale {
    title: string;
    excerpt: string;
    readTime: string;
    content: ReactNode;
}

export interface BlogPostDefinition {
    slug: string;
    image: string;
    date: string;
    updatedAt: string;
    tags: string[];
    locales: Record<BlogLang, BlogPostLocale>;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    updatedAt: string;
    readTime: string;
    tags: string[];
    content: ReactNode;
}

export function resolveBlogPost(def: BlogPostDefinition, lang: BlogLang): BlogPost {
    const locale = def.locales[lang];
    return {
        slug: def.slug,
        image: def.image,
        date: def.date,
        updatedAt: def.updatedAt,
        tags: def.tags,
        title: locale.title,
        excerpt: locale.excerpt,
        readTime: locale.readTime,
        content: locale.content,
    };
}

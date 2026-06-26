import { llmopsPost } from "./llmops";
import type { BlogPost } from "@/types/blog";

const blogPosts: Record<string, BlogPost> = {
    [llmopsPost.slug]: llmopsPost,
};

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts[slug];
}

export function getAllBlogPosts(): BlogPost[] {
    return Object.values(blogPosts);
}

export function getAllBlogSlugs(): string[] {
    return Object.keys(blogPosts);
}

export { llmopsPost };

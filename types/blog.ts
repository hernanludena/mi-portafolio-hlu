import type { ReactNode } from "react";

export interface BlogPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    updatedAt: string;
    readTime: string;
    tags: string[];
}

export interface BlogPost extends BlogPostMeta {
    content: ReactNode;
}

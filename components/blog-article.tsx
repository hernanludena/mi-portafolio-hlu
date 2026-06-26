"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { useLanguage } from "@/components/language-provider";

interface BlogArticleProps {
    post: BlogPost;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
    const { t } = useLanguage();

    return (
        <article>
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm transition-colors opacity-70 hover:text-secondary hover:opacity-100"
            >
                <ArrowLeft size={16} />
                {t("blog.back")}
            </Link>

            <header className="mt-6">
                <h1 className="text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm opacity-70">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={15} />
                        {t("blog.updated")} {post.updatedAt}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={15} />
                        {post.readTime} {t("blog.read")}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs rounded-full bg-secondary/15 text-secondary"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="mt-10 space-y-6 text-base leading-relaxed blog-prose md:text-lg">
                {post.content}
            </div>
        </article>
    );
};

export default BlogArticle;

"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPostDefinition } from "@/types/blog";
import { resolveBlogPost } from "@/types/blog";
import { useLanguage } from "@/components/language-provider";

interface BlogArticleProps {
    post: BlogPostDefinition;
}

const BlogArticle = ({ post }: BlogArticleProps) => {
    const { lang, t } = useLanguage();
    const localized = resolveBlogPost(post, lang);

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
                <h1 className="text-2xl font-bold leading-tight md:text-4xl">{localized.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm opacity-70">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={15} />
                        {t("blog.updated")} {localized.updatedAt}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={15} />
                        {localized.readTime} {t("blog.read")}
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {localized.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs rounded-full bg-secondary/15 text-secondary"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="mt-8 space-y-4 text-[0.9375rem] leading-[1.65] blog-prose md:text-base">
                {localized.content}
            </div>
        </article>
    );
};

export default BlogArticle;

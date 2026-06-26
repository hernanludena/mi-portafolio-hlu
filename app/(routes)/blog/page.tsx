"use client"

import { useMemo, useState } from "react";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { dataBlog } from "@/data";
import { Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const BlogPage = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<string>("__all__");

    // Categorías con su cantidad de posts (igual que la pantalla de Bryan)
    const categories = useMemo(() => {
        const counts = new Map<string, number>();
        dataBlog.forEach((post) => {
            post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1));
        });
        return Array.from(counts.entries())
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([name, count]) => ({ name, count }));
    }, []);

    const filteredPosts = useMemo(
        () =>
            activeCategory === "__all__"
                ? dataBlog
                : dataBlog.filter((post) => post.tags.includes(activeCategory)),
        [activeCategory]
    );

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("blog.title1")} <span className="font-bold text-secondary">{t("blog.title2")}</span>
                </h1>
                <p className="mt-4 opacity-80">
                    {t("blog.subtitle")}
                </p>

                {/* Filtros por categoría */}
                <div className="flex flex-wrap gap-2 mt-8">
                    <button
                        onClick={() => setActiveCategory("__all__")}
                        className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${activeCategory === "__all__"
                            ? "bg-secondary text-white border-secondary"
                            : "border-black/15 dark:border-white/20 hover:border-secondary hover:text-secondary"
                            }`}
                    >
                        {t("blog.all")} ({dataBlog.length})
                    </button>
                    {categories.map(({ name, count }) => (
                        <button
                            key={name}
                            onClick={() => setActiveCategory(name)}
                            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${activeCategory === name
                                ? "bg-secondary text-white border-secondary"
                                : "border-black/15 dark:border-white/20 hover:border-secondary hover:text-secondary"
                                }`}
                        >
                            {name} ({count})
                        </button>
                    ))}
                </div>

                {/* Contador de resultados */}
                <p className="mt-6 mb-8 text-sm opacity-60">
                    {t("blog.results")}: {filteredPosts.length}
                </p>

                {/* Grid de posts */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => {
                        const isExternal = post.link.startsWith("http");
                        const Card = (
                            <>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={200}
                                    className="object-cover w-full h-44"
                                />
                                <div className="flex flex-col flex-1 p-4">
                                    <h3 className="text-lg font-bold leading-snug">{post.title}</h3>
                                    <p className="mt-2 text-sm opacity-80">
                                        {post.excerpt}{" "}
                                        <span className="text-secondary">{t("blog.readmore")}</span>
                                    </p>
                                    <div className="flex items-center gap-4 mt-4 text-xs opacity-70">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} /> {post.readTime}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-secondary/15 text-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </>
                        );

                        if (isExternal) {
                            return (
                                <a
                                    key={post.id}
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col overflow-hidden transition-all border shadow-sm rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                                >
                                    {Card}
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={post.id}
                                href={post.link}
                                className="flex flex-col overflow-hidden transition-all border shadow-sm rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                            >
                                {Card}
                            </Link>
                        );
                    })}
                </div>
            </ContainerPage>
        </>
    );
}

export default BlogPage;

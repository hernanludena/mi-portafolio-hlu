"use client"

import { useMemo } from "react";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { getAllHackerRankCards } from "@/content/hackerrank";
import type { HackerRankDifficulty } from "@/types/hackerrank";
import { Code2, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const difficultyClass: Record<HackerRankDifficulty, string> = {
    Easy: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Medium: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Hard: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

const HackerRankPage = () => {
    const { lang, t } = useLanguage();
    const challenges = useMemo(() => getAllHackerRankCards(lang), [lang]);

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("hackerrank.title1")}{" "}
                    <span className="font-bold text-secondary">{t("hackerrank.title2")}</span>
                </h1>
                <p className="mt-4 opacity-80">{t("hackerrank.subtitle")}</p>

                {challenges.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-16 mt-10 text-center border rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5">
                        <Code2 size={40} className="opacity-40" />
                        <p className="text-sm opacity-60">{t("hackerrank.empty")}</p>
                    </div>
                ) : (
                    <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
                        {challenges.map((c) => (
                            <div
                                key={c.slug}
                                className="flex flex-col p-4 transition-all border shadow-sm rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                            >
                                <Link href={`/hackerrank/${c.slug}`} className="flex flex-col flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${difficultyClass[c.difficulty]}`}>
                                            {c.difficulty}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-lg font-bold leading-snug">{c.title}</h3>
                                    <p className="mt-2 text-sm opacity-80">{c.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {c.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-secondary/15 text-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="mt-4 text-sm text-secondary">{t("hackerrank.view")} →</span>
                                </Link>
                                <div className="flex gap-4 mt-4">
                                    {c.urlProblem && (
                                        <Link
                                            href={c.urlProblem}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm hover:text-secondary"
                                        >
                                            <ExternalLink size={18} /> {t("hackerrank.problem")}
                                        </Link>
                                    )}
                                    {c.urlSolution && (
                                        <Link
                                            href={c.urlSolution}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm hover:text-secondary"
                                        >
                                            <Github size={18} /> {t("hackerrank.solution")}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ContainerPage>
        </>
    );
};

export default HackerRankPage;

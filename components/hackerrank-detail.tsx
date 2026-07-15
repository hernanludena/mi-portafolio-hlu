"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { HackerRankDetailDefinition, HackerRankDifficulty } from "@/types/hackerrank";
import { resolveHackerRankCard } from "@/types/hackerrank";
import { useLanguage } from "@/components/language-provider";

interface HackerRankDetailProps {
    challenge: HackerRankDetailDefinition;
}

const difficultyClass: Record<HackerRankDifficulty, string> = {
    Easy: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    Medium: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    Hard: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

const HackerRankDetail = ({ challenge }: HackerRankDetailProps) => {
    const { lang, t } = useLanguage();
    const card = resolveHackerRankCard(challenge, lang);
    const detail = challenge.detailLocales[lang];

    return (
        <article>
            <Link
                href="/hackerrank"
                className="inline-flex items-center gap-2 text-sm transition-colors opacity-70 hover:text-secondary hover:opacity-100"
            >
                <ArrowLeft size={16} />
                {t("hackerrank.back")}
            </Link>

            <header className="mt-6">
                <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${difficultyClass[card.difficulty]}`}>
                    {card.difficulty}
                </span>
                <h1 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">{detail.title}</h1>
                <p className="mt-3 text-[0.9375rem] opacity-80 md:text-base">{detail.subtitle}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {card.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs rounded-full bg-secondary/15 text-secondary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-4">
                    {card.urlProblem && (
                        <Link
                            href={card.urlProblem}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm hover:text-secondary"
                        >
                            <ExternalLink size={18} /> {t("hackerrank.problem")}
                        </Link>
                    )}
                    {card.urlSolution && (
                        <Link
                            href={card.urlSolution}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm hover:text-secondary"
                        >
                            <Github size={18} /> {t("hackerrank.solution")}
                        </Link>
                    )}
                </div>
            </header>

            <div className="mt-8 space-y-4 text-[0.9375rem] leading-[1.65] blog-prose md:text-base">
                {detail.content}
            </div>
        </article>
    );
};

export default HackerRankDetail;

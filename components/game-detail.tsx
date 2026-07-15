"use client";

import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { GameDetailDefinition } from "@/types/game";
import { resolveGameCard } from "@/types/game";
import { useLanguage } from "@/components/language-provider";

interface GameDetailProps {
    game: GameDetailDefinition;
}

const GameDetail = ({ game }: GameDetailProps) => {
    const { lang, t } = useLanguage();
    const card = resolveGameCard(game, lang);
    const detail = game.detailLocales[lang];

    return (
        <article>
            <Link
                href="/juegos"
                className="inline-flex items-center gap-2 text-sm transition-colors opacity-70 hover:text-secondary hover:opacity-100"
            >
                <ArrowLeft size={16} />
                {t("games.back")}
            </Link>

            <header className="mt-6">
                <p className="text-xs uppercase tracking-wide text-secondary">{card.label}</p>
                <h1 className="mt-1 text-2xl font-bold leading-tight md:text-4xl">{detail.title}</h1>
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
                    {card.urlGithub && (
                        <Link
                            href={card.urlGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm hover:text-secondary"
                        >
                            <Github size={18} /> GitHub
                        </Link>
                    )}
                    {card.urlPlay && (
                        <Link
                            href={card.urlPlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm hover:text-secondary"
                        >
                            <ExternalLink size={18} /> {t("games.play")}
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

export default GameDetail;

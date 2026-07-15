"use client"

import { useMemo } from "react";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { getAllGameCards } from "@/content/games";
import { Gamepad2, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const GamesPage = () => {
    const { lang, t } = useLanguage();
    const games = useMemo(() => getAllGameCards(lang), [lang]);

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("games.title1")} <span className="font-bold text-secondary">{t("games.title2")}</span>
                </h1>
                <p className="mt-4 opacity-80">{t("games.subtitle")}</p>

                {games.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-16 mt-10 text-center border rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5">
                        <Gamepad2 size={40} className="opacity-40" />
                        <p className="text-sm opacity-60">{t("games.empty")}</p>
                    </div>
                ) : (
                    <div className="grid gap-6 mt-10 md:grid-cols-2 lg:max-w-4xl">
                        {games.map((g) => (
                            <div
                                key={g.slug}
                                className="flex flex-col p-4 transition-all border shadow-sm rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                            >
                                <Link href={`/juegos/${g.slug}`} className="flex flex-col flex-1">
                                    <div className="overflow-hidden rounded-xl border border-black/10 bg-[#0a1628] dark:border-white/10">
                                        <Image
                                            src={g.image}
                                            alt={g.title}
                                            width={800}
                                            height={450}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <p className="mt-4 text-xs uppercase tracking-wide text-secondary">{g.label}</p>
                                    <h3 className="mt-1 text-xl font-bold">{g.title}</h3>
                                    <p className="mt-2 text-sm opacity-80">{g.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {g.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 text-xs border rounded-full border-black/15 dark:border-white/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="mt-4 text-sm text-secondary">{t("games.view")} →</span>
                                </Link>
                                <div className="flex gap-4 mt-4">
                                    {g.urlGithub && (
                                        <Link
                                            href={g.urlGithub}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm hover:text-secondary"
                                        >
                                            <Github size={18} /> GitHub
                                        </Link>
                                    )}
                                    {g.urlPlay && (
                                        <Link
                                            href={g.urlPlay}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm hover:text-secondary"
                                        >
                                            <ExternalLink size={18} /> {t("games.play")}
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

export default GamesPage;

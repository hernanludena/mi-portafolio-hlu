"use client"

import { useMemo } from "react";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { getAllProjectCards } from "@/content/projects";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const ProjectsPage = () => {
    const { lang, t } = useLanguage();
    const projects = useMemo(() => getAllProjectCards(lang), [lang]);

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("projects.title1")} <span className="font-bold text-secondary">{t("projects.title2")}</span>
                </h1>

                <div className="grid gap-6 mt-10 md:grid-cols-2 lg:max-w-4xl">
                    {projects.map((p) => (
                        <div
                            key={p.slug}
                            className="flex flex-col p-4 transition-all border shadow-sm rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                        >
                            <Link href={`/projects/${p.slug}`} className="flex flex-col flex-1">
                                <div className="overflow-hidden rounded-xl border border-black/10 bg-[#0a1628] dark:border-white/10">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <p className="mt-4 text-xs uppercase tracking-wide text-secondary">{p.label}</p>
                                <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                                <p className="mt-2 text-sm opacity-80">{p.description}</p>
                                <div className="flex flex-wrap gap-5 mt-4">
                                    {p.metrics.map((m) => (
                                        <div key={m.label} className="flex flex-col">
                                            <span className="text-lg font-bold leading-none text-secondary">{m.value}</span>
                                            <span className="mt-1 text-[11px] uppercase tracking-wide opacity-60">{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {p.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 text-xs border rounded-full border-black/15 dark:border-white/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="mt-4 text-sm text-secondary">{t("projects.view")} →</span>
                            </Link>
                            <div className="flex gap-4 mt-4">
                                {p.urlGithub && (
                                    <Link
                                        href={p.urlGithub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm hover:text-secondary"
                                    >
                                        <Github size={18} /> GitHub
                                    </Link>
                                )}
                                {p.urlDemo && (
                                    <Link
                                        href={p.urlDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm hover:text-secondary"
                                    >
                                        <ExternalLink size={18} /> Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </ContainerPage>
        </>
    );
};

export default ProjectsPage;

"use client"

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { featuredProjects, otherProjects } from "@/data";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const ProjectsPage = () => {
    const { t } = useLanguage();
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("projects.title1")} <span className="font-bold text-secondary">{t("projects.title2")}</span>
                </h1>

                {/* Featured */}
                <h2 className="mt-10 mb-6 text-xl font-bold md:text-2xl">{t("projects.featured")}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {featuredProjects.map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col p-4 transition-all border shadow-sm rounded-2xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                        >
                            <Image
                                src={p.image}
                                alt={p.title}
                                width={400}
                                height={220}
                                className="object-cover w-full h-48 rounded-xl"
                            />
                            <p className="mt-4 text-xs uppercase tracking-wide text-secondary">{p.label}</p>
                            <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                            <p className="mt-2 text-sm opacity-80">{p.description}</p>
                            {p.metrics && p.metrics.length > 0 && (
                                <div className="flex flex-wrap gap-5 mt-4">
                                    {p.metrics.map((m) => (
                                        <div key={m.label} className="flex flex-col">
                                            <span className="text-lg font-bold leading-none text-secondary">{m.value}</span>
                                            <span className="mt-1 text-[11px] uppercase tracking-wide opacity-60">{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {p.tags.map((t) => (
                                    <span key={t} className="px-2 py-0.5 text-xs border rounded-full border-black/15 dark:border-white/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 mt-4">
                                {p.urlGithub && (
                                    <Link href={p.urlGithub} target="_blank" className="flex items-center gap-1 text-sm hover:text-secondary">
                                        <Github size={18} /> Github
                                    </Link>
                                )}
                                {p.urlDemo && (
                                    <Link href={p.urlDemo} target="_blank" className="flex items-center gap-1 text-sm hover:text-secondary">
                                        <ExternalLink size={18} /> Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other */}
                <h2 className="mt-12 mb-6 text-xl font-bold md:text-2xl">{t("projects.other")}</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    {otherProjects.map((p) => (
                        <div
                            key={p.id}
                            className="flex flex-col p-4 transition-all border shadow-sm rounded-xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary hover:-translate-y-1"
                        >
                            <div className="flex justify-end gap-3">
                                {p.urlGithub && (
                                    <Link href={p.urlGithub} target="_blank" className="hover:text-secondary">
                                        <Github size={18} />
                                    </Link>
                                )}
                                {p.urlDemo && (
                                    <Link href={p.urlDemo} target="_blank" className="hover:text-secondary">
                                        <ExternalLink size={18} />
                                    </Link>
                                )}
                            </div>
                            <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                            <p className="mt-1 text-sm opacity-80">{p.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {p.tags.map((t) => (
                                    <span key={t} className="px-2 py-0.5 text-xs border rounded-full border-black/15 dark:border-white/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ContainerPage>
        </>
    );
}

export default ProjectsPage;

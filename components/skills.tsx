"use client"

import { skillsData } from "@/data";
import { useLanguage } from "./language-provider";

type SkillsProps = {
    showTitle?: boolean;
    className?: string;
};

const Skills = ({ showTitle = true, className = "" }: SkillsProps) => {
    const { t } = useLanguage();
    return (
        <div className={`w-full max-w-5xl mx-auto ${showTitle ? "my-12" : "my-0"} ${className}`.trim()}>
            {showTitle && (
                <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                    {t("about.skills1")} <span className="text-secondary">{t("about.skills2")}</span>
                </h2>
            )}

            <div className="flex flex-col gap-3">
                {skillsData.map(({ id, categoryKey, items }) => {
                    const withIcons = items.filter((item) => item.icon);
                    const textOnly = items.filter((item) => !item.icon);

                    return (
                        <section key={id} className="flex flex-col gap-1.5">
                            <h3 className="text-base font-semibold tracking-wide text-secondary md:text-lg">
                                {t(categoryKey as Parameters<typeof t>[0])}
                            </h3>

                            {withIcons.length > 0 && (
                                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                    {withIcons.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center gap-1.5 rounded-2xl border border-black/10 bg-black/[0.03] px-1.5 dark:border-white/10 dark:bg-white/[0.04] sm:h-24 sm:w-24"
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.icon!}
                                                alt={item.name}
                                                width={32}
                                                height={32}
                                                className="h-8 w-8 object-contain"
                                                loading="lazy"
                                            />
                                            <span className="line-clamp-2 w-full text-center text-[10px] leading-tight text-black/70 dark:text-white/80 sm:text-[11px]">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {textOnly.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {textOnly.map((item) => (
                                        <span
                                            key={item.name}
                                            className="px-3 py-1 text-sm border rounded-full border-black/15 bg-black/[0.03] dark:border-white/20 dark:bg-white/5"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;

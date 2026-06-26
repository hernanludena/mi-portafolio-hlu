"use client"

import { skillsData } from "@/data";
import { useLanguage } from "./language-provider";

const Skills = () => {
    const { t } = useLanguage();
    return (
        <div className="w-full max-w-3xl mx-auto my-12">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
                {t("about.skills1")} <span className="text-secondary">{t("about.skills2")}</span>
            </h2>

            <div className="flex flex-col gap-6">
                {skillsData.map(({ id, category, items }) => (
                    <div key={id} className="flex flex-col gap-3 md:flex-row">
                        <h3 className="md:w-56 shrink-0 font-semibold text-secondary">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 text-sm border rounded-full border-black/15 bg-black/[0.03] dark:border-white/20 dark:bg-white/5"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

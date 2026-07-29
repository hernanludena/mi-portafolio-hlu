"use client"

import ContainerPage from "@/components/container-page";
import Skills from "@/components/skills";
import TransitionPage from "@/components/transition-page";
import { useLanguage } from "@/components/language-provider";

const SkillsPage = () => {
    const { t } = useLanguage();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("about.skills1")} <span className="font-bold text-secondary">{t("about.skills2")}</span>
                </h1>

                <div className="p-6 mt-10 border rounded-3xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 md:p-8">
                    <Skills showTitle={false} className="max-w-none mx-0 my-0" />
                </div>
            </ContainerPage>
        </>
    );
};

export default SkillsPage;

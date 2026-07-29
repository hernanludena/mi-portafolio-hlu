"use client"

import ContainerPage from "@/components/container-page";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { useLanguage } from "@/components/language-provider";

const ExperiencePage = () => {
    const { t } = useLanguage();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-secondary/80">
                    {t("experience.eyebrow")}
                </p>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("about.work1")} <span className="font-bold text-secondary">{t("about.work2")}</span>
                </h1>

                <p className="max-w-3xl mt-4 text-base leading-7 opacity-80">
                    {t("experience.subtitle")}
                </p>

                <div className="mt-10">
                    <TimeLine compact />
                </div>
            </ContainerPage>
        </>
    );
};

export default ExperiencePage;

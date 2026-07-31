"use client"

import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
import { personalData, certifications, education, languagesData } from "@/data";
import { useLanguage } from "@/components/language-provider";
import { GraduationCap, BadgeCheck, Languages, CalendarRange } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
    const { t, lang } = useLanguage();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("about.title1")} <span className="font-bold text-secondary">{t("about.title2")}</span>
                </h1>

                <div className="flex flex-col gap-6 mt-6 md:flex-row md:items-start">
                    <Image
                        src="/about-profile.png"
                        width={300}
                        height={400}
                        alt={personalData.name}
                        className="w-[220px] h-auto rounded-2xl object-cover border-4 border-secondary/40 shrink-0"
                    />
                    <div className="relative pl-2">
                        <span
                            aria-hidden
                            className="font-tag select-none relative block -ml-4 mb-1 text-lg leading-none font-bold text-black/30 dark:text-white/50"
                        >
                            &lt;p&gt;
                        </span>
                        <p className="text-base font-medium leading-relaxed md:text-lg">
                            {t("about.p1", { name: personalData.firstName })}
                        </p>
                        <p className="mt-4 text-base font-medium leading-relaxed md:text-lg">
                            {t("about.p2")}
                        </p>
                        <p className="mt-4 text-base font-medium leading-relaxed md:text-lg">
                            {t("about.p3")}
                        </p>
                        <span
                            aria-hidden
                            className="font-tag select-none relative block -ml-4 mt-2 text-lg leading-none font-bold text-black/30 dark:text-white/50"
                        >
                            &lt;/p&gt;
                        </span>
                    </div>
                </div>

                <CounterServices />

                <div className="flex flex-col gap-12 mt-14">
                    {/* Educación */}
                    <section>
                        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold md:text-3xl">
                            <GraduationCap className="text-secondary" size={26} /> {t("about.education")}
                        </h2>
                        <div className="space-y-6">
                            {education.map((e) => {
                                const degree = lang === "en" ? e.degreeEn ?? e.degree : e.degree;
                                const field = lang === "en" ? e.fieldEn ?? e.field : e.field;

                                return (
                                    <article
                                        key={e.id}
                                        className="p-6 transition-all border shadow-sm rounded-3xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 md:p-8 hover:border-secondary/50"
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                            <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full border border-black/10 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white">
                                                <Image
                                                    src={e.logo}
                                                    alt={e.logoAlt}
                                                    width={80}
                                                    height={80}
                                                    className={
                                                        e.logoFit === "cover"
                                                            ? "w-14 h-14 rounded-full object-cover"
                                                            : "max-w-14 max-h-14 w-auto h-auto object-contain"
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold md:text-2xl">{degree}</h3>
                                                <p className="mt-1 text-base font-semibold text-secondary md:text-lg">
                                                    {e.school}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-5 mt-6 border-t border-black/10 dark:border-white/10">
                                            <div className="flex flex-wrap gap-3">
                                                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase border rounded-full tracking-[0.28em] border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                                    <CalendarRange size={15} className="text-secondary" />
                                                    {e.period}
                                                </span>
                                                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border rounded-full border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                                    {field}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    {/* Licencias y certificaciones */}
                    <section>
                        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold md:text-3xl">
                            <BadgeCheck className="text-secondary" size={26} /> {t("about.certifications")}
                        </h2>
                        <div className="space-y-6">
                            {certifications.map((c) => {
                                const name = lang === "en" ? c.nameEn ?? c.name : c.name;
                                const field = lang === "en" ? c.fieldEn ?? c.field : c.field;
                                const period = lang === "en" ? c.periodEn ?? c.period : c.period;

                                return (
                                    <article
                                        key={c.id}
                                        className="p-6 transition-all border shadow-sm rounded-3xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 md:p-8 hover:border-secondary/50"
                                    >
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                            <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full border border-black/10 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white">
                                                <Image
                                                    src={c.logo}
                                                    alt={c.logoAlt}
                                                    width={80}
                                                    height={80}
                                                    className="max-w-14 max-h-14 w-auto h-auto object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold md:text-2xl">{name}</h3>
                                                <p className="mt-1 text-base font-semibold text-secondary md:text-lg">
                                                    {c.issuer}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-5 mt-6 border-t border-black/10 dark:border-white/10">
                                            <div className="flex flex-wrap gap-3">
                                                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase border rounded-full tracking-[0.28em] border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                                    <CalendarRange size={15} className="text-secondary" />
                                                    {period}
                                                </span>
                                                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border rounded-full border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                                    {field}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    {/* Idiomas */}
                    <section>
                        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold md:text-3xl">
                            <Languages className="text-secondary" size={26} /> {t("about.languages")}
                        </h2>
                        <div className="space-y-4">
                            {languagesData.map((l) => (
                                <div key={l.id}>
                                    <div className="flex justify-between mb-1 text-sm">
                                        <span className="font-medium">{l.name}</span>
                                        <span className="opacity-60">{l.level}</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-black/10 dark:bg-white/10">
                                        <div className="h-2 rounded-full bg-secondary" style={{ width: `${l.percent}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

            </ContainerPage>
        </>
    );
}

export default AboutPage;

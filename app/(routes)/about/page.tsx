"use client"

import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import Skills from "@/components/skills";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { personalData, certifications, education, awards, languagesData } from "@/data";
import { useLanguage } from "@/components/language-provider";
import { Award, GraduationCap, BadgeCheck, Languages } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
    const { t } = useLanguage();
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
                    <div>
                        <p className="text-lg leading-relaxed">
                            {t("about.p1", { name: personalData.name })}
                        </p>
                        <p className="mt-4 text-lg leading-relaxed">
                            {t("about.p2")}
                        </p>
                    </div>
                </div>

                <CounterServices />

                <Skills />

                {/* Educación · Certificaciones · Reconocimientos · Idiomas */}
                <div className="grid gap-10 mt-14 md:grid-cols-2">
                    {/* Educación */}
                    <section>
                        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold md:text-3xl">
                            <GraduationCap className="text-secondary" size={26} /> {t("about.education")}
                        </h2>
                        <ul className="space-y-4">
                            {education.map((e) => (
                                <li key={e.id} className="p-4 border rounded-xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5">
                                    <p className="font-semibold">{e.degree}</p>
                                    <p className="text-sm opacity-80">{e.school}</p>
                                    <p className="mt-1 text-xs opacity-60">{e.field} · {e.period}</p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Certificaciones */}
                    <section>
                        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold md:text-3xl">
                            <BadgeCheck className="text-secondary" size={26} /> {t("about.certifications")}
                        </h2>
                        <ul className="space-y-3">
                            {certifications.map((c) => (
                                <li key={c.id} className="flex flex-col p-3 border rounded-xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5">
                                    <span className="text-sm font-medium">{c.name}</span>
                                    <span className="text-xs opacity-60">{c.issuer}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Reconocimientos */}
                    <section>
                        <h2 className="flex items-center gap-2 mb-5 text-2xl font-bold md:text-3xl">
                            <Award className="text-secondary" size={26} /> {t("about.awards")}
                        </h2>
                        <ul className="space-y-3">
                            {awards.map((a) => (
                                <li key={a.id} className="flex flex-col p-3 border rounded-xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5">
                                    <span className="text-sm font-medium">{a.name}</span>
                                    <span className="text-xs opacity-60">{a.issuer}</span>
                                </li>
                            ))}
                        </ul>
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

                <h2 className="mt-14 mb-2 text-2xl font-bold md:text-3xl">
                    {t("about.work1")} <span className="text-secondary">{t("about.work2")}</span>
                </h2>
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutPage;

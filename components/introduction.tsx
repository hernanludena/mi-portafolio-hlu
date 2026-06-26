"use client"
import Image from "next/image";
import Link from "next/link";
import { personalData } from "@/data";
import AnimatedText from "./animated-text";
import { useLanguage } from "./language-provider";

const Introduction = () => {
    const { t, lang } = useLanguage();
    return (
        <div className="z-20 w-full text-darkBg dark:text-white dark:bg-darkBg/40">
            <div className="z-20 grid items-center h-full max-w-6xl gap-8 px-6 py-24 mx-auto md:py-0 md:min-h-screen md:grid-cols-2">
                {/* Texto */}
                <div className="flex flex-col justify-center order-2 max-w-xl md:order-1">
                    <h1 className="mb-4 max-w-xs text-2xl font-bold leading-tight text-darkBg dark:text-white md:max-w-sm md:text-3xl">
                        <AnimatedText key={lang} text={t("hero.headline")} delay={0.2} />
                    </h1>

                    <p className="mb-1 font-mono text-xl font-semibold md:text-2xl">
                        — {personalData.name}
                    </p>

                    <p className="mb-6 text-sm font-medium tracking-wide uppercase text-secondary">
                        {t("hero.tagline")}
                    </p>

                    <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                        {t("hero.bio")}
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                            href={personalData.resumeUrl}
                            target="_blank"
                            className="px-5 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
                        >
                            {t("hero.resume")}
                        </a>
                        <Link
                            href="/contact"
                            className="px-5 py-2 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
                        >
                            {t("hero.sayhello")}
                        </Link>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex justify-center order-1 md:order-2 md:justify-end">
                    <Image
                        src="/hero-profile.png"
                        priority
                        width={360}
                        height={480}
                        alt={personalData.name}
                        className="w-[240px] md:w-[360px] h-auto object-cover rounded-3xl border-4 border-secondary/40 shadow-2xl shadow-secondary/20"
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduction;

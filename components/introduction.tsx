"use client"
import Image from "next/image";
import Link from "next/link";
import { personalData } from "@/data";
import TypingHeadline from "./typing-headline";
import { useLanguage } from "./language-provider";

const Introduction = () => {
    const { t, lang } = useLanguage();
    return (
        <div className="z-20 w-full min-w-0 text-darkBg dark:text-white dark:bg-darkBg/40">
            <div className="z-20 grid items-center w-full h-full max-w-6xl gap-6 px-4 py-8 mx-auto sm:gap-8 sm:px-6 sm:py-12 md:min-h-[calc(100dvh-4.5rem)] md:grid-cols-2 md:py-16 lg:py-0">
                {/* Texto */}
                <div className="flex flex-col justify-center order-2 w-full min-w-0 max-w-xl md:order-1">
                    <h1 className="mb-3 w-full text-[clamp(1.5rem,6.8vw,3rem)] font-bold leading-[1.12] tracking-tight text-darkBg dark:text-white sm:mb-4">
                        <TypingHeadline
                            key={lang}
                            speed={18}
                            lines={[
                                t("hero.headline.line1"),
                                t("hero.headline.line2"),
                                t("hero.headline.line3"),
                            ]}
                        />
                    </h1>

                    <p className="mb-1 font-mono text-lg font-semibold sm:text-xl md:text-2xl">
                        — {personalData.name}
                    </p>

                    <p className="mb-4 text-xs font-medium tracking-wide uppercase text-secondary sm:mb-6 sm:text-sm">
                        {t("hero.tagline")}
                    </p>

                    <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-8 sm:text-lg">
                        {t("hero.bio")}
                    </p>

                    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
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
                <div className="flex justify-center order-1 px-2 sm:px-0 md:order-2 md:justify-end">
                    <Image
                        src="/hero-profile.png"
                        priority
                        width={360}
                        height={480}
                        alt={personalData.name}
                        className="w-[min(72vw,220px)] sm:w-[260px] md:w-[320px] lg:w-[360px] h-auto object-cover rounded-2xl sm:rounded-3xl border-4 border-secondary/40 shadow-2xl shadow-secondary/20"
                    />
                </div>
            </div>
        </div>
    );
}

export default Introduction;

"use client"
import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "@/data";
import { useLanguage } from "./language-provider";
import AnimatedText from "./animated-text";

const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.25, 0.25, 0.25, 0.75] as const },
    },
});

const Introduction = () => {
    const { t } = useLanguage();

    return (
        <div className="relative z-20 w-full min-w-0 overflow-hidden text-darkBg dark:text-white">
            {/* Atmosphere */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_40%,rgba(59,130,246,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_75%_35%,rgba(59,130,246,0.22),transparent_50%),linear-gradient(180deg,rgba(13,17,23,0.55)_0%,rgba(13,17,23,0.85)_100%)]"
            />

            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 md:min-h-[calc(100dvh-4.5rem)] md:grid-cols-2 md:py-16">
                <div className="order-2 min-w-0 md:order-1">
                    <h1 className="mb-6 font-bold leading-[0.92] tracking-tight sm:mb-8">
                        <AnimatedText
                            text={personalData.firstName}
                            delay={0.35}
                            className="block text-[clamp(2.75rem,11vw,6.5rem)] text-darkBg dark:text-white"
                        />
                        <AnimatedText
                            text={personalData.lastName}
                            delay={0.5}
                            className="block text-[clamp(2.75rem,11vw,6.5rem)] text-secondary"
                        />
                    </h1>

                    <motion.p
                        {...fadeUp(0.85)}
                        className="mb-8 max-w-xl text-base leading-relaxed text-darkBg/85 dark:text-white/85 sm:mb-10 sm:text-lg"
                    >
                        {t("hero.bio")}
                    </motion.p>

                    <motion.div
                        {...fadeUp(1)}
                        className="mb-9 flex flex-wrap items-center gap-6 sm:mb-11 sm:gap-10"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-4xl font-bold leading-none text-secondary sm:text-5xl">
                                {t("hero.stat.years.value")}
                            </span>
                            <span className="text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.12em] text-darkBg/80 dark:text-white/90 sm:text-xs">
                                {t("hero.stat.years.label")}
                            </span>
                        </div>

                        <div
                            aria-hidden
                            className="hidden h-10 w-px bg-darkBg/20 dark:bg-white/35 sm:block"
                        />

                        <div className="flex items-center gap-3">
                            <span className="text-4xl font-bold leading-none text-darkBg dark:text-white sm:text-5xl">
                                {t("hero.stat.remote.value")}
                            </span>
                            <span className="text-[0.7rem] font-semibold uppercase leading-tight tracking-[0.12em] text-darkBg/80 dark:text-white/90 sm:text-xs">
                                {t("hero.stat.remote.label")}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp(1.15)}
                        className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
                    >
                        <a
                            href={personalData.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-secondaryDark hover:shadow-lg hover:shadow-secondary/30 sm:text-base"
                        >
                            <FileText size={18} strokeWidth={2} />
                            {t("hero.resume")}
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full border-2 border-darkBg/25 px-6 py-3 text-sm font-semibold text-darkBg transition-all hover:border-secondary hover:text-secondary dark:border-white/70 dark:text-white dark:hover:border-white dark:hover:bg-white/5 sm:text-base"
                        >
                            {t("hero.sayhello")}
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    {...fadeUp(0.55)}
                    className="order-1 flex justify-center px-2 sm:px-0 md:order-2 md:justify-end"
                >
                    <Image
                        src="/hero-profile.png"
                        priority
                        width={360}
                        height={480}
                        alt={personalData.name}
                        className="h-auto w-[min(72vw,220px)] rounded-2xl border-4 border-secondary/40 object-cover shadow-2xl shadow-secondary/20 sm:w-[260px] sm:rounded-3xl md:w-[320px] lg:w-[360px]"
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Introduction;

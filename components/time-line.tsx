import { dataAboutPage } from "@/data";
import { CalendarRange, MapPin } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-provider";

type TimeLineProps = {
    compact?: boolean;
};

const TimeLine = ({ compact = false }: TimeLineProps) => {
    const { lang, t } = useLanguage();

    return (
        <div className="flex flex-col justify-center">
            <div className={`w-full mx-auto ${compact ? "max-w-none py-2" : "max-w-5xl md:pt-8"}`}>
                <div className="space-y-6">
                    {dataAboutPage.map((data) => {
                        const title = lang === "en" ? data.titleEn ?? data.title : data.title;
                        const company = lang === "en" ? data.companyEn ?? data.company : data.company;
                        const period = lang === "en" ? data.periodEn ?? data.period : data.period;
                        const workMode = lang === "en" ? data.workModeEn ?? data.workMode : data.workMode;
                        const summary = lang === "en" ? data.summaryEn ?? data.summary : data.summary;
                        const highlights = lang === "en" ? data.highlightsEn ?? data.highlights : data.highlights;

                        return (
                            <article
                                key={data.id}
                                className="p-6 transition-all border shadow-sm rounded-3xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 md:p-8 hover:border-secondary/50"
                            >
                                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                        <div
                                            className={`flex items-center justify-center shrink-0 ${data.logoVariant === "icon"
                                                ? "w-20 h-20 rounded-full border border-black/10 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-white"
                                                : "w-28 h-16"
                                                }`}
                                        >
                                            <Image
                                                src={data.logo}
                                                alt={data.logoAlt}
                                                width={data.logoVariant === "icon" ? 80 : 120}
                                                height={data.logoVariant === "icon" ? 80 : 48}
                                                className={`w-auto h-auto object-contain ${data.logoVariant === "icon"
                                                    ? data.logoFit === "cover"
                                                        ? "w-14 h-14 rounded-full object-cover"
                                                        : "max-w-14 max-h-14 object-contain"
                                                    : "max-w-[120px] max-h-12"
                                                    }`}
                                            />
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
                                            <p className="mt-1 text-base font-semibold text-secondary md:text-lg">
                                                {company}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5 mt-6 border-t border-black/10 dark:border-white/10">
                                    <div className="flex flex-wrap gap-3">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase border rounded-full tracking-[0.28em] border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                            <CalendarRange size={15} className="text-secondary" />
                                            {period}
                                        </span>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase border rounded-full tracking-[0.28em] border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                            <MapPin size={15} className="text-secondary" />
                                            {workMode}
                                        </span>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border rounded-full border-black/15 bg-white/70 dark:border-white/15 dark:bg-white/5 md:text-sm">
                                            <MapPin size={15} className="text-secondary" />
                                            {data.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-5 text-sm leading-7 opacity-85 md:text-base">
                                    {summary}
                                </p>

                                <ul className="mt-5 space-y-3 text-sm leading-7 opacity-85 md:text-base">
                                    {highlights.map((highlight) => (
                                        <li key={highlight} className="flex gap-3">
                                            <span className="w-2 h-2 mt-2 rounded-full shrink-0 bg-secondary" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-5 mt-6 border-t border-black/10 dark:border-white/10">
                                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-secondary md:text-sm">
                                        {t("experience.techStack")}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {data.tech.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3.5 py-1.5 text-xs font-bold tracking-wide border rounded-full border-secondary/45 bg-secondary/10 text-secondary shadow-[0_0_0_1px_rgba(56,189,248,0.08)] dark:border-secondary/50 dark:bg-secondary/15 dark:text-sky-200 md:text-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TimeLine;
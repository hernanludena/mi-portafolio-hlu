"use client"

import { useLanguage } from "./language-provider";

const LanguageToggle = () => {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            onClick={toggleLang}
            aria-label="Cambiar idioma"
            className="flex items-center gap-1.5 px-2 py-1 text-sm font-semibold transition-colors rounded-full hover:text-secondary"
        >
            <span className={`inline-flex items-center gap-1 ${lang === "en" ? "text-secondary" : "opacity-60"}`}>
                <span aria-hidden="true">🇺🇸</span>
                EN
            </span>
            <span className="opacity-40">/</span>
            <span className={`inline-flex items-center gap-1 ${lang === "es" ? "text-secondary" : "opacity-60"}`}>
                <span aria-hidden="true">🇪🇸</span>
                ES
            </span>
        </button>
    );
};

export default LanguageToggle;

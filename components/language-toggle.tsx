"use client"

import { useLanguage } from "./language-provider";

const LanguageToggle = () => {
    const { lang, toggleLang } = useLanguage();

    return (
        <button
            onClick={toggleLang}
            aria-label="Cambiar idioma"
            className="flex items-center gap-1 px-2 py-1 text-sm font-semibold transition-colors rounded-full hover:text-secondary"
        >
            <span className={lang === "es" ? "text-secondary" : "opacity-60"}>ES</span>
            <span className="opacity-40">/</span>
            <span className={lang === "en" ? "text-secondary" : "opacity-60"}>EN</span>
        </button>
    );
};

export default LanguageToggle;

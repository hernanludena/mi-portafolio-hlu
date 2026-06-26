"use client"

import { socialNetworks, itemsNavbar, personalData } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionTransition } from "./transition-component";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "./language-provider";

const Header = () => {
    const pathname = usePathname();
    const { t } = useLanguage();

    return (
        <MotionTransition position="bottom" className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#f5f5f5]/90 backdrop-blur-md dark:border-white/5 dark:bg-[#0d1117]/90">
            <header className="py-2.5 sm:py-3">
                <div className="container grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2 px-4 mx-auto md:flex md:justify-between md:gap-4">
                    {/* Logo (iniciales) */}
                    <Link href='/' aria-label="Inicio" className="shrink-0">
                        <span className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white rounded-lg sm:w-11 sm:h-11 sm:text-xl bg-secondary shadow-lg shadow-secondary/30">
                            {personalData.shortName.charAt(0)}{personalData.logoSuffix.charAt(0)}
                        </span>
                    </Link>

                    {/* Navegación de texto */}
                    <nav className="col-span-3 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:gap-x-2 md:col-span-1 md:justify-start">
                        {itemsNavbar.map((item) => (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`relative whitespace-nowrap px-1.5 py-1 text-xs transition-colors duration-300 hover:text-secondary sm:px-2 sm:py-1.5 sm:text-sm
                                    after:absolute after:left-1.5 after:right-1.5 after:-bottom-0.5 after:h-0.5 sm:after:left-2 sm:after:right-2
                                    after:origin-left after:scale-x-0 after:bg-secondary
                                    after:transition-transform after:duration-300 hover:after:scale-x-100
                                    ${pathname === item.link ? "text-secondary font-semibold after:scale-x-100" : ""}`}
                            >
                                {t(item.key)}
                            </Link>
                        ))}
                    </nav>

                    {/* Redes + toggle */}
                    <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                        <LanguageToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;

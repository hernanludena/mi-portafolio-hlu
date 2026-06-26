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
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-8">
            <header>
                <div className="container flex flex-col items-center gap-4 mx-auto max-w-6xl md:flex-row md:justify-between">
                    {/* Logo (iniciales) */}
                    <Link href='/' aria-label="Inicio">
                        <span className="flex items-center justify-center font-bold text-white rounded-lg w-11 h-11 text-xl bg-secondary shadow-lg shadow-secondary/30">
                            {personalData.shortName.charAt(0)}{personalData.logoSuffix.charAt(0)}
                        </span>
                    </Link>

                    {/* Navegación de texto */}
                    <nav className="flex items-center gap-1 sm:gap-2">
                        {itemsNavbar.map((item) => (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`relative px-2 py-1.5 text-sm transition-colors duration-300 hover:text-secondary
                                    after:absolute after:left-2 after:right-2 after:-bottom-0.5 after:h-0.5
                                    after:origin-left after:scale-x-0 after:bg-secondary
                                    after:transition-transform after:duration-300 hover:after:scale-x-100
                                    ${pathname === item.link ? "text-secondary font-semibold after:scale-x-100" : ""}`}
                            >
                                {t(item.key)}
                            </Link>
                        ))}
                    </nav>

                    {/* Redes + toggle */}
                    <div className="flex items-center gap-4">
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

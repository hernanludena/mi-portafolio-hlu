"use client"

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="p-2 transition-all duration-300 rounded-full hover:text-secondary hover:bg-white/10"
        >
            {theme === "dark" ? (
                <Sun size={22} strokeWidth={1.5} />
            ) : (
                <Moon size={22} strokeWidth={1.5} />
            )}
        </button>
    );
};

export default ThemeToggle;

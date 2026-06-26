import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de Bryan Aguilar, con azul en lugar del rosa original
        secondary: "#3B82F6",   // acento azul (combina con el fondo negro)
        secondaryDark: "#60A5FA", // acento más brillante para modo oscuro
        darkBg: "#0D1117",      // fondo oscuro (Bryan)
        darkNavy: "#161B22",    // superficie/tarjetas (Bryan)
        lightBg: "#F5F5F5",     // fondo claro (Bryan)
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(59, 130, 246, 0.5) -5.91%, rgba(37, 99, 235, 0.45) 111.58%)",
      },
      fontFamily: {
        // Igual que bryan-aguilar.com: Geist Sans de base, Geist Mono para el código
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;

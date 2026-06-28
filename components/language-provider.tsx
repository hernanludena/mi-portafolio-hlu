"use client"

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "es" | "en";

const dictionary = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.projects": "Proyectos",
        "nav.blog": "Blog",
        "nav.contact": "Contacto",

        "hero.headline.line1": "+15 años construyendo",
        "hero.headline.line2": "software financiero",
        "hero.headline.line3": "a escala",
        "hero.tagline": "Tech Lead · Full Stack Java · Scrum Master",
        "hero.bio": "He liderado equipos ágiles y diseñado arquitecturas de microservicios para banca y fintech, con foco en calidad, escalabilidad y buenas prácticas. Soy el puente entre negocio, desarrollo, infraestructura y operaciones.",
        "hero.resume": "Currículum",
        "hero.sayhello": "Saludar",

        "about.title1": "Sobre",
        "about.title2": "mí",
        "about.p1": "Soy {name}, con más de 15 años de experiencia construyendo soluciones digitales para el sector financiero. Líder técnico y desarrollador Full Stack Java, especializado en microservicios, arquitectura cloud (AWS) y entornos on-premise.",
        "about.p2": "Cuento con una Maestría en Gerencia de Sistemas y certificación Scrum Master. Lidero equipos ágiles definiendo la arquitectura y los estándares técnicos, actuando como puente entre negocio, desarrollo, infraestructura y operaciones, con foco en calidad, escalabilidad, rendimiento y seguridad.",
        "about.skills1": "Con qué",
        "about.skills2": "trabajo",
        "about.work1": "Dónde he",
        "about.work2": "trabajado",
        "about.certifications": "Certificaciones",
        "about.education": "Educación",
        "about.awards": "Reconocimientos",
        "about.languages": "Idiomas",
        "counter.years": "Años de experiencia",
        "counter.companies": "Empresas",
        "counter.certs": "Certificaciones",

        "projects.title1": "Mis",
        "projects.title2": "proyectos",
        "projects.featured": "Destacados",
        "projects.other": "Otros proyectos",
        "projects.back": "Todos los proyectos",
        "projects.view": "Ver proyecto",

        "blog.title1": "Mi",
        "blog.title2": "blog",
        "blog.subtitle": "Artículos sobre desarrollo, tecnología y aprendizaje.",
        "blog.readmore": "leer más",
        "blog.all": "Todos",
        "blog.results": "Resultados encontrados",
        "blog.back": "Todas las publicaciones",
        "blog.updated": "Actualizado el",
        "blog.read": "de lectura",

        "contact.title1": "Hablemos,",
        "contact.title2": "contáctame",
        "contact.subtitle": "¿Tienes un proyecto en mente o quieres trabajar juntos? Escríbeme y te respondo lo antes posible.",
        "contact.email": "Correo",
        "contact.phone": "Teléfono",
        "contact.location": "Ubicación",
        "contact.showphone": "(clic para mostrar)",
        "contact.follow": "Sígueme",
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.blog": "Blog",
        "nav.contact": "Contact",

        "hero.headline.line1": "15+ years building",
        "hero.headline.line2": "financial software",
        "hero.headline.line3": "at scale",
        "hero.tagline": "Tech Lead · Full Stack Java · Scrum Master",
        "hero.bio": "I've led agile teams and designed microservices architectures for banking and fintech, focused on quality, scalability and best practices. I'm the bridge between business, development, infrastructure and operations.",
        "hero.resume": "Resume",
        "hero.sayhello": "Say hello",

        "about.title1": "About",
        "about.title2": "me",
        "about.p1": "I'm {name}, with over 15 years of experience building digital solutions for the financial sector. Technical leader and Full Stack Java developer, specialized in microservices, cloud architecture (AWS) and on-premise environments.",
        "about.p2": "I hold a Master's degree in Systems Management and a Scrum Master certification. I lead agile teams defining the architecture and technical standards, acting as a bridge between business, development, infrastructure and operations, focused on quality, scalability, performance and security.",
        "about.skills1": "What I",
        "about.skills2": "work with",
        "about.work1": "Where I've",
        "about.work2": "worked",
        "about.certifications": "Certifications",
        "about.education": "Education",
        "about.awards": "Awards",
        "about.languages": "Languages",
        "counter.years": "Years of experience",
        "counter.companies": "Companies",
        "counter.certs": "Certifications",

        "projects.title1": "My",
        "projects.title2": "projects",
        "projects.featured": "Featured",
        "projects.other": "Other projects",
        "projects.back": "All projects",
        "projects.view": "View project",

        "blog.title1": "My",
        "blog.title2": "blog",
        "blog.subtitle": "Articles about development, technology and learning.",
        "blog.readmore": "read more",
        "blog.all": "All",
        "blog.results": "Results found",
        "blog.back": "All publications",
        "blog.updated": "Updated on",
        "blog.read": "read",

        "contact.title1": "Let's talk,",
        "contact.title2": "contact me",
        "contact.subtitle": "Have a project in mind or want to work together? Drop me a line and I'll get back to you as soon as possible.",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.location": "Location",
        "contact.showphone": "(click to reveal)",
        "contact.follow": "Follow me",
    },
} as const;

type TranslationKey = keyof typeof dictionary["es"];

type LanguageContextType = {
    lang: Lang;
    toggleLang: () => void;
    t: (key: TranslationKey, vars?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType>({
    lang: "es",
    toggleLang: () => { },
    t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("es");

    useEffect(() => {
        const stored = localStorage.getItem("lang") as Lang | null;
        if (stored === "es" || stored === "en") setLang(stored);
    }, []);

    const toggleLang = () => {
        setLang((prev) => {
            const next: Lang = prev === "es" ? "en" : "es";
            localStorage.setItem("lang", next);
            return next;
        });
    };

    const t = (key: TranslationKey, vars?: Record<string, string>) => {
        let text: string = dictionary[lang][key] ?? key;
        if (vars) {
            for (const [k, v] of Object.entries(vars)) {
                text = text.replace(`{${k}}`, v);
            }
        }
        return text;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

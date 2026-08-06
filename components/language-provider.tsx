"use client"

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "es" | "en";

const dictionary = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.experience": "Experiencia",
        "nav.skills": "Habilidades",
        "nav.projects": "Proyectos",
        "nav.blog": "Blog",
        "nav.games": "Juegos",
        "nav.hackerrank": "HackerRank",
        "nav.contact": "Contacto",

        "hero.headline.line1": "+19 años construyendo",
        "hero.headline.line2": "software financiero",
        "hero.headline.line3": "a escala",
        "hero.tagline": "Tech Lead · Full Stack Java · Scrum Master",
        "hero.bio": "Diseño y construyo soluciones de software escalables para banca y fintech, especializado en arquitectura backend, infraestructura cloud y desarrollo frontend moderno. Lidero equipos ágiles y conecto negocio, ingeniería, infraestructura y operaciones para entregar productos seguros, escalables y de alta calidad.",
        "hero.resume": "Descargar CV",
        "hero.sayhello": "Contactame",
        "hero.stat.years.value": "19+",
        "hero.stat.years.label": "Años exp.",
        "hero.stat.remote.value": "100%",
        "hero.stat.remote.label": "Remote ready",

        "about.title1": "Sobre",
        "about.title2": "mí",
        "about.p1": "Soy {name}, Ingeniero de Software de Ecuador, construyendo soluciones digitales para la industria bancaria y fintech. Me apasiona crear sistemas escalables, liderar equipos de ingeniería y explorar IA, tecnologías cloud y arquitecturas distribuidas.",
        "about.p2": "Me especializo en desarrollo Full Stack Java, microservicios, arquitectura cloud AWS y desarrollo frontend moderno. Tengo una Maestría en Gerencia de Sistemas y soy Scrum Master certificado. Disfruto liderar equipos ágiles, diseñar arquitectura de software y conectar negocio, desarrollo, infraestructura y operaciones para construir soluciones seguras, escalables y de alta calidad.",
        "about.p3": "Fuera del trabajo, disfruto pasar tiempo con mis dos hijas en el hermoso valle de Vilcabamba, donde disfrutamos de la naturaleza y el aire fresco de montaña.",
        "about.skills1": "Con qué",
        "about.skills2": "trabajo",
        "about.tabExperience": "Experience",
        "about.tabSkills": "Skills",
        "about.work1": "Dónde he",
        "about.work2": "trabajado",
        "about.certifications": "Licencias y certificaciones",
        "about.education": "Educación",
        "about.awards": "Reconocimientos",
        "about.languages": "Idiomas",
        "skills.cat.backend": "Backend",
        "skills.cat.platforms": "Plataformas",
        "skills.cat.architecture": "Arquitectura",
        "skills.cat.security": "Seguridad",
        "skills.cat.messaging": "Mensajería",
        "skills.cat.observability": "Observabilidad",
        "skills.cat.aws": "AWS",
        "skills.cat.azure": "Azure",
        "skills.cat.devops": "DevOps",
        "skills.cat.frontend": "Frontend",
        "skills.cat.testing": "Testing",
        "skills.cat.databases": "Bases de datos",
        "skills.cat.python": "Python",
        "skills.cat.ai": "AI & Agentes",
        "skills.cat.tools": "Herramientas",
        "experience.eyebrow": "Trayectoria",
        "experience.subtitle": "Recorrido profesional en banca, fintech y soluciones digitales, con foco en backend Java, arquitectura y liderazgo técnico.",
        "experience.techStack": "Stack tecnológico",
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

        "games.title1": "Mis",
        "games.title2": "juegos",
        "games.subtitle": "Juegos que he desarrollado o en los que he participado.",
        "games.empty": "Próximamente publicaré mis juegos aquí.",
        "games.back": "Todos los juegos",
        "games.view": "Ver juego",
        "games.play": "Jugar",

        "hackerrank.title1": "Mis retos de",
        "hackerrank.title2": "HackerRank",
        "hackerrank.subtitle": "Soluciones y análisis de problemas de algoritmos y estructuras de datos.",
        "hackerrank.empty": "Próximamente publicaré mis soluciones aquí.",
        "hackerrank.back": "Todos los retos",
        "hackerrank.view": "Ver solución",
        "hackerrank.problem": "Problema",
        "hackerrank.solution": "Solución",

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
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.blog": "Blog",
        "nav.games": "Games",
        "nav.hackerrank": "HackerRank",
        "nav.contact": "Contact",

        "hero.headline.line1": "19+ years building",
        "hero.headline.line2": "financial software",
        "hero.headline.line3": "at scale",
        "hero.tagline": "Tech Lead · Full Stack Java · Scrum Master",
        "hero.bio": "I design and build scalable software solutions for banking and fintech, specializing in backend architecture, cloud infrastructure, and modern frontend development. I lead agile teams and bridge business, engineering, infrastructure, and operations to deliver secure, scalable, and high quality products.",
        "hero.resume": "Download CV",
        "hero.sayhello": "Get in Touch",
        "hero.stat.years.value": "19+",
        "hero.stat.years.label": "Years exp.",
        "hero.stat.remote.value": "100%",
        "hero.stat.remote.label": "Remote ready",

        "about.title1": "About",
        "about.title2": "me",
        "about.p1": "I'm {name}, a Software Engineer from Ecuador, building digital solutions for the banking and fintech industry. I'm passionate about creating scalable systems, leading engineering teams, and exploring AI, cloud technologies, and distributed architectures.",
        "about.p2": "I specialize in Full Stack Java development, microservices, AWS cloud architecture, and modern frontend development. I have a Master's degree in Systems Management and I'm a certified Scrum Master. I enjoy leading agile teams, designing software architecture, and connecting business, development, infrastructure, and operations to build secure, scalable, and high quality solutions.",
        "about.p3": "Outside of work, I enjoy spending time with my two daughters in the beautiful valley of Vilcabamba, where we enjoy nature and fresh mountain air.",
        "about.skills1": "What I",
        "about.skills2": "work with",
        "about.tabExperience": "Experience",
        "about.tabSkills": "Skills",
        "about.work1": "Where I've",
        "about.work2": "worked",
        "about.certifications": "Licenses & certifications",
        "about.education": "Education",
        "about.awards": "Awards",
        "about.languages": "Languages",
        "skills.cat.backend": "Backend",
        "skills.cat.platforms": "Platforms",
        "skills.cat.architecture": "Architecture",
        "skills.cat.security": "Security",
        "skills.cat.messaging": "Messaging",
        "skills.cat.observability": "Observability",
        "skills.cat.aws": "AWS",
        "skills.cat.azure": "Azure",
        "skills.cat.devops": "DevOps",
        "skills.cat.frontend": "Frontend",
        "skills.cat.testing": "Testing",
        "skills.cat.databases": "Databases",
        "skills.cat.python": "Python",
        "skills.cat.ai": "AI & Agents",
        "skills.cat.tools": "Tools",
        "experience.eyebrow": "Career",
        "experience.subtitle": "Professional journey across banking, fintech and digital solutions, focused on Java backend, architecture and technical leadership.",
        "experience.techStack": "Technology stack",
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

        "games.title1": "My",
        "games.title2": "games",
        "games.subtitle": "Games I've built or contributed to.",
        "games.empty": "I'll publish my games here soon.",
        "games.back": "All games",
        "games.view": "View game",
        "games.play": "Play",

        "hackerrank.title1": "My",
        "hackerrank.title2": "HackerRank",
        "hackerrank.subtitle": "Solutions and write-ups for algorithms and data structures challenges.",
        "hackerrank.empty": "I'll publish my solutions here soon.",
        "hackerrank.back": "All challenges",
        "hackerrank.view": "View solution",
        "hackerrank.problem": "Problem",
        "hackerrank.solution": "Solution",

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
    lang: "en",
    toggleLang: () => { },
    t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("en");

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

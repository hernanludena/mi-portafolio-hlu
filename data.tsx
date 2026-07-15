import { Github, Mail, Linkedin } from "lucide-react";

/* ============================================================
   PLACEHOLDERS: reemplaza los valores marcados con tus datos.
   ============================================================ */

export const personalData = {
    name: "Hernán Ludeña",
    shortName: "Hernán",
    logoSuffix: "Ludeña",
    role: "Tech Lead",
    email: "hernanludena@yahoo.com",
    phone: "+593 99 109 2704",
    location: "Loja, Ecuador",
    linkedin: "https://ec.linkedin.com/in/hernanludena",
    resumeUrl: "/CV-Hernan-Ludena.pdf",
};

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={24} strokeWidth={1} />,
        src: "https://github.com/hludena",
    },
    {
        id: 2,
        logo: <Linkedin size={24} strokeWidth={1} />,
        src: "https://ec.linkedin.com/in/hernanludena",
    },
];

// Navegación superior estilo Bryan actual (enlaces de texto)
export const itemsNavbar = [
    { id: 1, key: "nav.home", link: "/" },
    { id: 2, key: "nav.about", link: "/about" },
    { id: 3, key: "nav.projects", link: "/projects" },
    { id: 4, key: "nav.blog", link: "/blog" },
    { id: 5, key: "nav.games", link: "/juegos" },
    { id: 6, key: "nav.hackerrank", link: "/hackerrank" },
    { id: 7, key: "nav.contact", link: "/contact" },
] as const;

// Bloque de stats (About) — reusa react-countup
export const dataCounter = [
    {
        id: 0,
        endCounter: 15,
        textKey: "counter.years",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 7,
        textKey: "counter.companies",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 5,
        textKey: "counter.certs",
        lineRight: false,
        lineRightMobile: false,
    },
] as const;

// Sección "Con qué trabajo" — skills por categorías (basadas en el CV)
export const skillsData = [
    {
        id: 1,
        category: "Lenguajes",
        items: ["Java (JEE / J2EE)", "JavaScript", "SQL / PL-SQL", "TypeScript"],
    },
    {
        id: 2,
        category: "Backend",
        items: ["Spring Boot", "Spring Cloud", "Spring MVC", "Microservicios", "REST APIs", "Hibernate / JPA", "Node.js", "RabbitMQ"],
    },
    {
        id: 3,
        category: "Frontend",
        items: ["React", "Redux", "AngularJS", "HTML5 / CSS3"],
    },
    {
        id: 4,
        category: "Cloud & DevOps",
        items: ["AWS (EKS)", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"],
    },
    {
        id: 5,
        category: "Bases de datos",
        items: ["Oracle", "PL/SQL", "SQL Server", "Sybase", "MySQL"],
    },
    {
        id: 6,
        category: "Arquitectura & Liderazgo",
        items: ["Clean Architecture", "SOLID", "Diseño de APIs", "Liderazgo técnico", "Scrum Master", "Kanban / SAFE"],
    },
    {
        id: 7,
        category: "Herramientas",
        items: ["JIRA", "Confluence", "Bitbucket", "Maven", "JUnit"],
    },
];

// Timeline de experiencia (About) — datos reales del CV
export const dataAboutPage = [
    {
        id: 1,
        title: "Full Stack Developer",
        subtitle: "Galileo Financial Technologies · Loja, Ecuador",
        description: "Diseño, desarrollo y mantenimiento de APIs en Java para soluciones de core bancario. Aplicación de principios SOLID y patrones de diseño, code reviews y resolución de incidencias en entornos críticos de alta disponibilidad. Tecnologías: Java, Oracle, Spring, Docker.",
        date: "2024",
    },
    {
        id: 2,
        title: "Coordinador de Desarrollo / Tech Lead",
        subtitle: "iuvity · Loja, Ecuador",
        description: "Liderazgo técnico de un equipo de desarrollo y responsable de las definiciones técnicas de soluciones de banca digital web y móvil. Microservicios Spring sobre AWS, gestión de ambientes (dev, QA, prod) y seguridad. Herramientas: JIRA, Confluence, Bitbucket.",
        date: "2021",
    },
    {
        id: 3,
        title: "Senior Full Stack Java Developer",
        subtitle: "iuvity · Quito, Ecuador",
        description: "Desarrollo de nuevas funcionalidades para el canal web SVP (Sucursal Virtual Personas) del Banco Bancolombia. Tecnologías: Java JEE/J2EE, Oracle, PL/SQL, Spring MVC, Struts, AngularJS, Maven, JUnit y servicios REST.",
        date: "2017",
    },
    {
        id: 4,
        title: "Expert Development",
        subtitle: "Servicio de Rentas Internas · Ecuador",
        description: "Desarrollo de formularios y anexos para la gestión tributaria con Java y Oracle. Tecnologías: JSF, Struts, JSP, Hibernate, Maven, JUnit, REST, Alfresco, JBoss y PL/SQL.",
        date: "2015",
    },
    {
        id: 5,
        title: "Technical Specialist / Developer Engineer II",
        subtitle: "Cobiscorp · Quito, Ecuador",
        description: "Mantenimiento y evolución del core bancario (Cobis) para bancos de la región. Especialista Java (Restful, JPA, EJB) y .NET, gestión de defectos e incidencias bajo metodologías Waterfall y ágiles (Scrum, Kanban, SAFE).",
        date: "2012",
    },
];

// Certificaciones (LinkedIn)
export const certifications = [
    { id: 1, name: "Docker: de cero a Swarm y Kubernetes", issuer: "Curso profesional" },
    { id: 2, name: "Introducción a AWS: Servicios principales", issuer: "Amazon Web Services" },
    { id: 3, name: "Inglés para el uso de Inteligencia Artificial", issuer: "Curso profesional" },
    { id: 4, name: "Desarrollo de la inteligencia emocional", issuer: "Habilidades de liderazgo" },
    { id: 5, name: "Lenguaje no verbal para líderes", issuer: "Habilidades de liderazgo" },
];

// Educación
export const education = [
    {
        id: 1,
        degree: "Maestría en Gerencia de Sistemas",
        field: "Ciencias Informáticas",
        school: "Universidad de las Fuerzas Armadas — ESPE",
        period: "2015 – 2017",
    },
    {
        id: 2,
        degree: "Ingeniería en Sistemas",
        field: "Computer Science",
        school: "Universidad Nacional de Loja",
        period: "2002 – 2008",
    },
];

// Reconocimientos
export const awards = [
    { id: 1, name: "1er lugar — Advanced Programming in Java", issuer: "Competencia de programación" },
    { id: 2, name: "2do lugar — Advanced Programming in Java", issuer: "Competencia de programación" },
];

// Idiomas
export const languagesData = [
    { id: 1, name: "Español", level: "Nativo", percent: 100 },
    { id: 2, name: "Inglés", level: "Profesional (working)", percent: 75 },
];

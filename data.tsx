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
    { id: 5, key: "nav.contact", link: "/contact" },
] as const;

// Entradas del blog (ejemplo, estilo Bryan)
// NOTA: posts de ejemplo. Reemplaza títulos, fechas y enlaces por tus artículos reales.
export const dataBlog = [
    {
        id: 1,
        title: "Diseño de microservicios event-driven para banca",
        excerpt: "Cómo modelar el ciclo de vida de una transacción con eventos, colas y servicios desacoplados en entornos bancarios.",
        image: "/image-1.jpg",
        date: "31/12/2025",
        readTime: "9 min",
        tags: ["Architecture", "Java"],
        link: "#!",
    },
    {
        id: 2,
        title: "De monolito a microservicios: lecciones reales",
        excerpt: "Estrategias de migración progresiva que apliqué en sistemas de core bancario sin frenar al negocio.",
        image: "/image-2.jpg",
        date: "10/12/2025",
        readTime: "8 min",
        tags: ["Architecture", "Java"],
        link: "#!",
    },
    {
        id: 3,
        title: "Large Language Model Operations (LLMOps)",
        excerpt: "Qué implica llevar modelos de lenguaje a producción: despliegue, monitoreo, costos y evaluación continua.",
        image: "/image-5.jpg",
        date: "28/11/2025",
        readTime: "9 min",
        tags: ["AI", "DevOps"],
        link: "#!",
    },
    {
        id: 4,
        title: "CI/CD en Kubernetes para equipos bancarios",
        excerpt: "Pipelines confiables, despliegues canary y rollback automático en entornos regulados.",
        image: "/image-3.jpg",
        date: "15/11/2025",
        readTime: "7 min",
        tags: ["DevOps"],
        link: "#!",
    },
    {
        id: 5,
        title: "Clean Architecture en proyectos Java",
        excerpt: "Cómo estructurar una aplicación Java mantenible aplicando los principios de la arquitectura limpia.",
        image: "/image-4.jpg",
        date: "30/10/2025",
        readTime: "8 min",
        tags: ["Development", "Java"],
        link: "#!",
    },
    {
        id: 6,
        title: "Spring Boot: patrones que uso en producción",
        excerpt: "Buenas prácticas con Spring Boot que mejoran la calidad, el rendimiento y la mantenibilidad del código.",
        image: "/image-6.jpg",
        date: "12/10/2025",
        readTime: "6 min",
        tags: ["Development", "Java"],
        link: "#!",
    },
    {
        id: 7,
        title: "Observabilidad: logs, métricas y trazas",
        excerpt: "Cómo instrumentar microservicios para entender qué pasa realmente en producción.",
        image: "/image-7.jpg",
        date: "25/09/2025",
        readTime: "7 min",
        tags: ["DevOps"],
        link: "#!",
    },
    {
        id: 8,
        title: "Cómo liderar equipos ágiles sin morir en el intento",
        excerpt: "Lecciones sobre liderazgo técnico siendo el puente entre negocio, desarrollo y operaciones.",
        image: "/image-8.jpg",
        date: "08/09/2025",
        readTime: "5 min",
        tags: ["Career"],
        link: "#!",
    },
    {
        id: 9,
        title: "¿Quieres ser un buen programador?",
        excerpt: "Reflexiones y hábitos que marcan la diferencia en el camino para convertirte en mejor desarrollador.",
        image: "/image-1.jpg",
        date: "20/08/2025",
        readTime: "5 min",
        tags: ["Career"],
        link: "#!",
    },
];

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

// Proyectos destacados (con imagen) — basados en experiencia profesional
// NOTA: las "metrics" son valores de ejemplo. Reemplázalos por tus métricas reales.
export const featuredProjects = [
    {
        id: 1,
        label: "Core Bancario",
        title: "Core Banking System (Galileo)",
        description: "APIs en Java para el core bancario y frontend en React, impulsando la transformación digital con arquitectura escalable y conforme a estándares.",
        image: "/image-1.jpg",
        tags: ["Java", "Spring", "React", "Oracle", "Docker"],
        metrics: [
            { value: "99.9%", label: "disponibilidad" },
            { value: "+30%", label: "rendimiento API" },
        ],
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 2,
        label: "Banca Digital",
        title: "Plataforma de Banca Digital (Iuvity)",
        description: "Liderazgo técnico de soluciones web y móviles para banca digital, con especificaciones técnicas, code reviews y despliegues sobre Kubernetes y AWS.",
        image: "/image-2.jpg",
        tags: ["Java", "Spring", "AWS", "Kubernetes", "React"],
        metrics: [
            { value: "8+", label: "devs liderados" },
            { value: "CI/CD", label: "en Kubernetes" },
        ],
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 3,
        label: "Sistema Tributario",
        title: "Declaraciones y Anexos (SRI)",
        description: "Desarrollo de funcionalidades para el sistema de declaraciones tributarias en Java, formularios eficientes y procedimientos almacenados en Oracle.",
        image: "/image-3.jpg",
        tags: ["Java", "Spring", "JSF", "Oracle"],
        metrics: [
            { value: "1M+", label: "declaraciones" },
            { value: "-40%", label: "tiempo de proceso" },
        ],
        urlGithub: "",
        urlDemo: "",
    },
];

// Otros proyectos / áreas de trabajo (compactos, sin imagen)
export const otherProjects = [
    {
        id: 1,
        title: "Banking Core Legacy & Migración (Cobiscorp)",
        description: "Soporte del core bancario legacy en .NET y desarrollo del nuevo core en Java, optimizando flujos y tiempos de respuesta.",
        tags: ["Java", ".NET", "SQL"],
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 2,
        title: "Microservicios & Arquitectura Limpia",
        description: "Diseño de microservicios con Spring Cloud, SOLID y patrones de diseño para alta disponibilidad.",
        tags: ["Spring Cloud", "Microservicios", "SOLID"],
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 3,
        title: "DevOps & Cloud",
        description: "Pipelines CI/CD con Jenkins, contenedores Docker y orquestación en Kubernetes sobre AWS EKS.",
        tags: ["Jenkins", "Docker", "Kubernetes", "AWS"],
        urlGithub: "",
        urlDemo: "",
    },
];

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
    { id: 3, key: "nav.experience", link: "/experience" },
    { id: 4, key: "nav.skills", link: "/skills" },
    { id: 5, key: "nav.projects", link: "/projects" },
    { id: 6, key: "nav.blog", link: "/blog" },
    { id: 7, key: "nav.games", link: "/juegos" },
    { id: 8, key: "nav.hackerrank", link: "/hackerrank" },
    { id: 9, key: "nav.contact", link: "/contact" },
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
        company: "SoFi Tech Solutions",
        location: "Loja, Ecuador",
        period: "2024 - Actualidad",
        workMode: "Remoto",
        logo: "/experience-logos/sofi-logo-dev.png",
        logoAlt: "SoFi Tech Solutions logo",
        logoVariant: "icon",
        logoFit: "cover",
        summary: "Diseño, desarrollo y mantenimiento de APIs en Java para soluciones de core bancario en un entorno financiero de alta exigencia.",
        periodEn: "2024 - Present",
        workModeEn: "Remote",
        highlights: [
            "Construcción y evolución de servicios backend con foco en estabilidad, rendimiento y mantenibilidad.",
            "Aplicación de principios SOLID, buenas prácticas de diseño y code reviews sobre componentes críticos.",
            "Resolución de incidencias en entornos de alta disponibilidad con impacto directo en operación.",
        ],
        summaryEn: "Design, development and maintenance of Java APIs for core banking solutions in a high-demand financial environment.",
        highlightsEn: [
            "Built and evolved backend services focused on stability, performance and maintainability.",
            "Applied SOLID principles, design best practices and code reviews on critical components.",
            "Resolved incidents in high-availability environments with direct operational impact.",
        ],
        tech: ["Java", "Oracle", "Spring", "Docker"],
    },
    {
        id: 2,
        title: "Coordinador de Desarrollo / Staff Developer",
        company: "iuvity",
        location: "Loja, Ecuador",
        period: "2021 - 2024",
        workMode: "Híbrido",
        logo: "/experience-logos/iuvity-icon.png",
        logoAlt: "iuvity logo",
        logoVariant: "icon",
        logoFit: "contain",
        summary: "Liderazgo técnico de equipos y definición de arquitectura para soluciones de banca digital web y móvil.",
        titleEn: "Development Coordinator / Staff Developer",
        periodEn: "2021 - 2024",
        highlights: [
            "Responsable de decisiones técnicas y lineamientos de implementación en productos financieros digitales.",
            "Diseño de microservicios Spring desplegados sobre AWS con foco en escalabilidad y seguridad.",
            "Gestión de ambientes dev, QA y producción, coordinando desarrollo, infraestructura y operación.",
        ],
        workModeEn: "Hybrid",
        summaryEn: "Technical leadership for teams and architecture definition for web and mobile digital banking solutions.",
        highlightsEn: [
            "Led technical decisions and implementation standards for digital financial products.",
            "Designed Spring microservices deployed on AWS with a focus on scalability and security.",
            "Managed dev, QA and production environments while coordinating development, infrastructure and operations.",
        ],
        tech: ["Spring", "AWS", "JIRA", "Confluence", "Bitbucket"],
    },
    {
        id: 3,
        title: "Senior Full Stack Java Developer",
        company: "iuvity",
        location: "Quito, Ecuador",
        period: "2017 - 2021",
        workMode: "Presencial",
        logo: "/experience-logos/iuvity-icon.png",
        logoAlt: "iuvity logo",
        logoVariant: "icon",
        logoFit: "contain",
        summary: "Desarrollo de nuevas funcionalidades para el canal web SVP del Banco Bancolombia, con foco en banca digital para personas.",
        periodEn: "2017 - 2021",
        highlights: [
            "Implementación de funcionalidades full stack sobre plataforma bancaria de alto tráfico.",
            "Trabajo continuo con Java empresarial, Oracle y servicios REST en proyectos de misión crítica.",
            "Participación en evolución funcional y técnica del canal web con fuerte integración backend.",
        ],
        workModeEn: "On-site",
        summaryEn: "Development of new features for Bancolombia's SVP web channel, focused on digital banking for retail users.",
        highlightsEn: [
            "Implemented full-stack features on a high-traffic banking platform.",
            "Worked continuously with enterprise Java, Oracle and REST services in mission-critical projects.",
            "Contributed to the functional and technical evolution of the web channel with strong backend integration.",
        ],
        tech: ["Java JEE", "Oracle", "PL/SQL", "Spring MVC", "Struts", "AngularJS", "Maven", "JUnit", "REST"],
    },
    {
        id: 4,
        title: "Expert Development",
        company: "Servicio de Rentas Internas",
        location: "Ecuador",
        period: "2015 - 2017",
        workMode: "Presencial",
        logo: "/experience-logos/sri-mark.svg",
        logoAlt: "Servicio de Rentas Internas logo",
        logoVariant: "icon",
        logoFit: "contain",
        summary: "Desarrollo de formularios y anexos para gestión tributaria en plataformas Java y Oracle dentro del sector público.",
        companyEn: "Internal Revenue Service of Ecuador",
        periodEn: "2015 - 2017",
        highlights: [
            "Construcción de soluciones para procesos tributarios y administrativos orientados a usuarios finales.",
            "Trabajo con stack Java tradicional integrado con persistencia Oracle y componentes empresariales.",
            "Participación en iniciativas con foco en robustez funcional, mantenimiento y continuidad operativa.",
        ],
        workModeEn: "On-site",
        summaryEn: "Development of forms and annexes for tax management on Java and Oracle platforms within the public sector.",
        highlightsEn: [
            "Built solutions for tax and administrative processes aimed at end users.",
            "Worked with a traditional Java stack integrated with Oracle persistence and enterprise components.",
            "Participated in initiatives focused on functional robustness, maintainability and operational continuity.",
        ],
        tech: ["JSF", "Struts", "JSP", "Hibernate", "Maven", "JUnit", "REST", "Alfresco", "JBoss", "PL/SQL"],
    },
    {
        id: 5,
        title: "Technical Specialist / Developer Engineer II",
        company: "Cobiscorp",
        location: "Quito, Ecuador",
        period: "2012 - 2015",
        workMode: "Presencial",
        logo: "/experience-logos/cobis-icon.png",
        logoAlt: "Cobiscorp logo",
        logoVariant: "icon",
        logoFit: "contain",
        summary: "Mantenimiento y evolución del core bancario COBIS para entidades financieras de la región.",
        periodEn: "2012 - 2015",
        highlights: [
            "Especialización en Java empresarial y .NET sobre componentes clave de core financiero.",
            "Gestión de defectos, soporte evolutivo e incidencias sobre soluciones bancarias regionales.",
            "Trabajo bajo metodologías Waterfall y marcos ágiles como Scrum, Kanban y SAFE.",
        ],
        workModeEn: "On-site",
        summaryEn: "Maintenance and evolution of the COBIS core banking platform for financial institutions across the region.",
        highlightsEn: [
            "Specialized in enterprise Java and .NET on key financial core components.",
            "Handled defects, enhancement support and incidents for regional banking solutions.",
            "Worked under Waterfall methodologies and agile frameworks such as Scrum, Kanban and SAFE.",
        ],
        tech: ["Java", "RESTful", "JPA", "EJB", ".NET", "Scrum", "Kanban", "SAFE"],
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

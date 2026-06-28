import type { ReactNode } from "react";

export type ProjectLang = "es" | "en";

export interface ProjectMetric {
    value: string;
    label: string;
}

export interface ProjectCardLocale {
    label: string;
    title: string;
    description: string;
    metrics: ProjectMetric[];
}

export interface ProjectDefinition {
    slug: string;
    image: string;
    tags: string[];
    urlGithub: string;
    urlDemo: string;
    locales: Record<ProjectLang, ProjectCardLocale>;
}

export interface ProjectDetailLocale {
    title: string;
    subtitle: string;
    content: ReactNode;
}

export interface ProjectDetailDefinition extends ProjectDefinition {
    detailLocales: Record<ProjectLang, ProjectDetailLocale>;
}

export interface ProjectCard extends ProjectCardLocale {
    slug: string;
    image: string;
    tags: string[];
    urlGithub: string;
    urlDemo: string;
}

export function resolveProjectCard(def: ProjectDefinition, lang: ProjectLang): ProjectCard {
    const locale = def.locales[lang];
    return {
        slug: def.slug,
        image: def.image,
        tags: def.tags,
        urlGithub: def.urlGithub,
        urlDemo: def.urlDemo,
        label: locale.label,
        title: locale.title,
        description: locale.description,
        metrics: locale.metrics,
    };
}

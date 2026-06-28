import { springRedisProject } from "./spring-redis";
import type { ProjectDetailDefinition, ProjectLang } from "@/types/project";
import { resolveProjectCard } from "@/types/project";

const projectDefinitions: ProjectDetailDefinition[] = [springRedisProject];

const projectsBySlug = Object.fromEntries(
    projectDefinitions.map((def) => [def.slug, def])
) as Record<string, ProjectDetailDefinition>;

export function getProjectDefinition(slug: string): ProjectDetailDefinition | undefined {
    return projectsBySlug[slug];
}

export function getAllProjectDefinitions(): ProjectDetailDefinition[] {
    return projectDefinitions;
}

export function getAllProjectSlugs(): string[] {
    return projectDefinitions.map((def) => def.slug);
}

export function getAllProjectCards(lang: ProjectLang = "es") {
    return projectDefinitions.map((def) => resolveProjectCard(def, lang));
}

export { springRedisProject };

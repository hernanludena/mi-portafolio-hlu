import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import ProjectDetail from "@/components/project-detail";
import { getAllProjectSlugs, getProjectDefinition } from "@/content/projects";

interface ProjectPageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = getProjectDefinition(params.slug);
    if (!project) return {};

    const es = project.locales.es;
    return {
        title: es.title,
        description: es.description,
        openGraph: {
            title: es.title,
            description: es.description,
            images: [{ url: project.image, alt: es.title }],
        },
    };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
    const project = getProjectDefinition(params.slug);
    if (!project) notFound();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <ProjectDetail project={project} />
            </ContainerPage>
        </>
    );
};

export default ProjectPage;

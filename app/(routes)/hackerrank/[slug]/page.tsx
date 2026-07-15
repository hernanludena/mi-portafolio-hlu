import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import HackerRankDetail from "@/components/hackerrank-detail";
import { getAllHackerRankSlugs, getHackerRankDefinition } from "@/content/hackerrank";

interface HackerRankChallengePageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllHackerRankSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: HackerRankChallengePageProps): Promise<Metadata> {
    const challenge = getHackerRankDefinition(params.slug);
    if (!challenge) return {};

    const es = challenge.locales.es;
    return {
        title: es.title,
        description: es.description,
        openGraph: {
            title: es.title,
            description: es.description,
            images: [{ url: challenge.image, alt: es.title }],
        },
    };
}

const HackerRankChallengePage = ({ params }: HackerRankChallengePageProps) => {
    const challenge = getHackerRankDefinition(params.slug);
    if (!challenge) notFound();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <HackerRankDetail challenge={challenge} />
            </ContainerPage>
        </>
    );
};

export default HackerRankChallengePage;

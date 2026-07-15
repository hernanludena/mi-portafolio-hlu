import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import GameDetail from "@/components/game-detail";
import { getAllGameSlugs, getGameDefinition } from "@/content/games";

interface GamePageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllGameSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
    const game = getGameDefinition(params.slug);
    if (!game) return {};

    const es = game.locales.es;
    return {
        title: es.title,
        description: es.description,
        openGraph: {
            title: es.title,
            description: es.description,
            images: [{ url: game.image, alt: es.title }],
        },
    };
}

const GamePage = ({ params }: GamePageProps) => {
    const game = getGameDefinition(params.slug);
    if (!game) notFound();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <GameDetail game={game} />
            </ContainerPage>
        </>
    );
};

export default GamePage;

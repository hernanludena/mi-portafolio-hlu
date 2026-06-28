import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import BlogArticle from "@/components/blog-article";
import { getAllBlogSlugs, getBlogPostDefinition } from "@/content/blog";

interface BlogPostPageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = getBlogPostDefinition(params.slug);
    if (!post) return {};

    const es = post.locales.es;

    return {
        title: es.title,
        description: es.excerpt,
        openGraph: {
            title: es.title,
            description: es.excerpt,
            type: "article",
            publishedTime: post.date,
            tags: post.tags,
            images: [{ url: post.image, alt: es.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: es.title,
            description: es.excerpt,
            images: [post.image],
        },
    };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
    const post = getBlogPostDefinition(params.slug);
    if (!post) notFound();

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <BlogArticle post={post} />
            </ContainerPage>
        </>
    );
};

export default BlogPostPage;

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import BlogArticle from "@/components/blog-article";
import { getAllBlogSlugs, getBlogPost } from "@/content/blog";

interface BlogPostPageProps {
    params: { slug: string };
}

export function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = getBlogPost(params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            tags: post.tags,
            images: [{ url: post.image, alt: post.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
    const post = getBlogPost(params.slug);
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

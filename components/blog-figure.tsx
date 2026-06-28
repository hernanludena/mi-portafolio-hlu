import Image from "next/image";

interface BlogFigureProps {
    src: string;
    alt: string;
    caption: string;
}

const BlogFigure = ({ src, alt, caption }: BlogFigureProps) => (
    <figure className="blog-figure">
        <Image src={src} alt={alt} width={900} height={600} className="blog-figure__img" />
        <figcaption className="blog-figure__caption">{caption}</figcaption>
    </figure>
);

export default BlogFigure;

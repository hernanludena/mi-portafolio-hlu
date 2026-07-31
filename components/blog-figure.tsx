import Image from "next/image";

interface BlogFigureProps {
    src: string;
    alt: string;
    caption: string;
    /** Portrait phone screenshots — keep width small so height stays readable */
    size?: "default" | "phone";
}

const sizeClass = {
    default: "blog-figure",
    phone: "blog-figure blog-figure--phone",
} as const;

const BlogFigure = ({ src, alt, caption, size = "default" }: BlogFigureProps) => (
    <figure className={sizeClass[size]}>
        <Image
            src={src}
            alt={alt}
            width={size === "phone" ? 320 : 900}
            height={size === "phone" ? 640 : 600}
            className="blog-figure__img"
        />
        <figcaption className="blog-figure__caption">{caption}</figcaption>
    </figure>
);

export default BlogFigure;

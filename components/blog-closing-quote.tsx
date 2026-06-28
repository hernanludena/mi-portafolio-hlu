import type { ReactNode } from "react";

interface BlogClosingQuoteProps {
    children: ReactNode;
}

const BlogClosingQuote = ({ children }: BlogClosingQuoteProps) => (
    <aside className="blog-closing-quote" aria-label="Closing quote">
        <p>{children}</p>
    </aside>
);

export default BlogClosingQuote;

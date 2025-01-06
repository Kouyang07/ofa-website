import { blogPosts } from "@/data";
import { marked } from 'marked';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const runtime = "edge";

export default function BlogPost({ params }) {
    const post = blogPosts.find((post) => post.slug === params.slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    // Convert Markdown to HTML using `marked`
    const contentHtml = marked(post.content);

    // Custom renderer for syntax highlighting
    const renderers = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </div>
    );
}
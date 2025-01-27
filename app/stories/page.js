import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";

export const runtime = "edge";
const FETCH_TIMEOUT = 8000; // 8 seconds timeout

// Simplified query with only essential fields
const POSTS_QUERY = `*[
  _type == "story" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  excerpt,
  "authorName": author->name,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": mainImage.alt
}`;

const revalidateOptions = { next: { revalidate: 30 } };

async function fetchPostsWithTimeout() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    try {
        const posts = await client.fetch(
            POSTS_QUERY,
            {},
            {
                ...revalidateOptions,
                signal: controller.signal
            }
        );
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw error; // Re-throw the error to handle it in the component
    } finally {
        clearTimeout(timeout);
    }
}

export default async function IndexPage() {
    try {
        const posts = await fetchPostsWithTimeout();

        if (!posts?.length) {
            return (
                <main className="min-h-screen bg-slate-50 flex items-center justify-center">
                    <div className="text-center p-8 max-w-2xl">
                        <div className="text-blue-600 mb-4 text-5xl">📭</div>
                        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                            No Posts Found
                        </h2>
                        <p className="text-slate-600 text-lg mb-6">
                            It looks like there are no stories available at the moment. Please check back later.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                        >
                            Retry
                        </button>
                    </div>
                </main>
            );
        }

        return (
            <main className="min-h-screen bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4 font-serif tracking-tight">
                            Stories & Narratives
                        </h1>
                        <p className="text-lg text-slate-600">
                            Condensed wisdom and experiences shared by our community
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post._id}
                                className="bg-white rounded-xl shadow-sm overflow-hidden"
                            >
                                <Link
                                    href={`/stories/${post.slug?.current}/`}
                                    className="block h-full"
                                >
                                    {post.mainImageUrl && (
                                        <div className="relative aspect-[5/3] w-full rounded-t-xl overflow-hidden">
                                            <Image
                                                src={post.mainImageUrl}
                                                alt={post.mainImageAlt || post.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={false}
                                                placeholder="empty"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <div className="mb-4">
                                            <p className="text-sm font-medium text-slate-900">
                                                {post.authorName}
                                            </p>
                                            <time
                                                className="text-xs text-slate-500"
                                                dateTime={post.publishedAt}
                                            >
                                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </time>
                                        </div>

                                        <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                            {post.title}
                                        </h2>

                                        {post.excerpt && (
                                            <p className="text-slate-600 line-clamp-3 mb-4">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        <div className="text-blue-700 font-medium flex items-center">
                                            Continue Reading
                                            <svg
                                                className="w-4 h-4 ml-2 mt-px"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error("Page render failed:", error);
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center p-8 max-w-2xl">
                    <div className="text-blue-600 mb-4 text-5xl">⚠️</div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                        Content Unavailable
                    </h2>
                    <p className="text-slate-600 text-lg mb-6">
                        {error.message.includes("Timeout")
                            ? "Request timed out. Please try again."
                            : "We're experiencing technical difficulties. Please check back later."}
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </main>
        );
    }
}
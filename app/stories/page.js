import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";

export const runtime = "edge";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  excerpt,
  author->{
    name,
    slug,
    image{
      asset->{url},
      alt
    }
  },
  mainImage {
    asset->{url},
    alt
  },
  tags[]->{
    name,
    slug
  }
}`;

const revalidateOptions = { next: { revalidate: 30 } };

export default async function IndexPage() {
    try {
        const posts = await client.fetch(POSTS_QUERY, {}, revalidateOptions);

        return (
            <main className="min-h-screen bg-slate-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4 font-serif tracking-tight">
                            Blog Center
                        </h1>
                        <p className="text-lg text-slate-600">
                            Our perspectives on current trends and issues
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post._id}
                                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out overflow-hidden"
                            >
                                <Link
                                    href={`/stories/${post.slug.current}/`}
                                    className="block h-full"
                                >
                                    {post.mainImage?.asset?.url && (
                                        <div className="relative aspect-[5/3] w-full rounded-t-xl overflow-hidden">
                                            <Image
                                                src={post.mainImage.asset.url}
                                                alt={post.mainImage.alt || post.title}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={false}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        <div className="mb-4 flex items-center gap-3">
                                            {post.author?.image?.asset?.url && (
                                                <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                                    <Image
                                                        src={post.author.image.asset.url}
                                                        alt={post.author.image.alt || post.author.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-medium text-slate-900">
                                                    {post.author?.name}
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
                                        </div>

                                        <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight transition-colors group-hover:text-blue-700">
                                            {post.title}
                                        </h2>

                                        {post.excerpt && (
                                            <p className="text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                        )}

                                        {post.tags?.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag.slug.current}
                                                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                                                    >
                            {tag.name}
                          </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="inline-flex items-center text-blue-700 font-medium group-hover:text-blue-900 transition-colors">
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
        console.error("Failed to fetch posts:", error);
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center p-8 max-w-2xl">
                    <div className="text-blue-600 mb-4 text-5xl">⚠️</div>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                        Content Unavailable
                    </h2>
                    <p className="text-slate-600 text-lg mb-6">
                        We apologize for the inconvenience. Our team has been notified and
                        is working to resolve the issue.
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
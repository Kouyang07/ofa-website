// app/stories/[slug]/page.js

export const runtime = "edge";
export const revalidate = 60;

import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  references[]{
    _key,
    source,
    pageNumbers
  },
  "author": author->{
    name,
    slug,
    image,
    bio
  },
  "tags": tags[]->{
    name,
    slug
  }
}`;

const urlFor = (source) =>
    imageUrlBuilder({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    }).image(source);

const components = {
    block: {
        normal: ({ children }) => (
            <p className="text-lg leading-8 text-gray-600 mb-6 last:mb-0">
                {children}
            </p>
        ),
        h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                {children}
            </h2>
        ),
    },
    types: {
        image: ({ value }) => (
            <figure className="my-12">
                <img
                    src={urlFor(value).width(1600).quality(80).url()}
                    className="rounded-xl shadow-lg"
                    alt={value.alt || ""}
                    loading="lazy"
                    width={1600}
                    height={900}
                />
                {value.alt && (
                    <figcaption className="text-center text-sm text-gray-500 mt-3">
                        {value.alt}
                    </figcaption>
                )}
            </figure>
        ),
    },
};

export default async function PostPage({ params }) {
    const { slug } = await params;

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
        console.error("Sanity environment variables not configured");
        return <ErrorFallback />;
    }

    try {
        const post = await client.fetch(POST_QUERY, { slug });
        if (!post?.slug?.current) notFound();

        const featuredImageUrl = post.mainImage
            ? urlFor(post.mainImage).width(1200).height(675).quality(85).url()
            : null;

        return (
            <main className="container mx-auto min-h-screen max-w-3xl px-4 md:px-6">
                <nav className="py-8">
                    <Link
                        href="/stories"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group text-sm font-medium"
                        prefetch={false}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        All Articles
                    </Link>
                </nav>

                <article className="pb-16">
                    <header className="mb-12">
                        {featuredImageUrl && (
                            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-50">
                                <img
                                    src={featuredImageUrl}
                                    alt={post.mainImage?.alt || post.title}
                                    className="w-full h-full object-cover"
                                    width={1200}
                                    height={675}
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        )}

                        <div className="space-y-6 text-center">
                            <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                                <time dateTime={post.publishedAt}>
                                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </time>
                                {post.tags?.length > 0 && (
                                    <>
                                        <span className="text-gray-300">•</span>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <Link
                                                    key={tag.slug.current}
                                                    href={`/tags/${tag.slug.current}`}
                                                    className="hover:text-gray-700 transition-colors"
                                                    prefetch={false}
                                                >
                                                    #{tag.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            {post.author && (
                                <div className="flex items-center justify-center space-x-3">
                                    {post.author.image && (
                                        <img
                                            src={urlFor(post.author.image).width(100).height(100).quality(75).url()}
                                            alt={post.author.image.alt || post.author.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                            width={100}
                                            height={100}
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="text-sm">
                                        <p className="font-medium text-gray-900">{post.author.name}</p>
                                        {post.author.bio && (
                                            <p className="text-gray-500 line-clamp-1">{post.author.bio}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </header>

                    <section className="prose prose-lg md:prose-xl max-w-none text-gray-700 pb-12">
                        <PortableText value={post.body} components={components} />
                    </section>

                    {post.references?.length > 0 && (
                        <section className="border-t pt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>
                            <ol className="space-y-4">
                                {post.references.map((reference) => (
                                    <li
                                        key={reference._key}
                                        className="relative pl-6 text-gray-600 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-300"
                                    >
                                        <div className="text-sm leading-relaxed">
                                            <p className="font-medium text-gray-700">{reference.source}</p>
                                            {reference.pageNumbers && (
                                                <p className="mt-1 text-gray-500">
                                                    Pages: {reference.pageNumbers}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}
                </article>
            </main>
        );
    } catch (error) {
        console.error("Post page error:", error);
        return <ErrorFallback />;
    }
}

function ErrorFallback() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8">
            <div className="text-red-600 text-lg text-center py-12">
                Failed to load post. Please try again later.
            </div>
            <div className="text-center">
                <Link
                    href="/stories"
                    className="text-gray-600 hover:text-gray-900 underline transition-colors"
                    prefetch={false}
                >
                    Back to all articles
                </Link>
            </div>
        </main>
    );
}
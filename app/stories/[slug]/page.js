// app/stories/[slug]/page.js

// 1. Let Next.js know this route should use the Edge runtime
export const runtime = "edge";

// (Optional) You can specify revalidation here,
// Next.js will attempt to cache at the edge.
export const revalidate = 60;

import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;

export default async function PostPage({ params }) {
    const { slug } = params;

    try {
        const post = await client.fetch(POST_QUERY, { slug });
        if (!post) {
            notFound();
        }

        const postImageUrl = post.image
            ? urlFor(post.image)?.width(550).height(310).url()
            : null;

        return (
            <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
                <Link href="/stories" className="hover:underline">
                    ← Back to posts
                </Link>

                {postImageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={postImageUrl}
                        alt={post.title}
                        className="aspect-video rounded-xl"
                        width="550"
                        height="310"
                    />
                )}

                <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

                <div className="prose">
                    <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
                    {Array.isArray(post.body) && <PortableText value={post.body} />}
                </div>
            </main>
        );
    } catch (error) {
        console.error("Failed to fetch post:", error);
        return (
            <main className="container mx-auto min-h-screen max-w-3xl p-8">
                Failed to load post.
            </main>
        );
    }
}
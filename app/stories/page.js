// app/(or pages)/index.tsx (Next.js 13+ in the app directory, or pages/index.tsx in older versions)
import Link from "next/link";
import { createClient } from "next-sanity";
import {client} from "@/sanity/client";

export const runtime = "edge";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt
}`;

const revalidateOptions = { next: { revalidate: 30 } };

export default async function IndexPage() {
    try {
        // For Edge, we rely on the built-in fetch from the environment.
        // next-sanity's 'createClient' respects this if we provide `fetch`.
        const posts = await client.fetch(POSTS_QUERY, {}, revalidateOptions);

        return (
            <main className="container mx-auto min-h-screen max-w-3xl p-8">
                <h1 className="text-4xl font-bold mb-8">Posts</h1>
                <ul className="flex flex-col gap-y-4">
                    {posts.map((post, any) => (
                        <li className="hover:underline" key={post._id}>
                            <Link href={`/stories/${post.slug.current}/`}>
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        );
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        return (
            <main className="container mx-auto min-h-screen max-w-3xl p-8">
                Failed to load posts.
            </main>
        );
    }
}
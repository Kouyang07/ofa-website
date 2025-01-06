import Link from "next/link";

export default function StoriesCard({ post }) {
    return (
        <Link href={`/stories/${post.slug}`}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-white">
                {/* Image Section */}
                {post.image && (
                    <div className="w-full h-48 relative overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Content Section */}
                <div className="p-6">
                    {/* Tag or Category */}
                    {post.tag && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full mb-2">
                            {post.tag}
                        </span>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                        {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>

                    {/* Author or Date */}
                    <div className="flex items-center text-sm text-gray-500">
                        {post.author && (
                            <span className="mr-2">By {post.author}</span>
                        )}
                        {post.date && (
                            <span>{post.date}</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
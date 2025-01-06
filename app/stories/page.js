import StoriesFilter from "@/components/stories/StoriesFilter";
import StoriesCard from "@/components/stories/StoriesCard";
import { blogPosts } from "@/data";

export const runtime = "edge";

export default function StoriesPage() {
    return (
        <div className="container mx-auto px-4">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-green-600">Stories of How One4All Foundation Helped Elders</h1>
                <p className="text-gray-600">
                    Discover heartwarming stories of how the One4All Foundation has made a difference in the lives of elders.
                </p>
            </div>

            {/* Main Content with Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="md:col-span-1">
                    <StoriesFilter />
                </div>

                {/* Blog List */}
                <div className="md:col-span-3">
                    <div className="grid gap-6">
                        {blogPosts.map((post) => (
                            <StoriesCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
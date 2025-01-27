import Link from 'next/link';

const StoryHighlights = () => {
    const stories = [
        {
            title: "Samantha's Journey",
            desc: "Reconnecting with family through gardening",
            img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80",
            slug: "/story/samantha"
        },
        {
            title: "John's Adventure",
            desc: "Traveling the world at 78",
            img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80",
            slug: "/story/john"
        },
        {
            title: "Maria's Legacy",
            desc: "Preserving blogs for future generations",
            img: "https://images.unsplash.com/photo-1586082588577-d38a47f49f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=400&q=80",
            slug: "/story/maria"
        }
    ];

    return (
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-red-600 mb-4">Story Highlights</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover inspiring journeys of joy and connection within our community
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <Link key={index} href={story.slug} passHref>
                            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={story.img}
                                        alt={story.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-green-600 mb-4">{story.title}</h3>
                                    <p className="text-gray-700 mb-6 text-lg flex-grow">{story.desc}</p>
                                    <button className="self-start bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors duration-300 flex items-center gap-2">
                                        Read Story
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryHighlights;
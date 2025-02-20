const HowWeHelp = () => {
    const services = [
        {
            title: "Elder Stories",
            desc: "We share elder stories to celebrate their wisdom, preserve their legacy, and create meaningful connections across generations. These stories provide insight, inspiration, and a deeper appreciation for the rich experiences of our elderly community.",
            img: "null"
        },
        {
            title: "Awareness",
            desc: "We raise awareness about the challenges and needs of the elderly by utilizing social media platforms like Instagram (@onefourall2024). Through thoughtful posts, impactful stories, and actionable content, we inspire others to understand, engage with, and support the elderly population.",
            img: "/howwehelp/instagram.png",
            reverse: true
        },
        {
            title: "Community Events",
            desc: "Creating opportunities for socialization and celebration.",
            img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-red-600 mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-green-500">
                    How We Help
                </h2>
                <div className="space-y-20">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col md:flex-row ${service.reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 group`}>
                            <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Removed the gradient overlay div here */}
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-4xl font-bold text-green-600 mb-4">{service.title}</h3>
                                <p className="text-gray-700 text-xl leading-relaxed">{service.desc}</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    {service.title === "Elder Stories" && <>
                                        <li>Oral storytelling sessions</li>
                                        <li>Intergenerational story exchanges</li>
                                        <li>Legacy preservation projects</li>
                                        <li>Community storybooks</li>
                                    </>}
                                    {service.title === "Awareness" && <>
                                        <li>Instagram campaigns (@onefourall2024)</li>
                                        <li>Impactful story highlights</li>
                                        <li>Collaborations with influencers</li>
                                        <li>Educational infographics</li>
                                    </>}
                                    {service.title === "Community Events" && <>
                                        <li>Cultural celebrations</li>
                                        <li>Holiday gatherings</li>
                                        <li>Skill-sharing workshops</li>
                                    </>}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Updated CTA Section */}
                <div className="mt-16 text-center">
                    <p className="text-gray-700 text-xl mb-6">
                        Follow us on Instagram for daily updates and stories: {" "}
                        <a
                            href="https://instagram.com/onefourall2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 font-semibold"
                        >
                            @onefourall2024
                        </a>
                    </p>
                    <a
                        href="/blogs"
                        className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                        Explore All Blogs
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowWeHelp;
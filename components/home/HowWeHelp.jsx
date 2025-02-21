"use client";

import { motion } from "framer-motion";

const HowWeHelp = () => {
    const services = [
        {
            title: "Elder Stories",
            desc: "We celebrate elder wisdom by preserving their legacy and fostering intergenerational connections. These stories provide insight, inspiration, and a deeper appreciation for the rich experiences of our elderly community.",
            img: "/howwehelp/stories.png",
            highlights: [
                "Oral storytelling sessions",
                "Intergenerational story exchanges",
                "Legacy preservation projects",
                "Community storybooks"
            ]
        },
        {
            title: "Awareness",
            desc: "We raise awareness about the challenges and needs of the elderly through digital storytelling and impactful social media initiatives. Follow us on Instagram for engaging campaigns that educate and inspire action.",
            img: "/howwehelp/instagram.png",
            highlights: [
                "Instagram campaigns (@onefourall2024)",
                "Impactful story highlights",
                "Collaborations with influencers",
                "Educational infographics"
            ]
        },
        {
            title: "Community Events",
            desc: "Bringing people together through meaningful interactions. Our events create opportunities for socialization, cultural exchange, and lifelong learning.",
            img: "/howwehelp/group.jpg",
            highlights: [
                "Cultural celebrations",
                "Holiday gatherings",
                "Skill-sharing workshops"
            ]
        }
    ];

    return (
        <section className="py-24 px-6 sm:px-10 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-bold text-gray-900 text-center mb-20 relative pb-4 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:bg-green-500"
                >
                    How We Help
                </motion.h2>

                <div className="space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`relative flex flex-col md:flex-row items-center ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Image Container with Hover Effect */}
                            <motion.div
                                className="w-full md:w-1/2 relative group overflow-hidden rounded-xl shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.img
                                    src={service.img}
                                    quality={80}
                                    alt={service.title}
                                    className="w-full h-96 object-cover transform transition-all duration-500"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
                            </motion.div>

                            {/* Content Container */}
                            <motion.div
                                className="w-full md:w-1/2 px-6 md:px-12"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                <h3 className="text-4xl font-semibold text-green-600 mb-6 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    {service.highlights.map((highlight, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start space-x-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 * i }}
                                        >
                                            <span className="text-green-500 text-lg">●</span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-lg text-gray-700 mb-6">
                        Follow us for daily updates and stories:{" "}
                        <a
                            href="https://instagram.com/onefourall2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 font-semibold"
                        >
                            @onefourall2024
                        </a>
                    </p>
                    <motion.a
                        href="/blogs"
                        className="inline-block bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-2xl transform"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore All Blogs
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowWeHelp;
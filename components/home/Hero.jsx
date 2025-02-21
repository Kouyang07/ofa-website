"use client";

import Image from 'next/image';
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative overflow-hidden h-[90vh] flex items-center justify-center bg-gray-900">
            {/* Background Image with a Soft Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
            >
                <Image
                    src="/hero.jpg" // Ensure this image is in your public folder
                    alt="Elderly care and support"
                    fill
                    quality={80}
                    className="absolute inset-0 object-cover brightness-75"
                />
            </motion.div>

            {/* Dark overlay for better readability */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-black"
            />

            {/* Content Container */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="relative z-10 text-center px-8"
            >
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.2 }}
                    className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-wide"
                >
                    One4All Foundation
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3, delay: 0.4 }}
                    className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Spreading warmth, love, and care for our elders, one moment at a time.
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8"
                >
                    <motion.a
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        href="/aboutus"
                        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl"
                    >
                        Learn More →
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
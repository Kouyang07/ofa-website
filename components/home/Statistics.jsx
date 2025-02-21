"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const bounceIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 10 } },
};

const Statistics = () => {
    const stats = [
        {
            value: "1 in 3",
            label: "Elderly Experience Clinical Depression",
            subtext: "Nursing home residents with significant depressive symptoms",
            source: "AARP New York, 2024",
            icon: (
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            value: "50%+",
            label: "Undiagnosed Cases",
            subtext: "Depression cases remaining unrecognized in care facilities",
            source: "Tesky et al., 2019",
            icon: (
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            value: "$140k",
            label: "Annual Care Costs",
            subtext: "Average nursing home expenses per resident",
            source: "Genworth, 2023",
            icon: (
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            value: "42.9%",
            label: "Treatment Gap",
            subtext: "Diagnosed residents not receiving adequate care",
            source: "Kramer et al., 2009",
            icon: (
                <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" animate="visible" className="max-w-7xl mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">Critical Challenges in Elder Care</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Data reveals systemic issues requiring urgent attention and collective action.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                            className="relative bg-white p-8 rounded-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 shadow-sm group"
                        >
                            <motion.div variants={bounceIn} initial="hidden" animate="visible" className="mb-6 flex items-center justify-center h-24">
                                {stat.icon}
                            </motion.div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{stat.subtext}</p>
                            </div>

                            {/* Smooth Source Reveal on Hover */}
                            <motion.div
                                className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            >
                                <p className="text-gray-700 font-medium text-sm text-center px-4">Source: {stat.source}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeInUp} className="mt-8 text-center">
                    <p className="text-gray-600 italic">Hover over each statistic to see the source.</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Statistics;
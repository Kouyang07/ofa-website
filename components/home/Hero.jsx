import Image from 'next/image';
import React from "react";

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-opacity-20 bg-black" />
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fade-in-down">
                    One4All Foundation
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-100 mb-8 md:mb-10 leading-tight drop-shadow-md">
                    Radiating Kindness and Joy to Our Elders
                </h2>
                <div className="mt-10">
                    <a
                        href="/aboutus"
                        className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Learn More →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
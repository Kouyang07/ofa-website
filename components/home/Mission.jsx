import React from 'react';

const Mission = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-4xl mx-auto text-center relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                </div>
                <p className="text-3xl text-gray-800 leading-relaxed">
                    At <span className="text-green-600 font-bold bg-clip-text">One4All</span>, we honor the
                    <span className="text-blue-600 font-medium"> elderly</span> — the heart of our nation.
                    In a world that often overlooks them, we strive to bring
                    <span className="text-green-600"> joy</span>,
                    <span className="text-blue-600"> love</span>, and
                    <span className="text-green-600"> fulfillment</span> to their lives.
                </p>
            </div>
        </section>
    );
};

export default Mission;
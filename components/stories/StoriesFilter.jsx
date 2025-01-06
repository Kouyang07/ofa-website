"use client"; // Required for client-side interactivity

import { useState } from "react";

export default function StoriesFilter() {
    const [filter, setFilter] = useState("all");

    return (
        <div className="sticky top-8">
            <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
            <ul className="space-y-2">
                <li>
                    <button
                        onClick={() => setFilter("all")}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter("health")}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            filter === "health" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        Health
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter("community")}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            filter === "community" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        Community
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setFilter("education")}
                        className={`w-full text-left px-4 py-2 rounded-lg ${
                            filter === "education" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        Education
                    </button>
                </li>
            </ul>
        </div>
    );
}
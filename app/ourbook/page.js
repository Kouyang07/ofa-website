import { FaInstagram } from "react-icons/fa";

export const metadata = {
    title: "The Lives We Live | One for All Foundation",
    description: "The Lives We Live: Four People, Two Years, and Everything I Never Thought to Ask. Coming soon.",
};

export default function OurBook() {
    return (
        <section
            className="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center px-6"
            style={{ backgroundImage: "url('/howwehelp/community-events.jpg')" }}
        >
            <div className="absolute inset-0 bg-gray-900/75"></div>
            <div className="relative z-10 max-w-3xl text-center text-white py-20">
                <p className="uppercase tracking-[0.3em] text-green-400 text-sm font-semibold mb-6">
                    A One4All Book
                </p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    The Lives We Live
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 italic mb-10">
                    Four People, Two Years, and Everything I Never Thought to Ask
                </p>
                <div className="border-t border-white/30 pt-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">Coming Soon</h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-8">
                        Two years of conversations with four remarkable people, retold as stories by Cyrus Andaz.
                        A celebration of the wisdom and lives of our elders.
                    </p>
                    <a
                        href="https://www.instagram.com/onefourall2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg"
                    >
                        <FaInstagram className="text-2xl" /> Follow for release updates
                    </a>
                </div>
            </div>
        </section>
    );
}

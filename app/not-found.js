// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-blue-50 to-orange-50">
            <div className="max-w-2xl mx-auto">
                {/* Compassion-themed illustration */}
                <div className="animate-float-slow mb-12">
                    <svg
                        className="w-48 h-48 mx-auto hover:rotate-12 transition-transform duration-300"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z"
                            fill="#FEE2E2"
                        />
                        <path
                            d="M140 80L120 100L140 120M60 80L80 100L60 120"
                            stroke="#DC2626"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />
                        <circle cx="100" cy="100" r="95" stroke="#1e40af" strokeWidth="4" strokeDasharray="8 8"/>
                    </svg>
                </div>

                <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-fade-in-up">
                    Oh dear! We Can't Find That Page ❤️
                </h1>

                <p className="text-xl text-gray-700 mb-8 max-w-md mx-auto leading-relaxed">
                    It seems we've misplaced that page, but don't worry - our community support is always here.
                    Let us help guide you back to our services and resources.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl text-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Return Home
                    </Link>

                    <Link
                        href="/contact"
                        className="text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
import { Delius } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const delius = Delius({
    weight: '400',
    subsets: ['latin'],
});

export const metadata = {
    title: "One for All Foundation",
    description: "Celebrate the elderly",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={delius.className}>
        <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mt-32">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
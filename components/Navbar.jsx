"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const navItems = ['Home', 'Stories', 'Blogs', 'About Us'];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsNavbarVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-20 bg-white shadow-md transition-transform duration-300 ease-in-out ${
                isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
            style={{ height: '100px' }} // Fixed height for the Navbar
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center h-full">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image className="rounded" src="/logo.png" alt="Logo" width={60} height={60} />
                    </Link>
                </div>
                <div className="hidden lg:flex flex-grow justify-center">
                    <ul className="flex space-x-6">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replaceAll(" ", "")}`}
                                    className="inline-block p-2 px-4 font-semibold text-xl text-gray-800 hover:text-green-600"
                                >
                                    <span>{item}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-800 hover:text-green-600">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    {isMobileMenuOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-md py-2 flex flex-col items-center z-30"> {/* Add z-30 */}
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="block py-2 px-4 w-full text-center text-gray-800 hover:bg-gray-100 hover:text-green-600"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"> Donate </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
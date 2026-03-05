"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdctxpmJkaHEEtO6Yy1JRIBLCFdYZJWH0oKQylypgBQPySAdQ/viewform";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Internship Program", path: "/internships" },
        { name: "How It Works", path: "/how-it-works" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 py-3" : "bg-transparent py-5"}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        S
                    </div>
                    <span className={`font-bold text-xl tracking-tight text-navy-900`}>
                        SkyTech Digital Labs
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="text-sm font-medium text-neutral-600 hover:text-blue-600 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Apply Now
                    </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-navy-900 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-navy-900 transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-navy-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-neutral-100">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.path} className="text-base font-medium text-navy-900 py-2 border-b border-neutral-100" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href={GOOGLE_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl font-medium text-center transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Apply Now
                    </a>
                </div>
            )}
        </nav>
    );
}

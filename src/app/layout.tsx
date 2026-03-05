import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "SkyTech Digital Labs | Remote Internship Platform",
    description: "Structured 30-day remote internship programs focused on performance-based evaluation and professional certification.",
    openGraph: {
        title: "SkyTech Digital Labs",
        description: "Remote Internship & Skill Development Platform",
        siteName: "SkyTech Digital Labs",
        images: [
            {
                url: "/og-image-placeholder.jpg",
                width: 1200,
                height: 630,
                alt: "SkyTech Digital Labs Open Graph Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans flex flex-col min-h-screen bg-neutral-50`}>
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

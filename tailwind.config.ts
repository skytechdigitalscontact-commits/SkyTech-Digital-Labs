import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                foreground: "#171717",
                navy: {
                    500: "#1e3a8a", // Soft dark blue accent
                    900: "#0f172a", // Darker navy for text/headings
                },
                neutral: {
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    500: "#64748b",
                    900: "#0f172a",
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-accent": "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                "gradient-button": "linear-gradient(to right, #2563eb, #1e40af)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            }
        },
    },
    plugins: [],
};
export default config;

"use client";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    if (status === "success") {
        return (
            <div className="w-full max-w-lg mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 flex flex-col items-center text-center gap-6 animate-pulse-once">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl shadow-inner">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                    <p className="text-neutral-600">
                        Thank you for reaching out. Our team will get back to you within 24–48 business hours.
                    </p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-blue-600 font-medium hover:underline transition-all"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 relative overflow-hidden">
            {/* Decorative gradient corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-bl-full opacity-50 pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-navy-900 mb-6 relative z-10">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
                    <input
                        required
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-neutral-50 focus:bg-white"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email Address</label>
                    <input
                        required
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-neutral-50 focus:bg-white"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                    <textarea
                        required
                        id="message"
                        rows={4}
                        placeholder="How can we help you?"
                        className="px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-neutral-50 focus:bg-white resize-none"
                    ></textarea>
                </div>

                <button
                    disabled={status === "submitting"}
                    type="submit"
                    className={`btn-primary w-full py-4 mt-2 ${status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {status === "submitting" ? (
                        <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            Sending...
                        </span>
                    ) : "Send Message"}
                </button>
            </form>
        </div>
    );
}

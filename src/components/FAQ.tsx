"use client";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What is the duration of the internship program?",
        answer: "Our internship programs are structured for 30 days, providing sufficient time to gain practical experience and complete assigned tasks.",
    },
    {
        question: "Is this internship remote or on-site?",
        answer: "All our internship programs are completely remote, allowing you to work from anywhere while gaining industry-relevant experience.",
    },
    {
        question: "Are these internships paid or unpaid?",
        answer: "Our internships are performance-based. Participants receive certificates and performance reports upon successful completion. Payment details can be discussed during the application process.",
    },
    {
        question: "What skills are required to apply?",
        answer: "Basic knowledge in your chosen domain is recommended. Our programs are designed for beginners to intermediate learners who are eager to learn and grow.",
    },
    {
        question: "How do I apply for an internship?",
        answer: "Simply click on the 'Apply Now' button and fill out our Google Form. Our team will review your application and get back to you within 24-48 business hours.",
    },
    {
        question: "Will I receive a certificate after completion?",
        answer: "Yes, upon successful completion of the internship program, you will receive a professional internship certificate and a performance report.",
    },
    {
        question: "What is the evaluation process?",
        answer: "We follow a weekly review system with measurable performance benchmarks. Your progress is tracked based on task completion and quality of work submitted.",
    },
    {
        question: "Can I choose my own projects?",
        answer: "We provide structured task-based assignments that simulate real industry workflows. However, we welcome your interests and can discuss custom projects during the program.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full py-24 bg-neutral-50 dark:bg-slate-800/50" id="faq">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Find answers to common questions about our internship programs.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-semibold text-navy-900 dark:text-white pr-4">
                                    {item.question}
                                </span>
                                <span className="flex-shrink-0">
                                    <svg
                                        className={`w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
                                            openIndex === index ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="px-6 pb-5 text-neutral-600 dark:text-slate-300 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


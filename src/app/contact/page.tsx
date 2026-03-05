import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="w-full bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 tracking-tight">
                        Contact Us
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Reach out to our team.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <div className="bg-neutral-50 rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-navy-900 mb-8">Get in Touch</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-500 mb-1">Email</p>
                                    <a href="mailto:skytechdigitals.contact@gmail.com" className="text-lg font-semibold text-navy-900 hover:text-blue-600 transition-colors">
                                        skytechdigitals.contact@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-500 mb-1">Location</p>
                                    <p className="text-lg font-semibold text-navy-900">
                                        Tumsar, Maharashtra, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-500 mb-1">Response Time</p>
                                    <p className="text-lg font-semibold text-navy-900">
                                        24–48 Business Hours
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
                            <p className="text-sm font-medium text-blue-800">
                                For internship applications, please use the Apply Now button in the navigation.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

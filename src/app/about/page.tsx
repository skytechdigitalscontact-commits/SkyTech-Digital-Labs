export default function AboutPage() {
    return (
        <div className="w-full bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 tracking-tight">
                        About SkyTech Digital Labs
                    </h1>
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                        SkyTech Digital Labs is a remote internship and skill development platform focused on structured, performance-driven learning experiences.
                    </p>

                    <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                        Founded by Bhavesh Bhure, the organization operates as an Individual Enterprise based in Tumsar, Maharashtra, India, functioning as a training and skill development platform.
                    </p>

                    <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                        Our mission is to provide practical exposure through guided tasks, structured evaluation, and professional certification.
                    </p>

                    {/* Compliance Statement */}
                    <div className="bg-neutral-900 text-white rounded-2xl p-8 mt-12 mb-16">
                        <p className="text-lg font-semibold leading-relaxed">
                            <span className="text-blue-400">SkyTech Digital Labs is not a placement agency</span> and does not guarantee employment offers.
                        </p>
                        <p className="text-neutral-300 mt-4">
                            We focus on skill development and merit-based recognition.
                        </p>
                    </div>

                    {/* Founder Section */}
                    <div className="border-t border-neutral-100 pt-16">
                        <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">About the Founder</h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-navy-900 flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 shadow-lg">
                                BB
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-navy-900 mb-2">Bhavesh Bhure</h3>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    A visionary educator and tech enthusiast dedicated to bridging the gap between academic learning and industry requirements. Under his leadership, SkyTech Digital Labs has emerged as a platform where students can gain real-world exposure without geographical barriers.
                                </p>
                                <div className="flex gap-4">
                                    <div className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-500">Founder</div>
                                    <div className="px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-500">Tech Lead</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats or additional info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="bg-neutral-50 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">30</div>
                        <div className="text-neutral-600 font-medium">Days Program</div>
                    </div>
                    <div className="bg-neutral-50 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
                        <div className="text-neutral-600 font-medium">Domains</div>
                    </div>
                    <div className="bg-neutral-50 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                        <div className="text-neutral-600 font-medium">Task-Based</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

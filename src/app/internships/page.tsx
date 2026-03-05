const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdctxpmJkaHEEtO6Yy1JRIBLCFdYZJWH0oKQylypgBQPySAdQ/viewform";

const domains = [
    { name: "AI Tools & Automation", description: "Work with AI tools and automation workflows", icon: "🤖" },
    { name: "Data Support", description: "Data entry, processing and analysis tasks", icon: "📊" },
    { name: "HR Research", description: "Talent acquisition and HR research", icon: "👥" },
    { name: "Content & Social Media", description: "Content creation and social media management", icon: "📱" },
    { name: "Operations", description: "Business operations and process management", icon: "⚙️" },
    { name: "Python Development", description: "Python programming and automation", icon: "🐍" },
    { name: "Data Analytics", description: "Data visualization and analytics", icon: "📈" },
    { name: "Frontend Development", description: "Modern web development with React", icon: "💻" },
];

export default function InternshipsPage() {
    return (
        <div className="w-full bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 tracking-tight">
                        30-Day Remote Internship Program
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Our structured internship program is designed to provide practical exposure through task-based assignments and guided evaluation.
                    </p>
                </div>

                {/* Available Domains */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Available Domains</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {domains.map((domain, index) => (
                            <a 
                                key={index}
                                href={GOOGLE_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border-2 border-neutral-100 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="text-4xl mb-4">{domain.icon}</div>
                                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {domain.name}
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    {domain.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Program Structure */}
                <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-16">
                    <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Program Structure</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">1</div>
                            <h3 className="font-bold text-navy-900 mb-2">Task-Based Assignments</h3>
                            <p className="text-neutral-600 text-sm">Complete structured tasks with clear objectives</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">2</div>
                            <h3 className="font-bold text-navy-900 mb-2">Weekly Performance Tracking</h3>
                            <p className="text-neutral-600 text-sm">Regular reviews to track your progress</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">3</div>
                            <h3 className="font-bold text-navy-900 mb-2">Mid-Program Review</h3>
                            <p className="text-neutral-600 text-sm">Feedback session at program midpoint</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">4</div>
                            <h3 className="font-bold text-navy-900 mb-2">Final Evaluation</h3>
                            <p className="text-neutral-600 text-sm">Comprehensive assessment at completion</p>
                        </div>
                    </div>
                </div>

                {/* What Participants Receive */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">What Participants Receive</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-navy-900 mb-2">Internship Certificate</h3>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-navy-900 mb-2">Internship ID</h3>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-navy-900 mb-2">Performance Report</h3>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-6 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-navy-900 mb-2">LOR (Top Performers)</h3>
                        </div>
                    </div>
                </div>

                {/* Important Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-16">
                    <h3 className="text-lg font-bold text-amber-800 mb-4">Important Notice</h3>
                    <p className="text-amber-900">
                        Top-performing participants may be considered for future paid project opportunities based on merit and availability.
                    </p>
                    <p className="text-amber-700 mt-4 text-sm">
                        <strong>Note:</strong> We do not offer guaranteed stipend, 100% placement, or assured job.
                    </p>
                </div>

                {/* Program Fee */}
                <div className="bg-navy-900 text-white rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">Program Fee</h2>
                    <p className="text-neutral-300 max-w-2xl mx-auto mb-6">
                        A Program Confirmation Fee may apply after shortlisting to cover administrative and structured training access costs.
                    </p>
                    <p className="text-neutral-400 text-sm">
                        Fee details are shared only after application review.
                    </p>
                </div>
            </div>
        </div>
    );
}

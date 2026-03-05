export default function HowItWorksPage() {
    const steps = [
        {
            number: 1,
            title: "Submit Application",
            description: "Complete the application form with accurate details.",
        },
        {
            number: 2,
            title: "Shortlisting",
            description: "Applications are reviewed based on eligibility and alignment.",
        },
        {
            number: 3,
            title: "Confirmation",
            description: "Selected candidates receive confirmation instructions.",
        },
        {
            number: 4,
            title: "Internship Access",
            description: "Participants receive onboarding details and task access.",
        },
        {
            number: 5,
            title: "Completion & Certification",
            description: "Upon successful evaluation, certification is issued.",
        },
    ];

    return (
        <div className="w-full bg-white min-h-screen pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-6 tracking-tight">
                        How the Internship Process Works
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Our streamlined process ensures clarity and transparency from application to certification.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300"></div>

                    {/* Steps List */}
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                                {step.number}
                                            </div>
                                            <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                                        </div>
                                        <p className="text-neutral-600">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="hidden md:flex w-16 h-16 rounded-full bg-white border-4 border-blue-500 items-center justify-center z-10">
                                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                                </div>

                                {/* Empty Space for Balance */}
                                <div className="flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-lg text-neutral-600 mb-8">
                        Ready to start your journey? Apply now and begin your skill development experience.
                    </p>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdctxpmJkaHEEtO6Yy1JRIBLCFdYZJWH0oKQylypgBQPySAdQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
}

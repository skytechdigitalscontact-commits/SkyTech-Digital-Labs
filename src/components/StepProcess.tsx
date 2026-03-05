interface Step {
    title: string;
    description: string;
    number: number;
}

export default function StepProcess({ title, description, steps }: { title: string, description: string, steps: Step[] }) {
    return (
        <div className="w-full py-24 bg-neutral-50" id="how-it-works">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">{title}</h2>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (hidden on mobile) */}
                    <div className="hidden md:block absolute top-[28px] left-[15%] w-[70%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative z-10">
                            <div className="w-14 h-14 rounded-full bg-white shadow-md border-2 border-blue-500 flex items-center justify-center text-xl font-bold text-blue-600 mb-6 z-10 transition-transform group-hover:scale-110">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                            <p className="text-neutral-500 leading-relaxed max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

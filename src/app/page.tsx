import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import AlternatingSection from "@/components/AlternatingSection";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

export default function Home() {
    return (
        <div className="flex flex-col items-center w-full">
            <Hero />

            {/* Feature Section */}
            <section className="w-full py-24 bg-white dark:bg-slate-900" id="features">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
                            Why Choose SkyTech Digital Labs?
                        </h2>
                        <p className="mt-4 text-lg text-neutral-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Gain practical skills through our structured internship programs designed for real-world experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Real Project Exposure"
                            description="Work on structured task-based assignments that simulate real industry workflows."
                            icon="1"
                        />
                        <FeatureCard
                            title="Performance-Based Evaluation"
                            description="Weekly review system with measurable performance benchmarks."
                            icon="2"
                        />
                        <FeatureCard
                            title="Professional Certification"
                            description="Receive internship certificate and performance report upon successful completion."
                            icon="3"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ />

            {/* Alternating Info Sections */}
            <section className="w-full bg-neutral-50 dark:bg-slate-800/50 py-16" id="about">
                <AlternatingSection
                    title="Built for Practical Learning — Not Just Theory"
                    description="Our internship model focuses on execution. Participants complete guided tasks, submit deliverables, and receive structured evaluation throughout the program."
                    imagePosition="left"
                />
                <AlternatingSection
                    title="Transparent & Structured Process"
                    description="Clear application process, defined program duration, evaluation criteria, and certification guidelines ensure clarity from day one."
                    imagePosition="right"
                />
            </section>

            <CTABanner />
        </div>
    );
}


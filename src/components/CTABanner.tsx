import Link from "next/link";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdctxpmJkaHEEtO6Yy1JRIBLCFdYZJWH0oKQylypgBQPySAdQ/viewform";

export default function CTABanner() {
    return (
        <section className="w-full py-24 bg-navy-900 relative overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-left w-full md:w-2/3">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Start Your Skill Development Journey Today
                    </h2>
                    <p className="text-lg text-neutral-300 max-w-xl">
                        Apply now and begin a structured internship experience focused on performance and professional growth.
                    </p>
                </div>

                <div className="w-full md:w-1/3 flex justify-start md:justify-end">
                    <a 
                        href={GOOGLE_FORM_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full md:w-auto text-lg px-8 py-4 whitespace-nowrap bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-200 hover:-translate-y-0.5 text-center"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </section>
    );
}


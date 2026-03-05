import Link from "next/link";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdctxpmJkaHEEtO6Yy1JRIBLCFdYZJWH0oKQylypgBQPySAdQ/viewform";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background modern abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-100 to-blue-50 blur-[100px] opacity-70"></div>
                <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-navy-100 to-blue-50 blur-[120px] opacity-70"></div>
                <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-blue-50 to-white blur-[80px] opacity-50"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-blue-700 mb-8 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                    Remote Internship Platform
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
                    Structured Remote Internship Programs <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Built for Real Skill Development</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Performance-driven internship experience designed to build practical execution skills across high-demand domains.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a 
                        href={GOOGLE_FORM_URL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-auto text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                    >
                        Apply for Internship
                    </a>
                    <Link href="/how-it-works" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-200 rounded-xl">
                        View Program Details
                    </Link>
                </div>

                {/* Generic Dashboard/Mockup placeholder */}
                <div className="mt-20 mx-auto w-full max-w-5xl h-64 md:h-96 bg-gradient-to-b from-neutral-50 to-neutral-100 rounded-t-3xl border border-neutral-200 border-b-0 shadow-2xl relative overflow-hidden flex items-center justify-center">
                    <div className="absolute top-4 left-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
                        <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
                        <div className="w-3 h-3 rounded-full bg-neutral-300"></div>
                    </div>
                    <p className="text-neutral-400 font-medium">Dashboard/Platform UI Placeholder</p>
                </div>
            </div>
        </section>
    );
}

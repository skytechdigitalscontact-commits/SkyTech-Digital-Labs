import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold rounded shadow-sm">
                                S
                            </div>
                            <span className="font-bold text-xl">SkyTech Digital Labs</span>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            MSME Registered Enterprise
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Remote Internship & Skill Development Platform
                        </p>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">Home</Link></li>
                            <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/internships" className="text-neutral-400 hover:text-white transition-colors text-sm">Programs</Link></li>
                            <li><Link href="/how-it-works" className="text-neutral-400 hover:text-white transition-colors text-sm">How it Works</Link></li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Legal & Policies</h4>
                        <ul className="space-y-3">
                            <li><Link href="/policies#refund" className="text-neutral-400 hover:text-white transition-colors text-sm">Refund Policy</Link></li>
                            <li><Link href="/policies#terms" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
                            <li><Link href="/policies#privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/policies#disclaimer" className="text-neutral-400 hover:text-white transition-colors text-sm">Disclaimer</Link></li>
                            <li><Link href="/policies#faq" className="text-neutral-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Get in touch */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Connect</h4>
                        <ul className="space-y-3">
                            <li className="text-neutral-400 text-sm">
                                <span className="font-medium text-white">Email:</span> <a href="mailto:skytechdigitals.contact@gmail.com" className="hover:text-blue-400 transition-colors">skytechdigitals.contact@gmail.com</a>
                            </li>
                            <li className="text-neutral-400 text-sm">
                                <span className="font-medium text-white">Location:</span> Tumsar, Maharashtra, India
                            </li>
                            <li className="text-neutral-400 text-sm">
                                <span className="font-medium text-white">Response Time:</span> 24–48 Business Hours
                            </li>
                            <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm underline underline-offset-4 mt-2 inline-block">Contact Form</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral-500 text-sm">
                        © {currentYear} SkyTech Digital Labs. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

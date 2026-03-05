interface AlternatingSectionProps {
    title: string;
    description: string;
    imagePosition?: "left" | "right";
}

export default function AlternatingSection({ title, description, imagePosition = "left" }: AlternatingSectionProps) {
    const isLeft = imagePosition === "left";

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className={`flex flex-col md:flex-row items-center gap-16 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>

                {/* Placeholder for Image/Graphic */}
                <div className="w-full md:w-1/2">
                    <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-100 shadow-md flex items-center justify-center relative overflow-hidden group">
                        {/* Abstract Decorative elements inside placeholder */}
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white/50 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl"></div>
                        <p className="text-neutral-400 font-medium relative z-10 group-hover:scale-105 transition-transform">
                            Graphic Placeholder
                        </p>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-neutral-600 leading-relaxed">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}

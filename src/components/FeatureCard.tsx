import Link from "next/link";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-100">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">
                {title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}

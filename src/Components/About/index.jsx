import React, { useRef } from "react";
import { TrendingUp, Zap, Sparkles, CodeXml } from "lucide-react";
import { useInView } from "framer-motion";
import './index.css';
import './script';

// Card components
const Card = ({ children, className = "" }) => (
    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 ${className}`}>
        {children}
    </div>
);

const CardContent = ({ children, className = "" }) => (
    <div className={className}>
        {children}
    </div>
);

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const features = [
        {
            icon: TrendingUp,
            title: "Growth",
            description: "Focused on accelerating your brand’s growth with measurable digital strategies, helping your business not just exist but dominate the market.",
        },
        {
            icon: Zap,
            title: "Flexible", 
            description: "Delivering solutions tailored to your unique business needs, because every brand has different challenges and ways to grow.",
        },
        {
            icon: Sparkles,
            title: "Solution Oriented",
            description: "Providing real, data-driven results combined with creativity — not just empty promises.",
        },
        {
            icon: CodeXml,
            title: "Specialist",
            description: "Backed by a team of experts in design, technology, and marketing, ready to take your brand to the next level.",
        }
    ];

    return (
        <section className="about-section" ref={ref}>
            <div className="container mx-auto px- py-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Section - Text Content */}
                    <div
                        className={`transition-all duration-1000 ${
                            isInView 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 -translate-x-12'
                        }`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        {/* Header moved to left section */}
                        <div className="mb-10">
                            <h5 className="section-pretitle text-left">
                                Don't choose us
                            </h5>
                            <h2 className="section-title text-left">
                                If you won't make your brand Growing fast
                            </h2>
                        </div>

                        <div className="content-no-card">
                            <div className="legal-basis">
                                <p className="content-text">
                                    Because we don’t just create websites or campaigns — we build momentum.
                                    Your brand deserves to evolve, adapt, and thrive in the digital era.
                                    We believe in strategies that accelerate growth, not just maintain presence.
                                    Every solution we craft is flexible, tailored to your business needs.
                                    Our team of specialists ensures your brand gets the right tools to scale.
                                    With us, growth isn’t an option — it’s the standard.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Feature Cards */}
                    <div
                        className={`transition-all duration-1000 ${
                            isInView 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-0 translate-x-12'
                        }`}
                        style={{ transitionDelay: '0.4s' }}
                    >
                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`feature-card transition-all duration-800 ${
                                        isInView 
                                            ? 'opacity-100 translate-y-0' 
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                    style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
                                >
                                    <Card className="feature-card-inner group">
                                        <CardContent className="feature-content">
                                            <div className={`feature-icon bg-gradient-to-br ${feature.gradient}`}>
                                                <feature.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h4 className="feature-title">{feature.title}</h4>
                                            <p className="feature-description">
                                                {feature.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
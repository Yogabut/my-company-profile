import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import testimoniallData from "../../Utils/Data/testimoni.js";

const Testimonial = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    // Get testimonial data
    const testimonials = testimoniallData();

    // Render stars for rating
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${
                    index < rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    // AOS animations for each position
    const getAOSAnimation = (index) => {
        const animations = ['fade-right', 'zoom-in', 'fade-left'];
        return animations[index % 3];
    };

    return (
        <div className="testimonial py-10 px-25">
            {/* Header Section */}
            <div className="text-center text-2xl text-gray-600" data-aos="fade-down">
                <p>Testimonial</p>
            </div>
            
            <div className="bg-gradient-to-b from-[#17324b] to-[#4671b0] bg-clip-text text-transparent text-center text-3xl md:text-4xl lg:text-5xl font-bold pt-1" data-aos="zoom-in">
                <h1>What our clients say about us?</h1>
            </div>
            
            <div className="text-center text-gray-400 pt-4 max-w-2xl mx-auto mb-10" data-aos="fade-up">
                <p>
                    Almost all clients are very satisfied with our performance. 
                    Here is some feedback from clients.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            data-aos={getAOSAnimation(index)}
                            data-aos-delay={index * 200}
                            className="testimonial-card group hover:scale-105 transition-all duration-300"
                        >
                            {/* Card Content */}
                            <div className="h-full p-8 rounded-2xl border border-gray-700/50 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-gray-600/50 transition-all duration-300">
                                {/* Rating Stars */}
                                <div className="flex justify-center mb-6">
                                    <div className="flex space-x-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>

                                {/* Quote */}
                                <div className="text-center mb-8">
                                    <p className="text-gray-300 text-lg leading-relaxed italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                {/* Author Info */}
                                <div className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full border-2 border-gray-600 object-cover"
                                        />
                                    </div>
                                    <h4 className="text-white font-semibold text-lg mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
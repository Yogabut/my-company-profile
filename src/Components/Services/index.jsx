import React from "react";
import { useEffect } from "react";
import "./script";
import "./index.css";
import { servicesData } from "../../Utils/Data/services.js";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        Aos.init(
            { 
                duration: 1000,
                once: true,
                mirror: false
            }
        );
        Aos.refresh();
    }, []);
    return (
        <>
        <div className="services py-8 px-4 sm:py-12 sm:px-20">
            {/* Heading */}
            <div 
                className="text-gray-400 text-lg sm:text-xl body-font text-center justify-center"
                data-aos="fade-down"
                data-aos-delay="500"
            >
                <p>
                    Services
                </p>
            </div>
            <div 
                className="text-3xl sm:text-5xl font-bold text-center justify-center py-1"
                data-aos="fade-down"
                data-aos-delay="500"
            >
                <h1 className="text-gray-100">
                    What Actually We Do ?
                </h1>
                <h1 className="bg-gradient-to-br from-[#4d94ff] to-[#17324b] bg-clip-text text-transparent">
                    We are Focus On
                </h1>
            </div>

            {/* Services Grid - Responsive */}
            <div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6"
                data-aos="fade-up"
                data-aos-delay="500"
            >
            {servicesData.map((service) => (
                <div
                key={service.id}
                className="relative flex flex-col justify-between bg-[#0f1a26] rounded-2xl shadow-lg p-4 sm:p-6 
                            overflow-hidden group hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20
                            transition duration-300 ease-in-out"
                >
                {/* Efek shiny */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                            -translate-x-full group-hover:translate-x-full 
                            transition-transform duration-700 ease-in-out"
                />

                {/* Konten */}
                <div className="flex flex-col items-start relative z-10">
                    <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#33718e] mb-3 sm:mb-4" />
                    <h2 className="text-base sm:text-xl font-semibold text-gray-100 mb-2">
                    {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 text-justify leading-relaxed">
                    {service.description}
                    </p>
                </div>

                {/* Read Details kanan bawah */}
                <button className="mt-3 sm:mt-4 text-[#6376b5] hover:text-blue-300 font-medium text-xs sm:text-sm transition self-end relative z-10">
                    Read Details →
                </button>
                </div>
            ))}
            </div>
        </div>
        </>
    );
};

export default Services;
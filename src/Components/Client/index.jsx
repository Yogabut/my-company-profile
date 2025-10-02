import React from "react";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { clientsList } from "../../Utils/Data/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Client = () => {
    const reversedClientsList = [...clientsList].reverse();
    
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
            easing: 'ease-in-out',
            offset: 50, 
            delay: 0, 
        });
        AOS.refresh();
    }, []);

    return (
        <>  
            <div className="client py-8">
                <div className="mb-13">
                    <h1 className="text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl justify-center flex font-extrabold text-center "
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1500"
                        data-aos-delay="0"
                        >
                            Our Clients
                    </h1>

                    <p 
                        className="text-gray-400 text-lg text-center mt-4 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1500"
                        data-aos-delay="200"
                    >
                        We are proud to have collaborated with a diverse range of clients, delivering exceptional solutions that drive success and innovation.
                    </p>
                </div>
                
                {/* First marquee - moving right */}
                <div 
                    className="mb-6"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                >
                    <Marquee
                        direction="left"
                        speed={50}
                        gradient={false}
                        pauseOnHover={true}
                    >
                        {[...clientsList, ...clientsList].map((client, index) => (
                            <div
                                key={`marquee1-${client.id}-${index}`}
                                className="w-[160px] h-[160px] mx-4 bg-transparent border border-gray-500 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <div className="text-center p-2">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2"></div>
                                        <span className="text-xs text-gray-400 font-medium">
                                            {client.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Second marquee - moving left with reversed order */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                >
                    <Marquee
                        direction="right"
                        speed={50}
                        gradient={false}
                        pauseOnHover={true}
                    >
                        {[...reversedClientsList, ...reversedClientsList].map((client, index) => (
                            <div
                                key={`marquee2-${client.id}-${index}`}
                                className="w-[160px] h-[160px] mx-4 bg-transparent border border-gray-500 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                            >
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <div className="text-center p-2">
                                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-2"></div>
                                        <span className="text-xs text-gray-400 font-medium">
                                            {client.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Client;
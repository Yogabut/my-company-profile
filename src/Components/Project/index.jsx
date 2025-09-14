import './index.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { projectData } from "../../Utils/Data/project.js";

const Project = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);
    
    // Ambil hanya 2 project pertama
    const limitedProjects = projectData && projectData.length > 0 ? projectData.slice(0, 2) : [];
    
    return (
        <div className="project px-6 md:px-20 py-16 md:py-20">
            {/* Header Section */}
            <div className="mb-12 px-5">
                <div className="flex justify mb-2" data-aos="fade-down">
                    <p className="text-gray-500 text-lg md:text-xl">Project</p>
                </div>
                <div className="flex justify mb-2" data-aos="fade-down" data-aos-delay="100">
                    <h1 className="bg-gradient-to-br from-[#17324b] to-[#4d94ff] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold  max-w-4xl leading-tight">
                        Recent Project we have completed
                    </h1>
                </div>
                <div className="flex justify" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-gray-400 text-base md:text-xl max-w-2xl">
                        There are many variations of our projects available but the majority have suffered alteration
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                {limitedProjects.length > 0 ? (
                    limitedProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="group cursor-pointer"
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={index * 100}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-800 aspect-[4/3]">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                        <div className="text-gray-500 text-6xl">
                                            {project.id}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Overlay on hover */}
                                <div className="inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4">
                                {/* Services Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {project.services && Array.isArray(project.services) ? (
                                        project.services.map((service, index) => (
                                            <span 
                                                key={index}
                                                className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-[#17324b]/20 to-[#4d94ff]/20 text-[#ced2df] border border-[#6376b5]/30"
                                            >
                                                {service}
                                            </span>
                                        ))
                                    ) : null}
                                </div>

                                {/* Project Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                    {project.subdescription}
                                </p>

                                {/* Sub-services */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.subservices && Array.isArray(project.subservices) ? (
                                        <>
                                            {project.subservices.slice(0, 3).map((subservice, index) => (
                                                <span 
                                                    key={index}
                                                    className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800"
                                                >
                                                    {subservice}
                                                </span>
                                            ))}
                                            {project.subservices.length > 3 && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800">
                                                    +{project.subservices.length - 3} more
                                                </span>
                                            )}
                                        </>
                                    ) : null}
                                </div>
                                {/* View Project Link */}
                                <div className="pt-2">
                                    <Link 
                                        to={`/project/${project.id}/${project.title .toLowerCase().replace(/\s+/g, '-')}`}
                                        className="inline-flex items-center text-[#6376b5] hover:text-blue-300 font-medium transition-colors duration-300"
                                    >
                                        View Project
                                        <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-400">
                        <p>No projects available</p>
                    </div>
                )}
            </div>

            {/* View All Projects Button */}
            {projectData && projectData.length > 2 && (
                <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
                    <Link 
                        to="/all-project"
                        className="bg-gradient-to-r from-[#0c243b] to-[#143463] text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center"
                    >
                        View All Projects
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Project;
import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './style.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { projectData } from "../../Utils/Data/project.js";

const OtherProject = () => {
    const [filteredProjects, setFilteredProjects] = useState(projectData);
    const [activeFilter, setActiveFilter] = useState('All Project');

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    // Get unique services for filter options
    const getUniqueServices = () => {
        const allServices = projectData.flatMap(project => project.services || []);
        return [...new Set(allServices)];
    };

    const filterOptions = ['All Project', ...getUniqueServices()];

    // Filter projects based on selected category
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        if (filter === 'All Project') {
            setFilteredProjects(projectData);
        } else {
            const filtered = projectData.filter(project => 
                project.services && project.services.includes(filter)
            );
            setFilteredProjects(filtered);
        }
    };

    return (
        <div className="other-project px-6 md:px-20 py-16 md:py-20">
            {/* Header Section */}
            <div className="mb-12 px-5">
                <div className="flex justify mb-2" data-aos="fade-down">
                    <p className="text-gray-500 text-lg md:text-xl">Portfolio</p>
                </div>
                <div className="flex justify mb-2" data-aos="fade-down" data-aos-delay="100">
                    <h1 className="bg-gradient-to-br from-[#17324b] to-[#4d94ff] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
                        Our Complete Project Portfolio
                    </h1>
                </div>
                <div className="flex justify" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-gray-400 text-base md:text-xl max-w-2xl">
                        Explore all our projects across different categories and discover the breadth of our expertise
                    </p>
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="mb-12 px-5" data-aos="fade-up" data-aos-delay="300">
                <div className="flex flex-wrap justify-center gap-4">
                    {filterOptions.map((filter, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilterChange(filter)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === filter
                                    ? 'bg-gradient-to-r from-[#17324b] to-[#4d94ff] text-white shadow-lg'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Count */}
            <div className="mb-8 px-5" data-aos="fade-up" data-aos-delay="400">
                <p className="text-gray-400 text-center">
                    Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
                    {activeFilter !== 'All Project' && ` in ${activeFilter}`}
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                {filteredProjects && filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className="group cursor-pointer"
                            data-aos="fade-up"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                
                                {/* View Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <Link 
                                        to={`/project/${project.id}/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4">
                                {/* Services Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.services && Array.isArray(project.services) ? (
                                        project.services.map((service, index) => (
                                            <span 
                                                key={index}
                                                className="inline-flex items-center px-3 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-[#17324b]/20 to-[#4d94ff]/20 text-[#6376b5] border border-[#6376b5]/30"
                                            >
                                                {service}
                                            </span>
                                        ))
                                    ) : null}
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300 line-clamp-2">
                                    {project.title}
                                </h3>

                                {/* Project Description */}
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                                    {project.subdescription}
                                </p>

                                {/* Sub-services */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.subservices && Array.isArray(project.subservices) ? (
                                        <>
                                            {project.subservices.slice(0, 2).map((subservice, index) => (
                                                <span 
                                                    key={index}
                                                    className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800"
                                                >
                                                    {subservice}
                                                </span>
                                            ))}
                                            {project.subservices.length > 2 && (
                                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-900 text-gray-400 border border-gray-800">
                                                    +{project.subservices.length - 2} more
                                                </span>
                                            )}
                                        </>
                                    ) : null}
                                </div>

                                {/* View Project Link */}
                                <div className="pt-2">
                                    <Link 
                                        to={`/project/${project.id}/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="inline-flex items-center text-[#6376b5] hover:text-blue-300 font-medium text-sm transition-colors duration-300"
                                    >
                                        View Project
                                        <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-400 py-16" data-aos="fade-up">
                        <div className="text-6xl mb-4">🔍</div>
                        <p className="text-xl mb-2">No projects found</p>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}
            </div>

            {/* Back to Top Button */}
            {filteredProjects.length > 6 && (
                <div className="flex justify-center mt-16" data-aos="fade-up">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-gradient-to-r from-[#17324b] to-[#4d94ff] text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Back to Top
                    </button>
                </div>
            )}
            <div className="border-t border-gray-700 mt-15"></div>
        </div>
    )
}

export default OtherProject;
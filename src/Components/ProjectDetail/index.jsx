import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { projectData } from "../../Utils/Data/project.js";
import './style.css';

const ProjectDetail = ({ projectId }) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Inisialisasi AOS
        Aos.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Find project berdasarkan ID
        const foundProject = projectData.find(p => p.id === projectId);
        
        if (foundProject) {
            setProject(foundProject);
        }
        
        setLoading(false);
    }, [projectId]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center text-white">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
                <Link 
                    to="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="project-detail min-h-screen text-white py-25">
            {/* Project Title & Services */}
            <div className="mb-8 mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-50">
                    <h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        data-aos ="fade-down"
                        >
                        {project.title}
                        
                    </h1>
                    <div 
                        className="flex flex-wrap gap-3 mb-6"
                        data-aos ="zoom-in"
                        >
                        {project.services.map((service, index) => (
                            <span 
                                key={index}
                                className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-blue-900 text-white"
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                    <p 
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl"
                        data-aos ="fade-up"
                        >
                        {project.subdescription}
                    </p>
            </div>
            {/* Hero Section */}
            <div className="relative h-96 md:h-[650px] overflow-hidden mb-5">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-270 h-full rounded-4xl object-cover justify-center mx-auto"
                    data-aos="zoom-out"
                />
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-15 py-16">
                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2" data-aos="fade-right">
                        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* Technologies & Services */}
                        <div className="bg-gray-800 rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-6 text-white">Services & Technologies</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.subservices.map((subservice, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300">{subservice}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8" data-aos="fade-left">
                        {/* Project Info */}
                        <div className="bg-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4 text-white">Project Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-gray-400 text-sm">Project ID</label>
                                    <p className="text-white font-medium">#{project.id.toString().padStart(3, '0')}</p>
                                </div>
                                <div>
                                    <label className="text-gray-400 text-sm">Category</label>
                                    <p className="text-white font-medium">{project.services.join(', ')}</p>
                                </div>
                                <div>
                                    <label className="text-gray-400 text-sm">Status</label>
                                    <p className="text-green-400 font-medium">Completed</p>
                                </div>
                            </div>
                        </div>

                        {/* Visit Project */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4 text-white">Visit Project</h3>
                            <p className="text-blue-100 mb-6 text-sm">
                                Check out the live project and see it in action.
                            </p>
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                                Visit Live Site
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-4 text-white">Like This Project?</h3>
                            <p className="text-gray-400 mb-6 text-sm">
                                Get in touch with us to discuss your next project.
                            </p>
                            <Link 
                                to="/"
                                className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Other Projects */}
                <div className="border-t border-gray-700 pt-10" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projectData
                            .filter(p => p.id !== project.id)
                            .slice(0, 3)
                            .map((otherProject) => (
                                <Link 
                                    key={otherProject.id}
                                    to={`/project/${otherProject.id}`}
                                    className="group"
                                >
                                    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors">
                                        <div className="aspect-[4/3] overflow-hidden">
                                            <img 
                                                src={otherProject.image} 
                                                alt={otherProject.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {otherProject.services.slice(0, 2).map((service, index) => (
                                                    <span 
                                                        key={index}
                                                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                                                    >
                                                        {service}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                {otherProject.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {otherProject.subdescription}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail;
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Clock, DollarSign, CheckCircle, ArrowLeft, Star } from 'lucide-react';
import { servicesData } from '../../Utils/Data/services.js';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const ServicesDetail = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('all');
    const [timelineFilter, setTimelineFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);


    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }, []);

    // Get serviceId from URL parameters
    const { id } = useParams();
    const serviceId = parseInt(id);

    // Find the selected service using URL parameter
    const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

    // Filter and search functionality
    const filteredSubservices = useMemo(() => {
        let filtered = service.subservices;

        // Search filter
        if (searchTerm) {
        filtered = filtered.filter(sub =>
            sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        }

        // Price filter
        if (priceFilter !== 'all') {
        filtered = filtered.filter(sub => {
            const priceRange = sub.price.toLowerCase();
            switch (priceFilter) {
            case 'low':
                return priceRange.includes('$200') || priceRange.includes('$300') || priceRange.includes('$500');
            case 'medium':
                return priceRange.includes('$1,000') || priceRange.includes('$1,500') || priceRange.includes('$2,000');
            case 'high':
                return priceRange.includes('$3,000') || priceRange.includes('$5,000') || priceRange.includes('$8,000');
            case 'premium':
                return priceRange.includes('$10,000') || priceRange.includes('$20,000') || priceRange.includes('$25,000');
            default:
                return true;
            }
        });
        }

        // Timeline filter
        if (timelineFilter !== 'all') {
        filtered = filtered.filter(sub => {
            const timeline = sub.timeline.toLowerCase();
            switch (timelineFilter) {
            case 'quick':
                return timeline.includes('1-2 weeks') || timeline.includes('1-3 weeks');
            case 'standard':
                return timeline.includes('2-4 weeks') || timeline.includes('3-6 weeks');
            case 'extended':
                return timeline.includes('6-12 weeks') || timeline.includes('8-16 weeks');
            case 'ongoing':
                return timeline.includes('ongoing') || timeline.includes('month');
            default:
                return true;
            }
        });
        }

        return filtered;
    }, [service.subservices, searchTerm, priceFilter, timelineFilter]);

    const ServiceIcon = service.icon;

    return (
        <div className="service-detail min-h-screen text-white">
            <div className="relative overflow-hidden py-5">
                <div className="relative container mx-auto px-4 py-16">
                {/* Back Button */}
                <div data-aos="fade-right" data-aos-delay="100">
                    <Link 
                        to="/#services"
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to home
                    </Link>
                </div>

                {/* Service Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                    <div 
                        className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                        data-aos="zoom-in" 
                        data-aos-delay="200"
                    >
                        <ServiceIcon className="w-12 h-12 text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <h1 
                            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                            data-aos="fade-up" 
                            data-aos-delay="300"
                        >
                            {service.title}
                        </h1>
                        <p 
                            className="text-xl text-gray-300 leading-relaxed max-w-3xl"
                            data-aos="fade-up" 
                            data-aos-delay="400"
                        >
                            {service.description}
                        </p>
                        <div 
                            className="flex items-center gap-4 mt-6"
                            data-aos="fade-up" 
                            data-aos-delay="500"
                        >
                            <div className="flex items-center gap-2 text-yellow-400">
                                <Star className="w-5 h-5 fill-current" />
                                <span className="font-semibold">4.9</span>
                                <span className="text-gray-400">(127 reviews)</span>
                            </div>
                            <div className="text-gray-400">
                                {service.subservices.length} Services Available
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700"></div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="container mx-auto px-4 py-2">
                <div 
                    className="bg-[#0f1a26] rounded-2xl p-6 mb-8 border border-gray-800"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search services, features, or keywords..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-[#1a2332] border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    />
                </div>

                {/* Filter Toggle */}
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white mb-4 transition-colors"
                >
                    <Filter className="w-5 h-5" />
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>

                {/* Filters */}
                {showFilters && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Price Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                            <select
                                value={priceFilter}
                                onChange={(e) => setPriceFilter(e.target.value)}
                                className="w-full p-3 bg-[#1a2332] border border-gray-700 rounded-lg text-white focus:border-blue-500 outline-none"
                            >
                                <option value="all">All Prices</option>
                                <option value="low">Budget ($200 - $800)</option>
                                <option value="medium">Standard ($1,000 - $3,000)</option>
                                <option value="high">Premium ($3,000 - $10,000)</option>
                                <option value="premium">Enterprise ($10,000+)</option>
                            </select>
                        </div>

                        {/* Timeline Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                            <select
                                value={timelineFilter}
                                onChange={(e) => setTimelineFilter(e.target.value)}
                                className="w-full p-3 bg-[#1a2332] border border-gray-700 rounded-lg text-white focus:border-blue-500 outline-none"
                            >
                                <option value="all">All Timelines</option>
                                <option value="quick">Quick (1-3 weeks)</option>
                                <option value="standard">Standard (2-6 weeks)</option>
                                <option value="extended">Extended (6-16 weeks)</option>
                                <option value="ongoing">Ongoing/Monthly</option>
                            </select>
                        </div>

                        {/* Results Count */}
                        <div className="flex items-end" >
                            <div className="text-gray-400">
                                <span className="text-2xl font-bold text-blue-400">{filteredSubservices.length}</span>
                                <span className="ml-2">services found</span>
                            </div>
                        </div>
                    </div>
                )}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSubservices.map((subservice, index) => (
                    <div
                        key={subservice.id}
                        className="group bg-[#0f1a26] rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                        data-aos="fade-up"
                        data-aos-delay={700 + (index * 100)}
                    >
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {subservice.name}
                            </h3>
                            <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                <Star className="w-4 h-4 fill-current" />
                                <span>4.8</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {subservice.description}
                        </p>

                        {/* Price and Timeline */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2 text-green-400">
                                <DollarSign className="w-4 h-4" />
                                <span className="font-semibold">{subservice.price}</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{subservice.timeline}</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-gray-300 mb-3">What's Included:</h4>
                            <ul className="space-y-2">
                                {subservice.features.slice(0, 3).map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                                {subservice.features.length > 3 && (
                                    <li className="text-sm text-blue-400">
                                        +{subservice.features.length - 3} more features
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                            Get Started
                        </button>
                    </div>
                ))}
                </div>

                {/* No Results */}
                {filteredSubservices.length === 0 && (
                    <div 
                        className="text-center py-16"
                        data-aos="fade-up"
                        data-aos-delay="800"
                    >
                        <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setPriceFilter('all');
                                setTimelineFilter('all');
                            }}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
                <div className="border-t border-gray-700 mt-15"></div>

            </div>
        </div>
    );
};

export default ServicesDetail;
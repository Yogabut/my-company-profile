import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const MainFooter = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* Company Info */}
                            <div className="lg:col-span-1">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        Your Company
                                    </h3>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        We create digital solutions that drive business growth. From web development to mobile apps, we bring your ideas to life.
                                    </p>
                                </div>
                                
                                {/* Social Media */}
                                <div className="flex space-x-4">
                                    <a 
                                        href="#" 
                                        className="w-10 h-10 bg-gray-800 hover:bg-[#6376b5] rounded-lg flex items-center justify-center transition-colors duration-300"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5 text-gray-300" />
                                    </a>
                                    <a 
                                        href="#" 
                                        className="w-10 h-10 bg-gray-800 hover:bg-[#6376b5] rounded-lg flex items-center justify-center transition-colors duration-300"
                                        aria-label="Twitter"
                                    >
                                        <Twitter className="w-5 h-5 text-gray-300" />
                                    </a>
                                    <a 
                                        href="#" 
                                        className="w-10 h-10 bg-gray-800 hover:bg-[#6376b5] rounded-lg flex items-center justify-center transition-colors duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5 text-gray-300" />
                                    </a>
                                    <a 
                                        href="#" 
                                        className="w-10 h-10 bg-gray-800 hover:bg-[#6376b5] rounded-lg flex items-center justify-center transition-colors duration-300"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5 text-gray-300" />
                                    </a>
                                </div>
                            </div>
        
                            {/* Services */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Web Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Mobile App Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            UI/UX Design
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Digital Marketing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Photography & Video
                                        </a>
                                    </li>
                                </ul>
                            </div>
        
                            {/* Company */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Our Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Projects
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
        
                            {/* Contact Info */}
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 mt-1 text-[#6376b5]" />
                                        <div>
                                            <p className="text-gray-400">
                                                123 Business Street<br />
                                                Jakarta, Indonesia 12345
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-[#6376b5]" />
                                        <p className="text-gray-400">+62 123 456 7890</p>
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-[#6376b5]" />
                                        <p className="text-gray-400">hello@yourcompany.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
export default MainFooter;
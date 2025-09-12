const Bottom = () => {
    return (
        <div className="border-t border-gray-800 bg-[#050119]">
                <div className="max-w-7xl mx-auto px-6 md:px-20 py-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 Your Company. All rights reserved.
                        </div>
                        
                        <div className="flex flex-wrap gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Bottom;
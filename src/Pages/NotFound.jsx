import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, ArrowLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div
        className="min-h-screen flex flex-col items-center justify-center text-center text-white relative overflow-hidden px-6"
        style={{
            background: "linear-gradient(to bottom, #050119, #050f2b)",
            fontFamily: "'Inter', sans-serif",
        }}
        >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-3xl top-[-100px] left-[-150px]"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-3xl bottom-[-120px] right-[-150px]"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>

        {/* Floating Icon */}
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            }}
            className="z-10 mb-6"
        >
            <Cpu size={80} className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
        </motion.div>

        {/* Glowing 404 */}
        <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[120px] font-extrabold leading-none tracking-tight mb-2 
                    bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent
                    drop-shadow-[0_0_25px_rgba(99,102,241,0.8)]"
        >
            404
        </motion.h1>
        <motion.h4
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[80px] font-extrabold leading-none tracking-tight mb-2 
                    bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent
                    drop-shadow-[0_0_25px_rgba(99,102,241,0.8)]"
        >
            Not Found
        </motion.h4>

        {/* Subtitle */}
        <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-md mb-8"
        >
                Oops! The page you're looking for doesn't exist.  
        </motion.p>

        {/* Neon Button */}
        <Link
            to="/"
            className="relative z-50 inline-flex items-center justify-center px-10 py-3 
            text-lg font-medium rounded-xl
            bg-gradient-to-r from-blue-900 to-blue text-white
            shadow-[0_0_20px_rgba(99,102,241,0.5)]
            hover:shadow-[0_0_35px_rgba(99,102,241,0.9)]
            hover:scale-105 transition-all duration-300"
            >
            <ArrowLeft className="mr-2" size={18} /> Back to Home
        </Link>


        {/* Animated Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bg-white/10 rounded-full"
                style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                }}
                animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
                }}
            />
            ))}
        </div>

        {/* Footer */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="absolute bottom-6 text-sm text-gray-500"
        >
            © {new Date().getFullYear()} Asta Digital Solution — All Rights Reserved
        </motion.div>
        </div>
    );
};

export default NotFound;

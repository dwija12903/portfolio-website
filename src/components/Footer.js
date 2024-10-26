import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaInstagram } from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label={label}
    >
        <Icon className="w-6 h-6" />
    </motion.a>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-row md:flex-col justify-center items-center">
                        <motion.div className="mb-3 text-center text-gray-400 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}> 
                            <p>&copy; {currentYear} Dwija Panchal. All rights reserved.</p>
                        </motion.div>
                        <motion.div className="flex space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                            <SocialLink href="https://github.com/dwija12903" icon={FaGithub} label="GitHub" />
                            <SocialLink href="https://linkedin.com/in/dwijapanchal" icon={FaLinkedin} label="LinkedIn" />
                            // <SocialLink href="https://leetcode.com/dwijapanchal" icon={FaCode} label="Leetcode" />
                            <SocialLink href="mailto:dwija1209@gmail.com" icon={FaEnvelope} label="Email" />
                            <SocialLink href="https://instagram.com/dwijapanchal" icon={FaInstagram} label="Instagram" />
                        </motion.div>
                </div>          
            </div>
        </footer>
    );
};

export default Footer;

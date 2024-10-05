import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contactme' },
    ];

    return (
        <motion.nav
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex items-center justify-between p-4">
                <motion.h1
                    className="text-4xl font-extrabold relative flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                        <span className="relative z-10 font-logo text-5xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                            <i>dwija.</i>
                        </span>
                    </Link>
                </motion.h1>
                <ul className="flex space-x-6">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                                activeClass="text-purple-600 font-semibold"
                                spy={true}
                            >
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default NavBar;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const ref = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const moveX = clientX - window.innerWidth / 2;
            const moveY = clientY - window.innerHeight / 2;
            const offset = 15;
            ref.current.style.transform = `translate(${moveX / offset}px, ${moveY / offset}px)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div ref={ref} className="text-center z-10 transition-transform duration-300 ease-out">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-wide mb-4">
                        Hello, I'm DWIJA PANCHAL!
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer',
                            2000,
                            'Tech Enthusiast',
                            2000,
                            'Learning new things',
                            2000
                        ]}
                        wrapper="h2"
                        cursor={true}
                        repeat={Infinity}
                        className="text-3xl font-semibold text-gray-700 mb-6"
                    />
                </motion.div>

                <motion.p
                    className="mt-4 text-xl text-gray-600 font-light leading-relaxed max-w-lg mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Passionate full-stack developer with a knack for transforming ideas into innovative solutions, constantly learning and adapting to drive success in every project.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        Explore My Work
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
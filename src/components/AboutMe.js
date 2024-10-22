import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiPython, SiCplusplus, SiJavascript, SiBootstrap, SiHtml5, SiCss3, SiFlask, SiMysql, SiDocker, SiGithub, SiAmazonwebservices, SiDjango } from 'react-icons/si';

const AboutMe = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const techStack = [
        { icon: SiReact, name: 'React' },
        { icon: SiNodedotjs, name: 'Node.js' },
        { icon: SiExpress, name: 'Express' },
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiTypescript, name: 'TypeScript' },
        { icon: SiPython, name: 'Python' },
        { icon: SiCplusplus, name: 'C++' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: SiBootstrap, name: 'Bootstrap' },
        { icon: SiHtml5, name: 'HTML' },
        { icon: SiCss3, name: 'CSS' },
        { icon: SiAmazonwebservices, name: 'AWS' },
        { icon: SiFlask, name: 'Flask' },
        { icon: SiDjango, name: 'Django' },
        { icon: SiMysql, name: 'MySQL' },
        { icon: SiDocker, name: 'Docker' },
        { icon: SiGithub, name: 'GitHub' }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
            <motion.div
                className="container mx-auto px-4 max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.h2
                    className="text-5xl font-bold mb-12 text-center text-gray-800"
                    variants={itemVariants}
                >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
                </motion.h2>
                <motion.div
                    className="bg-white rounded-lg shadow-xl p-8 mb-12"
                    variants={itemVariants}
                >
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                        Hello! I'm <span className="font-semibold text-purple-600"><a href="https://www.linkedin.com/in/dwijapanchal">Dwija Panchal</a></span>, a passionate full-stack developer with a strong interest in both web development and data-driven technologies. My skill set covers front-end and back-end development, allowing me to create dynamic and user-centric applications. I also have experience with Python and machine learning, which I'm eager to integrate into innovative solutions. As a quick learner, I enjoy exploring new tech trends, contributing to open-source projects, and continuously enhancing my skills to stay ahead in the tech world.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-12">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <tech.icon className="text-4xl text-gray-700 hover:text-purple-600 transition-colors duration-300" />
                                <span className="mt-2 text-sm text-gray-600">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="text-center">
                    <a
                        href="https://drive.google.com/file/d/1lhbSUxDs5pjnTFS1fm6Q86aYv0NqwXFf/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >
                        View My Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;

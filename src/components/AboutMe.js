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
                        Hello! I'm <span className="font-semibold text-purple-600"><a href="https://www.linkedin.com/in/dwijapanchal">Dwija Panchal</a></span>,  a final-year Computer Science and Engineering student at PDEU with a passion for building impactful solutions. I have developed a strong foundation in full-stack development and machine learning. My project portfolio ranges from Women'sEndoInsight, a PCOS prediction platform to real-time chat applications and automated invoice systems, showcasing my expertise in React.js, Node.js, Python, and various machine learning technologies. Beyond coding, I served as the Public Relations Head for my university's Sports Committee, where I honed my leadership and communication skills while managing events. I thrive on challenges that combine technical innovation with real-world impact, and I'm always excited to learn new technologies and contribute to meaningful projects that make a difference in people's lives.
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
                        href="https://drive.google.com/file/d/1hMp98qx7vjEo154mz7nNuKZKpluGsWgv/view?usp=sharing"
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

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const ExperienceItem = ({ title, company, period, description, techStack }) => (
    <motion.div
        className="relative pl-8 pb-8 border-l-2 border-purple-300 last:border-l-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 mt-1.5"></div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-lg font-medium text-purple-600 mb-1">{company}</p>
            <p className="text-md text-gray-600 mb-4">{period}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            title: "Summer Intern",
            company: "Indian Space Research Organisation (ISRO)",
            period: "May 2024 - Aug 2024",
            description: "I optimized Python scripts for drone communication, reducing transmission errors by 15%, and created a Tkinter-based real-time monitoring GUI to enhance data analysis.",
            techStack: ["Python", "Tkinter", "Mavlink Protocol", "Pymavlink","Software Development","Manual Testing"],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-16 text-center text-gray-800 flex items-center justify-center">
                        <FaBriefcase className="mr-4 text-purple-600" />
                        <span>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Experience</span></span>
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <ExperienceItem key={index} {...exp} />
                        ))}
                    </div>
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        >
                            <FaCode className="mr-2" />
                            View My Projects
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, projectUrl, githubUrl }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300"
            whileHover={{ y: -5 }}
            layout
        >
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
                <AnimatePresence>
                    <motion.p
                        className="text-gray-600 mb-4"
                        initial={{ opacity: 1, height: "auto" }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {isExpanded ? description : `${description.slice(0, 100)}...`}
                    </motion.p>
                </AnimatePresence>
                <motion.button
                    className="text-purple-600 hover:text-purple-800 transition-colors duration-300 mb-4"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Read less" : "Read more"}
                </motion.button>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {projectUrl && (
                        <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                        >
                            <FaExternalLinkAlt className="mr-2" />
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300"
                        >
                            <FaGithub className="mr-2" />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Women's EndoInsight: PCOS Predictor & Care App",
            description: "A comprehensive PCOS predictor and care app designed to empower women with personalized health insights and support through an engaging user experience.",
            technologies: ["MERN Stack", "Scikit-learn", "Bcrypt", "Nodemailer", "Axios"],
            githubUrl: "https://github.com/dwija12903/pcos-predictor-and-care-app"
        },
        {
            title: "LinkUp: A Real-Time Chat Hub",
            description: "A real-time chat application allowing users to log in, join chats, and communicate with other users in real-time.",
            technologies: ["Vue.js", "Express", "Socket.Io", "React", "cors"],
            projectUrl: "https://chathub-qz20.onrender.com/",
            githubUrl: "https://github.com/dwija12903/chat-hub"
        },
        {
            title: "BillGen: Invoice Generator App",
            description: "Advanced Invoice Generator with customizable product details, consignee/buyer info, and seamless print functionality.",
            technologies: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
            projectUrl: "https://dwija12903.github.io/invoice-generator-app/",
            githubUrl: "https://github.com/dwija12903/invoice-generator-app"
        },
        {
            title: "Contact Manager App",
            description: "The Contact Manager App allows users to manage their contacts by providing functionalities to create, read, update, and delete (CRUD) contact information. ",
            technologies: ["React", "Flask", "SQLAlchemy", "CORS"],
            projectUrl: 'https://contact-manager-dwija12.vercel.app/',
            githubUrl: "https://github.com/dwija12903/Contact-Manager-Web-App"
        },
        {
            title: "Quiz App",
            description: "An interactive JavaScript quiz to test your knowledge with real-time feedback. ",
            technologies: ["Javascript", "jQuery", "Bootstrap", "HTML", "CSS"],
            projectUrl: 'https://dwija12903.github.io/quiz-app/',
            githubUrl: "https://github.com/dwija12903/quiz-app"
        },
        {
            title: "To-Do List App",
            description: "A To-Do List App to help users manage their tasks effectively.With a user-friendly interface, users can create, update, delete, and filter tasks while keeping track of their priorities. ",
            technologies: ["Javascript", "jQuery", "Bootstrap", "HTML", "CSS"],
            projectUrl: 'https://github.com/dwija12903/to-do-list-app',
            githubUrl: "https://to-do-app-dwija12.vercel.app/"
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-indigo-100 via-white to-pink-100">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
                        <FaCode className="mr-4 text-purple-600" />
                        <span>My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Projects</span></span>
                    </h2>
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a
                            href="https://github.com/dwija12903"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        >
                            <FaGithub className="mr-2" />
                            View More on GitHub
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

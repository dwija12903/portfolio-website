import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !validateEmail(formData.email) || !formData.message) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            }, () => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const inputVariants = {
        focused: { scale: 1.02, boxShadow: "0 0 0 4px rgba(124, 58, 237, 0.5)" },
        unfocused: { scale: 1, boxShadow: "none" }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Touch</span>
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {['name', 'email', 'message'].map((field, index) => (
                            <motion.div
                                key={field}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <label htmlFor={field} className="block text-gray-700 font-semibold mb-2 capitalize">{field}</label>
                                <motion.div
                                    animate={focusedField === field ? "focused" : "unfocused"}
                                    variants={inputVariants}
                                    className="relative"
                                >
                                    {field === 'message' ? (
                                        <textarea
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField(field)}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows="5"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all duration-300"
                                        />
                                    ) : (
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField(field)}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none transition-all duration-300"
                                        />
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isSubmitting ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <div className="loader"></div> {/* Custom spinner */}
                                        </motion.div>
                                    ) : (
                                        <motion.span
                                            key="text"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            Send Message
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </motion.div>
                    </form>
                    <AnimatePresence>
                        {submitStatus && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`mt-4 text-center ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'
                                    }`}
                                aria-live="polite"
                            >
                                {submitStatus === 'success'
                                    ? 'Your message has been sent successfully!'
                                    : 'There was an error sending your message. Please try again.'}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, contactData } from '../data/portfolioData';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Contact Section
 * Contact form (via Formspree) and contact information cards.
 */
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(
                `https://formspree.io/f/${contactData.formspreeId}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus(''), 5000);
        }
    };

    return (
        <section id="contact" className="relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-border to-transparent" />

            <div className="section-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-heading">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="section-subheading">{contactData.subheading}</p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
                        {/* Contact info cards */}
                        <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
                            {/* Email */}
                            <div className="glass-card p-5 flex items-center gap-4 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-950/40 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                                    <HiMail className="text-primary-600 dark:text-primary-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-dark-muted">Email</p>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="glass-card p-5 flex items-center gap-4 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-950/40 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                                    <HiPhone className="text-primary-600 dark:text-primary-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-dark-muted">Phone</p>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {personalInfo.phone}
                                    </span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="glass-card p-5 flex items-center gap-4 group hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-950/40 flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                                    <HiLocationMarker className="text-primary-600 dark:text-primary-400" size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-dark-muted">Location</p>
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {personalInfo.location}
                                    </span>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="flex gap-3 pt-4">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:-translate-y-1"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:-translate-y-1"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact form */}
                        <motion.div variants={itemVariants} className="md:col-span-3">
                            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-xs font-medium text-gray-600 dark:text-dark-muted mb-1.5">
                                            Name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-xs font-medium text-gray-600 dark:text-dark-muted mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-subject" className="block text-xs font-medium text-gray-600 dark:text-dark-muted mb-1.5">
                                        Subject
                                    </label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-medium text-gray-600 dark:text-dark-muted mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-dark-border text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    {status === 'sending' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <HiPaperAirplane size={18} className="rotate-90" />
                                            Send Message
                                        </span>
                                    )}
                                </motion.button>

                                {/* Status messages */}
                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-sm text-green-600 dark:text-green-400 text-center"
                                    >
                                        ✅ Message sent successfully! I'll get back to you soon.
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-sm text-red-600 dark:text-red-400 text-center"
                                    >
                                        ❌ Something went wrong. Please try again or email me directly.
                                    </motion.p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

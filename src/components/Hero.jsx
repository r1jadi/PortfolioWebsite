import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

/**
 * Hero Section
 * Full-screen intro with animated typing text, social links, and CTA buttons.
 */
export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing animation effect
    useEffect(() => {
        const currentTitle = personalInfo.titles[titleIndex];
        const speed = isDeleting ? 40 : 80;

        if (!isDeleting && displayText === currentTitle) {
            // Pause before deleting
            const timeout = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayText(
                isDeleting
                    ? currentTitle.substring(0, displayText.length - 1)
                    : currentTitle.substring(0, displayText.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated background gradient blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/10 dark:bg-cyan-600/5 rounded-full blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="section-container text-center">
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
                >
                    Hi, I'm{' '}
                    <span className="gradient-text">{personalInfo.name}</span>
                </motion.h1>

                {/* Typing animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-dark-muted mb-8 h-10"
                >
                    <span className="font-mono">
                        {displayText}
                        <span className="animate-pulse text-primary-500">|</span>
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg text-gray-600 dark:text-dark-muted max-w-xl mx-auto mb-10"
                >
                    Building modern, scalable web applications with clean code and thoughtful design.
                    Based in {personalInfo.location}.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a
                        href={personalInfo.cvFile}
                        download
                        className="btn-primary"
                    >
                        <HiDownload size={18} />
                        Download CV
                    </a>
                    <button onClick={scrollToAbout} className="btn-outline">
                        Explore My Work
                        <HiArrowDown size={18} />
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex items-center justify-center gap-4"
                >
                    {personalInfo.github && (
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/40 transition-all duration-300 hover:-translate-y-1"
                            aria-label="GitHub"
                        >
                            <FaGithub size={22} />
                        </a>
                    )}
                    {personalInfo.linkedin && (
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/40 transition-all duration-300 hover:-translate-y-1"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    )}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-dark-border flex items-start justify-center p-1.5"
                >
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}

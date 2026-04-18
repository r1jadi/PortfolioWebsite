import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

/**
 * Footer Component
 * Copyright, navigation links, and social icons.
 */
const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
];

export default function Footer() {
    const handleNavClick = (href) => {
        const el = document.getElementById(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gray-50 dark:bg-dark-card/50 border-t border-gray-200 dark:border-dark-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo & tagline */}
                    <div>
                        <button
                            onClick={() => handleNavClick('home')}
                            className="flex items-center gap-2 group mb-3"
                        >
                            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/25">
                                {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {personalInfo.name}
                            </span>
                        </button>
                        <p className="text-sm text-gray-500 dark:text-dark-muted">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-sm text-gray-500 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center md:justify-end gap-3">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-bg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-0.5"
                            aria-label="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-bg text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-0.5"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-dark-border text-center">
                    <p className="text-sm text-gray-500 dark:text-dark-muted flex items-center justify-center gap-1">
                        © {currentYear} {personalInfo.name}. Built by
                        Bleta🐝
                        using React & TailwindCSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkModeContext';
import { personalInfo } from '../data/portfolioData';

/**
 * Navigation links configuration
 */
const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
];

/**
 * Navbar Component
 * Fixed navigation with scroll spy, mobile menu, and dark mode toggle.
 */
export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Detect scroll position for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Scroll spy: find current active section
            const sections = navLinks.map((l) => l.href);
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const handleNavClick = useCallback((href) => {
        setIsOpen(false);
        const el = document.getElementById(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-lg shadow-lg shadow-black/5 dark:shadow-black/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.button
                        onClick={() => handleNavClick('home')}
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/25">
                            {personalInfo.firstName[0]}{personalInfo.lastName[0]}
                        </span>
                        <span className="hidden sm:block font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {personalInfo.name}
                        </span>
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${activeSection === link.href
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                {activeSection === link.href && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-primary-50 dark:bg-primary-950/40 rounded-lg"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </button>
                        ))}

                        {/* Dark mode toggle */}
                        <motion.button
                            onClick={toggleDarkMode}
                            className="ml-3 p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center gap-2">
                        <motion.button
                            onClick={toggleDarkMode}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400"
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400"
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 dark:bg-dark-bg/95 backdrop-blur-lg border-t border-gray-200 dark:border-dark-border"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeSection === link.href
                                            ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-card'
                                        }`}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

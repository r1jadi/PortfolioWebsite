import { motion } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import { aboutData, educationData, personalInfo } from '../data/portfolioData';

/**
 * Reusable animation variants for staggered children
 */
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
 * About Section
 * Bio, key highlights, and education details.
 */
export default function About() {
    return (
        <section id="about" className="relative">
            {/* Subtle section divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-border to-transparent" />

            <div className="section-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    {/* Section heading */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="section-heading">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="section-subheading">
                            Get to know me and my background
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Bio & Highlights */}
                        <motion.div variants={itemVariants}>
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                    Who I Am
                                </h3>
                                <p className="text-gray-600 dark:text-dark-muted leading-relaxed mb-6 whitespace-pre-line">
                                    {aboutData.bio}
                                </p>
                                <div className="space-y-3">
                                    {aboutData.highlights.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div variants={itemVariants}>
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                                    <HiAcademicCap className="text-primary-500" size={24} />
                                    Education
                                </h3>
                                <div className="space-y-6">
                                    {educationData.map((edu, index) => (
                                        <div key={index} className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800">
                                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-card" />
                                            <h4 className="font-semibold text-gray-900 dark:text-white">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                                                {edu.institution}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500 dark:text-dark-muted">
                                                <span className="flex items-center gap-1">
                                                    <HiCalendar size={14} />
                                                    {edu.period}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <HiLocationMarker size={14} />
                                                    {edu.location}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm text-gray-600 dark:text-dark-muted">
                                                {edu.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

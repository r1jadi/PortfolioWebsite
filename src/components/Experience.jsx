import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { experienceData } from '../data/portfolioData';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

/**
 * Experience Section
 * Vertical timeline with animated entries showing work history.
 */
export default function Experience() {
    return (
        <section id="experience" className="relative">
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
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="section-subheading">
                            My professional journey and contributions
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-3xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2" />

                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative mb-12 last:mb-0 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                                    } pl-8 md:pl-0`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-bg shadow-lg shadow-primary-500/25 z-10 ${index % 2 === 0
                                            ? 'left-[-7px] md:left-1/2 md:-translate-x-1/2'
                                            : 'left-[-7px] md:left-1/2 md:-translate-x-1/2'
                                        }`}
                                />

                                {/* Card */}
                                <div
                                    className={`glass-card p-6 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                        }`}
                                >
                                    {/* Type badge */}
                                    {exp.type && (
                                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 rounded-full mb-3">
                                            {exp.type}
                                        </span>
                                    )}

                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {exp.role}
                                    </h3>

                                    <div className="flex items-center gap-2 mt-1 text-primary-600 dark:text-primary-400 font-medium text-sm">
                                        <HiBriefcase size={16} />
                                        {exp.company}
                                    </div>

                                    <div className={`flex flex-wrap gap-3 mt-2 text-xs text-gray-500 dark:text-dark-muted ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                        }`}>
                                        <span className="flex items-center gap-1">
                                            <HiCalendar size={14} />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <HiLocationMarker size={14} />
                                            {exp.location}
                                        </span>
                                    </div>

                                    <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        {exp.description.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 dark:text-dark-muted flex items-start gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { projectsData } from '../data/portfolioData';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Projects Section
 * Grid of project cards with hover effects, tech tags, and links.
 */
export default function Projects() {
    return (
        <section id="projects" className="relative bg-gray-50/50 dark:bg-dark-card/30">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-border to-transparent" />

            <div className="section-container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div variants={cardVariants} className="text-center mb-16">
                        <h2 className="section-heading">
                            My <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="section-subheading">
                            A selection of projects I've built and contributed to
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group glass-card overflow-hidden hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Project header with gradient */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-cyan-500/10 dark:from-primary-600/20 dark:via-purple-600/20 dark:to-cyan-600/20 flex items-center justify-center overflow-hidden">
                                    {/* Decorative elements */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-2 border-primary-400" />
                                        <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full border-2 border-purple-400" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border-2 border-cyan-400" />
                                    </div>
                                    <HiCode
                                        className="text-primary-400 dark:text-primary-500 group-hover:scale-110 transition-transform duration-500"
                                        size={64}
                                    />
                                    {project.featured && (
                                        <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-primary-500 text-white rounded-full shadow-lg">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Project content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-dark-muted text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-dark-border">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                            >
                                                <FaGithub size={16} />
                                                Source Code
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-muted hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                            >
                                                <FaExternalLinkAlt size={14} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

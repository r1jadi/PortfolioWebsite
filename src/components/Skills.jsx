import { motion } from 'framer-motion';
import {
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql,
    SiTailwindcss, SiPostman, SiLinux,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiLightningBolt, HiUsers, HiChat, HiClock, HiRefresh, HiPuzzle } from 'react-icons/hi';
import { skillsData } from '../data/portfolioData';

/**
 * Map skill names to their icons for visual display
 */
const skillIcons = {
    'React': FaReact,
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'HTML5': FaHtml5,
    'CSS3 / TailwindCSS': FaCss3Alt,
    'Next.js': SiNextdotjs,
    'Node.js': FaNodeJs,
    'Express.js': SiExpress,
    'Python': FaPython,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'Git / GitHub': FaGitAlt,
    'VS Code': VscVscode,
    'Docker': FaDocker,
    'Figma': FaFigma,
    'Postman': SiPostman,
    'Linux / CLI': SiLinux,
    'RESTful APIs': HiLightningBolt,
};

const softSkillIcons = {
    'Team Collaboration': HiUsers,
    'Problem Solving': HiPuzzle,
    'Communication': HiChat,
    'Time Management': HiClock,
    'Adaptability': HiRefresh,
    'Critical Thinking': HiLightningBolt,
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/**
 * Skills Section
 * Categorized skill display with progress bars and icons.
 */
export default function Skills() {
    const technicalCategories = ['frontend', 'backend', 'tools'];

    return (
        <section id="skills" className="relative bg-gray-50/50 dark:bg-dark-card/30">
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
                            Technical <span className="gradient-text">Skills</span>
                        </h2>
                        <p className="section-subheading">
                            Technologies and tools I work with
                        </p>
                    </motion.div>

                    {/* Technical skills grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {technicalCategories.map((catKey) => {
                            const category = skillsData[catKey];
                            return (
                                <motion.div
                                    key={catKey}
                                    variants={itemVariants}
                                    className="glass-card p-6"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-950/40 flex items-center justify-center">
                                            <span className="w-3 h-3 rounded-full bg-primary-500" />
                                        </span>
                                        {category.title}
                                    </h3>

                                    <div className="space-y-4">
                                        {category.skills.map((skill, index) => {
                                            const Icon = skillIcons[skill.name];
                                            return (
                                                <div key={index}>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="flex items-center gap-2">
                                                            {Icon && (
                                                                <Icon className="text-primary-500" size={16} />
                                                            )}
                                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                                {skill.name}
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-gray-500 dark:text-dark-muted">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="w-full h-2 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: index * 0.1 }}
                                                            className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Soft skills */}
                    <motion.div variants={itemVariants}>
                        <div className="glass-card p-8">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
                                {skillsData.soft.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {skillsData.soft.skills.map((skill, index) => {
                                    const Icon = softSkillIcons[skill] || HiLightningBolt;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5, scale: 1.05 }}
                                            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-dark-bg hover:bg-primary-50 dark:hover:bg-primary-950/30 transition-colors cursor-default group"
                                        >
                                            <Icon
                                                className="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                                                size={24}
                                            />
                                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

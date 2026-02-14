/**
 * ============================================
 * Portfolio Data — Centralized CV Information
 * ============================================
 */

export const personalInfo = {
    name: 'Rijad Halili',
    firstName: 'Rijad',
    lastName: 'Halili',
    title: 'Full-Stack Developer & Intern at Tax Administration of Kosovo',
    titles: ['Full-Stack Developer', 'CSE Student', 'Intern at Tax Administration of Kosovo', 'Co-Founder of Bleta'],
    email: 'rijadhalilirh@gmail.com',
    phone: '(+383) 48 881 774',
    location: 'Prishtina, Kosovo',
    // User profile links
    github: 'https://github.com/r1jadi',
    linkedin: 'https://www.linkedin.com/in/rijad-halili-94a5162a6/',
    website: 'https://rijadhalili.dev',
    cvFile: '/resume.pdf',
};

export const aboutData = {
    bio: `Motivated and ambitious Computer Science student with strong foundations in software development, web technologies, and problem-solving. Experienced in both technical and real-world environments, including election management roles, customer-focused work, and international project collaboration. Winner of the Erasmus+ Elegants innovation competition (3rd place), with proven skills in teamwork, research, leadership, and creative solution design. 

    Currently working as an Intern at the Tax Administration of Kosovo, while also serving as Co-Founder of Blejta.xk, an online product-reselling initiative where I am actively developing the business model and building the official e-commerce platform. Through this role, I am gaining hands-on experience in public sector operations, taxpayer communication, fieldwork, and administrative processes. In parallel, through Blejta.xk, I am developing practical skills in branding, digital sales, logistics, and full-stack web development. Skilled in both frontend and backend development, with hands-on experience building practical projects such as an Expense Tracker web application (React.js & .NET Web API Core) and an E-commerce store (Angular & .NET Web API Core). Strong foundation in software documentation, having prepared multiple Software Engineering, Architecture, and Design documentations.

    Beyond technical skills, I am also passionate about management, economics, finance, and marketing, where I enjoy combining analytical thinking with documentation and organizational planning. I am eager to contribute my skills to multidisciplinary teams, gain real-world experience, and continue developing both as a software professional and future entrepreneur.

    Dedicated to continuous learning, improving digital skills, and applying technology to real-life challenges. Known for responsibility, communication, teamwork, and the ability to adapt quickly in diverse professional environments.`,
    highlights: [
        'Full-Stack Web Development',
        'Erasmus+ Innovation Award Winner',
        'Co-Founder of Bleta',
        'Public Sector Experience',
        'Software Architecture & Design',
        'Languages: Albanian() / English (C1)',
        'Hobbies: Music, Sport, Social Media',
    ],
};

export const educationData = [
    {
        degree: "Computer Science and Engineering (Bachelor)",
        institution: 'University for Business and Technology (UBT)',
        location: 'Prishtina, Kosovo',
        period: 'Oct 2022 – Sep 2025',
        description:
            'GPA: 8.72 / 10. Focus on Software Development, Algorithms, Computer Architecture, OS, Networking, Database Management, Cybersecurity, and AI/ML.',
    },
    {
        degree: "Erasmus+ Elegants Innovation Competition (3rd Place)",
        institution: 'Erasmus+',
        location: 'Rome, Italy',
        period: 'October 2025',
        description:
            'Planned, organized, and coordinated a complete innovation project from concept to presentation.',
    },
    {
        degree: "Android Studio Beginner Certification",
        institution: 'British College of Sciences (Former PBC Academy)',
        location: 'Prishtina, Kosovo',
        period: 'Apr 2022 – May 2022',
        description:
            'Gained fundamental skills in Android app development using Java/Kotlin, UI design with XML, and app lifecycle management. (Final Grade: 10.0)',
    },
    {
        degree: "Digital and Media Education Training",
        institution: 'Democracy Plus',
        location: 'Prishtina, Kosovo',
        period: 'May 2025',
        description:
            'Focused on Digital Literacy, Online Safety, Critical Thinking, and Content Creation using modern digital tools. Enhanced skills in digital communication and project planning.',
    },
];

export const experienceData = [
    {
        role: 'Co-Founder & Full-Stack Developer',
        company: 'Bleta',
        location: 'Prishtina, Kosovo',
        period: 'Sep 2025 – Present',
        type: 'Self-Employed',
        description: [
            'Developing the official e-commerce website including product listings, cart flow, and authentication.',
            'Managing full business setup: branding, logistics, customer communication, and inventory.',
            'Building admin dashboard and analytics for tracking sales and traffic.',
            'Established brand identity and early sales channels through social media (TikTok/Instagram).',
        ],
    },
    {
        role: 'Intern & Reporting Assistant',
        company: 'Tax Administration of Kosovo',
        location: 'Prishtina, Kosovo',
        period: 'Feb 2026 – Present',
        type: 'Internship - Full Time',
        description: [
            'Identify and verify registered taxpayers operating within assigned areas.',
            'Perform fieldwork across Prishtina and distribute official taxpayer identification materials.',
            'Conduct high-volume outbound calls (100+ per day) to inform business owners about compliance.',
            'Maintain accurate records related to contacted businesses and completed distributions.',
        ],
    },
    {
        role: 'Polling Station Commissioner / Committee Member',
        company: 'Central Election Commission of Kosovo',
        location: 'Prishtina, Kosovo',
        period: 'Oct 2025 – Dec 2025',
        type: 'Public Service',
        description: [
            'Managed polling station operations during election days in Oct & Nov & Dec 2025.',
            'Verified voter identities and ensured compliance with election regulations.',
            'Monitored voting process for fairness and transparency.',
            'Recorded and reported voting data accurately.',
        ],
    },
    {
        role: 'Taxi Driver',
        company: 'Shoferi Im',
        location: 'Prishtina, Kosovo',
        period: 'Jul 2025 – Aug 2025',
        type: 'Full-time',
        description: [
            'Provided excellent customer service and safe transport for passengers.',
            'Managed efficient routes and daily cash balance accurate receipts.',
        ],
    },
];

export const projectsData = [
    {
        title: 'Elegants (Erasmus+ Winner)',
        description:
            '3rd Place Winner in Erasmus+ Innovation Competition. Developed an AI-powered solution to improve accessibility for visually impaired individuals. Involved business planning, SWOT analysis, and technical prototyping.',
        techStack: ['Project Management', 'AI Concepts', 'Business Planning', 'Research'],
        github: '',
        liveDemo: 'https://elegantsproject.eu/',
        image: null,
        featured: true,
    },
    {
        title: 'Blejta.xk',
        description:
            'An online product-reselling initiative and e-commerce platform. Features include product browsing, shopping cart, user authentication, and an admin dashboard.',
        techStack: ['React', 'Node.js', 'E-commerce', 'Branding', 'Logistics', 'Docker'],
        github: 'https://github.com/r1jadi/Blejta',
        liveDemo: 'https://www.instagram.com/blejta.xk',
        image: null,
        featured: true,
    },
    {
        title: 'Expense Tracker',
        description:
            'A practical web application for tracking personal expenses and managing budgets. Built to demonstrate full-stack capabilities with modern .NET architecture.',
        techStack: ['React.js', '.NET Web API Core', 'C#', 'SQL'],
        github: 'https://github.com/r1jadi/ExpenseTracker',
        liveDemo: '',
        image: null,
        featured: false,
    },
    {
        title: 'Eagle Commerce',
        description:
            'An online product-reselling initiative and e-commerce platform. Features include product browsing, shopping cart, user authentication, and an admin dashboard.',
        techStack: ['Angular', 'C#', 'E-commerce', 'Branding', 'Logistics', 'SQL'],
        github: 'https://github.com/r1jadi/Blejta',
        liveDemo: 'https://github.com/r1jadi/Eagle-Commerce',
        image: null,
        featured: true,
    },
];

export const skillsData = {
    frontend: {
        title: 'Frontend',
        skills: [
            { name: 'React', level: 90 },
            { name: 'Angular', level: 80 },
            { name: 'JavaScript', level: 90 },
            { name: 'HTML5', level: 95 },
            { name: 'CSS3 / TailwindCSS / Bootstrap', level: 85 },
            { name: 'Android / XML', level: 75 },
        ],
    },
    backend: {
        title: 'Backend',
        skills: [
            { name: '.NET Web API Core', level: 85 },
            { name: 'C#', level: 80 },
            { name: 'Node.js', level: 75 },
            { name: 'PHP', level: 70 },
            { name: 'SQL / Databases', level: 80 },
            { name: 'Java', level: 70 },
            { name: 'Nest.js', level: 70 },
        ],
    },
    tools: {
        title: 'Tools & Concepts',
        skills: [
            { name: 'Git / GitHub', level: 85 },
            { name: 'Multiple IDEs', level: 95 },
            { name: 'Project Management', level: 90 },
            { name: 'Digital Literacy', level: 95 },
            { name: 'Social Media Management', level: 85 },
            { name: 'Algorithms', level: 80 },
            { name: 'Databricks', level: 80 },
            { name: 'Docker', level: 90 },
        ],
    },
    soft: {
        title: 'Soft Skills',
        skills: [
            'Team Leadership',
            'Communication',
            'Critical Thinking',
            'Public Relations',
            'Time Management',
            'Adaptability',
        ],
    },
};

export const contactData = {
    formspreeId: 'xdalgewp', // Update with your real Formspree ID
    heading: "Let's Work Together",
    subheading:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    additionalInfo: {
        languages: ["Albanian (Native)", "English (C1 - Proficient)"],
        hobbies: ["Social Media Management", "Music / Songwriting", "Sport (Walking)"],
    }
};

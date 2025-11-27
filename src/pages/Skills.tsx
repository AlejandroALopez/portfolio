import React from 'react';
import { motion, type Easing } from "framer-motion";
import BulletPoint from '../assets/bulletPointSkills.svg';

interface SkillsItemProps {
    skill: ISkill,
}

interface ISkill {
    title: string,
    subtitle: string,
    description: string,
    toolsTitle1?: string,   // e.g. languages: ...
    tools1?: string
    toolsTitle2?: string,   // e.g. frameworks: ...
    tools2?: string
}

const skills: ISkill[] = [
    {
        title: "Software Architecture & Systems Design",
        subtitle: `Specializing in planning scalable full-stack systems and adapting to evolving requirements`,
        description: `Experience with structuring applications from the ground up — defining data flow, 
        API interactions, and component hierarchies — while incorporating new technologies to deliver efficient, 
        maintainable solutions even in ambiguous environments.`,
        toolsTitle1: "Skills",
        tools1: "System Design, API Architecture, Scalable Application Planning",
        toolsTitle2: "Experience",
        tools2: "Internal Tool Development, Cross-Team Collaboration, Technical Leadership",
    },
    {
        title: "Frontend Web Development",
        subtitle: `Specializing in building responsive, modern interfaces`,
        description: `Experience with building full-featured React applications from scratch, collaborating with designers and backend teams to turn complex ideas into intuitive, scalable interfaces.`,
        toolsTitle1: "Languages",
        tools1: "TypeScript, JavaScript, HTML, CSS",
        toolsTitle2: "Frameworks",
        tools2: "React, Redux, Next.js, Tailwind",
    },
    {
        title: "Backend Web Development",
        subtitle: `Specializing in designing reliable and scalable server logic`,
        description: `Experience with building scalable and maintanable backend code, both APIs and serverless functions. Specializing in Node.js and Express.js, with professional experience in .NET.`,
        toolsTitle1: "Languages",
        tools1: "TypeScript, JavaScript, C#, Python, SQL",
        toolsTitle2: "Frameworks",
        tools2: "Node.js, Express.js, ASP.NET",
    },
    {
        title: "Data Processing & Automation",
        subtitle: `Specializing in building intelligent workflows and automations around data`,
        description: `Experience building tools that detect, clean, and organize data automatically, streamlining repetitive processes and ensuring accuracy across systems.`,
        toolsTitle1: "Languages",
        tools1: "C#, Python, SQL",
        toolsTitle2: "Tools",
        tools2: "Pandas, Racami Workflows, .NET Winforms, Playwright",
    },
    {
        title: "Product Design (UI/UX)",
        subtitle: `Experienced in creating seamless user experiences`,
        description: `Trained in UI/UX and product design. I focus on creating interfaces that feel seamless and engaging. I apply design thinking throughout development to ensure every product I build is both functional and delightful to use.`,
        toolsTitle1: "Tools",
        tools1: "Figma, Adobe Illustrator",
    },
]

export default function Skills() {
    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase: Easing = "easeOut";

    return (
        <section id="skills" className="flex flex-col min-h-screen bg-blueBg p-6 md:p-12 pb-24 gap-6 md:gap-12">
            <div className="flex flex-col mt-12">
                <motion.p
                    className="font-medium text-3xl md:text-4xl"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Skills
                </motion.p>
            </div>
            <motion.div
                className="flex flex-col gap-6 bg-darkPrimary p-8"
                initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 1 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill) => (
                    <SkillItem key={skill.title} skill={skill} />
                ))}
            </motion.div>
        </section>
    );
}


const SkillItem: React.FC<SkillsItemProps> = ({ skill }) => {
    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase: Easing = "easeOut";

    return (
        <motion.div
            className="flex flex-row"
            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="flex flex-col gap-3">
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-4'>
                        <img className='max-sm:h-6 h-auto' src={BulletPoint} alt={"bullet point icon"} />
                        <p className='text-lg md:text-2xl font-medium'>{skill.title}</p>
                    </div>
                    <p className='max-sm:ml-7 text-md md:text-xl text-grayText2'>{skill.subtitle}</p>
                </div>
                <p className='max-sm:ml-7'>{skill.description}</p>
                <div className='flex flex-col max-sm:ml-7'>
                    {(skill.toolsTitle1 && skill.tools1) && (
                        <p>
                            <span className="font-semibold">{skill.toolsTitle1}:</span>
                            &emsp;
                            {skill.tools1}
                        </p>
                    )}
                    {(skill.toolsTitle2 && skill.tools2) && (
                        <p>
                            <span className="font-semibold">{skill.toolsTitle2}:</span>
                            &emsp;
                            {skill.tools2}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
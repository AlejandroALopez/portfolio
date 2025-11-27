import React from 'react';
import { motion, type Easing } from "framer-motion";
import { Link } from "react-router-dom";
import HexagonIcon from '../assets/hexagonIcon.svg';
import { projects, type IProject } from '../utils/projectData';

interface ProjectItemProps {
    project: IProject
}

export default function CaseStudies() {
    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase: Easing = "easeOut";

    return (
        <section id="caseStudies" className="flex flex-col min-h-screen bg-blackBg gap-4 p-12 pb-24">
            <div className="flex flex-col gap-6 mt-12">
                <motion.p
                    className="font-medium text-3xl md:text-4xl"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Case Studies
                </motion.p>
                <motion.p
                    className="max-w-9/12 text-md md:text-lg"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Here are some of the projects I am proud of. If you want to know more, feel free to reach out.
                </motion.p>
            </div>
            <div
                className="flex flex-col gap-2"

            >
                {projects.map((project: IProject) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}


const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase: Easing = "easeOut";
    
    return (
        <motion.div
            className='relative'
            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <img src={HexagonIcon} alt="hexagon icon" className='w-12 md:w-16 h-auto relative left-2 md:left-0 top-8' />
            <div className="flex flex-col lg:flex-row p-8 mx-8 bg-darkPrimary rounded-sm gap-6 md:gap-12">
                <div className="flex flex-col gap-3 lg:max-w-3/4">
                    <p className="font-medium text-lg md:text-2xl">{project.title}</p>
                    <p>{project.description}</p>
                    <p><span className='font-semibold'>Technologies:</span>&emsp;{project.technologies}</p>
                </div>
                <Link 
                    className="flex items-center justify-center self-end bg-blackBg/30 hover:bg-blackBg/70 border-2 border-primary rounded-md h-12 lg:h-16 w-full lg:w-64 cursor-pointer"
                    to={`/projects/${project.id}`}
                    >
                    <p className='text-primary text-lg lg:text-xl'>read more</p>
                </Link>
            </div>
        </motion.div>

    );
}
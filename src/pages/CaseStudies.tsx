import React from 'react';
import HexagonIcon from '../assets/hexagonIcon.svg';

interface ProjectItemProps {
    project: IProject
}

interface IProject {
    title: string,
    description: string,
    technologies: string,
}

const projects: IProject[] = [
    {
        title: "JLS Systems Dashboard: Automated Checks For Company Software",
        description: `Built an internal dashboard for JLS to monitor software services used by 
        multiple departments, speeding fault detection and resolution.`,
        technologies: "React, ASP.NET, TypeScript, C#"
    },
    {
        title: "BayesEM: A Mobile App For Disease Likelihood Computation",
        description: `Worked in a DALI Lab team to build a mobile application that uses Bayesian 
        inference and medical literature to speed up medical diagnoses.`,
        technologies: "React Native, Flask, MongoDB, JavaScript, Python"
    },
    {
        title: "EQ2: App For Lionheart Staff To Support Trauma-Impacted Youth",
        description: `Built an internal dashboard for JLS to monitor software services used by 
        multiple departments, speeding fault detection and resolution.`,
        technologies: "React Native, Node, Express, MongoDB, JavaScript"
    },
]

export default function CaseStudies() {
    return (
        <section className="flex flex-col min-h-screen bg-blackBg gap-12 p-12 pb-24">
            <div className="flex flex-col gap-6 my-12">
                <p className="text-3xl font-medium">Case Studies</p>
                <p className="w-5/12 text-lg">Here are some of the projects I am proud of. If you want to know more, feel free to reach out.</p>
            </div>
            <div className="flex flex-col gap-18">
                {projects.map((project) => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </section>
    );
}



const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className='relative'>
            <img src={HexagonIcon} alt="hexagon icon" className='w-16 h-auto absolute left-0 bottom-36' />
            <div className="flex flex-row p-8 mx-8 bg-darkPrimary rounded-sm gap-12">
                <div className="flex flex-col gap-3">
                    <p className="font-medium text-2xl">{project.title}</p>
                    <p>{project.description}</p>
                    <p><span className='font-semibold'>Technologies:</span>&emsp;{project.technologies}</p>
                </div>
                <button className="self-end border-2 border-primary text-primary text-xl rounded-md h-16 w-48 cursor-pointer">
                    read more
                </button>
            </div>
        </div>

    );
}
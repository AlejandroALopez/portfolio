import React from 'react';

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
        <section className="flex flex-col min-h-screen bg-[#171C19] gap-12">
            <div className="flex flex-col gap-6 my-12">
                <p className="text-white">Case Studies</p>
                <p className="text-white">Here are some of the projects I am proud of. If you want to know more, feel free to reach out.</p>
            </div>
            <div className="flex flex-col gap-12">
                {projects.map((project) => (
                    <ProjectItem project={project} />
                ))}
            </div>
        </section>
    );
}



const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="flex flex-col gap-4 bg-[#1F262E]">
            <p>{project.title}</p>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies}</p>
        </div>
    );
}
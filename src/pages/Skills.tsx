import React from 'react';

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
]

export default function Skills() {
    return (
        <section className="flex flex-col min-h-screen bg-[#1F262E] p-12 gap-12">
            <div className="flex flex-col">
                <h1 className="text-3xl text-white">Skills</h1>
            </div>
            <div className="flex flex-col gap-12 bg-[#171C19]">
                {skills.map((skill) => (
                    <SkillItem skill={skill} />
                ))}
            </div>
        </section>
    );
}



const SkillItem: React.FC<SkillsItemProps> = ({ skill }) => {
    return (
        <div className="flex flex-col gap-4">
            <p>{skill.title}</p>
            <p>{skill.subtitle}</p>
            <p>{skill.description}</p>
        </div>
    );
}
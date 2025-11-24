import { useEffect } from "react";
import { motion, type Easing } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects, type ContentItem, type Project } from "../utils/projectData";
import Header from "../components/Header";

export default function ProjectPage() {
    const { projectId } = useParams();

    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase: Easing = "easeOut";

    const project: Project | undefined = projects.find(
        (p) => p.id.toLowerCase() === projectId?.toLowerCase()
    );

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return <p className="text-center mt-20">Project not found.</p>;
    }

    return (
        <div className="flex flex-col max-w-screen">
            <Header />
            <section id="project-page" className="flex flex-col items-center min-h-screen bg-whiteBg gap-12">
                <div className="flex flex-col w-full gap-2 lg:gap-4 my-12 text-blackText px-4 sm:px-12 lg:px-48 pt-12 lg:pt-24">
                    <p className="font-medium text-lg text-grayText text-center">Portfolio</p>
                    <p className="font-medium text-3xl md:text-4xl text-center">{project.title}</p>
                </div>
                {/* Content Container */}
                <div className="flex flex-col gap-12 mx-12 sm:mx-24 lg:mx-36 pb-24">
                    {project.content.map((contentItem: ContentItem, index: number) => (
                        <div key={`${project.id}-${index}`}>
                            {contentItem.type === "text" ? (
                                <p className="text-blackText text-md sm:text-lg font-medium text-justify">
                                    {contentItem.textContent}
                                </p>
                            ) : contentItem.type === "subtitle" ? (
                                <p className="text-blackText text-xl sm:text-2xl font-semibold">
                                    {contentItem.textContent}
                                </p>
                            ) : contentItem.type === "image" ? (
                                <div className="flex justify-center">
                                    <img src={`../projectImages/${contentItem.imageIdentifier}`} alt={contentItem.imageIdentifier} className="lg:max-w-1/2 h-auto rounded-lg shadow-lg" />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
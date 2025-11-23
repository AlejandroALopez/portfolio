import { motion, type Easing } from "framer-motion";
import { useParams } from "react-router-dom";
import { projects, type Project } from "../utils/projectData";


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

    if (!project) {
        return <p className="text-center mt-20">Project not found.</p>;
    }

    return (
        <section id="project-page" className="flex flex-col md:flex-row min-h-screen bg-whiteBg gap-12 max-lg:pt-12">
            <div className="flex flex-col gap-8 lg:gap-12 my-12 text-blackText py-4 px-12 lg:px-0 lg:pr-24 lg:pt-12">
                <div className="flex flex-col gap-2">
                    <motion.p
                        className="font-medium text-3xl md:text-4xl"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Some project: {project.title}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
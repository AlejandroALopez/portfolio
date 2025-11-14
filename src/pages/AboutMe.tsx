import { motion, type Easing } from "framer-motion";
import AboutMeImage from "../assets/aboutMeImage.jpg";

interface IData {
    subtitle: string,
    paragraph1: string,
    interests: string[],
}

const data: IData = {
    subtitle: "I'm a Software Engineer based near Boston, Massachusetts",
    paragraph1: `
        Where I shine as a software engineer is in projects that make a real difference for others, especially 
            when they come with ambiguity and the need to learn new tools or paradigms. 
            I enjoy turning uncertainty into structure and ideas into systems that work.`,
    interests: [
        "UI/UX design with Figma",
        "Game Dev (Learning Godot to make indie 2D games)",
        "Productivity Systems (Word/Excel files to plan everything)",
        "Cuisine (Peruvian, Italian, you name it!)",
        "Reading (Classics, Manga)",
        "Video games (The more challenging, the better!)",
        "Gym (Spotify is a must for lift sessions)",
        "Archery"
    ]
}

export default function AboutMe() {
    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase:  Easing = "easeOut";

    return (
        <section id="about" className="flex flex-col md:flex-row min-h-screen bg-whiteBg gap-12 max-lg:pt-12">
            <img
                className="hidden lg:flex w-5/12"
                src={AboutMeImage}
                alt="about me image"
            />
            <div className="flex flex-col gap-8 lg:gap-12 my-12 text-blackText py-4 px-12 lg:px-0 lg:pr-24 lg:pt-12">
                <div className="flex flex-col gap-2">
                    <motion.p
                        className="font-medium text-3xl md:text-4xl"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        About me
                    </motion.p>
                    <motion.p
                        className="text-grayText text-xl md:text-2xl font-normal"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {data.subtitle}
                    </motion.p>
                </div>
                <motion.p
                    className="text-md md:text-lg xl:text-xl"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {data.paragraph1}
                </motion.p>
                <motion.div
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 3 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="text-md md:text-lg xl:text-xl">My personal interests include:</p>
                    <ul className="list-disc list-inside text-md md:text-lg xl:text-xl">
                        {data.interests.map((item, index) => (
                            <li className="mt-1" key={`interest-${index}`}>{item}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
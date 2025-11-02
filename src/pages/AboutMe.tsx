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
        "Productivity Systems (Word/Excel files to plan everything)",
        "Cuisine (Peruvian, Italian, you name it!)",
        "Reading (Classics, Manga)",
        "Video games (The more challenging, the better!)",
        "Gym (Spotify is a must for lift sessions)",
        "Archery"
    ]
}

export default function AboutMe() {
    return (
        <section className="flex flex-col md:flex-row min-h-screen bg-whiteBg gap-12">
            <img
                className="w-full max-w-[600px] h-auto object-contain"
                src={AboutMeImage}
                alt="about me image"
            />
            <div className="flex flex-col gap-4 my-12 text-blackText mr-24">
                <div className="flex flex-col gap-2 my-12">
                    <p className=" font-montserrat font-medium text-4xl">About me</p>
                    <p className="text-grayText text-2xl font-normal">{data.subtitle}</p>
                </div>
                <p className="text-xl">{data.paragraph1}</p>
                <div className="flex flex-col gap-2 my-12">
                    <p className="text-xl">My personal interests include:</p>
                    <ul className="list-disc list-inside text-xl">
                        {data.interests.map((item, index) => (
                            <li className="" key={`interest-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
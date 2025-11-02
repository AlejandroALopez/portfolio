import AboutMeImage from "../assets/aboutMeImage.jpg";

interface IData {
    subtitle: string,
    paragraph1: string,
    interests: string[],
}

const data: IData = {
    subtitle: "I'm a Software Engineer based near Boston, Massachusetts",
    paragraph1: `
        Where I shine as a software engineer is in projects that make a real difference for others — especially 
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
        <section className="flex flex-col md:flex-row min-h-screen bg-[#E6E6E6] gap-12">
            <img
                className="w-full max-w-[600px] h-auto object-contain"
                src={AboutMeImage}
                alt="about me image"
            />
            <div className="flex flex-col gap-6 my-12">
                <p className="text-black">About me</p>
                <p className="text-black">{data.subtitle}</p>
                <p className="text-black">{data.paragraph1}</p>
                <p className="text-black">My personal interests include:</p>
                <ul className="text-black">
                    {data.interests.map((item, index) => (
                        <li className="" key={`interest-${index}`}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
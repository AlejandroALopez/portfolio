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
        <section id="about" className="flex flex-col md:flex-row min-h-screen bg-whiteBg gap-12">
            <img
                //className="hidden lg:flex max-w-[600px] w-4/12"
                 className="hidden lg:flex w-5/12"
                src={AboutMeImage}
                alt="about me image"
            />
            <div className="flex flex-col gap-8 lg:gap-12 my-12 text-blackText py-4 px-12 lg:px-0 lg:pr-24">
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-3xl md:text-4xl">About me</p>
                    <p className="text-grayText text-xl md:text-2xl font-normal">{data.subtitle}</p>
                </div>
                <p className="text-md md:text-lg xl:text-xl">{data.paragraph1}</p>
                <div className="flex flex-col gap-2">
                    <p className="text-md md:text-lg xl:text-xl">My personal interests include:</p>
                    <ul className="list-disc list-inside text-md md:text-lg xl:text-xl">
                        {data.interests.map((item, index) => (
                            <li className="" key={`interest-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
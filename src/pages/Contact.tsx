import { useState } from "react";
import mailIcon from '../assets/mail.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // send email to portfolio owner
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Message: ", message);
    }

    return (
        <section id="contact" className="flex flex-row justify-between min-h-screen bg-whiteBg text-blackText p-18 pt-36">
            {/* Left side */}
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <p className="font-medium text-4xl">Let's work together</p>
                        <p className="text-2xl">Have an idea that needs development? Let's talk!</p>
                    </div>
                </div>
                {/* Form fields */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-xl">Name</p>
                        <input
                            className="border-2 border-black rounded-sm p-2"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-xl">Email</p>
                        <input
                            className="border-2 border-black rounded-sm p-2"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-xl">Message</p>
                        <textarea
                            className="border-2 border-black rounded-sm p-2"
                            rows={6}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button 
                        className="w-full border-2 border-black rounded-sm p-4 mt-4 cursor-pointer"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            {/* Right side */}
            <div className="flex flex-col gap-4 text-lg">
                <button className="flex flex-row gap-3 cursor-pointer">
                    <img src={mailIcon} alt="mail" />
                    <p>Email</p>
                </button>
                <button className="flex flex-row gap-3 cursor-pointer">
                    <img src={githubIcon} alt="github" />
                    <p>GitHub</p>
                </button>
                <button className="flex flex-row gap-3 cursor-pointer">
                    <img src={linkedinIcon} alt="linkedin" />
                    <p>LinkedIn</p>
                </button>
            </div>
        </section>
    );
}
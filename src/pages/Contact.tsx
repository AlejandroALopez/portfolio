import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion, type Easing } from "framer-motion";
import { contactLinks } from "../utils/constants";
import mailIcon from '../assets/mail.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const animationDelay: number = 0.2;
    const animationDuration: number = 0.4;
    const animationXStart: number = 25;
    const animationYStart: number = 0;
    const animationEase: Easing = "easeOut";

    // send email to portfolio owner
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs
            .sendForm(serviceId, templateId, form.current!, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('Email sent successfully!');
                },
                (error) => {
                    console.log('Email failed to send: ', error.text);
                },
            );
    }

    return (
        <section id="contact" className="flex flex-col lg:flex-row justify-between min-h-screen bg-whiteBg text-blackText p-18 py-24 max-lg:gap-8">
            {/* Left side */}
            <div className="flex flex-col gap-6 md:gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <motion.p
                            className="font-medium text-3xl md:text-4xl"
                            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >Let's work together
                        </motion.p>
                        <motion.p
                            className="text-xl md:text-2xl"
                            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            Have an idea that needs development? Let's talk!
                        </motion.p>
                    </div>
                </div>
                {/* Form fields */}
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <motion.div
                        className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="text-lg md:text-xl">Name</p>
                        <input
                            className="border sm:border-2 border-black rounded-sm p-2"
                            type="text"
                            name="name"
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 3 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="text-lg md:text-xl">Email</p>
                        <input
                            className="border sm:border-2 border-black rounded-sm p-2"
                            type="email"
                            name="email"
                            required
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-1"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 4 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="text-lg md:text-xl">Message</p>
                        <textarea
                            className="border sm:border-2 border-black rounded-sm p-2"
                            rows={6}
                            name="message"
                            required
                        />
                    </motion.div>
                    <motion.button
                        className="w-full border sm:border-2 border-black rounded-sm p-4 mt-4 cursor-pointer"
                        type="submit"
                        initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 5 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
            {/* Right side */}
            <div className="flex flex-row lg:flex-col max-lg:justify-center gap-4 text-md lg:text-lg">
                <motion.a
                    href={`mailto:${contactLinks.email}`}
                    className="flex flex-row gap-3 cursor-pointer"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img src={mailIcon} alt="mail" />
                    <p className="text-blackText hover:text-blackText visited:text-blackText font-normal">Email</p>
                </motion.a>
                <motion.button
                    onClick={() => window.open(contactLinks.github, '_blank')}
                    className="flex flex-row gap-3 cursor-pointer appearance-none"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2.25 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img src={githubIcon} alt="github" />
                    <p>GitHub</p>
                </motion.button>
                <motion.button
                    onClick={() => window.open(contactLinks.linkedIn, '_blank')}
                    className="flex flex-row gap-3 cursor-pointer"
                    initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <img src={linkedinIcon} alt="linkedin" />
                    <p>LinkedIn</p>
                </motion.button>
            </div>
        </section>
    );
}
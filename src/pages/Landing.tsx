import { motion, type Easing } from "framer-motion";
import Header from "../components/Header";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Skills from "./Skills";
import Contact from "./Contact";
import landingPattern from '../assets/landingPattern.svg';
import { scrollToSection } from "../utils/constants";

export default function Landing() {
  const animationDelay: number = 0.5;
  const animationDuration: number = 0.6;
  const animationXStart: number = -10;
  const animationYStart: number = -10;
  const animationEase: Easing = "linear";

  return (
    <div className="flex flex-col max-w-screen">
      <Header />
      {/* Intro Page */}
      <section
        id="home"
        className="flex flex-row min-h-screen pb-12 p-6 sm:p-12 md:p-24 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/backgroundLanding.jpg')",
        }}
      >
        <div className="flex flex-col self-end gap-6 max-w-8/12 sm: text-lightGrayText">
          <motion.p
            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className=" mt-48 text-4xl md:text-6xl xl:text-7xl font-medium text-whiteText"
          >
            Alex Lopez
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl"
          >
            <span className="text-primary">Full Stack Software Engineer</span> | <br className="max-sm:hidden"></br>
            Automations and Data-Driven Systems
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: animationYStart, x: animationXStart, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-md md:text-lg lg:text-xl"
          >
            I build full-stack applications that combine
            <span className="text-primary"> clean design, smart automation, and data-driven insight.</span>
          </motion.p>
          {/* Buttons Container */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-6"
          >
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-2 bg-blackBg/30 hover:bg-blackBg/70 duration-300 transition border-primary text-primary text-lg md:text-xl 
              rounded-md h-20 w-full sm:w-72 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              contact me
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 3.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-2 bg-blackBg/30 hover:bg-blackBg/70 duration-300 transition border-primary text-primary text-lg md:text-xl 
              rounded-md h-20 w-full sm:w-72 cursor-pointer"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              download resume
            </motion.button>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: animationDuration, ease: animationEase, delay: animationDelay * 3.5 }}
          viewport={{ once: true, amount: 0.2 }}
          src={landingPattern}
          alt="landing pattern"
          className="absolute right-0 top-18 w-5/12 md:w-4/12 h-auto object-contain" />
      </section>
      {/* About Me Page */}
      <AboutMe />
      {/* Case Studies Page */}
      <CaseStudies />
      {/* Skills Page */}
      <Skills />
      {/* Contact Page */}
      <Contact />
    </div>
  );
}
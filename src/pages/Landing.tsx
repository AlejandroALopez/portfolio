import Header from "../components/Header";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Skills from "./Skills";
import Contact from "./Contact";
import landingPattern from '../assets/landingPattern.svg';
import { scrollToSection } from "../utils/constants";

export default function Landing() {
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
          <p className=" mt-48 text-4xl md:text-6xl xl:text-7xl font-medium text-whiteText">Alex Lopez</p>
          <p className="text-xl md:text-2xl lg:text-3xl">
            <span className="text-primary">Full Stack Software Engineer</span> | <br className="max-sm:hidden"></br>
            Automations and Data-Driven Systems
          </p>
          <p className="text-md md:text-lg lg:text-xl">
            I build full-stack applications that combine
            <span className="text-primary"> clean design, smart automation, and data-driven insight.</span>
          </p>
          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-6">
            <button
              className="border-2 bg-blackBg/30 hover:bg-blackBg/70 duration-300 transition border-primary text-primary text-lg md:text-xl rounded-md h-20 w-full sm:w-72 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              contact me
            </button>
            <button
              className="border-2 bg-blackBg/30 hover:bg-blackBg/70 duration-300 transition border-primary text-primary text-lg md:text-xl rounded-md h-20 w-full sm:w-72 cursor-pointer"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              download resume
            </button>
          </div>
        </div>
        <img
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
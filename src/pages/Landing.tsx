import Header from "../components/Header";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Skills from "./Skills";
import landingPattern from '../assets/landingPattern.svg';
import Contact from "./Contact";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <Header />
      {/* Intro Page */}
      <section
        className="flex flex-row min-h-screen py-12 px-24 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/backgroundLanding.jpg')",
        }}
      >
        <div className="flex flex-col self-end gap-6 max-w-7/12 text-lightGrayText">
          <p className="text-7xl font-medium text-whiteText">Alex Lopez</p>
          <p className="text-3xl">
            <span className="text-primary">Full Stack Software Engineer</span> | <br></br>
            Automations and Data-Driven Systems
          </p>
          <p className="text-xl">
            I build full-stack applications that combine
            <span className="text-primary"> clean design, smart automation, and data-driven insight.</span>
          </p>
          <div className="flex flex-row gap-12 mt-6">
            <button className="border-2 border-primary text-primary text-xl rounded-md h-20 w-72 cursor-pointer">
              contact me
            </button>
            <button className="border-2 border-primary text-primary text-xl rounded-md h-20 w-72 cursor-pointer">
              download resume
            </button>
          </div>
        </div>
        <img 
        src={landingPattern} 
        alt="landing pattern" 
        className="absolute right-0 top-18 w-[35%] h-auto max-h-11/12 object-contain" />
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
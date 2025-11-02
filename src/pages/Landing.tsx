import Header from "../components/Header";
import AboutMe from "./AboutMe";
import CaseStudies from "./CaseStudies";
import Skills from "./Skills";

export default function Landing() {
  return (
    <div className="flex bg-red-300 flex-col">
      <Header />
      {/* Intro Page */}
      <section 
        className="flex flex-row min-h-screen p-12 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/backgroundLanding.jpg')",
        }}
      >
        <div className="flex flex-col self-end gap-4 border-2 p-4 mb-12 border-white max-w-1/2">
          <p className="text-5xl">Alex Lopez</p>
          <p className="text-lg">
            <span className="text-[#13D975]">Full Stack Software Engineer</span>
            | Automations and Data-Driven Systems
          </p>
          <p className="text-lg">
            I build full-stack applications that combine 
            <span className="text-[#13D975]"> clean design, smart automation, and data-driven insight.</span>
          </p>
        </div>
      </section>
      {/* About Me Page */}
      <AboutMe />
      {/* Case Studies Page */}
      <CaseStudies />
      {/* Skills Page */}
      <Skills />
    </div>
  );
}
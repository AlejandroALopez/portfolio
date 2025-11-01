import Header from "../components/Header";

export default function Landing() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      {/* Intro page */}
      <section 
        className="flex flex-row h-full p-12 bg-no-repeat bg-cover bg-center"
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
    </div>
  );
}
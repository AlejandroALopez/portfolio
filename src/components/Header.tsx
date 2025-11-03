import logo from '../assets/Logo.svg';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-row justify-between items-center h-16 px-8 bg-black">
        <img src={logo} alt="logo" />
        <div className="flex flex-row gap-8 text-whiteText">
           <button className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</button>
           <button className="cursor-pointer" onClick={() => scrollToSection('about')}>About</button>
           <button className="cursor-pointer" onClick={() => scrollToSection('projects')}>Case Studies</button>
           <button className="cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</button>
           <button className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
    </div>
  );
}
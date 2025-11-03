import logo from '../assets/Logo.svg';

interface ISection {
  id: string,
  label: string
}

const sections: ISection[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'caseStudies', label: 'Case Studies' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

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
        {sections.map(({ id, label }) => (
          <button
            key={`header-${id}`}
            onClick={() => scrollToSection(id)}
            className="font-medium cursor-pointer hover:text-primary duration-400"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
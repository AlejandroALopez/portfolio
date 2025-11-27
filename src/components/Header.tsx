import { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import { scrollToSection } from '../utils/constants';

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

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);


  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-row justify-between items-center h-16 px-8 bg-black">
        <img src={logo} alt="logo" />
        <div className="hidden sm:flex flex-row gap-8 text-whiteText">
          {sections.map(({ id, label }) => (
            <button
              key={`header-${id}`}
              onClick={() => scrollToSection(id)}
              className="font-medium hover:text-primary duration-400 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
        <button
          className="sm:hidden flex cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={menu} alt="menu" />
        </button>
      </div>
      {/* Hamburger menu */}
      {showMenu && (
        <div className="sm:hidden fixed top-0 left-0 right-0 z-50 w-full flex flex-col bg-blackBg mt-16">
          {sections.map(({ id, label }) => (
            <button
              key={`header-harmbugerMenu-${id}`}
              onClick={() => {
                scrollToSection(id);
                setShowMenu(false)
              }}
              className="flex py-2 px-8 border border-l-0 border-r-0 border-whiteBg font-medium cursor-pointer hover:text-primary duration-400 cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
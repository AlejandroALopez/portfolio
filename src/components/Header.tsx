import logo from '../assets/Logo.svg';

export default function Header() {
  return (
    // Fixed header: full-width, sits on top of the page, with a high z-index
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-row justify-between items-center h-16 px-8 bg-black">
        <img src={logo} alt="logo" />
        <div className="flex flex-row gap-8">
            <p className="text-[#E6E6E6]">Home</p>
            <p className="text-[#E6E6E6]">About</p>
            <p className="text-[#E6E6E6]">Portfolio</p>
            <p className="text-[#E6E6E6]">Skills</p>
            <p className="text-[#E6E6E6]">Contact</p>
        </div>
    </div>
  );
}
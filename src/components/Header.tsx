import logo from '../assets/Logo.svg';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-row justify-between items-center h-16 px-8 bg-black">
        <img src={logo} alt="logo" />
        <div className="flex flex-row gap-8 text-whiteText">
            <p>Home</p>
            <p>About</p>
            <p>Portfolio</p>
            <p>Skills</p>
            <p>Contact</p>
        </div>
    </div>
  );
}
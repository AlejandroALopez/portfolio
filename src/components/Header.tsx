import logo from '../assets/Logo.svg';

export default function Header() {
  return (
    <div className="flex flex-row min-w-screen justify-between items-center py-4 px-8 bg-black">
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
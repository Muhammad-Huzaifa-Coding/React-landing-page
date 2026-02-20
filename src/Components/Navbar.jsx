import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-indigo-600">
          Landing Page
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </ul>

        <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700">
          Get Started
        </button>

        <HiOutlineMenuAlt3 className="md:hidden text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;

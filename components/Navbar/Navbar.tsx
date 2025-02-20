import { NavLinks } from "@/constants/constant";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="px-4 py-2 flex items-center gap-4 justify-between border-b border-b-gray-100 shadow-sm relative">
      <Link href={"/"}>Plan Trip</Link>

      <div className="h-full flex items-center justify-between md:hidden ">
        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <ul className="hidden md:flex items-center gap-4">
        {NavLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="uppercase hover:text-sky-500 font-semibold transition-all ease-in-out duration-100"
          >
            {link.text}
          </Link>
        ))}
      </ul>

      <div className="hidden md:flex gap-2 items-center">
        <div className="bg-sky-500/90 flex rounded-full p-1 w-8 h-8 items-center justify-center text-white font-medium tracking-wider">
          GB
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500">Whatsapp, Viber</span>
          <span className="text-sm text-gray-700">+977-9851079682</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

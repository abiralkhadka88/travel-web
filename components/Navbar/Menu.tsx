"use client";

import { NavLinks } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Image
        src={"/menu.png"}
        alt=""
        height={28}
        width={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-white text-white left-0 top-12 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <ul className="flex md:hidden flex-col justify-start  items-center gap-4">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="uppercase text-black hover:text-sky-500 font-semibold transition-all ease-in-out duration-100 text-white"
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;

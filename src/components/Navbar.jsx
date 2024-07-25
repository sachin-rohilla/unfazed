"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbarLinks } from "@/constants/constants";
import { FaArrowRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (link) => {
    const section = link.replace(/\s+/g, "-");
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed flex items-center justify-between top-0 left-0 right-0 z-50 bg-white shadow-lg px-4 lg:px-32 py-2 lg:py-4 text-sm">
        <div className="flex items-center gap-1">
          <IoMenu
            className="lg:hidden cursor-pointer"
            size={30}
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>
        </div>
        <ul className="lg:flex items-center hidden font-medium justify-evenly w-full">
          {navbarLinks.map((link) => (
            <li
              key={link}
              className="hover:text-orange hover:underline cursor-pointer"
              onClick={() => handleClick(link)}
            >
              {link}
            </li>
          ))}
        </ul>
        <button
          id="button"
          title="Find your Therapist"
          className="text-white flex items-center gap-2 text-xs rounded-md p-2 bg-orange text-nowrap"
        >
          <span className="hidden lg:block">Find your Therapist</span>{" "}
          <span className="lg:hidden">Therapist</span> <FaArrowRight />
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/40 z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-3/5 h-full bg-white z-20 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-menu-button"
              title="close"
              className="w-full flex justify-end"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IoIosCloseCircle className="text-xl md:text-2xl text-orange" />
            </button>
            <ul className="flex flex-col gap-4 font-medium justify-evenly w-full">
              {navbarLinks.map((link) => (
                <li
                  key={link}
                  onClick={() => {
                    handleClick(link);
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-orange hover:underline w-fit cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

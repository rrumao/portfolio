import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const sideMenu = useRef();

  const openMenu = () => {
    sideMenu.current.style.transform = "translate(-16rem)";
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = "translate(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.bg_header}
          alt="Background Gradient"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <div>
          <a href="#top">
            <Image
              src={assets.logo}
              alt="logo"
              className="
                cursor-pointer mr-14"
              width={150}
              height={200}
            />
          </a>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-60">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">Experiences</a>
            </li>
            <li>
              <a href="#proj">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 px-8 py-1 border border-gray-500 rounded-full">
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-rumao-9aa7b021b/"
                className="hidden md:flex items-center gap-3 px-5 py-2"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/ryan-24-7/"
                className="hidden md:flex items-center gap-3 px-5 py-2"
              >
                <FaGithub size={18} />
                Github
              </a>
            </li>
          </ul>
          <button>
            <Image src={assets.moon_icon} alt="dark mode" className="w-6" />
          </button>
          <button className="block md:hidden ml-3 cursor-pointer" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="menu for small screens"
              className="w-6"
            />
          </button>
        </div>
        <div>
          {/* Mobile Menu */}

          <ul
            className="flex md:hidden flex-col gap-4 px-10 py-20 fixed top-0 -right-64 bottom-0 w-64
         z-50 h-screen bg-rose-50 transition duration-500"
            ref={sideMenu}
          >
            <div className="absolute right-6 top-6">
              <Image
                src={assets.close_black}
                alt="Close Menu"
                className="w-5 cursor-pointer"
                onClick={closeMenu}
              />
            </div>
            <li>
              <a href="#top" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About Me</a>
            </li>
            <li>
              <a href="#work" onClick={closeMenu}>Experiences</a>
            </li>
            <li>
              <a href="#proj" onClick={closeMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact Me</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ryan-rumao-9aa7b021b/" onClick={closeMenu}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.github.com/ryan-24-7/" onClick={closeMenu}>Github</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

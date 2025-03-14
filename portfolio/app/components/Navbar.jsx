import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
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
              <a href="#top">
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                About Me
              </a>
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
        <div>
          <ul className="hidden md:flex items-center gap-2 lg:gap-4 px-8 py-1 border border-gray-500 rounded-full">
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-rumao-9aa7b021b/"
                className="hidden lg:flex items-center gap-3 px-5 py-2"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/ryan-24-7/"
                className="hidden lg:flex items-center gap-3 px-5 py-2"
              >
                <FaGithub size={18} />
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

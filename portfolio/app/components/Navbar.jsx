import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
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
        <div>
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-35 
                cursor-pointer mr-14"
          />
        </a>
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="https://www.linkedin.com/in/ryan-rumao-9aa7b021b/" className="flex items-center gap-2 rounded-md"><FaLinkedin size={18}/>LinkedIn</a>
          </li>
          <li>
            <a href="https://www.github.com/ryan-24-7/" className="flex items-center gap-2 ounded-md"><FaGithub size={18}/>Github</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

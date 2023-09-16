import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <div className="flex justify-center items-center">
            <img src={headerLogo} alt="Logo" width={130} height={29}></img>{" "}
            <h1 className="text-4xl font-palanquin font-semibold text-sky-400 px-6">
              SneakerX
            </h1>
          </div>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

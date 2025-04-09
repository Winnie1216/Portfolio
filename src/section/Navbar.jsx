import React, { useState } from "react";
import { navLinks } from "../constants/index";

const NavItems = ({ onClick = () => {} }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a
            href={item.href}
            className="nav-li_a text-neutral-500 hover:text-white transition-colors text-3xl"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50  bg-black/90">
        <div className="flex py-5 max-w-7xl justify-between items-center mx-auto c-space">
          <a
            href="/"
            className="text-neutral-500 hover:text-white transition-colors text-3xl font-bold"
          >
            Winnie
          </a>
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="cursor-pointer flex lg:hidden md:hidden "
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6 text-neutral-500 hover:text-white focus:outline-none"
            />
          </button>
          <nav className="hidden lg:flex md:flex">
            <NavItems />
          </nav>
        </div>
        <div
          className={`nav-sidebar lg:hidden md:hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="w-full pl-8 py-4 items-center justify-items-start bg-gray-700/25">
            <NavItems onClick={() => setIsOpen((prev) => !prev)} />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

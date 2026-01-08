import { navLink } from "../constant";
import { Button } from "./Button";
import logo from "../assets/images/logo.svg";
import open_img from "../assets/images/icon-hamburger.svg";
import close_img from "../assets/images/icon-close.svg";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Full Page Overlay: Only shows when menu is open */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-transparent to-black/50 z-[40] transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <nav className="flex justify-between items-center py-12 relative z-[50]">
        <img src={logo} alt="logo" className="w-32" />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLink.map((li) => (
            <li key={li}>
              <a
                href="#"
                className="font-medium text-sm hover:text-dark-gray-blue/50 transition-all"
              >
                {li}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden md:block">Get Started</Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? close_img : open_img} alt="menu" />
        </button>

        {/* 2. Smooth Dropdown Menu */}
        <div
          className={`
          absolute top-28 left-6 right-6 bg-white p-10 rounded shadow-2xl md:hidden
          transition-all duration-300 origin-top
          ${
            isMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }
        `}
        >
          <ul className="flex flex-col items-center gap-6 font-bold text-dark-blue">
            {navLink.map((li) => (
              <li key={li}>
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                  {li}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

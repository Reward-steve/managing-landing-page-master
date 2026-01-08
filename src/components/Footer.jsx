import { footerLink, socialIcons } from "../constant/index";
import logo from "../assets/images/logo.svg";
import bg from "../assets/images/bg-simplify-section-desktop.svg";

export const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-bright-orange py-20 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src={bg}
            alt=""
            className="absolute top-1/2 left-0 -translate-y-1/2 w-auto h-[150%] max-w-none opacity-10 md:opacity-100"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <h2 className="text-white text-4xl md:text-5xl font-bold md:max-w-xl text-center md:text-left leading-tight">
            Simplify how your team works today.
          </h2>
          <div>
            <button className="bg-white text-bright-orange px-10 py-4 rounded-full font-bold hover:text-bright-orange/70 shadow-2xl transition-all hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-dark-gray-blue py-16 text-white font-vietnam">
        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row md:justify-between gap-12">
          {/* SECTION 1: Logo & Socials (Bottom on Mobile) */}
          <div className="flex flex-col-reverse md:flex-col justify-between items-center md:items-start gap-12">
            {/* Logo - Inverted for dark background */}
            <img src={logo} alt="Manage" className="brightness-0 invert h-6" />

            {/* Social Icons - Center on mobile, left on desktop */}
            <div className="flex justify-between w-full md:w-auto md:gap-4">
              {socialIcons.map((icon) => (
                <a key={icon.id} href="#" className="group">
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-8 h-8 md:w-5 md:h-5 transition-all group-hover:filter group-hover:sepia group-hover:saturate-[10000%] group-hover:hue-rotate-[320deg]"
                  />
                </a>
              ))}
            </div>

            {/* Copyright (Mobile Only) */}
            <p className="md:hidden text-dark-grayish-blue text-xs opacity-50">
              Copyright 2020. All Rights Reserved
            </p>
          </div>

          {/* SECTION 2: Navigation Links (Middle on Mobile) */}
          <div className="grid grid-cols-2 gap-x-20 md:gap-x-32 text-left">
            <div className="flex flex-col gap-4">
              {footerLink[0].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm hover:text-bright-orange transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {footerLink[1].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm hover:text-bright-orange transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* SECTION 3: Newsletter (Top on Mobile) */}
          <div className="flex flex-col justify-between items-center md:items-end gap-12">
            <form className="flex gap-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="Updates in your inbox…"
                className="flex-1 px-6 py-3 rounded-full text-dark-blue text-sm outline-none focus:ring-2 focus:ring-bright-orange"
              />
              <button className="bg-bright-orange px-8 py-3 rounded-full font-bold text-sm hover:opacity-80 transition-all shadow-md">
                Go
              </button>
            </form>

            {/* Copyright (Desktop Only) */}
            <p className="hidden md:block text-dark-grayish-blue text-xs opacity-50">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

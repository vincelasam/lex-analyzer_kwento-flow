import React from "react";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-parchment px-8 py-4 flex justify-between items-center border-2 border-(--kwento-gold)">
      {/* Left Side: Logo and Titles */}
      <div className="flex gap-4">
        {/* Logo Image */}
        <img
          src={logo}
          alt="KwentoFlow Logo"
          className="w-16 h-auto object-contain"
        />

        {/* Title Text */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif font-bold text-2xl text-ink leading-tight">
            KwentoFlow: Lexical Analyzer
          </h1>
          <p className="font-serif text-ink/80italic">
            Weaving Code into Narrative
          </p>
        </div>
      </div>

      {/* Right Side: Navigation Links */}
      {/* Using <nav> for semantic HTML */}
      <nav className="flex items-center gap-8 mt-2 font-serif font-bold text-(--kwento-ink)">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink transition-colors"
        >
          Github
        </a>
        <a href="#" className="hover:text-ink transition-colors">
          KwentoFlow PDF
        </a>

        {/* The Help Icon Circle */}
        <button
          aria-label="Help"
          className="bg-ink text-parchment rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-ink/90 transition-colors"
        >
          ?
        </button>
      </nav>
    </header>
  );
};

export default Header;

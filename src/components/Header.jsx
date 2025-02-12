import { CompanyName, navData } from "../constants";
import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const Navigation = () => (
    <nav
      // Attach the ref to the navigation menu
      className="flex flex-col gap-4 w-[200px] p-8 rounded-lg shadow-xl text-white justify-center items-center hover:cursor-pointer bg-orange-light absolute top-[144%] right-0"
    >
      {navData.map((item, i) => {
        return (
          <a
            onClick={() => setMenuOpen(false)}
            key={i}
            href={item.path}
            className="hover:bg-white hover:text-orange text-center w-full text-xl"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="flex sm:hidden items-center h-[52px] justify-between px-4 py-2 bg-orange text-white font-edo sticky top-0 z-50">
        <h1 className="text-3xl font-bold">{CompanyName}</h1>
        <div className="relative" ref={navRef}>
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              checked={MenuOpen}
              onChange={() => setMenuOpen(!MenuOpen)}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
          {MenuOpen && <Navigation />}
        </div>
      </header>
      {/* <div className="h-[52px]" /> */}
    </>
  );
};

export default Header;
// {navData.map((item) => item.label)}

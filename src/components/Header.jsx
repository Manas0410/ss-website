import { useState } from "react";
import { CompanyName, navData } from "../constants";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className=" flex sm:hidden  items-center h-[52px] justify-between px-4 py-2 bg-orange text-white font-edo sticky top-0 z-50">
        <h1 className="text-3xl font-bold">{CompanyName}</h1>
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
      </header>
      {/* <div className="h-[52px]" /> */}
    </>
  );
};

export default Header;
// {navData.map((item) => item.label)}

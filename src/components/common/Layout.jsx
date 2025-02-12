import React from "react";
import SliderBg from "../slider-bg";
import NavBar from "./Sidebar";
import NvigateOutletButton from "../NvigateOutletButton";
import { CompanyName } from "../../constants";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <SliderBg />
      <NvigateOutletButton />
      <aside className="bg-orange h-screen w-[240px] hidden sm:block">
        <h1 className="font-edo text-white text-6xl text-center my-8">
          {CompanyName}
        </h1>
        <hr />
        <NavBar />
      </aside>
      <div className=" h-full overflow-y-auto bg-muted-foreground w-[calc(100%-240px] sm:w-full ">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;

import React from "react";
import SliderBg from "../slider-bg";
import NavBar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <SliderBg />
      <aside className="bg-orange h-screen w-[330px]">
        <h1 className="font-edo text-white text-6xl text-center mt-8">CRISP</h1>
        <h1 className="font-edo text-white text-6xl text-center mb-4">
          CANVAS
        </h1>
        <hr />
        <NavBar />
      </aside>
      <div
        className=" h-full overflow-y-auto bg-muted-foreground"
        style={{ width: "calc(100% - 330px)" }}
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;

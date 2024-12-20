import React from "react";

const SliderBg = () => {
  return (
    <>
      <img
        src={"/images/bg.png"}
        alt=""
        className="h-screen w-full -z-10 fixed top-0 right-0"
        style={{ objectFit: "cover", width: "calc(100% - 240px)" }}
      />
    </>
  );
};

export default SliderBg;

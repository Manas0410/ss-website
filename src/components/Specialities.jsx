import React from "react";

const icons = [
  "/images/vegan.png",
  "/images/vegan.png",
  "/images/vegan.png",
  "/images/vegan.png",
  "/images/vegan.png",
];

const IconBox = ({ imgUrl }) => {
  return (
    <div className="relative size-[200px] overflow-hidden rounded-full shadow-[0_10px_14px_rgba(0,0,0,0.16)] ">
      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
    </div>
  );
};
const Specialities = () => {
  return (
    <section className="content-container pb-20">
      <h2 className="text-white sm:text-4xl lg:text-6xl text-2xl font-semibold  font-edo text-center my-14 ">
        Our Specialities
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {icons.map((icon, index) => (
            <IconBox imgUrl={icon} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;

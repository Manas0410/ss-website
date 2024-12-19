import CustomSlider from "./components/Slider";
import Specialities from "./components/Specialities";
import About from "./sections/About";

const App = () => {
  return (
    <main>
      <CustomSlider
        images={[
          "/images/carousel1.jpg",
          "/images/carousel2.jpg",
          "/images/carousel3.jpg",
          "/images/carousel4.jpg",
        ]}
      />
      <About />
      <Specialities />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
    </main>
  );
};

export default App;

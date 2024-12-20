import CustomSlider from "./components/Slider";
import Specialities from "./components/Specialities";
import { CarouselImages } from "./constants";
import About from "./sections/About";

const App = () => {
  return (
    <main>
      <CustomSlider images={CarouselImages} />
      <About />
      <Specialities />
    </main>
  );
};

export default App;

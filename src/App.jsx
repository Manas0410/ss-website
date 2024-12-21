import CustomSlider from "./components/Slider";
import Specialities from "./components/Specialities";
import { CarouselImages } from "./constants";
import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Menu from "./sections/Menu";

const App = () => {
  return (
    <main>
      <CustomSlider images={CarouselImages} />
      <About />
      <Specialities />
      <Menu />
      <ContactUs />
    </main>
  );
};

export default App;

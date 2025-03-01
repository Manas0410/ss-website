import CustomSlider from "./components/Slider";
import Specialities from "./components/Specialities";
import { CarouselImages } from "./constants";
import About from "./sections/About";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Menu from "./sections/Menu";

const Home = () => {
  return (
    <main id="home">
      <CustomSlider images={CarouselImages} />
      <About />
      <Specialities />
      <Menu />
      <Gallery />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;

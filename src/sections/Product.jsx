import { useParams } from "react-router-dom";
import { MenuItemsDesc } from "../constants";

const Product = () => {
  const { productName } = useParams();
  const data = MenuItemsDesc[productName];
  return (
    <section className="h-max min-h-screen bg-white w-full px-6 sm:px-12 lg:px-24">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl py-14 font-edo text-center font-semibold text-orange">
        {data.name}
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 items-center mt-6">
        <div className="lg:w-1/2 w-full h-max">
          <img
            src={data.img}
            alt={data.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full p-4 text-heading font-mukta">
          <p className="mb-4">{data.eng}</p>
          <p>{data.hindi}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;

import { useNavigate } from "react-router-dom";
import { Chaats, CustomersFavourite, Puri, Drinks, AddOns } from "../constants";

const ListRenderer = ({ data: { heading, items } }) => {
  const navigate = useNavigate();
  return (
    <div className="font-mukta">
      <h3 className="font-bold mb-4 text-2xl text-orange">{heading}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            onClick={() => navigate(`/product${item.nav}`)}
            key={i}
            className="text-text hover:text-orange-light cursor-pointer flex gap-2 items-center"
          >
            {item.name}
            <img src="/images/icons/link.svg" className=" size-3" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Menu = () => {
  return (
    <section className="bg-white py-20" id="menu">
      <div className="content-container">
        <h2 className="heading-style text-center mb-10">Our Menu</h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-8">
            <ListRenderer data={Chaats} />
            <ListRenderer data={CustomersFavourite} />
          </div>
          <div className="flex flex-col gap-8">
            <ListRenderer data={Puri} />
            <ListRenderer data={Drinks} />
            <ListRenderer data={AddOns} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

import { Chaats, CustomersFavourite, Puri, Drinks, AddOns } from "../constants";

const ListRenderer = ({ data: { heading, items } }) => {
  return (
    <div className="font-mukta">
      <h3 className="font-bold mb-4 text-2xl text-orange">{heading}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="text-text ">
            {item}
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

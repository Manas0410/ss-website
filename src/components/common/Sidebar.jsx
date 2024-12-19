const navData = [
  {
    label: "Home",
    path: "/#home",
  },
  {
    label: "About",
    path: "/#about",
  },
  {
    label: "Menu",
    path: "/#menu",
  },
  {
    label: "Contact Us",
    path: "/#contact",
  },
];

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-4 text-white justify-center items-center mt-10 hover:cursor-pointer ">
      {navData.map((item) => {
        return (
          <a
            href={item.path}
            className="hover:bg-white hover:text-orange text-center w-full text-xl"
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;

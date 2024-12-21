const Link = ({ url, logo }) => {
  return (
    <a href={url} target="_blank" className=" cursor-pointer">
      <img src={logo} alt="" className="size-6" />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-orange-light w-full h-14 text-white">
      <div className="content-container flex justify-between items-center h-full">
        <div className="text-xs">
          <p>Copyright © 2022 The CRISP CANVAS. All Rights Reserved</p>
          <p>
            <span>crispcanvas3@gmail.com | +91 123456789</span>
          </p>
        </div>
        <nav className="flex gap-2 justify-end">
          <Link url="" logo="/images/insta.svg" />
          <Link url="" logo="/images/insta.svg" />
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const VisitUs = () => {
  return (
    <div className=" h-max min-h-screen w-full bg-white">
      <h2 className="heading-style text-center py-6">Visit Outlet</h2>
      <address className="text-center px-10">
        324,E BLOCK, SHYAM NAGAR, Kanpur, Uttar Pradesh 208013
      </address>
      <div className="w-full h-max p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32717.83526285726!2d80.33949509608726!3d26.4144737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c413334f92287%3A0x16ad48308c0a7d9b!2sBHARTIYA%20CHHAPPAN%20BHOG!5e1!3m2!1sen!2sin!4v1740829739259!5m2!1sen!2sin"
          className="w-full h-[400px]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2 className="heading-style text-center py-6">Order Online</h2>
      <div className="flex justify-center gap-4">
        <a href="">
          <img
            className="size-14 rounded-lg"
            src="/images/icons/zomato.png"
            alt="zomato"
          />
        </a>
        <a href="">
          <img
            className="size-14 rounded-lg"
            src="/images/icons/swiggy.png"
            alt="swiggy"
          />
        </a>
      </div>
    </div>
  );
};

export default VisitUs;

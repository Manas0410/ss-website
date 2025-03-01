import { useNavigate } from "react-router-dom";

const NvigateOutletButton = () => {
  return (
    <div className="fixed bottom-16 right-8 z-50">
      <PlantButton />
    </div>
  );
};

export default NvigateOutletButton;

const PlantButton = () => {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate("/visit")}>
      <p className="flex gap-2 text-white">
        <span>Visit Outlet</span>
        <img src="/images/navButton/right.svg" className="img-slide" alt="" />
      </p>
      <div className="icon-1">
        <img src="/images/navButton/icon1.svg" alt="" />
      </div>
      <div className="icon-2">
        <img src="/images/navButton/icon2.svg" alt="" />
      </div>
      <div className="icon-3">
        <img src="/images/navButton/icon3.svg" alt="" />
      </div>
      <div className="icon-4">
        <img src="/images/navButton/icon4.svg" alt="" />
      </div>
      <div className="icon-5">
        <img src="/images/navButton/icon5.svg" alt="" />
      </div>
    </button>
  );
};

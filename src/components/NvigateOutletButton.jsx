const NvigateOutletButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <PlantButton />
    </div>
  );
};

export default NvigateOutletButton;

const PlantButton = () => {
  return (
    <button>
      Plant based
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

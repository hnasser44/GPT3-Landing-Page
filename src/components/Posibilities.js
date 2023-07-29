import PossibilityImage from "../assets/possibility.png";

const Posibilities = () => {
  return (
    <div className="px-8 py-8 md:px-24 mt-40 flex flex-col gap-8 lg:flex-row lg:items-end">
      <img src={PossibilityImage} alt="" className="lg:w-[650px]" />
      <div className="text-color-text flex flex-col gap-5 items-start">
        <button>Request Early Access to Get Started</button>
        <h1 className="gradient text-transparent bg-clip-text text-[30px] font-extrabold">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <button className="text-color-button-bg">
          Request Early Access to Get Started
        </button>
      </div>
    </div>
  );
};

export default Posibilities;

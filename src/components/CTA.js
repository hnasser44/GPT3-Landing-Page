const CTA = () => {
  return (
    <div className="px-8 py-8 md:px-24 mt-32">
      <div className="cta rounded-lg p-7 flex flex-col gap-5 md:flex-row lg:justify-between">
        <div className="space-y-3">
          <h1>Request Early Access to Get Started</h1>
          <h2 className="font-extrabold text-[20px]">
            Register Today & start exploring the endless possibilites
          </h2>
        </div>
        <button className="text-white bg-black rounded-2xl font-extrabold w-[170px] mx-auto py-3 lg:justify-self-end lg:mx-0">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;

import AIImage from "../assets/ai.png";
import PeopleImage from "../assets/people.png";

const HeroSection = () => {
  return (
    <section className="px-8 py-8 md:px-24 text-color-text mt-24 flex flex-col lg:flex-row lg:gap-[80px]">
      <div className="flex flex-col justify-center gap-[32px]">
        <h1 className="text-transparent bg-clip-text text-[50px] font-extrabold tracking-[-2.48px] leading-[60px] lg:text-[60px] lg:leading-[80px]">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p className="lg:text-[20px]">
          Yet bed any for travelling assistance indulgence unpleasing. not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachement. Party we years to order allow
          asked of.
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Your email Address"
            className="bg-input-bg text-input-text rounded-md w-full px-[20px]"
          />
          <button className="btn-input text-white bg-color-button-bg rounded-md p-4 w-full basis-1/2 focus:">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 lg:flex-row">
          <img src={PeopleImage} alt="" />
          <span className="text-[15px] text-white">
            1,600 people requested access to vist in the last 24 hours
          </span>
        </div>
      </div>
      <img src={AIImage} alt="" className="mt-10 lg:w-[667px] lg:h-[701px]" />
    </section>
  );
};

export default HeroSection;

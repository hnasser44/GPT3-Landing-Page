import GPT3Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-color-footer text-white px-8 py-8 md:px-24">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="gradient text-transparent bg-clip-text text-[32px] md:text-[55px] md:w-[700px] w-[400px] mx-auto text-center">
          Do you want to step in to the future before others
        </h1>
        <button className="border-2 border-white p-4">
          Request Early Access
        </button>
      </div>

      <div className="mt-36 flex flex-col gap-10 md:flex-row">
        <div className="space-y-3 flex-1">
          <img src={GPT3Logo} alt="" />
          <p className="text-[12px]">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="space-y-5 flex-1">
          <h2 className="font-extrabold text-[18px]">Links</h2>
          <ul className="space-y-4 text-[13px]">
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-5 flex-1">
          <h2 className="font-extrabold text-[18px]">Company</h2>
          <ul className="space-y-4 text-[13px]">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="space-y-5 flex-1">
          <h2 className="font-extrabold text-[18px]">Get in Touch</h2>
          <ul className="space-y-4 text-[13px]">
            <li>Crechterwood K12 182 DK Alknjkcb</li>
            <li>085-0132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <p className="self-center text-center mt-20">
        @2023 GPT-3. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

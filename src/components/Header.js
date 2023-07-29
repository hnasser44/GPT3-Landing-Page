import GPT3Logo from "../assets/logo.svg";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header className="px-8 py-8 md:px-24 text-color-text flex items-center justify-between">
      <div className="flex gap-[68px]">
        <img src={GPT3Logo} alt="GPT3 Logo" />
        <ul className="text-white text-[18px] items-center justify-center gap-[54px] hidden lg:flex">
          <li>Home</li>
          <li>What is GPT?</li>
          <li>Open AI</li>
          <li>Case Studies</li>
          <li>Libary</li>
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-6 text-white text-[18px]">
        <button>Sign in</button>
        <button className="bg-color-button-bg w-[152px] h-[58px] flex-shrink-0 rounded-md">
          Sign up
        </button>
      </div>
      <HamburgerIcon />
    </header>
  );
};

export default Header;

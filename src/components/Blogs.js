import Blog1Icon from "../assets/blog01.png";
import Blog2Icon from "../assets/blog02.png";
import Blog3Icon from "../assets/blog03.png";
import Blog4Icon from "../assets/blog04.png";
import Blog5Icon from "../assets/blog05.png";

const Blogs = () => {
  const BlogIcons = [Blog1Icon, Blog2Icon, Blog3Icon, Blog4Icon, Blog5Icon];
  return (
    <section className="px-8 py-8 md:px-24 mt-32">
      <h1 className="gradient text-transparent bg-clip-text text-[35px]">
        A lot is happening, We are blogging about it
      </h1>
      <div className="mt-20 flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center lg:grid lg:grid-cols-3 blogs-container">
        {BlogIcons.map((icon, index) => (
          <div
            key={index}
            className={`blog bg-color-footer rounded-md md:w-[320px] lg:w-[380px] ${
              index === 0 ? "lg:row-span-2" : ""
            }`}
          >
            <img src={icon} alt="" className="h-30 w-full" />
            <div className="p-5 text-white flex flex-col items-start justify-between gap-20">
              <div className="space-y-2">
                <h1 className="text-white">Sept 26, 2021</h1>
                <h2 className="lg:text-[20px]">
                  GPT-3 and Open AI is the Future. Let us explore how it is?
                </h2>
              </div>
              <button>Read Full Article</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

import AtlassianImage from "../assets/atlassian.png";
import GoogleImage from "../assets/google.png";
import SlackImage from "../assets/slack.png";
import ShopifyImage from "../assets/shopify.png";
import DropboxImage from "../assets/dropbox.png";

const Companies = () => {
  const companies = [
    GoogleImage,
    SlackImage,
    AtlassianImage,
    DropboxImage,
    ShopifyImage,
  ];

  return (
    <div className="px-8 py-8 md:px-24 mt-32 flex flex-wrap items-center justify-center gap-10">
      {companies.map((company, index) => (
        <img key={index} src={company} alt="company" className="" />
      ))}
    </div>
  );
};

export default Companies;

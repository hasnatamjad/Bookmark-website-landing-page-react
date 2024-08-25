import Heading from "./Heading";
import Paragraph from "./Paragraph";

import chromeLogo from "../assets/images/logo-chrome.svg";
import fireFoxLogo from "../assets/images/logo-fireFox.svg";
import operaLogo from "../assets/images/logo-opera.svg";
import dots from "../assets/images/bg-dots.svg";

const itemDetailsOne = {
  image: chromeLogo,
  title: "Add to Chrome",
  desc: "Minimum Version 62",
  url: "/",
  button: "Add & Install Extension",
  bgDots: dots,
};
const itemDetailsTwo = {
  image: fireFoxLogo,
  title: "Add to FireFox",
  desc: "Minimum Version 55",
  url: "/",
  button: "Add & Install Extension",
  bgDots: dots,
};
const itemDetailsThree = {
  image: operaLogo,
  title: "Add to Opera",
  desc: "Minimum Version 42",
  url: "/",
  button: "Add & Install Extension",
  bgDots: dots,
};

function Extentions({ openModal }) {
  return (
    <>
      <section id="Download">
        <div className="container mx-auto px-6">
          <Heading className={`text-3xl md:text-4xl`}>
            Download The Extension
          </Heading>
          <Paragraph>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </Paragraph>
          <div className="download-box py-32">
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
              <DownloadCard
                itemDetails={itemDetailsOne}
                openModal={openModal}
              />
              <DownloadCard
                itemDetails={itemDetailsTwo}
                className={`md:mt-8`}
                openModal={openModal}
              />
              <DownloadCard
                itemDetails={itemDetailsThree}
                className={`md:mt-16`}
                openModal={openModal}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DownloadCard({ itemDetails = {}, className = "", openModal }) {
  console.log(itemDetails);
  return (
    <div className={`w-full  md:w-1/3`}>
      <div
        className={`flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg ${className}`}
      >
        <div className="flex justify-center">
          <img src={itemDetails.image} alt={itemDetails.title} />
        </div>
        <h5 className="pt-6 text-xl font-bold">{itemDetails.title}</h5>
        <p className="text-gray-400">{itemDetails.desc}</p>
        <div className={` px-6 capitalize`}>
          <img src={itemDetails.bgDots} className="pb-6" />
          <a
            onClick={openModal}
            className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue cursor-pointer"
          >
            {itemDetails.button}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Extentions;

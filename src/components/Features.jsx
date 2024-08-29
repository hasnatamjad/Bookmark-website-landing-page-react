import { useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import image1 from "../assets/images/illustration-features-tab-1.svg";
import image2 from "../assets/images/illustration-features-tab-2.svg";
import image3 from "../assets/images/illustration-features-tab-3.svg";
import Background from "./Background";
// import { useState } from "react";

const tabs = [
  {
    id: 1,
    tabButton: "Simple Bookmarking",
    title: "Bookmark in one click",
    image: image1,
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    buttonText: "More Info",
    url: "/",
  },
  {
    id: 2,
    tabButton: "Fast Searching",
    title: "Intelligent search",
    image: image2,
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    buttonText: "More Info",
    url: "/",
  },
  {
    id: 3,
    tabButton: "Easy Sharing",
    title: "Share your bookmarks",
    image: image3,
    description:
      "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
    buttonText: "More Info",
    url: "/",
  },
];

function Features({ openModal }) {
  return (
    <>
      <section id="Features">
        <div className="container relative px-4 py-6 mx-auto mb-32 mt-20">
          <Heading>Features</Heading>
          <Paragraph>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </Paragraph>
          <Tabs tabsData={tabs} openModal={openModal} />
        </div>
      </section>
    </>
  );
}

function Tabs({ tabsData, openModal }) {
  const [activeTab, setActiveTab] = useState(0);
  function handleClick(index) {
    setActiveTab(index);
  }
  return (
    <>
      <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
        {tabsData.map((item, index) => (
          <div
            key={item.tabButton}
            className={`flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0  hover:text-softRed md:w-1/3 tab  `}
            onClick={() => handleClick(index)}
          >
            <div
              className={`py-5 ${
                activeTab === index ? "border-b-4 border-softRed" : ""
              } `}
            >
              {item.tabButton}
            </div>
          </div>
        ))}
      </div>
      <TabContent
        tabsData={tabsData}
        openModal={openModal}
        active={activeTab}
      />
    </>
  );
}

function TabContent({ tabsData, active, openModal }) {
  let item = tabsData[active];

  return (
    <div className="container relative mx-auto">
      <div className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1">
        <div className="flex justify-center md:w-1/2">
          <img src={item.image} className="relative z-10" alt={item.title} />
          <div className="hidden md:block">
            <Background rotate={`rotate-180`} left={`-38%`} top={`7rem`} />
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <h3 className="mt-20 text-3xl font-semibold text-center md:mt-0 md:text-left">
            {item.title}
          </h3>
          <Paragraph className={`lg:text-left mx-0`}>
            {item.description}
          </Paragraph>
          <div className="mx-auto md:mx-0">
            <a
              onClick={openModal}
              className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2 cursor-pointer"
            >
              {item.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

// border-softRed border-b-4

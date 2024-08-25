import Heading from "./Heading";
import Paragraph from "./Paragraph";
import iconArrow from "../assets/images/icon-arrow.svg";
import { useState } from "react";

const faqData = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates.",
  },
  {
    question: "Is there other Chromuim extension?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates.",
  },
  {
    question: "How to request a new browser?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates.",
  },
];

function FAQs() {
  return (
    <>
      <section id="FAQs">
        <div className="container mx-auto">
          <Heading className={`text-3xl md:text-4xl`}>
            Frequentyl Asked Questions
          </Heading>
          <Paragraph>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </Paragraph>
        </div>
        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            <Accordion faqData={faqData} arrow={iconArrow} />
          </div>
        </div>
      </section>
    </>
  );
}

function Accordion({ faqData, arrow }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      {faqData.map((item, index) => (
        <AccordionContent
          key={index}
          index={index}
          data={item}
          arrow={arrow}
          onClick={toggleAccordion}
          openIndex={openIndex}
        />
      ))}
    </div>
  );
}

function AccordionContent({ index, data, arrow, onClick, openIndex }) {
  const isOpen = openIndex === index;
  return (
    <div className="py-1 border-b outline-none group">
      {/* question */}

      <div
        className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
        onClick={() => onClick(index)}
      >
        <div
          className={`${
            isOpen ? "text-softBlue font-medium" : " group-hover:text-softBlue"
          } transition duration-500 ease  `}
        >
          {data.question}
        </div>
        <div
          className={`transition duration-500 ease ${
            isOpen ? "rotate-180 text-softBlue" : "group-hover:text-softBlue"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            ></path>
          </svg>
        </div>
      </div>
      {/* answer */}

      {openIndex === index && (
        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen ease">
          <p className="py-2 text-justify text-gray-400">{data.answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQs;

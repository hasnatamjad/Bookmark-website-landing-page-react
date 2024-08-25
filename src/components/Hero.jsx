import heroImage from "../assets/images/illustration-hero.svg";
import Background from "./Background";
// import { children } from "react";

function Hero({ openModal }) {
  return (
    <>
      <div className="container flex flex-col-reverse mx-auto lg:flex-row lg:mb-0 ">
        {/* content */}
        <div className="flex flex-col space-y-10 lg:mt-10 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex space-x-5  flex-row  items-center justify-center md:justify-center lg:justify-start">
            <HeroButton
              className="bg-softBlue text-white border-softBlue hover:bg-white hover:text-softBlue"
              openModal={openModal}
            >
              Get It On Chrome
            </HeroButton>
            <HeroButton openModal={openModal}>Get It On FireFox</HeroButton>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          {/* <Background /> */}

          <img
            src={heroImage}
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </>
  );
}

function HeroButton({
  children,
  className = `text-black bg-gray-300 border-gray-300 hover:bg-white hover:text-gray-600`,
  openModal,
}) {
  return (
    <>
      <a
        onClick={openModal}
        className={`p-4 text-sm font-semibold rounded border-2 md:text-base shadow-sm cursor-pointer ${className}`}
      >
        {children}
      </a>
    </>
  );
}

export default Hero;

// p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600

// px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white

// px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2

// block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue

// inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90

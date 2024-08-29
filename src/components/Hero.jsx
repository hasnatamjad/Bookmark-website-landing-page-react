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
          <div className="hidden md:block">
            <Background />
          </div>

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

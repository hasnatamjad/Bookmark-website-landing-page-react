import Extentions from "./components/Extentions";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import { useEffect } from "react";
import { useState } from "react";

import "@fontsource/rubik";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  let timeoutId = 1400;

  function openModal() {
    setIsOpen(false);
    setIsOpen(true);

    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 1400);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className="overflow-x-hidden">
      <Navbar openModal={openModal} />
      <Hero openModal={openModal} />
      <Features openModal={openModal} />
      <Extentions openModal={openModal} />
      <FAQs />
      <Newsletter openModal={openModal} />
      <Footer />
      <Modal isOpen={isOpen} onClose={closeModal} duration={timeoutId} />
    </div>
  );
}

export default App;

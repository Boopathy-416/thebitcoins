import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import BarterSystem from "./components/pages/BarterSystem";
import CommodityMoney from "./components/pages/CommodityMoney";
import PreciousMetals from "./components/pages/PreciousMetals";
import PaperMoney from "./components/pages/PaperMoney";
import Coinage from "./components/pages/Coinage";
import GoldStandard from "./components/pages/GoldStandard";
import UsDollars from "./components/pages/UsDollars";
import Bitcoin from "./components/pages/Bitcoin";
import ContactUs from "./components/pages/ContactUs";
import CustomCursor from "./components/customcursor/CustomCursor";

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <Home />,
    <BarterSystem />,
    <CommodityMoney />,
    <PreciousMetals />,
    <Coinage />,
    <PaperMoney />,
    <GoldStandard />,
    <UsDollars />,
    <Bitcoin />,
    <ContactUs />,
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      const direction = e.deltaY > 0 ? 1 : -1; // Detect scroll direction
      const nextSection = Math.min(
        Math.max(currentSection + direction, 0),
        sections.length - 1
      );

      if (nextSection !== currentSection) {
        setIsTransitioning(true); // Trigger transition effect
        setTimeout(() => {
          setCurrentSection(nextSection);
          setIsTransitioning(false); // Remove transition effect after animation
        }, 1000); // 1 second transition duration
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, sections.length]);

  return (
    <>
      {/* Include custom cursor */}
      <CustomCursor />

      {/* Fixed background container */}
      <div
        style={{
          overflow: "hidden",
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <img
          src="/src/assets/bg motion.webp"
          alt="smoke background"
          className="bg-cover w-full h-full object-cover"
        />
        <div className="smoke-layer"></div>
      </div>

      {/* Transition black screen */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Section container */}
      <div className="relative h-screen w-full  items-center justify-center" style={{
        position:"fixed",
      }}>
        {sections[currentSection]}
      </div>
    </>
  );
}

export default App;

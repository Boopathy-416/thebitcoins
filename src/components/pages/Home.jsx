import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/Home.css";
import FadeImage from "../customcursor/FadeImage";

const Home = () => {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth ;
      setHeight(width * 0.07); // 16:9 ratio (9/16 = 0.5625)
    };

    updateHeight(); // Set the initial height
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const handleScroll = () => {
    const targetSection = document.getElementById("targetSection");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max flex flex-col  ">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">THEBITCOIN.COM</h1>

        <a
          href="#ContactUs"
          className="hidden sm:inline-block font-thin text-white"
        >
          Contact Us
        </a>

        <a href="#ContactUs" className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </a>
      </header>
      <div className="flex-grow absolute flex flex-col items-center  justify-center p-4 sm:px-6 lg:px-8 text-center justify-center w-full ">
    
        <FadeImage
         
         text={ <p className="m-0 mt-5 p-2">
           <b>ROME</b> was Not Built in a day, But history can be made
           overnight.<br></br> it took <b>11,000</b> years of trade before{" "}
           <tt>BITCOIN</tt> was invented.<br></br> it took us just{" "}
           <tt>15YEARS</tt> to embark on creating history
         </p>}
     
         direction="up"
    
       />
      
       <p className="i">SCROLL</p>
       <img
         src="/src/assets/bg buttonscroll.png"
         class=" mx-auto d-block img-fulid "
         alt="scroll btn"
         onClick={handleScroll}
         style={{
           cursor: "pointer",
           width: "14px",
           animation: "arrow-up 1s infinite ease-in-out",
         }}
       ></img>
   
        </div>
         

      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            left: 0,
            display: "flex",
            float: "left",
            opacity: 0.8,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/leftarchome.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          ref={boxRef}
          style={{
            position: "absolute",
            height: "auto",
            width: "auto",
            bottom: 0,
            zIndex: 2,
          }}
        >
          {" "}
          <img
            src="/src/assets/homedown.webp"
            className="img-fluid"
            alt="Responsive image"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: 0,
            opacity: 0.8,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/rightarchome.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

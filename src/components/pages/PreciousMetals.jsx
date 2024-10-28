import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customcursor/FadeImage";

function PreciousMetals() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      setHeight(width * 0.19); // 16:9 ratio (9/16 = 0.5625)
    };

    updateHeight(); // Set the initial height
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max  text-white flex flex-col">
      <main className=" p-4 absolute w-full flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year m-0 p-0">C.3,000 BCE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1>
              PRECIOUS <span>Metals</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              The evolution of trade necessitated a more versatile and
              universally accepted from of <br></br> payment. This led to the
              emegence of currency, initially in the form of small, shiny
              objects-bronze, <br></br> sliver and gold.
            </p>
          }
          direction="up"
        />
      </main>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: 1,
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
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/preciousLFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "35%",
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/preciousLFTman.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ width: "auto", objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            zIndex: 1,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/preciousRFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "auto", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          ref={boxRef}
          style={{
            zIndex: 2,
            position: "absolute",
            width: "35%",
            right: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/preciousRFTman.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "auto", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PreciousMetals;

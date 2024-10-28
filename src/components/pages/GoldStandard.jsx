import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customcursor/FadeImage";

export default function GoldStandard() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      setHeight(width * 0.2); // 16:9 ratio (9/16 = 0.5625)
    };

    updateHeight(); // Set the initial height
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max  text-white flex flex-col">
      <main className=" w-full absolute flex-grow flex flex-col items-center justify-center  p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year m-0 p-0">C.1870 CE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1>
              GOLD <span>STANDARD</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              The gold standard was a monetary system where a country's currency
              value<br></br> was directly linked to a specific amount of gold.
              Governments agreed to<br></br> convert currency into gold at a
              fixed rate, ensuring that paper money could<br></br> be exchanged
              for physical gold.
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
            src="/src/assets/goldLFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "35%",
          }}
        >
          <FadeImage
            src="/src/assets/goldstdLFTman.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ width: "100%", objectFit: "contain" }}
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
            src="/src/assets/goldRFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          ref={boxRef}
          style={{
            zIndex: 2,
            position: "absolute",
            bottom: 0,
            width: "35%",
            right: 0,
          }}
        >
          <FadeImage
            src="/src/assets/goldstdRFTman.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customcursor/FadeImage";

function UsDollars() {
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
      <main className="p-4 w-full absolute flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage text={<div className="year m-0 p-0">C.1944</div>} direction="up" />
        <FadeImage
          text={
            <h1>
              US <span>DOLLARS</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              The U.S. dollar became the global standard after World<br></br>{" "}
              War II where most currencies were pegged to the dollar,<br></br>{" "}
              which was convertible to gold. This made the U.S. dollar<br></br>{" "}
              the world's reserve currency, providing stability in<br></br>{" "}
              international trade. The gold convertibility was ended in<br></br>{" "}
              1971, but the dollar remained the dominant global<br></br>
              currency.
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
            src="/src/assets/usdollarsLFT.webp"
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
            src="/src/assets/usdollarsLFTman.webp"
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
            src="/src/assets/usdollarsRFT.webp"
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
            width: "35%",
            right: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/usdollarsRFTman.webp"
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

export default UsDollars;

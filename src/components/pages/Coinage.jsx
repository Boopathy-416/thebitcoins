import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/Coinage.css";
import FadeImage from "../customcursor/FadeImage";

export default function Coinage() {
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
      <main className=" w-full absolute flex-grow flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year m-0 p-0">C.630 BCE</div>}
          direction="up"
        />

        <FadeImage text={<h1>COINAGE</h1>} direction="up" />

        <FadeImage
          text={
            <p className="particle m-0 p-0">
              Ancient Lydians, by stamping a seal on a piece of metal started
              the age<br></br> of coins. <br></br>
              This procedure did nothing to modify the intrinsic value of the
              metal,
              <br></br>
              but it simplified the exchange of bullion for anyone willing to
              accept the<br></br> stamp’s guarantee.
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
            src="/src/assets/coinageLFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: "40%",
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/coinageLFTman.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
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
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/coinageRFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          ref={boxRef}
          style={{
            zIndex: 1,
            position: "absolute",
            bottom: 0,
            width: "35%",
            right: 0,
          }}
        >
          <FadeImage
            src="/src/assets/coinageRFTman.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

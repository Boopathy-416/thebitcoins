import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/BarterSystem.css";
import FadeImage from "../customcursor/FadeImage";

export default function BarterSystem() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(10);

  useEffect(() => {
    const updateHeight = () => {
      const width = boxRef.current.offsetWidth;
      setHeight(width * 0.18); // 16:9 ratio (9/16 = 0.5625)
    };

    updateHeight(); // Set the initial height
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div
      id="targetSection"
      className="relative min-h-screen min-w-screen max-h-screen min-w-max m-0 p-0 text-white flex flex-col"
    >
      <main className="absolute  flex-grow  flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center w-full ">
        <FadeImage
          text={<div className="year m-0 p-0">c.670 BCE</div>}
          direction="up"
        />
        <FadeImage
          text={
            <h1>
              BARTER <span>system</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              The earliest form of trade, ancient Mesopotamians and Egyptians
              <br></br>
              exchanged goods and services directly, such as trading livestock
              <br></br> for grains or labour for tools.
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
            src="/src/assets/BPLEFT.webp"
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
            height: "auto",
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/BARTERLEFT.webp"
            className="img-fluid"
            direction="right"
            alt="rightarc"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            zIndex: 2,
            position: "absolute",
            height: `${height}%`,
            width: "auto",
            right: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/BPRFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div
          ref={boxRef}
          style={{
            position: "absolute",
            width: "38%",
            right: 0,
            bottom: 0,
            zIndex: 2,
          }}
        >
          <FadeImage
            src="/src/assets/BARTERRFT.webp"
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

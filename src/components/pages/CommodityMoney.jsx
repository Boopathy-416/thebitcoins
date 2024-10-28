import React, { useRef, useState, useEffect } from "react";
import "../Stylepages/CommodityMoney.css";
import FadeImage from "../customcursor/FadeImage";

export default function CommodityMoney() {
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
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max text-white flex flex-col">
      <main className=" w-full absolute p-4 flex-grow  flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center">
        <FadeImage
          text={<div className="year m-0 p-0">c.5,500 BCE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1>
              COMMODITY <span>Money</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              Commodity money developed when societies began using objects
              <br></br> with intrinsic value as currency.<br></br> Ancient
              civilizations like the Sumerians and Egyptians used items{" "}
              <br></br>like grain, cattle, honey or animal pelts.
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
            src="/src/assets/commodityLFT.webp"
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
            left: 0,
            bottom: 0,
          }}
        >
          <FadeImage
            src="/src/assets/coinageLFTman.webp"
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
            src="/src/assets/commodityRFT.webp"
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

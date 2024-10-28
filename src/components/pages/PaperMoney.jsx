import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customcursor/FadeImage";

function PaperMoney() {
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
        <FadeImage
          text={<div className="year m-0 p-0">c.670 BCE</div>}
          direction="up"
        />

        <FadeImage
          text={
            <h1>
              PAPER<span>MONEY</span>
            </h1>
          }
          direction="up"
        />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              The concept of representative money emerged during the Tang
              <br></br> Dynasty (618-907 CE), when the kingdom and merchants
              began <br></br>
              issuing paper notes that represented a claim on a specific amount
              <br></br> of precious metal or goods held in reserve. These early
              banknotes<br></br> were among the first widely used forms of
              representative money.
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
            src="/src/assets/papermonneyLFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="right"
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
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
            src="/src/assets/preciousLFTman.webp"
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
            bottom: 0,
            right: 0,
          }}
        >
          <FadeImage
            src="/src/assets/papermoneyRFT.webp"
            className="img-fluid"
            alt="rightarc"
            direction="left"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
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
            src="/src/assets/papermoneyRFTman.webp"
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

export default PaperMoney;

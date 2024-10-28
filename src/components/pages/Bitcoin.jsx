import React, { useRef, useState, useEffect } from "react";
import FadeImage from "../customcursor/FadeImage";

export default function Bitcoin() {
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
      <main className="p-4 flex-grow absolute flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center w-full ">
        <FadeImage text={<div className="year m-0 p-0">2009</div>} direction="up" />
        <FadeImage text={<h1>BITCOIN</h1>} direction="up" />
        <FadeImage
          text={
            <p className="particle m-0 p-0">
              Operating on a peer-to-peer network without the need for a central
              authority or<br></br> government, bitcoin emerged in 2009.
              <br></br> Using blockchain technology to securely record
              transactions and control the<br></br> creation of new units,
              bitcoin is not backed by any physical asset or government,
              <br></br>
              and its value is determined by supply, demand, and market
              speculation.
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
            bottom: 0,
            display: "flex",
            float: "left",
          }}
        >
          <FadeImage
            src="/src/assets/bitcionleft.webp"
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
            src="/src/assets/bitcoinLFTman.webp"
            className="img-fluid"
            direction="right"
            alt="rightarc"
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
            src="/src/assets/bitcoinright.webp"
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
            width: "35%",
            right: 0,
            bottom: 0,
            zIndex: 2,
          }}
        >
          <FadeImage
            src="/src/assets/bitcoinRHSman.webp"
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

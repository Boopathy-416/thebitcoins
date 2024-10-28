import React from "react";
import "../Stylepages/contact.css";
import FadeImage from "../customcursor/FadeImage";

export default function ContactUs() {
  return (
    <div className="relative min-h-screen min-w-screen max-h-screen min-w-max  flex flex-col  ">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">THEBITCOIN.COM</h1>

        <a href="#ContactUs" className="hidden sm:inline-block text-white ">
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

      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div className="flex-grow absolute z-3  flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8 text-center justify-center w-full ">
          <div className="text-base sm:text-lg lg:text-xl max-w-xl sm:max-w-1xl mb-8 sm:mb-12">
            <p className="years">2020</p>
            <FadeImage
              text={
                <h2>
                  THE <q>BiTCOIN</q>.COM
                </h2>
              }
              direction="up"
            />
            <FadeImage
              text={
                <p className="particle mt-0 mb-4 "> COMING SOON TO YOUR CITY</p>
              }
              direction="up"
            />

            <form action="#">
              <div className="relative  flex items-center">
                <input
                  type="text"
                  id="name-input"
                  required
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 bg-transparent text-white placeholder-grey-700 border-0.01 rounded-full focus:outline-none"
                />
              </div>
              <div className="relative mt-6 flex items-center">
                <input
                  type="email"
                  id="email-input"
                  required
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 bg-transparent text-white placeholder-grey-700 border-0.01  rounded-full focus:outline-none"
                />
              </div>

              <div className="relative mt-6 flex items-center">
                <input
                  type="password"
                  id="password-input"
                  required
                  placeholder="Enter your Location"
                  className="w-full px-4 py-2 bg-transparent text-white placeholder-grey-700 border-0.01  rounded-full focus:outline-none"
                />
              </div>

              <div className="flex justify-center mt-8">
                <button className="w-full py-2 bg-dark text-white  font-bold rounded-full hover:bg-gray-300 focus:outline-none">
                  Submit
                </button>
              </div>

              <div className="text-center mt-4">
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:text-blue-700 ml-1"
                >
                  Back to Home
                </a>
              </div>
            </form>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            height: "auto",
            width: "auto",
            bottom: 0,
            zIndex: 2,
            opacity: 0.7,
          }}
        >
          {" "}
          <FadeImage
            src="/src/assets/contactdown.webp"
            className="img-fluid"
            alt="Responsive image"
            direction="up"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

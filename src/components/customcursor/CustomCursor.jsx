
// src/components/CustomCursor/CustomCursor.js
import React, { useEffect, useState } from 'react';
import './CustomCursor.css'; // Ensure correct path to CSS file

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position as the mouse moves
  const updateCursorPosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor-element"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, -50%)', // To center the image on the cursor
        backgroundImage: `url("/src/assets/cursorsvg.svg")`, // Correct path to your image
      }}
    />
  );
};

export default CustomCursor;

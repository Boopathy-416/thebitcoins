import React, { useRef, useEffect } from 'react';
import '../customcursor/CustomCursor.css';

const FadeImage = ({ src, text, alt, direction = 'right' }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class when the element is in view
            entry.target.classList.add('in-view');
          } else {
            // Optionally remove the class when it's out of view
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <>
      {src ? (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`fade-${direction}`} 
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <p
          ref={imageRef}
          className={`fade-${direction}`}
          style={{ fontSize: '18px', textAlign: 'center', justifyContent: 'center' }}
        >
          {text}
        </p>
      )}
    </>
  );
};

export default FadeImage;

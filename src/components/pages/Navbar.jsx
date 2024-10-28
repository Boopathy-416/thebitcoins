// src/components/Navbar.jsx

import React, { useState } from 'react';
import '../Stylepages/Navbar.css';




const Navbar = () => {


  const [isMobile, setIsMobile] = useState(false);

  // Toggle based on screen width
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <div className="p-4 flex justify-between items-center bg-black">
        <div className=" logo  font-bold text-white " style={{display:"flex",flexDirection:'row',width:"100%",justifyContent:"space-between"}}>
          <div href="#home"><p>THEBITCOIN.COM</p>
          </div>
          <a href="#contact" class="text-white px-3  font-medium  items-end  "style={{textDecoration:"none"}} >  {isMobile ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9 con ">
            <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clip-rule="evenodd" />
          </svg> 
             
            ) :
             (
              'Contact Us'
            )
            }</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

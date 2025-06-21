import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion';

const Blob = () => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ left: event.pageX, top: event.pageY });

      // Update SVG mask position
      // const maskCircle = document.getElementById('mask-circle');
      // if (maskCircle) {
      //   maskCircle.setAttribute('cx', event.pageX);
      //   maskCircle.setAttribute('cy', event.pageY);
      // }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 500,
  //     y: mousePosition.y - 500,
  //   }
  // }

  return (
    <>
      {/* Your existing SVG + new filter definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <mask id="blob-mask">
            <circle id="mask-circle" cx={mousePosition.left} cy={mousePosition.top} r="75" fill="white" />
          </mask>
          <filter id="localized-warp" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.02" numOctaves="3" seed="1" />
            <feDisplacementMap in="SourceGraphic" scale="20" />
          </filter>
          
        </defs>
      </svg>

      {/* Normal grid background */}
      {/* <div className="main-container" /> */}

      {/* Warped grid */}
      <div className="grid-warped" />
    </>
  );
}

export default Blob
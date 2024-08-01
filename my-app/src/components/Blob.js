import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

const Blob = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 500,
      y: mousePosition.y - 500,
    }
  }

  return (
    <motion.div
      className="blob"
      variants={variants}
      animate="default"
      transition={{
        x: {
          duration: 10,
          ease: "linear",
          repeat: 0,
        },
        y: {
          duration: 10,
          ease: "linear",
          repeat: 0,
        },
        default: {
          duration: 10,
          repeat: Infinity,
        },
      }}
    />
  );
}

export default Blob
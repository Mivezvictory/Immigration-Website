
import React, { useState, useEffect } from 'react';
import bg1 from '../assets/bg1.jpeg';
import bg2 from '../assets/bg2.jpeg';
//import bg3 from '../assets/bg3.jpg';
import '../index.css'; // Ensure your CSS is imported for styles
import { Box } from '@mui/material';
const backgrounds = [bg1];

// const imageStyle = {
//   marginTop: "50px", // Make the AppBar transparent

//   height: '80vh',
//   width: '180%',
//   overflow: 'hidden',
// };

export default function SlideshowBackground({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    // <Box sx={imageStyle}>
     <Box >
        <div >
            {backgrounds.map((bg, i) => (
                <img
                key={i}
                src={bg}
                alt=""
                className={`inset-0 object-cover transition-opacity duration-1000 ${
                    i === index ? 'opacity-100' : 'opacity-0'
                }`}
                />
            ))}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex flex-col h-full">
                {children}
            </div>
        </div>
    </Box>
    
  );
}
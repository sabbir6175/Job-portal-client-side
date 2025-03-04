import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";  // Corrected the import from "motion/react" to "framer-motion"
import Team1 from '../../assets/team1.jpg';
import Team2 from '../../assets/team2.jpg';

const Banner = () => {
  // State to store the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate animation values based on screen width
  const getYAnimation = () => {
    if (windowWidth < 768) {
      // Small screen (mobile)
      return [30, 60, 30];  // Smaller vertical range
    } else if (windowWidth < 1024) {
      // Medium screen (tablet)
      return [80, 150, 80];  // Medium vertical range
    } else {
      // Large screen (desktop)
      return [150, 200, 150];  // Larger vertical range
    }
  };

  const getXAnimation = () => {
    if (windowWidth < 768) {
      // Small screen (mobile)
      return [30, 60, 30];  // Smaller horizontal range
    } else if (windowWidth < 1024) {
      // Medium screen (tablet)
      return [80, 150, 80];  // Medium horizontal range
    } else {
      // Large screen (desktop)
      return [150, 200, 150];  // Larger horizontal range
    }
  };

  return (
    <div style={{
      backgroundImage:   "url(https://i.ibb.co.com/hZ1TC20/pexels-fwstudio-33348-129731.jpg)",
    }} className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
        <div className='flex-1 -mt-40'>
          {/* Team1 Image Animation */}
          <motion.img
            animate={{ y: getYAnimation() }}  // Use dynamic Y animation based on screen size
            transition={{ duration: 10, repeat: Infinity }}
            src={Team1}
            className="max-w-full w-40 md:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
          />
          {/* Team2 Image Animation */}
          <motion.img
            animate={{ x: getXAnimation() }}  // Use dynamic X animation based on screen size
            transition={{ duration: 10, delay: 6, repeat: Infinity }}
            src={Team2}
            className="max-w-full w-40 md:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-orange-600 shadow-2xl"
          />
        </div>
        <div className='flex-1 mt-20 md:mt-0'>
          <motion.h1
            animate={{ x: 50 }}
            transition={{ duration: 2, delay: 1, ease: 'easeOut', repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl md:text-4xl font-bold"
          >
            Running New <motion.span animate={{ color: ['#060afa', '#37f11a', '#ee0f08'] }} transition={{ duration: 1, repeat: Infinity }}>Job Apply</motion.span> Now!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn bg-green-400 text-black">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

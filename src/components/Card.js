"use client";
import React from 'react';

import { useState } from "react";

const Card = ({ icon, title, description, margin }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={` p-6 cardCategory rounded-md shadow-md cursor-default mt-5 transition-all duration-300 ${isHovered ? 'bg-greenBg text-white':'bg-white text-black'}`}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <div className={`text-3xl mb-4 transition-colors ${isHovered ? 'text-white':'text-greenBg'}`} >
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2`}>{title}</h3>
      <p
        className={`${isHovered ? "white" : "text-gray-600"} text-justify ${
          margin ? "pt-8" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;

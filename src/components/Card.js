"use client";
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
    <div
      className={`bg-white p-6 rounded-md shadow-md cursor-default mt-5 flex flex-col items-center sm:block transition-all duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? "#00cc99" : "white",
        color: isHovered ? "white" : "black",
      }}
    >
      <div
        className={`text-3xl mb-4`}
        style={{
          color: isHovered ? "white" : "#00cc99",
          transition: "color 0.3s ease-in-out",
        }}
      >
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

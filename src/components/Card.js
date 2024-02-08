import React from 'react';

const Card = ({ icon, title, description, margin }) => {
  return (
    <div className='group'>
      <div className={`p-6 cardCategory bg-white text-black rounded-md shadow-md cursor-default mt-5 
        transition-all duration-500 group-hover:bg-greenBg group-hover:text-white`}>
        <div className={`text-3xl text-greenBg mb-4 transition-colors group-hover:text-white`}>
          {icon}
        </div>
        <h3 className={`text-xl text-black font-bold mb-2 transition-colors group-hover:text-white`}>{title}</h3>  
        <p className={`text-gray-600 text-justify ${margin ? "pt-8" : ""} 
          transition-colors group-hover:text-white`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

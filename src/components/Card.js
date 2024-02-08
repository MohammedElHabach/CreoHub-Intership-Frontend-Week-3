import React from 'react';

const Card = ({ icon, title, description, margin }) => {
  

  return (
    <div className='group'>
      <div className={`p-6 cardCategory transition-all duration-300 bg-white text-black group-hover:bg-greenBg group-hover:text-white rounded-md shadow-md cursor-default mt-5 `}>
        <div className={`text-3xl text-greenBg transition-colors   mb-4  group-hover:text-white `} >
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2  `}>{title}</h3>
        <p className={` text-gray-600 group-hover:text-white text-justify ${ margin ? "pt-8" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

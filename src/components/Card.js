import React from 'react'

const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-5 flex flex-col items-center sm:block">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-justify">{description}</p>
    </div>
  )
}

export default Card
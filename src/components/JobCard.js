import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const JobCard = ({icon,icon2, title, description,img,subtitle}) => {
  return (
    <div className="bg-white p-6 jobCard rounded-md shadow-md mt-5 ">
        <div>
            <img src={`/${img}`} className='w-32 h-20  object-cover ' alt="image for card" />
        </div>
        <div className='pt-5'>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <h4 className='text-gray-600 mt-3 mb-3'>{subtitle}</h4>
            <p className="text-gray-600 text-justify">{description}</p>
        </div>
        <div className='flex items-center gap-x-3 pt-8 text-xs sm:text-sm font-bold  '>
            <div className='bg-grayBg rounded-full px-2 py-1 flex items-center gap-x-2'>{icon}San Francisco,CA</div>
            <div className='bg-grayBg rounded-full px-2 py-1 flex items-center gap-x-2'>{icon2}Full Time</div>
        </div>

        <div className='group'>
          <button className='group-hover:text-green-600 transition-all duration-500 text-greenBg applyNowBtn mt-5 py-5 text-xl font-bold flex items-center'>Apply Now {<KeyboardArrowRightIcon className='group-hover:text-green-600' sx={{color:"#00cc99"}}/>} </button>
        </div>
    </div>
  )
}

export default JobCard
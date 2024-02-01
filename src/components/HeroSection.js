import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SecurityIcon from '@mui/icons-material/Security';
const HeroSection = () => {
  return (
    <section id='hero' >
        <div className='xl:container px-5 mx-auto mt-12  '>
          <div className='flex flex-col   md:items-start items-center space-y-8'>
            <h1 className='text-3xl font-bold text-center '>Search, Find, & Apply</h1>
            <p className='text-center  md:text-justify md:w-1/3 md:text-lg     '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque magni nisi molestias dolor soluta vitae labore, animi officiis, dolore beatae quibusdam quisquam similique ipsam consequuntur, repellat sunt culpa exercitationem.</p>

            <div className='  flex flex-wrap gap-y-6 justify-center items-center space-x-4 md:bg-white md:p-5 md:rounded-md '>
                <input placeholder='Job title or Keyword' type="text" className=' bg-grayBg p-2 w-56 rounded-md border focus:outline-black  placeholder:text-black' />
                <select className=' bg-grayBg p-2 w-40 rounded-md border focus:outline-black '>
                    <option disabled selected hidden value="">Location</option>
                </select>
                <button className='px-6 py-2 rounded-md font-bold bg-greenBg text-white'>Search</button>
            </div>
          </div>
            
        </div>
        <div className='bg-greenBg mt-36 p-40'>
            <SearchIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"70%",left:"10%"}}/>
            <SignalCellularAltIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"90%",left:"7%",transform: 'rotate(5deg)'}}/>
            <SecurityIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"80%",left:"70%",transform: 'rotate(5deg)'}}/> <br />

            
          </div>

    </section>
  )
}

export default HeroSection
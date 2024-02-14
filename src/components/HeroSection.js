import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SecurityIcon from '@mui/icons-material/Security';

const HeroSection = () => {
  
  return (
    <section id='hero'>
        <div  className='heroSection xl:container pt-12 md:pt-0  px-5 md:px-12   mx-auto flex flex-col md:flex-row   '>
          <div className='flex flex-col md:w-3/5    items-center md:flex-row'>
            <div className='space-y-8 w-full'>
              <h1 className='text-4xl font-bold text-center md:text-left '>Search, Find, & Apply</h1>
              <p className='text-center  md:text-justify md:text-lg  md:pr-36    '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque magni nisi molestias dolor soluta vitae labore, animi officiis, dolore beatae quibusdam quisquam similique ipsam consequuntur, repellat sunt culpa exercitationem.</p>

              <div className='flex text-xs space-x-2 sm:text-sm sm:space-x-4  md:space-x-1 lg:space-x-4 xl:p-5 lg:text-base  gap-y-6 justify-center items-center  xl:bg-white  md:mr-32  md:rounded-md  md:justify-between    '>
                  <input placeholder="&#128269;  Job title or keyword" type="text" className=' bg-grayBg p-2   rounded-md border  focus:outline-black  placeholder:text-black' />
                  <select className=' bg-grayBg p-2 rounded-md border focus:outline-black '>
                      <option disabled selected hidden value="">Location</option>
                  </select>
                  <button className='px-3 xl:px-5 py-2 rounded-md font-bold bg-greenBg text-white'>Search</button>
              </div>
            </div>

          </div>
          <div className='hidden bg-greenBg md:w-2/5 rounded-bl-3xl md:flex relative'>
            <SearchIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"10%",left:"17%"}}/>
            <SignalCellularAltIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"27%",left:"75%",transform: 'rotate(5deg)'}}/>
            <SecurityIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"75%",left:"17%",transform: 'rotate(5deg)'}}/> <br /> 
          </div>
            
        </div>
        <div style={{minHeight:"400px"}} className='bg-greenBg relative mt-12  md:hidden'>
            <SearchIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"10%",left:"10%"}}/>
            <SignalCellularAltIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"25%",right:"10%",transform: 'rotate(5deg)'}}/>
            <SecurityIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"50%",right:"76%",transform: 'rotate(5deg)'}}/> <br /> 
        </div>

        

    </section>
  )
}

export default HeroSection
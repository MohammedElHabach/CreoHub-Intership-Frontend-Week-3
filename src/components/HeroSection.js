import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SecurityIcon from '@mui/icons-material/Security';

const HeroSection = () => {
  
  return (
    <section id='hero' className='' >
        <div className='xl:container px-12 mx-auto flex flex-col md:flex-row py-12 md:py-20 md:pb-56 '>
          <div className='flex flex-col md:w-3/5    md:items-start items-center md:flex-row'>
            <div className='space-y-8  '>
              <h1 className='text-4xl font-bold text-center md:text-left '>Search, Find, & Apply</h1>
              <p className='text-center  md:text-justify md:text-lg  md:pr-36    '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque magni nisi molestias dolor soluta vitae labore, animi officiis, dolore beatae quibusdam quisquam similique ipsam consequuntur, repellat sunt culpa exercitationem.</p>

              <div className='flex flex-wrap gap-y-6 justify-center items-center space-x-4 md:bg-white md:p-5 md:mr-32  md:rounded-md  md:justify-start    '>
                  <input placeholder="&#128269;  Job title or keyword" type="text" className=' bg-grayBg p-2 w-56 rounded-md border focus:outline-black  placeholder:text-black' />
                  <select className=' bg-grayBg p-2 w-40 rounded-md border focus:outline-black '>
                      <option disabled selected hidden value="">Location</option>
                  </select>
                  <button className='px-6 py-2 rounded-md font-bold bg-greenBg text-white'>Search</button>
              </div>
            </div>

          </div>
          <div className='hidden bg-red-500 rounded-bl-xl md:flex relative'>
            <SearchIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"",left:"7rem"}}/>
            <SignalCellularAltIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"27%",left:"20rem",transform: 'rotate(5deg)'}}/>
            <SecurityIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"75%",left:"7rem",transform: 'rotate(5deg)'}}/> <br /> 
          </div>
            
        </div>
        <div className='bg-greenBg mt-12 py-52 md:hidden'>
            <SearchIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"39rem",left:"10%"}}/>
            <SignalCellularAltIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"45rem",left:"7%",transform: 'rotate(5deg)'}}/>
            <SecurityIcon sx={{color:"white",fontSize:"5rem",position:"absolute",top:"40rem",left:"70%",transform: 'rotate(5deg)'}}/> <br /> 
        </div>

        

    </section>
  )
}

export default HeroSection
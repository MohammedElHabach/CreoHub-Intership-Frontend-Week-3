"use client";
import Link from 'next/link'
import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {

    const handleOpenMenu = () => {
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')
        btn.classList.toggle("open")
        nav.classList.toggle("flex")
        nav.classList.toggle("hidden")
      }
  return (
    <nav id='navbar' className=''>
        <div className="xl:container relative mx-auto  px-12">
            <div className='flex items-center justify-between  '>
                <div className='w-full p-5 md:p-0 flex items-center   md:gap-x-7 lg:gap-x-12  space-x-0 lg:space-x-9 md:w-3/5 '>
                    <div className='mx-auto  text-3xl font-bold md:mx-0'>
                        <Link href="/" className=''  >
                                <h1 className='flex items-center'>Job <span className=' text-greenBg'>Now</span></h1> 
                        </Link>
                    </div>

                    <div className='hidden md:flex space-x-4 lg:space-x-10 xl:space-x-14 md:mx-auto'>
                        <Link className='transition-colors  duration-500 hover:text-greenBg' href="/">Home</Link>
                        <Link className='transition-colors  duration-500 hover:text-greenBg' href="/">Job</Link>
                        <Link className='transition-colors  duration-500 hover:text-greenBg' href="/">About Us</Link>
                        <Link className='transition-colors  duration-500 hover:text-greenBg' href="/">Contact</Link>
                    </div>
                </div>


                <div className='hidden p-5 bg-greenBg md:flex w-2/5 justify-end'>
                    <div className=' space-x-1 lg:space-x-6 '>
                        <button className='text-white transition-all  duration-500 hover:text-black'>Sign in</button>
                        <button className='text-black bg-white px-3 transition-all   duration-500 hover:bg-black hover:text-white py-2 rounded-md'><ExitToAppIcon sx={{fontSize:"1.5rem",marginBottom:"0.13rem"}}/> Create Account</button>
                    </div>
                </div>

                <button onClick={handleOpenMenu} id="menu-btn" className="block hamburger  md:hidden focus:outline-none">
                    <span  className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                 </button>

            </div>

            <div className="md:hidden">
                <div id="menu"
                className="hidden  absolute flex-col items-center   self-end py-8  mt-5 space-y-6 font-bold bg-grayBg sm:w-auto  left-6 right-6 drop-shadow-md"
                >
                <Link onClick={handleOpenMenu}  href="/">Home</Link>
                <Link onClick={handleOpenMenu}   href="/">Job</Link>
                <Link onClick={handleOpenMenu}  href="/">About Us</Link>
                <Link onClick={handleOpenMenu} href="/">Contact</Link>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
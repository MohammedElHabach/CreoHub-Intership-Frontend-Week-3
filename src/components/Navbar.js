import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav id='navbar' className=''>
        <div className="xl:container relative mx-auto p-5">
            <div className='flex items-center justify-between  '>
                <div className='flex items-center   md:gap-x-8 lg:gap-x-16  space-x-5 lg:space-x-9 md:w-3/5 '>
                    <div className='mx-auto block text-center  text-3xl font-bold md:mx-0'>
                        <Link href="/" className=''  >
                                <h1 className='flex items-center'>Job <span className=' text-greenBg'>Now</span></h1> 
                        </Link>
                    </div>

                    <div className='hidden md:flex space-x-5 lg:space-x-9 md:mx-auto'>
                        <Link className='' href="/">Home</Link>
                        <Link href="/">Job</Link>
                        <Link href="/">About Us</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>


                <div className='flex w-2/5 justify-end'>
                    <div className='hidden md:flex space-x-3 '>
                        <button className='text-white'>Sign in</button>
                        <button className='text-black bg-white px-6 py-2 rounded-md'>Create Account</button>
                    </div>
                </div>

                <button id="menu-btn" className="block hamburger  md:hidden focus:outline-none">
                    <span  className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                 </button>

            </div>

        </div>
    </nav>
  )
}

export default Navbar
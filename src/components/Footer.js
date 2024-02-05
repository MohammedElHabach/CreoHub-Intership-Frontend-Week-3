"use client";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Footer = () => {
  return (
    <section id='footer' className=' bg-greenBg py-12  '>
        <div className='xl:container mx-auto px-5 '>
            <div className='flex gap-y-7 gap-x-5'>
                {/* left div */}
                <div className='flex flex-col  gap-5 mt-32 py-4 md:grid md:grid-cols-3  md:gap-x-16 '>
                    <div className='flex flex-col md:mt-4 cursor-default'>
                        <h2 className=' font-bold text-3xl pb-3 text-black'>Job<span className='text-white'>Now</span></h2>
                        <p className=' w-3/4   text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam modi delectus maxime maiores? Iure dignissimos iste eligendi.</p>
                    </div>

                    <div className='cursor-default text-white flex flex-col gap-y-2 mt-4 '>
                        <h2 className='text-3xl pb-3 font-bold '>Company</h2>
                        <p>Address : 123 Fifth Avenue,New York - 1060,USA</p>
                        <p>Call Us : +(1600) 456 7890</p>
                        <p>Email : yourid@example.com</p>
                        <p>Mon Sat : 9:00 AM - 19:00 PM</p>
                    </div>

                    <div className='flex flex-col gap-y-3 text-white mt-4 md:hidden'>
                        <h2 className='text-3xl font-bold'>Contact Us</h2>
                        <div className='flex gap-x-4'>
                            <GoogleIcon sx={{fontSize:"2rem"}}/>
                            <FacebookRoundedIcon sx={{fontSize:"2rem"}}/>
                            <TwitterIcon sx={{fontSize:"2rem"}}/>
                            <LinkedInIcon sx={{fontSize:"2rem"}}/> 
                        </div>
                    </div>
                    <div className=' cursor-default flex-col mt-4 gap-y-4 text-white  hidden md:flex md:ml-8 lg:ml-16 xl:ml-20'>
                        <h2 className='font-bold text-3xl '>Pages</h2>
                        <div className='flex '>
                            <KeyboardArrowRightIcon/>
                            Home
                        </div>
                        <div className='flex '>
                        <KeyboardArrowRightIcon/>
                            Booking
                        </div>
                        <div className='flex '>
                        <KeyboardArrowRightIcon/>
                            Facilities
                        </div>
                        <div className='flex '>
                        <KeyboardArrowRightIcon/>
                            About Us
                        </div>
                        <div className='flex '>
                        <KeyboardArrowRightIcon/>
                            Location
                        </div>
                        <div className='flex '>
                        <KeyboardArrowRightIcon/>
                            Contact
                        </div>
                    </div>

                </div>
                {/* right div */}
                <div className='flex flex-col  gap-y-4 text-white mt-40 md:mt-30 lg:w-1/4 md:hidden'>
                    <h2 className='font-bold text-3xl '>Pages</h2>
                    <div className='flex '>
                        <KeyboardArrowRightIcon/>
                        Home
                    </div>
                    <div className='flex '>
                    <KeyboardArrowRightIcon/>
                        Booking
                    </div>
                    <div className='flex '>
                    <KeyboardArrowRightIcon/>
                        Facilities
                    </div>
                    <div className='flex '>
                    <KeyboardArrowRightIcon/>
                        About Us
                    </div>
                    <div className='flex '>
                    <KeyboardArrowRightIcon/>
                        Location
                    </div>
                    <div className='flex '>
                    <KeyboardArrowRightIcon/>
                        Contact
                    </div>
                </div>
                <div className='hidden flex-col gap-y-3 text-white mt-40 md:flex'>
                        <h2 className='text-3xl font-bold'>Contact Us</h2>
                        <div className='flex gap-x-4'>
                            <GoogleIcon sx={{fontSize:"2rem"}}/>
                            <FacebookRoundedIcon sx={{fontSize:"2rem"}}/>
                            <TwitterIcon sx={{fontSize:"2rem"}}/>
                            <LinkedInIcon sx={{fontSize:"2rem"}}/> 
                        </div>
                    </div>

            </div>

        </div>

    </section>
  )
}

export default Footer
"use client";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
const Footer2 = () => {
  return (
    <section id="footer" className=" bg-greenBg py-12  ">
      <div className="xl:container mx-auto px-5 mt-32 ">
        <div className="grid grid-cols-3 gap-x-5 md:hidden ">
            <div className='col-span-2 '>
                <div className='md:order-1'>
                    <h2 className=' pb-3 font-bold text-3xl  text-black'>Job<span className='text-white '>Now</span></h2>
                    <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi, aspernatur itaque numquam ipsam in eos.</p>
                </div>

                <div className=' cursor-default text-white my-8 md:my-0 md:order-2'>
                        <h2 className='text-3xl pb-3  font-bold '>Company</h2>
                        <p>Address : 123 Fifth Avenue,New York - 1060,USA</p>
                        <p>Call Us : +(1600) 456 7890</p>
                        <p>Email : yourid@example.com</p>
                        <p>Mon Sat : 9:00 AM - 19:00 PM</p>
                </div>

                <div className='  text-white md:order-4'>
                        <h2 className='pb-3 text-3xl font-bold'>Contact Us</h2>
                        <div className='flex gap-x-4'>
                            <GoogleIcon sx={{fontSize:"2rem"}}/>
                            <FacebookRoundedIcon sx={{fontSize:"2rem"}}/>
                            <TwitterIcon sx={{fontSize:"2rem"}}/>
                            <LinkedInIcon sx={{fontSize:"2rem"}}/> 
                        </div>
                </div>

                <div className='hidden md:block  space-y-3 text-white md:order-3 '>
                    <h2 className='font-bold text-3xl '>Pages</h2>
                    <Link href="/" className='flex '>
                        <KeyboardArrowRightIcon/>
                        Home
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Booking
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Facilities
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        About Us
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Location
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Contact
                    </Link>
                </div>
            </div>

            {/* right div */}
            <div className='  mt-32 space-y-3 text-white md:hidden '>
                    <h2 className='font-bold text-3xl '>Pages</h2>
                    <Link href="/" className='flex '>
                        <KeyboardArrowRightIcon/>
                        Home
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Booking
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Facilities
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        About Us
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Location
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Contact
                    </Link>
                </div>

        </div>

        <div className='hidden md:grid md:grid-cols-5  md:gap-x-6'>
                <div className='md:order-1 col-span-2 space-y-2'>
                    <h2 className='  font-bold text-3xl  text-black'>Job<span className='text-white '>Now</span></h2>
                    <p className='text-white pr-40 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi, aspernatur itaque numquam ipsam in eos.</p>
                </div>

                <div className='cursor-default text-white md:order-2 space-y-2  '>
                        <h2 className='text-3xl pb-3  font-bold '>Company</h2>
                        <p>Address : 123 Fifth Avenue,New York - 1060,USA</p>
                        <p>Call Us : +(1600) 456 7890</p>
                        <p>Email : yourid@example.com</p>
                        <p>Mon Sat : 9:00 AM - 19:00 PM</p>
                </div>

                <div className='  text-white md:order-4 space-y-2'>
                        <h2 className=' text-3xl font-bold'>Contact Us</h2>
                        <div className='flex gap-x-4'>
                            <GoogleIcon sx={{fontSize:"2rem"}}/>
                            <FacebookRoundedIcon sx={{fontSize:"2rem"}}/>
                            <TwitterIcon sx={{fontSize:"2rem"}}/>
                            <LinkedInIcon sx={{fontSize:"2rem"}}/> 
                        </div>
                </div>

                <div className='  space-y-3 text-white md:order-3 mx-auto '>
                    <h2 className='font-bold text-3xl '>Pages</h2>
                    <Link href="/" className='flex '>
                        <KeyboardArrowRightIcon/>
                        Home
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Booking
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Facilities
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        About Us
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Location
                    </Link>
                    <Link href="/" className='flex '>
                    <KeyboardArrowRightIcon/>
                        Contact
                    </Link>
                </div>
        </div>
      </div>
    </section>
  );
};
export default Footer2;
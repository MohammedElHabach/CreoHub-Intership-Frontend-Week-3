"use client";
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import JobCard from '@/components/JobCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MySwiper from './Swiper';
import { SwiperSlide } from 'swiper/react';
const AddedJobs = () => {
    const cardData = [
        {
            img:"job1logo.png",
            subtitle:"Dimenssion Studio",
            icon :<LocationOnIcon/>,
            icon2:<WorkOutlineIcon/>,
            title:"UI/UX Designer",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img:"job2logo.png",
            subtitle:"Alpander ",
            icon2:<WorkOutlineIcon/>,
            icon :<LocationOnIcon/>,
            title:"Full Stack Developer",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img:"job3logo.png",
            subtitle:"XReact Tech",
            icon2:<WorkOutlineIcon/>,
            icon :<LocationOnIcon/>,
            title:"Product Designer",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img:"job3logo.png",
            subtitle:"XReact Tech",
            icon2:<WorkOutlineIcon/>,
            icon :<LocationOnIcon/>,
            title:"Product Designer",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            img:"job3logo.png",
            subtitle:"XReact Tech",
            icon2:<WorkOutlineIcon/>,
            icon :<LocationOnIcon/>,
            title:"Product Designer",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
        

    ]

    const slidesPerView = 1

    const breakpointsForAddedJobs = {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
      };
  return (
    <section id='added-jobs'>
        <div className='xl:container mx-auto px-12 mt-12 '>
            <div>
                 <h2 className="text-3xl font-bold text-center">Recently Added Jobs</h2>
                <div className='pt-6 text-center md:mx-7 lg:mx-28'>
                    <p className="text-gray-600 md:mx-7 lg:mx-28">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet recusandae reiciendis explicabo. Soluta eveniet quos quaerat ducimus iusto, libero impedit perspiciatis, inventore aut numquam atque optio quidem voluptate fugit qui.</p>
                </div>
            </div>

                <div className=' pt-5 container mx-auto '>
                    <MySwiper slidesPerView={slidesPerView} breakpoints={breakpointsForAddedJobs}  >
                    {cardData.map((elt,index) => (
                        <SwiperSlide>
                            <JobCard img={elt.img} icon2={elt.icon2} subtitle={elt.subtitle} key={index} icon={elt.icon} title={elt.title} description={elt.description} />
                        </SwiperSlide>
                        ))}
                    </MySwiper>
                </div>
                <button className="mt-8 block mx-auto   text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 ">View More</button>


        </div>

    </section>
  )
}

export default AddedJobs
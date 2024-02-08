"use client";
import CodeIcon from '@mui/icons-material/Code';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Card from './Card';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import MySwiper from './Swiper';
import { SwiperSlide } from 'swiper/react';


const PopularCategories = () => {


    const cardData = [
        {
            icon :<CodeIcon sx={{fontSize:"4rem"}}/>,
            title:"Design and Development",
            description:"350 Job Vacancy"
        },
        {
            icon :<ShowChartIcon sx={{fontSize:"4rem"}}/>,
            title:"Accounting and Finance",
            description:"350 Job Vacancy"
        },
        {
            icon :<AccountBalanceIcon sx={{fontSize:"4rem"}}/>,
            title:"Bank Institution",
            description:"350 Job Vacancy"
        },
        {
            icon :<ManageHistoryIcon sx={{fontSize:"4rem"}}/>,
            title:"Product Management",
            description:"350 Job Vacancy"
        },
        {
            icon :<ManageHistoryIcon sx={{fontSize:"4rem"}}/>,
            title:"Product Management",
            description:"350 Job Vacancy"
        },
        {
            icon :<ManageHistoryIcon sx={{fontSize:"4rem"}}/>,
            title:"Product Management",
            description:"350 Job Vacancy"
        },
        {
            icon :<ManageHistoryIcon sx={{fontSize:"4rem"}}/>,
            title:"Product Management",
            description:"350 Job Vacancy"
        },
    ]
  return (
    <section id='popular-categories' className='bg-grayBg'>
        <div className=" mt-12 py-16">
            <div className="flex flex-col items-center">
                <div className="xl:container">
                    <h2 className="text-3xl font-bold text-center">Popular Job Categories</h2>
                    <div className='pt-6 text-center  '>
                        <p className="text-gray-600 md:mx-7 lg:mx-20 xl:mx-28 2xl:mx-36">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet recusandae reiciendis explicabo. Soluta eveniet quos quaerat ducimus iusto, libero impedit perspiciatis, inventore aut numquam atque optio quidem voluptate fugit qui.</p>
                    </div>
                </div>

                <div className=' pt-5 px-3 container'>  
                    <MySwiper >
                    {cardData.map((elt) => (
                        <SwiperSlide key={elt.title}>
                            <Card key={elt.title}  icon={elt.icon} title={elt.title} description={elt.description} margin={true} />
                        </SwiperSlide>
                        ))}
                    </MySwiper>
                </div>

                <button className="mt-8 block mx-auto  md:mx-0 text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 ">View More</button>
            </div>
        </div>
    </section>
  )
}

export default PopularCategories
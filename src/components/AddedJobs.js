import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import JobCard from '@/components/JobCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
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
        }
        

    ]
  return (
    <section id='added-jobs'>
        <div className='xl:container mx-auto px-5 mt-12 '>
            <div className='flex flex-col items-center '>
                 <h2 className="text-3xl font-bold text-center">Recently Added Jobs</h2>
                <div className='pt-6 text-center md:w-3/4 lg:w-3/5'>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet recusandae reiciendis explicabo. Soluta eveniet quos quaerat ducimus iusto, libero impedit perspiciatis, inventore aut numquam atque optio quidem voluptate fugit qui.</p>
                </div>
                <div className=' pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 '>

                 {cardData.map((elt,index) => (
                    <JobCard img={elt.img} icon2={elt.icon2} subtitle={elt.subtitle} key={index} icon={elt.icon} title={elt.title} description={elt.description} />
                    ))}
                </div>

                <button className="mt-8 block mx-auto  md:mx-0 text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 ">View More</button>

            </div>

        </div>

    </section>
  )
}

export default AddedJobs
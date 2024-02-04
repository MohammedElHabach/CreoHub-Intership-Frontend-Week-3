
import CodeIcon from '@mui/icons-material/Code';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Card from './Card';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
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

    ]
  return (
    <section id='popular-categories' className='bg-grayBg'>
        <div className="xl:container mx-auto px-5 mt-12 py-16">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center">Popular Job Categories</h2>
                <div className='pt-6 text-center md:w-3/4 lg:w-3/5'>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet recusandae reiciendis explicabo. Soluta eveniet quos quaerat ducimus iusto, libero impedit perspiciatis, inventore aut numquam atque optio quidem voluptate fugit qui.</p>
                </div>
                <div className=' pt-5 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:grid-cols-4'>

                 {cardData.map((elt,index) => (
                    <Card key={index} icon={elt.icon} title={elt.title} description={elt.description} margin={true} />
                    ))}
                </div>

                <button className="mt-8 block mx-auto  md:mx-0 text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 ">View More</button>
            </div>
        </div>
    </section>
  )
}

export default PopularCategories
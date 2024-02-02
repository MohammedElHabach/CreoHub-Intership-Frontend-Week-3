import Card from "@/components/Card"
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DescriptionIcon from '@mui/icons-material/Description';
import IosShareIcon from '@mui/icons-material/IosShare';
const ProcessWork = () => {
    const cardData = [
        {
            icon :<ExitToAppIcon sx={{color:"#00cc99",fontSize:"4rem"}}/>,
            title:"Register",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis"
        },
        {
            icon :<DescriptionIcon sx={{color:"#00cc99",fontSize:"4rem"}}/>,
            title:"Create a Resume",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis"
        },
        {
            icon :<ContentPasteSearchIcon sx={{color:"#00cc99",fontSize:"4rem"}}/>,
            title:"Find a Job",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis"
        },
        {
            icon :<IosShareIcon sx={{color:"#00cc99",fontSize:"4rem"}}/>,
            title:"Apply Job",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis"
        },

    ]
  return (
    <section id='process-work'>
        <div className="xl:container mx-auto px-5 mt-12 ">
           <div className="flex flex-col">
                <h2 className="text-3xl font-bold">How it works</h2>
                <div className="pt-4 text-justify flex items-center justify-center md:justify-between">
                    <p className="md:w-1/2 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur commodi sed, sunt omnis accusantium provident eum facilis aspernatur, rerum, maxime modi velit! Nam alias sequi harum atque culpa iure!</p>
                    <button className="hidden text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 md:block">Learn More</button>
                </div>
           </div>

           <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4">
                {cardData.map((elt,index) => (
                    <Card key={index} icon={elt.icon} title={elt.title} description={elt.description} />
                ))}
            </div>

           <button className="mt-8 block mx-auto text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 md:hidden">Learn More</button>

           <div className=" pt-16 flex flex-col items-center mt-12 md:flex-row md:gap-x-10">
                <img className=" rounded-md w-3/4 md:w-1/2 lg:w-1/3" src="/job2.jpg" alt="job photo" />
                <div>
                    <h3 className="text-2xl font-bold text-center mt-6 md:text-left lg:text-3xl lg:w-3/4">We will help you to become an employee in your dream company</h3>
                    <div className="text-center mt-3 md:text-left md:py-4 lg:w-3/4">
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quaerat. Neque tenetur necessitatibus placeat iure, pariatur ab cupiditate vitae soluta repellendus non odit, magnam cumque quidem nulla officia incidunt nostrum.</p>
                    </div>
                <button className="mt-8 block mx-auto md:mt-4 md:mx-0 text-greenBg rounded-md border border-greenBg font-bold px-6 py-2 ">Learn More</button>
                </div>

           </div>

        </div>

    </section>
  )
}

export default ProcessWork
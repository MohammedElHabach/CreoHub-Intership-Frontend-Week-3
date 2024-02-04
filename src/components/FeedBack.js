import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const FeedBack = () => {
  return (
    <section id='feedback'>
        <div className='xl:container mx-auto px-5 mt-12'>
            <div className='flex flex-col items-center md:hidden'>
                <h2 className='text-3xl font-bold text-center'>People's Feedback about JobNow</h2>
                
                <div className=' py-6 text-gray-600 text-center'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, officia maiores? Voluptates beatae ipsam tenetur cupiditate iusto consequuntur natus quam autem. Voluptate dignissimos iusto dolores aut in neque deserunt soluta.</p>
                </div>

                <div className=' py-6 font-bold  text-center'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, officia maiores? Voluptates beatae ipsam tenetur cupiditate iusto consequuntur natus quam autem. Voluptate dignissimos iusto dolores aut in neque deserunt soluta.</p>
                </div>

                <div className='pt-12'>
                    <img className='rounded-md' src="/job.jpg" alt="image" />
                </div>

                <div className='text-center pt-8'>
                    <h3 className='font-bold text-xl '>Brown Garcia</h3>
                    <div className='pt-3'>
                        <p className='text-gray-600 '>Full Stack Developer in XReact Tech</p>
                    </div>

                    <div className='flex gap-x-5 justify-center'>
                        <div className='w-9 h-9 mt-3 bg-gray-300  rounded-full  flex items-center justify-center'>
                            <KeyboardBackspaceIcon sx={{color:"white"}}/>
                        </div>
                        <div className='w-9 h-9 mt-3 bg-greenBg  rounded-full  flex items-center justify-center'>
                            <ArrowForwardIcon sx={{color:"white"}}/>
                        </div>

                    </div> 
                </div>
            </div>

            <div className='hidden md:grid grid-cols-2 gap-x-4 '>
                <div className='flex flex-col  '>
                    <h2 className='text-3xl font-bold text-left'>People's Feedback about JobNow!</h2>
                    
                    <div className=' w-3/4 py-6 text-gray-600 text-left'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, officia maiores? Voluptates beatae ipsam tenetur cupiditate iusto consequuntur natus quam autem. Voluptate dignissimos iusto dolores aut in neque deserunt soluta.</p>
                    </div>

                    <div className='w-3/4 py-6 font-bold  text-left'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, officia maiores? Voluptates beatae ipsam tenetur cupiditate iusto consequuntur natus quam autem. Voluptate dignissimos iusto dolores aut in neque deserunt soluta.</p>
                    </div>

                    <div className='text-left pt-8'>
                        <h3 className='font-bold text-xl '>Brown Garcia</h3>
                        <div className='pt-3'>
                            <p className='text-gray-600 '>Full Stack Developer in XReact Tech</p>
                        </div>

                        <div className='flex gap-x-5 justify-start'>
                            <div className='w-9 h-9 mt-3 bg-gray-300  rounded-full  flex items-center justify-center'>
                                <KeyboardBackspaceIcon sx={{color:"white"}}/>
                            </div>
                            <div className='w-9 h-9 mt-3 bg-greenBg  rounded-full  flex items-center justify-center'>
                                <ArrowForwardIcon sx={{color:"white"}}/>
                            </div>

                        </div> 
                    </div>
                </div>

                <div className='pt-12 '>
                        <img src="/job.jpg" className='rounded-md' alt="image feedback" />
                </div>
            </div>
        </div>

    </section>
  )
}
export default FeedBack
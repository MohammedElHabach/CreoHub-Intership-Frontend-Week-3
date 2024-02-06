import React from 'react'

const Cta = () => {
  return (
    <section id='cta' className='-mb-24 z-10 relative'>
        <div className='container mx-auto px-12  rounded-md  mt-12 bg-darkGreen'>
            <div className='flex flex-col items-center text-white py-7 '>
                <h2 className='text-3xl font-bold text-center '> Register your CV now! </h2>
                <div className='my-5 text-center text-gray-300 w-1/2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quod exercitationem ducimus error facere tenetur rerum illum reprehenderit mollitia corporis, sit, provident, atque ipsa doloremque harum tempora dicta nihil dolor.</p>
                </div>
                <button className=' px-6 py-2 font-bold border-2 rounded-md'>Register Now</button>
            </div>
        </div>

    </section>
  )
}

export default Cta
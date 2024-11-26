import React from 'react'
import img1 from  '../assets/retro computer-rafiki 1.png'
import img2 from '../assets/Community-amico 1.png'
import img3 from '../assets/Group Chat-bro 1.png'

function Body() {
  return (
    <div className='ml-12 mr-12  bg-body dark:bg-neutral-800 py-14 '>
        <div className='px-4  lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-32'>
                <div>
                   <img src={img1} width={300} alt =""/> 
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-3xl text-black font-semibold mb-4 md:w-4/5 dark:text-neutral-50'> Explor Topics </h2>
                    <p className=' md:w-3/4  text-xm text-neutral-500 mb-8 '>

                        Dive deep into our diverse catalog featuring a curated selection of courses 
                        in the realms of arts and writing . Experience Knowledge crafted by experts,
                        designed to inspire and nurture your creative journey.
                    </p>

                </div>

            </div>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-32'>
                <div>
                   <img src={img2} width={300} alt =""/> 
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-3xl text-black font-semibold mb-4 md:w-4/5 dark:text-neutral-50'> Meet new Friends </h2>
                    <p className=' md:w-3/4 text-xm text-neutral-500 mb-8'>
                        Connect with our expansive network , match with
                        like-minded peers, and learn code together 
 
                    </p>

                </div>

            </div>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-32'>
                <div>
                   <img src={img3} width={300} alt =""/> 
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-3xl text-black font-semibold mb-4 md:w-4/5 dark:text-neutral-50'> Find </h2>
                    <p className=' md:w-3/4 text-xm text-neutral-500 mb-8'>
                        Connect with people around the world in a huge community with million of students 

                    </p>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Body

import React from 'react'
import pc from '../assets/pc.jpg'
import { GiDuration } from "react-icons/gi";

function Cards() {
    return (

        <div className='bg-white  flex items-center justify-center  rounded-xl   '>
            
            <div className='dark:bg-noir grid grid-cols-1 font-poppins w-72 p-3 bg-white border-x border-y  border-gray-200 dark:border-neutral-500 rounded-xl md:w-16 lg:w-80 '>
                <img className='h-40 w-72 object-cover rounded-xl md:w-32 lg:w-80' src={pc} alt='pc' />
                {/* <p className='-mt-36 rounded-lg border border-white'>Developpement</p> */}
                <div className='p-2 mt-2'>
                    <h2 className='font-bold tracking-wider dark:text-white  '> Fronted Developpment with JavaScript </h2>
                    <p className='text-gray-500 text-xs mt-1  dark:text-gray-1  dark:text-neutral-400'> By Cristian Munoz </p>

                    <div className='flex gap-2 mt-3'>

                        <div ><GiDuration /></div>
                        <div><p className='dark:text-white text-xs font-medium'>Duration: 7 weeks</p></div>

                    </div>
                </div>

                <div className='mt-1 '>
                    <span className='text-gray-500 dark:text-neutral-400 text-xs ml-2 '> $80.00 USD 80% discount </span>
                    <button className="w-full text-center bg-purple text-white dark:text-violet-900 dark:bg-violet-300 dark:hover:bg-violet-500 text-xm font-medium py-2 leading-5 rounded-md     transition-colors duration"> Buy now $14.00 USD</button>
                </div>
            </div>
        </div >

    )
}

export default Cards

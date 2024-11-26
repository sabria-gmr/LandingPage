import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/component.png'; // Make sure the image path is correct

function Hero() {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '140vh', // Set the height to full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="flex items-center justify-center" style={backgroundImageStyle}>
     
        <h1 className=' text-center md:px-64 lg:px-[340px] text-4xl md:text-4xl lg:text-6xl font-bold text-black dark:text-white'>
          Where the joy of learn meets the power of community
        </h1>
        <p className='text-neutral-500  text-center md:px-[230px]  text-md  md:py-7 lg:text-lg  lg:py-10 lg:px-[340px] font-light  sm:px-4 md: py-4'>
          Dive deep in immersive, interactive small groups. Expand horizons, engage in discussions, and elevate your learning journey with us 
        </p>
        <Link to='/acceuil'>
          <button className='bg-purple hover:bg-violet-800 rounded-lg px-4 py-2 text-white dark:text-violet-900 dark:bg-violet-300 dark:hover:bg-violet-500'>
            Start your travel
          </button>
        </Link>
        <span className='text-purple mt-5 font-normal dark:text-white'>Watch video</span>
    
    </div>
  );
}

export default Hero;

import React from 'react';
import { Products, Resources, Company } from './Menus';
import Reseaux from './Reseaux';
import Item from './Item';
import logo from '../assets/Log.png';
import '../Styles/Style.css'

function Footer() {
  

  return (
    <footer className='bg-white dark:bg-black grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 py-12' >
      <div className='md:flex flex-col md:justify-start md:items-left sm:px-4= ml-10 py-4'>
        <img src={logo} width={75} height={40} alt=''  />
        <Reseaux />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 md:px-14   gap-2 '>
        <Item Links={Products} title='Products' />
        <Item Links={Resources} title='Resources' />
        <Item Links={Company} title='Company' />
      </div>
    </footer>
  );
}

export default Footer;

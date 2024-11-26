import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LightModeLogo from '../assets/Log.png';
import DarkModeLogo from '../assets/Logo.png';
import { PiSunDimFill } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";
import '../Styles/Style.css';

function Header() {
    const [theme, setTheme] = useState("light");
    const [clickedLink, setClickedLink] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const handleLinkClick = (index) => {
        setClickedLink(index);
    };

    const toggleMenu = () => {
        setOpen(!open);
    }

    const lightModeLogoSource = LightModeLogo;
    const darkModeLogoSource = DarkModeLogo;
    const logoSource = theme === "dark" ? darkModeLogoSource : lightModeLogoSource;

    const Links = [
        { name: '', link: '' },
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Courses', link: '/courses' },
        { name: 'FAQ', link: '/faq' },
    ];

    return (
        <nav className='bg-white dark:bg-black justify-between items-center pb-4 text-xl md:flex md:px-10 px-7 '>

            <div className='ml-20 mt-4 md:px-10 md:space-x-6 cursor-pointer'>
                <img src={logoSource} width={75} height={45} alt='Logo' />
            </div>

            <div onClick={toggleMenu} className='text-2xl absolute right-8 top-2 cursor-pointer md:hidden'>
                <RiMenu3Fill className="dark:text-white" />
            </div>

            <ul className={`md:items-center md:flex md:pb-0 pb-12 absolute md:static md:z-auto
             z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
             cursor-pointer mr-24 space-x-8 mt-4 text-base font-semibold text-2c3484 dark:text-white 
              ${open ? 'top-10' : 'top-[-490px]'} md:space-x-6  bg-white dark:bg-black`}>
                {
                    Links.map((link, index) => (
                        <li className={`hover:text-purple md:ml-8 md:my-0 my-7 ${clickedLink === index ? 'visited' : ''}`} key={index}>
                            <Link to={link.link} onClick={() => handleLinkClick(index)}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
                <li className='md:ml-8 md:my-0 my-7'>
                    <Link to='/contact'>
                        <button className='bg-purple font-normal text-white hover:bg-violet-800 rounded-lg h-10 w-28 dark:text-violet-900 dark:bg-violet-300 dark:hover:bg-violet-500'> Contact Us </button>
                    </Link>
                </li>
                <li className='md:ml-8 mt-2'>
                    <button onClick={handleThemeSwitch}>
                        <PiSunDimFill size={39} className='border border-gray-200 rounded-lg p-2' />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Header;

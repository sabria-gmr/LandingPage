import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa'
import { IoLogoFigma } from "react-icons/io5";
import { BsMedium } from "react-icons/bs";


const Reseaux = () => {
    return (
        <ul className=' mt-8 flex flex-row gap-3 '>

            <li >
                <Link to=''>
                    <FaInstagram style={{ color: '#A3A3A3' }} size={35} className=' border border-bord rounded-lg p-1'>
                        ff
                    </FaInstagram>
                </Link>
            </li>

            <li >
                <Link to=''>
                    <IoLogoFigma style={{ color: '#A3A3A3' }} size={35} className=' border border-bord rounded-lg p-1'>
                        ff
                    </IoLogoFigma>
                </Link>
            </li>
            <li >
                <Link to=''>
                    <FaLinkedin style={{ color: '#A3A3A3' }} size={35} className=' border border-bord rounded-lg p-1'>
                        ff
                    </FaLinkedin>
                </Link>
            </li>
            <li >
                <Link to=''>
                    <FaTwitter style={{ color: '#A3A3A3' }} size={35} className=' border border-bord rounded-lg p-1'>
                        ff
                    </FaTwitter>
                </Link>
            </li>
            <li >
                <Link to=''>
                    <FaTelegram style={{ color: '#A3A3A3' }} size={35} className=' border border-bord rounded-lg p-1'>
                        ff
                    </FaTelegram>
                </Link>
            </li>
            <li >
                <Link to=''>
                    <BsMedium style={{ color: '#A3A3A3' }} size={35} className=' border border-bord rounded-lg p-1'>
                        ff
                    </BsMedium>
                </Link>
            </li>
        </ul>

    )
}

export default Reseaux
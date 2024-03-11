import React from 'react'
import Exclusive from './Exclusive';
import styles from './footer.module.css'
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/phoneIcon.svg';
import { ReactComponent as WhatsAppIcon } from '../../assets/images/whatsapIcon.svg';
import { ReactComponent as InstaIcon } from '../../assets/images/InstaIcon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/LinkedIn.svg';


const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname
  return (
    <footer>
        <Exclusive/>

        <div className={`${styles.rectangle}   `}>
          <div className='flex justify-center items-center gap-6 pt-[110.5px]'>
            <Logo/>
            <p className='font-bold text-4xl'>GINXSTORE</p>
          </div>

          <div className='flex gap-6 py-10'>
            <PhoneIcon/>
            <WhatsAppIcon/>
            <InstaIcon/>
            <LinkedInIcon/>
          </div>
 
          <ul className='flex gap-10 pb-10'>
                  <li>
                    <Link to="/" className={` ${pathname === '/' ? 'text-green-500' : ''}`}>Home</Link>
                  </li>
                  <li>
                    <Link to="/products" className={` ${pathname === '/products' ? 'text-green-500' : ''} whitespace-nowrap`}>Products</Link>
                  </li>
                  <li>
                    <Link to="/about" className={`${pathname === '/about' ? 'text-green-500' : ''} whitespace-nowrap`}>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact" className={` ${pathname === '/contact' ? 'text-green-500' : ''} whitespace-nowrap`}>Contact Us</Link>
                  </li>
            </ul>

            <p className='font-light text-xs'>Designed by Michael Anawo</p>
            <p className='font-light text-xs'>Developed by Elijah Amodu</p>

            <p className='font-light text-base pt-[175px] pb-[86.5px]'>Inspiration from <u>11:1crib.com</u>, <u>Jumia.com.ng</u>, <u>best.aliexpress.com</u>, <u>alibaba.com</u></p>
          
        </div>
    </footer>
  )
}

export default Footer;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import  { ReactComponent as Logo } from "../../assets/images/Logo.svg"
import  { ReactComponent as ArrowDown } from "../../assets/images/down-solid.svg"
import  { ReactComponent as Profile } from "../../assets/images//profile.svg"
import  { ReactComponent as Mode } from "../../assets/images/light-mode.svg"
import  { ReactComponent as Cart } from "../../assets/images/cart.svg"
import { ReactComponent as Hamburger } from "../../assets/images/Hamburger.svg"
import { ReactComponent as Cancel } from "../../assets/images/cancel.svg"
import { ReactComponent as MobileLogo } from "../../assets/images/mobileLogo.svg"
import Products from '../../views/Products';
import { useState } from 'react';

// import { motion } from '@tailwindcss/motion'


interface ToolBarProps {
  // logoSrc: string;
  // siteName: string;
}

const ToolBar: React.FC<ToolBarProps> = () => {
const location =  useLocation();
const pathname = location.pathname;

const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => setIsOpen(!isOpen);
  

  return (
    <nav className="bg-primary text-white flex items-center justify-between md:gap-2 font-Inter h-20 top-7 left-0 w-full z-50 fixed ">
      
          <div className="flex justify-center items-center  gap-8 " id='main-div'>
            <div className='flex items-center pl-16'>
               <Logo className='hidden md:block' />
              <MobileLogo className='md:hidden'/> 
              <span className="font-bold text-2xl md:text-4xl ">GINXSTORE</span>
            </div>
          </div>
             
            <div className='flex md:hidden px-8  ' id='hamburger'>
                { isOpen ? <Cancel onClick={toggleMenu} /> : <Hamburger onClick={toggleMenu}/>  }
            </div>

        {isOpen && (
          <ul className="md:hidden absolute z-50 left-0 bg-primary space-y-8 text-base pb-7 pt-4 px-4 mt-72 rounded-md shadow-md overflow-hidden text-white " style={{ width: '100%' }}>
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
        )}




               <ul className="hidden md:flex gap-16 text-sm md:text-xl text-white">
                <li>
                  <Link to="/" className={` ${pathname === '/' ? 'text-green-500' : ''}`}>Home</Link>
                </li>
                <li>
                  <Link to="/products" className={`${pathname === '/products' ? 'text-green-500' : ''}`}>Products</Link>
                </li>
                <li>
                  <Link to="/about" className={` ${pathname === '/about' ? 'text-green-500' : ''}`}>About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className={`flex items-center gap-1  ${pathname === '/contact' ? 'text-green-500' : ''}`} >
                    Contact Us
                    <ArrowDown className="flex justify-center" />
                  </Link>
                </li>
              </ul>

            
              

          <div className="hidden md:flex gap-6 pr-16" id="interactions">
            <Cart />
            <Profile />
            <Mode />
          </div>

          

    </nav>

  );
};

export default ToolBar;

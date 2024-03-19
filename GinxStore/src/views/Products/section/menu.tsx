import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const linkStyle = 'py-2.5 px-4  bg-primary rounded-lg text-2xl font-normal'
  return (
    <nav className='flex justify-center bg-primary-cta pt-56 pb-48 text-white'>
        <div className='grid gap-8'>
            <div className='flex gap-6 justify-center '>
                    <Link to="/" className={`${pathname === '/' ? 'text-green-500' : ''} whitespace-nowrap`}>
                        <span className={linkStyle}>Grocery</span>
                    </Link>
                    <Link to="/phones-&-tablets" className={` ${pathname === '/products' ? 'text-green-500' : ''}  whitespace-nowrap `}>
                        <span className={linkStyle}>Phones & Tablets</span>
                    </Link>
                    <Link to="/kitchen-appliances" className={`${pathname === '/about' ? 'text-green-500' : ''}  whitespace-nowrap `}>
                        <span className={linkStyle}>Kitchen Appliances</span>
                    </Link>
                    <Link to="/gaming" className={` ${pathname === '/contact' ? 'text-green-500' : ''}  whitespace-nowrap `}>
                        <span className={linkStyle}>Gaming</span>
                    </Link>

            </div>
            <div className='flex gap-6  justify-center'>
                    <Link to="/fashion" className={`${pathname === '/contact' ? 'text-green-500' : ''} whitespace-nowrap`}>
                        <span className={`bg-primary rounded-lg py-2.5 px-4 text-2xl font-normal`}>Fashion</span>
                    </Link>
                    <Link to="/sports" className={` ${pathname === '/contact' ? 'text-green-500' : ''}  whitespace-nowrap `}>
                        <span className={linkStyle}>Sports and Outdoor</span>
                    </Link>
                    <Link to="/jeweries" className={` ${pathname === '/contact' ? 'text-green-500' : ''}  whitespace-nowrap `}>
                        <span className={linkStyle}>Jeweries</span>
                     </Link>
                     <Link to="/health-and-beauty " className={` ${pathname === '/contact' ? 'text-green-500' : ''}  whitespace-nowrap `}>
                        <span className={linkStyle}>Health and Beauty </span>
                    </Link>

            </div>
        </div>
    </nav>
  )
}

export default Menu;
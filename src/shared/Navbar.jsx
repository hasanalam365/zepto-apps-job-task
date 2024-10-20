import React, { useState } from 'react';
import { BsMenuAppFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import 'animate.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navLinks = (
        <>
            <li onClick={() => setIsNavOpen(false)}>
                <NavLink to="/" className={({isActive})=> isActive ? 'text-orange-600' : ''}>
                    Home
                </NavLink>
            </li>
            <li onClick={() => setIsNavOpen(false)}>
                <NavLink to="/wishlists" className={({isActive})=> isActive ? 'text-orange-600' : ''}>
                  WishLists
                </NavLink>
            </li>
           
            <li  onClick={() => setIsNavOpen(false)} className={({isActive})=> isActive ? 'text-orange-600' : ''}>
                <NavLink>
                    Contact
                </NavLink>
            </li>
            <li  onClick={() => setIsNavOpen(false)} className={({isActive})=> isActive ? 'text-orange-600' : ''}>
                <NavLink>
                    About Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div className='bg-gray-100 shadow-lg md:px-6 w-full z-50 h-[60px] fixed '>
            <div className='flex items-center justify-between'>
                <div>
                    <Link to="/">
                        <img src="/full-logo-bg.png" alt="logo" className='w-[200px] md:w-[250px] md:h-[60px] lg:w-[250px] lg:h-[60px]' />
                    </Link>
                </div>
                <div>
                    {/* Small device */}
                    <ul className='lg:hidden'>
                        <button onClick={() => setIsNavOpen(!isNavOpen)}>
                            {isNavOpen ? (
                                <BsMenuAppFill className='text-2xl mr-3 text-yellow-600' />
                            ) : (
                                <BsMenuButtonWideFill className='text-2xl mr-3 text-yellow-600' />
                            )}
                        </button>
                    </ul>

                    {/* Medium/Large device */}
                    <ul className='hidden md:hidden lg:flex lg:items-center lg:justify-center lg:gap-6'>
                        {navLinks}
                    </ul>
                </div>
            </div>

          
            {
                isNavOpen &&  <div
                className={`bg-gray-300 absolute top-0 w-full p-4  h-screen animate__animated ${isNavOpen ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}
              
            >
                <button onClick={() => setIsNavOpen(false)}>
                    <BsMenuAppFill className='text-2xl mr-3 text-blue-600' />
                </button>
                <ul className='space-y-1 text-lg font-medium'>{navLinks}</ul>
            </div>
           }
        </div>
    );
};

export default Navbar;

import React, { useState } from 'react';
import { BsMenuAppFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import 'animate.css';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navLinks = (
        <>
            <li>
                <NavLink>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink>
                    Books
                </NavLink>
            </li>
            <li>
                <NavLink>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink>
                    About Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <button className='btn btn-ghost'>
                        <img src="/full-logo-bg.png" alt="logo" className='w-[200px] md:w-[250px] md:h-[60px] lg:w-[250px] lg:h-[60px]' />
                    </button>
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

import React, { useState } from 'react';
import { BsMenuAppFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isNavOpen,setIsNavOpen]=useState(false)

   

    const navLinks = <>
    
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

    return (
        <div className='flex items-center justify-between'>
            <div>
                <button className='btn btn-ghost '>
                   
                    <img src="/full-logo-bg.png" alt="logo" className='w-[200px] md:w-[250px] md:h-[60px] lg:w-[250px] lg:h-[60px]'/>
                </button>
            </div>
            <div>
            {/* small device */}
                <ul className=' lg:hidden '>
                    <button onClick={() => setIsNavOpen(!isNavOpen)}>
                        
                        {
                            isNavOpen ?  <BsMenuAppFill className='text-2xl mr-3 text-yellow-600'/> :  <BsMenuButtonWideFill className='text-2xl mr-3 text-yellow-600'/>
                        }
                         
                         
                  </button>
                </ul>
            {/* medium/large device */}
                <ul className='hidden md:hidden lg:flex lg:items-center lg:justify-center lg:gap-6'>
                    { navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
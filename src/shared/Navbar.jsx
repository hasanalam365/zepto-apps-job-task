import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

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
                <button className='btn btn-ghost'>
                    <img src="/full-logo-bg.png" alt="logo" className='w-[250px] h-[60px]'/>
                </button>
            </div>
            <div>
{/* small device */}
                <ul className='flex items-center justify-center gap-6'>
                    { navLinks}
</ul>
            </div>
        </div>
    );
};

export default Navbar;
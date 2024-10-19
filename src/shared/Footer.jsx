import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100 p-12'>
            <nav className='flex items-center justify-center gap-5'>
               <Link to="/">Home</Link>
               <Link to="/wishlists" >Wishlists</Link>
               <Link >About Us</Link>
               <Link>Contacts</Link>
            </nav>
            <div className='flex items-center justify-center'>
                <img src="/full-logo-bg.png" alt="" className='w-[200px] h-[100px]'/>
            </div>
            <div className='flex items-center justify-center'>
                 <p className='flex items-center justify-center'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
 
            </div>
        </div>
    );
};

export default Footer;
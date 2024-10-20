import React from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='bg-[#CAE7E5] p-3 md:p-8 lg:p-8 flex flex-col md:flex-row lg:flex-row justify-center'>
            <div className='w-full md:w-[30%] lg:w-[30%] md:border-r-2 md:border-r-gray-400 flex items-center justify-center flex-col space-y-3'>
                <div className='flex flex-col items-center justify-center'>
                    <FaLocationDot className='text-[#3B1C91] text-2xl'/>
                    <h5 className='font-medium'>Address</h5>
                    <p>Uttara,Dhaka</p>
                </div>
                <div  className='flex flex-col items-center justify-center'>
                     <FaPhone className='text-[#3B1C91] text-2xl'/>
                     <h5 className='font-medium'>Phone</h5>
                   <p>019XXXXXXXXX</p>
                   <p>019XXXXXXXXX</p>

               </div>
                <div  className='flex flex-col items-center justify-center'>
                     <MdEmail className='text-[#3B1C91] text-2xl'/>
                     <h5 className='font-medium'>Email</h5>
                     <p>zeptoapps@gmail.com</p>
               </div>
           </div>
            <form className='md:w-[70%] p-4 lg:w-[70%] md:pl-8 lg:pl-8 space-y-3 '>
               <h5 className='text-[#3B1C91] text-2xl font-medium'>Send us a message</h5> 
               <p>If you have any work from us , you can send us message from here . It's Our pleasure to help you</p>
                <div className='flex flex-col space-y-3'>
                    <input type='text' placeholder="Enter your name" name="" id="" className='bg-gray-100 p-2 focus:outline-[#3B1C91] focus:border-none'/>
               <input type='emaili' placeholder="Enter your email" name="" id="" className='bg-gray-100 p-2 focus:outline-[#3B1C91] focus:border-none'/>
               <textarea name="" id="" className='bg-gray-100 p-2 focus:outline-[#3B1C91] focus:border-none' placeholder='Enter your message......'></textarea>
                </div>
                <button className='bg-[#3B1C91] text-white px-2 py-1 rounded-md'>Send Now</button>
           </form>
        </div>
    );
};

export default Contact;
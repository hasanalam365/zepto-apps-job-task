import React from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='bg-[#CAE7E5] p-8'>
            <div>
                <div>
                    <FaLocationDot />
                    <h5>Address</h5>
                    <p>Uttara,Dhaka</p>
                </div>
                <div>
                     <FaPhone />
                     <h5>Phone</h5>
                   <p>019XXXXXXXXX</p>
                   <p>019XXXXXXXXX</p>

               </div>
                <div>
                     <MdEmail />
                     <h5>Email</h5>
                     <p>zeptoapps@gmail.com</p>
               </div>
           </div>
            <div>
                
           </div>
        </div>
    );
};

export default Contact;
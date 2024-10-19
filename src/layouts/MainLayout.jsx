import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div>
              <Navbar></Navbar>
                 <div className="min-h-[calc(100vh-304px)]">
          
          <Outlet></Outlet>
          
        </div>
        <div className='h-[244px]'>
           <Footer/>
       </div>
      </div>
    );
};

export default MainLayout;
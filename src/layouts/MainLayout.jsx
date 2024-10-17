import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
    return (
        <div>
              <Navbar></Navbar>
              <div className='container mx-auto'>
          
            <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayout;
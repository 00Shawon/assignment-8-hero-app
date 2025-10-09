import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import Navbar from '../Component/Nav/Navbar';
import { ToastContainer } from 'react-toastify';


const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='flex-1 px-4 md:px-8 lg:12  mx-auto'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
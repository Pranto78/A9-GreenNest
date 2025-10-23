import React from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Layout/Footer';

const AuthLayout = () => {
    return (
      <div className="bg-[#e9ebe6] min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="w-11/12 mx-auto my-10">
          <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
      </div>
    );
};

export default AuthLayout;
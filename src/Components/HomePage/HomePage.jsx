import React from 'react';
import Navbar from '../../Layout/Navbar';
import { Outlet } from 'react-router';
import AllPlants from '../AllPlants/AllPlants';

const HomePage = () => {
    return (
      <div className="bg-[#e9ebe6] min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>

        <main className='w-11/12 mx-auto'>
          <Outlet></Outlet>
          <AllPlants></AllPlants>
        </main>

        <footer></footer>
      </div>
    );
};

export default HomePage;
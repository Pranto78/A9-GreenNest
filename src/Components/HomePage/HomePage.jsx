import React from 'react';
import Navbar from '../../Layout/Navbar';
import { Outlet } from 'react-router';
import AllPlants from '../AllPlants/AllPlants';
import Footer from '../../Layout/Footer';
import PlantCareTips from '../PlantCareTips/PlantCareTips';
import PlantExperts from '../PlantcareExpert/PlantcareExpert';

const HomePage = () => {
    return (
      <div className="bg-[#e9ebe6] min-h-screen">
        <header>
          <Navbar></Navbar>
        </header>

        <main className="w-11/12 mx-auto my-10">
          <Outlet></Outlet>
          
        </main>

        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
          <Footer></Footer>
        </footer>
      </div>
    );
};

export default HomePage;
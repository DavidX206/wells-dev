import React from 'react';
import Navbar from './components/navbar';

const Overview = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 grid grid-cols-2 gap-4 sm:px-80">
        <div className="bg-gray-300 rounded overflow-hidden">
          <img src='grid1.jpg' alt="Image 1" className="w-full h-28 sm:h-40 object-cover"/>
        </div>

        <div className="bg-gray-300 rounded overflow-hidden">
          <img src="grid2.jpg" alt="Image 2" className="w-full h-28 sm:h-40 object-cover"/>
        </div>

        <div className="bg-gray-300 rounded overflow-hidden">
          <img src="grid3.jpg" alt="Image 3" className="w-full h-28 sm:h-40 object-cover" />
        </div>

        <div className="bg-gray-300 rounded overflow-hidden">
          <img src="grid4.jpg" alt="Image 4" className="w-full h-28 sm:h-40 object-cover" />
        </div>
      </div>

      <div className="text-center mt-8 px-8">
        <p className="text-xl font-black">DEEPEN YOUR CONNECTION WITH GOD</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-xl font-roboto"></p>
      </div>
    </div>
  );
};

export default Overview;

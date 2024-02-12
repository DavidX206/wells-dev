
import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="text-black text-lg font-semibold font-montserrat">
        Wells
      </div>

      <div className="rounded-full bg-gray-700 px-2">
          <button className="text-white p-2">
            Sign In
          </button>
        </div>
    </nav>
  );
};

export default Navbar;

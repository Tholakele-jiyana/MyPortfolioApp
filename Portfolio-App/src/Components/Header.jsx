import React from 'react';

function Header() {
  return (
    //Header background changed to Light Orange #FED8B1
    <nav className="bg-[#FED8B1] text-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-xl font-bold">LT-Portfolio</a>

        {/* Navigation Links text changed to black and href links updated to be same as link*/} 
        <ul className="text-black flex space-x-6">
          <li><a href="#Home" className="hover:text-indigo-400">Home</a></li>
          <li><a href="#About" className="hover:text-indigo-400">About</a></li>
          <li><a href="#Projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#Contact" className="hover:text-indigo-400">Contact</a></li>

          
        </ul>
      </div>
    </nav>
  );
}

export default Header;
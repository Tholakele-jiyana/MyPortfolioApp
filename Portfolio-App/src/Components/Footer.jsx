import React from 'react';

function Footer() {
  return (

    /*background changed to Caramel #CC7F3B*/

    <footer className="bg-[#CC7F3B] text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-black text-sm mb-4 md:mb-0">
           LT-Portfoloio. All rights reserved.
        </p>

        {/*text colour changed to black*/}
        <div className="text-black flex space-x-4">
          <a href="#" className="hover:text-white text-sm">Home</a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;

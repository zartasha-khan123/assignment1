// import Link from 'next/link';
// import React from 'react'

// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white py-6 mt-auto">
//     <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
//       <p className="text-sm text-center sm:text-left">&copy; 2024 ZARTASH IMRAN! All Rights Reserved.</p>
//       <div className="flex space-x-4 mt-4 sm:mt-0">
//         <Link href="/support" className="text-gray-400 hover:text-white">
//           Support
//         </Link>
//         <Link href="/feedback" className="text-gray-400 hover:text-white">
//           Feedback
//         </Link>
//         <Link href="/contactus" className="text-gray-400 hover:text-white">
//           Contact
//         </Link>
//       </div>
//     </div>
//   </footer>
//         );
//       };
      
    
// export default Footer


import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Footer Text */}
        <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
          &copy; 2024 ZARTASH IMRAN! All Rights Reserved.
        </p>
        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link href="/support" className="text-gray-400 hover:text-white transition duration-300">
            Support
          </Link>
          <Link href="/feedback" className="text-gray-400 hover:text-white transition duration-300">
            Feedback
          </Link>
          <Link href="/contactus" className="text-gray-400 hover:text-white transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
   
          <footer className="bg-gray-800 text-white py-6 fixed bottom-0 w-full">
            <div className="container mx-auto flex justify-between items-center px-4">
              <p className="text-sm">&copy; 2024 ZARTASH IMRAN! All Rights Reserved.</p>
              <div className="flex space-x-4">
                <Link href="/support" className="text-gray-400 hover:text-white">
                  support
                </Link>
                <Link href="/feedback" className="text-gray-400 hover:text-white">
                  FeedBack</Link>
                
                <Link href="/contactus" className="text-gray-400 hover:text-white">
                  Contact
                  </Link>
            
              </div>
            </div>
          </footer>
        );
      };
      
    
export default Footer

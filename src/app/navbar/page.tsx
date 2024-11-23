// import Link from 'next/link'

// function Navbar() {

 
//   return (

// <div className='h-16 w-full bg-yellow-300 flex flex-col md:flex-row justify-center items-center p-4 '>
//     <div className="flex justify-center items-center flex-grow mb-2 md:mb-0">
//         <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="/">Home</Link>
//         <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="/events">Book an event</Link>
//         <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="../about">About</Link>
//         <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="/reservations">Reservations</Link>
//     </div>

//     <Link href="/contactus/nextedcontact" className='text-xl font-bold text-white mx-auto hover:text-yellow-400 transition duration-300'>GELATO</Link>

//     <div className="flex justify-center items-center flex-grow mt-2 md:mt-0">
//         <Link className="text-yellow-500 font-serif bg-yellow-800 py-2 px-4 rounded hover:bg-yellow-200 transition duration-300" href="/contactus">Contact Us</Link>
//     </div>
// </div>


    
//   )
// }

// export default Navbar

'use client'
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-yellow-300 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-yellow-800">
            GELATO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-yellow-800 font-serif hover:text-yellow-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-yellow-800 font-serif hover:text-yellow-600 transition duration-300"
            >
              Book an Event
            </Link>
            <Link
              href="/about"
              className="text-yellow-800 font-serif hover:text-yellow-600 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/reservations"
              className="text-yellow-800 font-serif hover:text-yellow-600 transition duration-300"
            >
              Reservations
            </Link>
            <Link
              href="/contactus"
              className="text-yellow-500 font-serif bg-yellow-800 py-2 px-4 rounded hover:bg-yellow-200 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-yellow-800 hover:text-yellow-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link
              href="/"
              className="block px-4 py-2 text-yellow-800 font-serif hover:bg-yellow-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block px-4 py-2 text-yellow-800 font-serif hover:bg-yellow-100"
              onClick={toggleMenu}
            >
              Book an Event
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-yellow-800 font-serif hover:bg-yellow-100"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/reservations"
              className="block px-4 py-2 text-yellow-800 font-serif hover:bg-yellow-100"
              onClick={toggleMenu}
            >
              Reservations
            </Link>
            <Link
              href="/contactus"
              className="block px-4 py-2 text-yellow-500 font-serif bg-yellow-800 rounded hover:bg-yellow-200"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

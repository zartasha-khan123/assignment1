import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className= 'h-16 w-full bg-yellow-300 flex justify-between items-center '>
      <Link className="text-yellow-800 font-serif ml-4"href="/">Home</Link>
      <Link  className="text-yellow-800 font-serif"href="/events">Book an event</Link>
      <Link  className="text-yellow-800 font-serif"href="../about">About</Link>
      <Link className="text-yellow-800 font-serif" href="/reservations">Reservations</Link>
      <Link href="/" className='text-xl font-bold text-white' >GELATO</Link>
     <button> <Link className="text-yellow-500 font-serif mr-10 bg-slate-500 py-2 px-4 rounded" href="/contactus">Contact Us</Link></button>
    </div>
  )
}

export default Navbar

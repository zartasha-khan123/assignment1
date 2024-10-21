import Link from 'next/link'

function Navbar() {

 
  return (

<div className='h-16 w-full bg-yellow-300 flex flex-col md:flex-row justify-center items-center p-4'>
    <div className="flex justify-center items-center flex-grow mb-2 md:mb-0">
        <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="/">Home</Link>
        <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="/events">Book an event</Link>
        <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="../about">About</Link>
        <Link className="text-yellow-800 font-serif mx-4 hover:text-yellow-600 transition duration-300" href="/reservations">Reservations</Link>
    </div>

    <Link href="/" className='text-xl font-bold text-white mx-auto hover:text-yellow-400 transition duration-300'>GELATO</Link>

    <div className="flex justify-center items-center flex-grow mt-2 md:mt-0">
        <Link className="text-yellow-500 font-serif bg-slate-500 py-2 px-4 rounded hover:bg-yellow-400 transition duration-300" href="/contactus">Contact Us</Link>
    </div>
</div>


    
  )
}

export default Navbar

"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../navbar/page';



   export default   function ReservationForm () {
       
  const router = useRouter();

  const [partySize, setPartySize] = useState('2 guests');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('8:00 AM');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    router.push('/confirmation'); 
  };

  return (<>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 bg-yellow-600">MAKE A RESERVATION</h2>
        <p className="text-center text-gray-500 mb-4">
          To help us find the best table for you, select the preferred party size, date, and time of your reservation.
        </p>
      
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="partySize">
            Party Size
          </label>
          <select
            id="partySize"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            className="block w-full p-3 border border-yellow-300 rounded-md"
          >
            <option>1 guest</option>
            <option>2 guests</option>
            <option>3 guests</option>
            <option>4 guests</option>
          </select>
        </div>
     
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full p-3 border border-yellow-300 rounded-md"
            required
          />
        </div>
      
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-lg" htmlFor="time">
            Time
          </label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="block w-full p-3 border border-t-yellow-300 rounded-md"
          >
            <option>8:00 AM</option>
            <option>8:15 AM</option>
            <option>8:30 AM</option>
            <option>8:45 AM</option>
          </select>
        </div>
      
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Reserve Table
          </button>
        </div>
      </form>
    </div>
    </>
  );
}
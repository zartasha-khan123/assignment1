"use client"
import React, { useState,useEffect} from 'react';

import { useRouter } from 'next/navigation';
import ThankYou from '../thankyou';
import Link from 'next/link';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [mounted,setMounted]= useState(false);
  const router = useRouter();

  useEffect(()=>{
    setMounted(true);
  },[])

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(mounted){
        console.log('Form submitted:', formData);
    
  
router.push('/thanku');

    }
};
  
  return (

<div className="min-h-screen bg-brown-200 flex flex-col items-center justify-center">
  <div className="container mx-auto px-4 py-8">

    <h1 className="text-3xl font-bold text-center mb-5 animate-pulse">Contact Us</h1>
    <p className="text-center mb-6">If you have any questions, feel free to reach out!</p>

  
    <div className="relative inline-block text-left mb-6">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        More Options
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

    
      <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <Link href="/contactus/nextedcontact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Map
          </Link>
          <Link href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Support
          </Link>
          <Link href="/feedback" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Feedback
          </Link>
        </div>
      </div>
    </div>

    
    <div className="bg-yellow-200 shadow-md rounded px-8 pt-6 pb-8 mb-10 w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring h-32"
            placeholder="Write your message here"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <Link href="/feedback">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </div>
  </div>

  <div className="w-full max-w-lg mx-auto mt-10">
    <ThankYou />
  </div>
</div>

  );
}


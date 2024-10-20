"use client"
import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import Navbar from '../navbar/page';
import { useState } from 'react';





function BookEvent() {
    const iceCreams = [
        {
          name: "Chocolate Delight",
          description: "Rich chocolate ice cream with a creamy texture.",
          imgSrc: "/images/images (7).jpeg", // Add your image path here
        },
        {
          name: "Vanilla Dream",
          description: "Classic vanilla with a smooth, rich flavor.",
          imgSrc: "/images/spidertemplate.webp",
        },
        {
          name: "Strawberry Bliss",
          description: "Fresh strawberry ice cream with a hint of cream.",
          imgSrc: "/images/icetemplate.webp",
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === iceCreams.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? iceCreams.length - 1 : prevIndex - 1
        );
      };

      
  return (
    <div>
        <Navbar/>
      <h1 className='font-semibold text-5xl text-center text-stone-50 mt-10 mb-5 '>Book an Event</h1>
      <p className='font-serif text-black font-medium mb-10 text-center'>
      Book an ice cream cake in advance for your celebration! ❤️

Instagram....!

Sweet memories and even sweeter moments. Celebrating your birthday/anniversary with a slice of heaven with our artisan ice cream cake!
      </p>
<div className='flex items-center justify-center space-x-4 mb-9'>
    <button className="bg-red-300 border-spacing-6 rounded-lg px-4 py-2 text-black"> Book Now </button>
      
      <a
        href="https://www.instagram.com/icecreamParlour"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-600 transition duration-300"
      >
        <FaInstagram className="w-8 h-8" />
      </a>
   
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 mt-20">
    <h1 className='font-mono font-semibold text-3xl mt-10'>Order Custom Ice Cream Cake Online</h1>

Bliss Small Batch Creamery
https://www.icecreambliss.com › ice-cream-cakes
Book a Wedding, Party, or Event! Book a Team/Client Appreciation Event ... Our vegan options make our ice cream cakes perfect for anyone at your next event!
<h1 className='from-neutral-600 font-extrabold text-orange-600 text-2xl mt-11'>
     CHOOSE YOUR FAVOURITE TEMPLATE AND USE IT FOR YOUR EVENT
</h1>




      <div className="relative w-full max-w-2xl p-6 bg-green-300 rounded-lg shadow-lg">
  
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={iceCreams[currentIndex].imgSrc}
            alt={iceCreams[currentIndex].name}
            className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
            key={iceCreams[currentIndex].imgSrc}
          />
        </div>


        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {iceCreams[currentIndex].name}
          </h2>
          <p className="mt-2 text-gray-600">
            {iceCreams[currentIndex].description}
          </p>
        </div>

    
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevious}
            className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-pretty "
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-pretty"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  

    </div>
  )
}

export default BookEvent


import Link from 'next/link';
import React from 'react'


  
    
  const MenuCard = () => {
  const iceCreams = [
    {
      name: 'Vanilla Delight',
      description: 'Classic vanilla ice cream with a creamy texture.',
      price: 'Rs:500',
      image: '/images/vanila.jpeg', 
    },
    {
      name: 'Chocolate Bliss',
      description: 'Rich chocolate ice cream with dark chocolate chunks.',
      price: 'Rs:650',
      image: '/images/chocolate.jpeg', 
    },
    {
      name: 'Strawberry Dream',
      description: 'Fresh strawberry ice cream with real strawberry pieces.',
      price: 'Rs:800',
      image: '/images/strawberry.jpeg', 
    },
    {
      name: 'Mint Chocolate Chip',
      description: 'Cool mint ice cream with crunchy chocolate chips.',
      price: 'Rs:750',
      image: '/images/download (8).jpeg', 
    },
  ];

  return (
    <>
    
<div className="min-h-screen bg-gray-100 p-4  hover:transform-cpu hover:scale-105">
    <h1 className="text-3xl font-bold text-center my-6 hover:text-zinc-950"><Link href="/not-Found">Ice Cream Menu</Link></h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 ">
      {iceCreams.map((iceCream, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={iceCream.image} alt={iceCream.name} className="w-full h-48 object-cover" />
          <div className="p-4 ">
            <h2 className="text-xl font-bold mb-2 hover:text-orange-500 transition duration-300">{iceCream.name}</h2>
            <p className="text-gray-600 mb-2">{iceCream.description}</p>
            <p className="text-lg font-semibold">{iceCream.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};





export default MenuCard

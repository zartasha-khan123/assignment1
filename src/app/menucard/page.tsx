// import Link from 'next/link';
// import React from 'react'
// import Image from 'next/image';


  
    
//   const MenuCard = () => {
//   const iceCreams = [
//     {
//       name: 'Vanilla Delight',
//       description: 'Classic vanilla ice cream with a creamy texture.',
//       price: 'Rs:500',
//       image: '/images/vanila.jpeg', 
//     },
//     {
//       name: 'Chocolate Bliss',
//       description: 'Rich chocolate ice cream with dark chocolate chunks.',
//       price: 'Rs:650',
//       image: '/images/chocolate.jpeg', 
//     },
//     {
//       name: 'Strawberry Dream',
//       description: 'Fresh strawberry ice cream with real strawberry pieces.',
//       price: 'Rs:800',
//       image: '/images/strawberry.jpeg', 
//     },
//     {
//       name: 'Mint Chocolate Chip',
//       description: 'Cool mint ice cream with crunchy chocolate chips.',
//       price: 'Rs:750',
//       image: '/images/download (8).jpeg', 
//     },
//   ];

//   return (
//     <>

// <div className="min-h-screen bg-gray-100 p-4 transition-transform duration-300 hover:scale-105">
//     <h1 className="text-3xl font-bold text-center my-6 hover:text-zinc-950">
//         <Link href="/contactus/nextedcontact">Ice Cream Menu</Link>
//     </h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//         {iceCreams.map((iceCream, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
//                 <Image 
//                     src={iceCream.image} 
//                     alt={iceCream.name} 
//                     width={300} 
//                     height={200} 
//                     className="w-full h-48 object-cover" 
//                 />
//                 <div className="p-4">
//                     <h2 className="text-xl font-bold mb-2 hover:text-orange-500 transition duration-300">
//                         {iceCream.name}
//                     </h2>
//                     <p className="text-gray-600 mb-2">{iceCream.description}</p>
//                     <p className="text-lg font-semibold">{iceCream.price}</p>
//                 </div>
//                 <div>
//                  <Link href={"/contactus/nextedcontact"}> <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded">
//                     SEE MORE</button></Link>
//                   </div>
//             </div>
//         ))}
//     </div>
// </div>

//     </>
//   );
// };





// export default MenuCard



import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center my-6 hover:text-zinc-950 transition duration-300">
        <Link href="/contactus/nextedcontact">Ice Cream Menu</Link>
      </h1>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {iceCreams.map((iceCream, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <Image
              src={iceCream.image}
              alt={iceCream.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg sm:text-xl font-bold mb-2 hover:text-orange-500 transition duration-300">
                {iceCream.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-2">
                {iceCream.description}
              </p>
              <p className="text-base sm:text-lg font-semibold">
                {iceCream.price}
              </p>
            </div>

            {/* Button */}
            <div className="p-4 text-center">
              <Link href="/contactus/nextedcontact">
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;

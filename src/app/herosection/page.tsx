// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link';

// function Herosection() {
//   return (  <>

// <div className="relative flex items-center justify-start w-full min-h-screen p-4">
//   {/* Image Section - Positioned to the left */}
//   <Image
//     src="/images/images.webp"
//     alt="centered"
//     width={400} 
//     height={240}   
//     layout="intrinsic" // Ensures image maintains its aspect ratio and does not stretch
//     priority
//     className="max-w-full h-auto" // Image will maintain its aspect ratio while scaling
//   />
  
//   <div className="absolute top-1/2 left-1/3 transform -translate-x-1/8 -translate-y-1/4 text-white text-5xl font-bold flex flex-col items-center">
//     <h1 className="mb-4 animate-bounce">ICECREAM</h1>
//     <h2 className="mb-5">HAND CRAFTED</h2>
//     <div>
//       <button className="text-orange-100 font-serif bg-black py-3 px-5 rounded hover:bg-yellow-600">
//         <Link href="/">OUR FLAVOURS</Link>
//       </button>
//     </div>
//   </div>
// </div> 

// <br />

// <div className="h-auto w-full flex flex-col justify-center items-center relative p-4">
//   <Image
//     src="/images/images1.webp"
//     alt="centered"
//     width={600}
//     height={500}
//     layout="responsive"
//     priority
//     className="block max-w-full" 
//   />
  
//   <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-black text-xl font-extrabold flex flex-col items-center ">
//     <h1 className="font-semibold text-yellow-800 text-5xl mb-6 transform transition-transform duration-300 hover:scale-110">OUR FLAVOURS</h1>
//     <h1 className="text-2xl text-center text-yellow-950">Fresh n Tasty!</h1>
//     <p className="text-center px-4 mt-2">
//       Ice cream is a delightful treat that is both fresh and tasty, making it a beloved dessert in many cultures. In our region, we take pride in offering a variety of flavors that cater to different tastes, from classic vanilla and rich chocolate to exotic fruit flavors and innovative combinations. Made from high-quality ingredients, our ice cream is churned to perfection, ensuring a smooth and creamy texture. Each scoop is a burst of flavor, evoking joy and nostalgia with every bite. Whether enjoyed on a hot summer day or as a sweet ending to a meal, ice cream brings people together and creates cherished memories. It’s not just a dessert; it’s a celebration of taste and happiness!
//     </p>
//     <Link href="/menucard"><button className="bg-yellow-700 text-orange-100 font-serif mt-10 py-2 px-4 rounded hover:bg-silver-600 active:bg-yellow-800">
//       MENU
//     </button></Link>
//   </div>
// </div>

// <div className="flex flex-col justify-center items-center mt-14 relative p-4">
//   <Image
//     src="/images/images2.webp"
//     alt="image"
//     width={500}
//     height={300}
//     layout="responsive"
//     priority
//     className="block max-w-full" 
//   />
  
//   <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-white text-xl font-bold flex flex-col items-center">
//     <h1 className="text-9xl text-center font-serif animate-pulse text-yellow-600">ENJOY DAIRY FREE</h1>
//     <Link href={"/reservations"}>
//     <button className="text-yellow-700 bg-white font-serif mt-10 py-3 px-6 rounded hover:bg-yellow-500"
//     > ORDER ONLINE</button></Link>
//   </div>
// </div>

// <div className="flex items-center justify-center h-auto p-4">
//   <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 w-full max-w-6xl">
//     <div className="w-full md:w-1/2">
//       <Image
//         src="/images/images3.webp"
//         alt="Description"
//         className="w-full h-auto object-cover rounded-lg max-w-full" 
//         width={200}
//         height={200}
//       />
//     </div>

//     <div className="w-full md:w-1/2 text-center">
//       <h1 className="text-4xl font-bold mb-4 font-italic animate-bounce">OUR PLACE</h1>
//       <h1 className="text-3xl font-bold mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-amber-300">ICE CREAM BY THE SEA</h1>
//       <p className="text-lg font-medium px-4">
//         Our Place AK is a cozy, welcoming ice cream shop that brings joy to everyone who steps in. 
//         Located in a charming neighborhood, the shop offers a delightful range of handcrafted ice creams made from the
//          finest ingredients. Each flavor is carefully curated, ensuring a
//          perfect balance of taste and texture. From classic favorites like vanilla and 
//         chocolate to unique flavors like pistachio rose and mango chili, there is something for every ice cream lover.
//       </p>
//     </div>
//   </div>
// </div>

//      </>
//   );
// }




// export default Herosection



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Herosection() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-4 bg-gray-100">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/images.webp"
            alt="Ice Cream"
            width={400}
            height={240}
            layout="intrinsic"
            priority
            className="max-w-full h-auto"
          />
        </div>
        {/* Text Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4 animate-bounce">ICECREAM</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-700 mb-6">HAND CRAFTED</h2>
          <button className="bg-black text-white py-3 px-6 rounded-lg font-serif hover:bg-yellow-600">
            <Link href="/">OUR FLAVOURS</Link>
          </button>
        </div>
      </div>

      {/* Flavor Section */}
      <div className="relative flex flex-col items-center justify-center w-full p-4 bg-yellow-50">
        <Image
          src="/images/images1.webp"
          alt="Flavors"
          width={600}
          height={500}
          layout="responsive"
          priority
          className="rounded-lg shadow-lg"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4 hover:scale-110 transition-transform duration-300">
            OUR FLAVOURS
          </h1>
          <h2 className="text-xl md:text-2xl text-yellow-950">Fresh n Tasty!</h2>
          <p className="text-base md:text-lg mt-4 text-gray-700">
            Ice cream is a delightful treat that is both fresh and tasty, making it a beloved dessert in many cultures. 
            Enjoy our range of high-quality handcrafted ice creams made to perfection!
          </p>
          <Link href="/menucard">
            <button className="bg-yellow-700 text-white mt-6 py-2 px-4 rounded hover:bg-yellow-600">
              MENU
            </button>
          </Link>
        </div>
      </div>

      {/* Dairy-Free Section */}
      <div className="relative flex flex-col items-center justify-center w-full p-4 bg-gray-900">
        <Image
          src="/images/images2.webp"
          alt="Dairy-Free Ice Cream"
          width={500}
          height={300}
          layout="responsive"
          priority
          className="rounded-lg shadow-lg"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-6xl font-serif text-yellow-500 mb-6 animate-pulse">
            ENJOY DAIRY FREE
          </h1>
          <Link href="/reservations">
            <button className="bg-white text-yellow-700 font-serif py-3 px-6 rounded hover:bg-yellow-500">
              ORDER ONLINE
            </button>
          </Link>
        </div>
      </div>

      {/* Our Place Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 bg-yellow-100">
        <div className="w-full md:w-1/2 p-4">
          <Image
            src="/images/images3.webp"
            alt="Our Place"
            width={400}
            height={300}
            layout="responsive"
            priority
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-4xl font-bold mb-4 text-yellow-800 animate-bounce">
            OUR PLACE
          </h1>
          <h2 className="text-3xl font-bold mb-4 text-yellow-700 hover:scale-110 transition-transform duration-300">
            ICE CREAM BY THE SEA
          </h2>
          <p className="text-lg text-gray-700">
            Our Place AK is a cozy ice cream shop offering a delightful range of handcrafted ice creams. 
            From classic favorites to unique flavors, we have something for everyone.
          </p>
        </div>
      </div>
    </>
  );
}

export default Herosection;

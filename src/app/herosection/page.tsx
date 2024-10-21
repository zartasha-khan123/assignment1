import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function Herosection() {
  return (  <>
    <div className='h-auto w-full max-w-md flex justify-center items-center '>
      <Image src="/images/images.webp" alt="centered" width={500} height={300} layout='responsive' priority />
    
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/5 -translate-y-1/6 text-white text-5xl font-bold flex-col">
        <h1 className='mb-4 animate-bounce ml-8'>ICECREAM</h1>
        <h2 className='mb-5'>HAND CRAFTED</h2>
        <div>
        <button  className="text-orange-100 font-serif mr-10 bg-black py-3 px-5 rounded mt-15 hover:bg-yellow-600"> <Link  href="/">OUR FLAVOURS</Link></button>
        </div>
      </div>
      </div>
<br></br>
    
<div className=' h-auto w-full max-w-md flex justify-center items-center '>
<Image src="/images/images1.webp" alt="centered" width={600} height={500} layout='responsive' priority  className='block'/>
<div className="absolute  left-1/2 transform -translate-x-1/5 -translate-y-1/5 text-white text-xl font-bold flex-col">
<h1 className='font-20 font-semibold font-sans text-yellow-800 flex justify-center items-center  hover:bg-yellow-300 active:bg-yellow-200 focus:outline-none focus:ring focus:ring-violet-300 text-5xl mb-6 transform translate-x-4'>OUR FLAVOURS</h1>
<h1 className='text-pretty text-2xl text-center text-zinc-600 transform -translate-x-6'>Fresh n Tasty!</h1>
<p>Ice cream is a delightful treat that is both fresh and tasty,
   making it a beloved dessert in many cultures. In our region, 
   we take pride in offering a variety of flavors that cater to different tastes,
    from classic vanilla and rich chocolate to exotic fruit flavors and innovative combinations.
     Made from high-quality ingredients, 
     our ice cream is churned to perfection, ensuring a smooth and creamy texture. 
     Each scoop is a burst of flavor, evoking joy and nostalgia with every bite. 
     Whether enjoyed on a hot summer day or as a sweet ending to a meal,
      ice cream brings people together and creates cherished memories. 
      Its not just a dessert; its a celebration of taste and happiness!</p>

      <button className='bg-red-800 text-orange-100 font-serif mt-10 py-2 px-4 rounded ml-40  hover:bg-yellow-300 active:bg-yellow-800'>MENU</button>
</div>
</div>
<div  className='flex justify-center items-center mt-14 '>
  <Image src="/images/images2.webp" alt="image" width={500} height={300} layout='responsive' priority  className='block'/>
  <div className="absolute  transform -translate-x-1/5 -translate-y-1/5 text-white text-xl font-bold flex-col">
  <h1 className='text-9xl text-center align-text-bottom font-serif animate-pulse'>ENJOY DAIRY FREE</h1>
   <input type="text" className="text-orange-400 bg-black font-serif mt-10 py-3 px-4 rounded ml-40 mr-50 hover:bg-yellow-300 active:bg-yellow-800 border-none" placeholder='ORDER ONLINE'/>
</div>
</div>

    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-8">
      
        <div className="w-1/2">
          <Image
            src="/images/images3.webp"
            alt="Description"
            className="w-full h-auto object-cover rounded-lg"
            width={200} height={200}
          />
           
        </div>

        <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-center font-italic animate-bounce ml-6 ">OUR PLACE</h1>

          <h1 className="text-3xl font-bold mb-4 transform transition-transform duration-300 hover:scale-125 hover:text-amber-300">ICE CREAM BY THE SEA</h1>
          <p className="text-lg  font-medium">
          Our Place AK is a cozy, welcoming ice cream shop that brings joy to everyone who steps in.
          Located in a charming neighborhood, the shop offers a delightful range of handcrafted 
          ice creams made from the finest ingredients. Each flavor is carefully curated,
          ensuring a perfect balance of taste and texture. From classic favorites like vanilla
          and chocolate to unique flavors like pistachio rose and mango chili, there something
             for every ice cream lover.


          </p>
        </div>
      </div>
    </div>

   








     </>
  );
}




export default Herosection


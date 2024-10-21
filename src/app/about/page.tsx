import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Navbar from '../navbar/page'

async function About() 


{
 await new Promise((resolve) => setTimeout(resolve, 1000));



        return ( <>
        <Navbar/>
     
        <Link href="/home"><h1 className="font-bold bg-blue-300 flex justify-center align-center mt-9">ABOUT US</h1></Link>
              <p className="font-bold text-2xl pt-6 pl-3">Gelato (Italian for “frozen”) is handmade from whole milk, sugar, and other flavourings, typically fruit, chocolate, and nuts. It uses high-quality fresh ingredients. These ingredients slowly incorporate air as they are frozen, 
                resulting in a thick soft cream that is slow to melt.
              </p>
  
              <div className="flex justify-center gap-8 mt-6">
        <div className="w-64 h-90 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-10 mt-11">
          <Image src="/images/download (9).jpeg" alt="Ice Cream Flavor 1"
            className="w-full h-full object-cover" width={500} height={300} layout='responsive'
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-700">Delicious Rainbow</h2>
            <p className="text-gray-500 font-medium">Smooth and creamy vanilla flavor.</p>
          </div>
        </div>

      
        <div className="w-64 h-90 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-10 mt-11">
          <Image
            src="/images/download (10).jpeg" 
            alt="Ice Cream Flavor 2"
            className="w-full h-full object-cover" width={400} height={200} layout='responsive'
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-700">Strawberry Delight</h2>
            <p className="text-gray-500 font-medium">Fresh strawberry with a hint of sweetness.</p>
          </div>
        </div>

        <div className="w-64 h-90 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-10 mt-11 ">
          <Image
            src="/images/download (11).jpeg" 
            alt="Ice Cream Flavor 3"
            className="w-full h-full object-cover" width={400} height={200} layout='responsive'
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-700">Rainbow Heaven</h2>
            <p className="text-gray-500 font-medium">Rich and decadent Rainbow flavors.</p>
          </div>
        </div>
      </div>
      
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-10 bg-yellow-500 inline-grid animate-bounce">More About Us</h1>
        <p className='font-black from-neutral-700'>Ice cream, frozen dairy food and common dessert made from cream or butterfat, milk, sugar, and flavorings.
             Frozen custard and French-type ice creams also contain eggs. Containing less air than the ice cream produced in the United States (which has more butterfat), and denser and more intensely flavored, is the related Italian gelato. Hundreds of flavors of ice cream have been devised, the most popular being vanilla, chocolate, and strawberry. (When the three flavors are combined, it is known as Neopolitan.) Ice cream is also the basis of other desserts, such as baked Alaska, which consists of ice cream layered between a slice of sponge cake and a covering of meringue 
            that is browned in either an oven at high heat or by a butane culinary torch.</p>
        </div>
        <div className="flex gap-4">
    
          <div className="group w-1/2 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/abouticecream.jpeg" 
              alt="Ice Cream 1"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            width={400} height={200}/>
          </div>

          <div className="group w-1/4 relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/about2ice.jpg" 
              alt="Ice Cream 2"
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
            width={400} height={200}/>
          </div>

          <div className="flex gap-4">
    <div className="group w-1/3 relative overflow-hidden rounded-lg shadow-lg">
      <Image src="/images/images (5).jpeg" alt="Ice Cream 1" className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
      width={400} height={200}/>
    </div>

    <div className="flex gap-4">
    
    <div className="group w-1/3 relative overflow-hidden rounded-lg shadow-lg">
      <Image
        src="/images/download (12).jpeg" 
        alt="Ice Cream 1"
        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
      width={400} height={200}/>
    </div>


        </div>
      </div>
    </div>
    </div>
    </>
    )
 }
    
  


export default About

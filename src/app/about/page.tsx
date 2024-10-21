import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


async function About() 


{
 await new Promise((resolve) => setTimeout(resolve, 1000));


        return ( 
    <div className="min-h-screen">
      <Link href="/home">
        <h1 className="font-bold bg-blue-300 flex justify-center items-center mt-9 text-lg md:text-2xl p-4 md:p-6">
          ABOUT US
        </h1>
      </Link>

      <p className="font-bold text-sm md:text-2xl pt-6 px-4 md:px-10">
        Gelato (Italian for “frozen”) is handmade from whole milk, sugar, and other flavourings, typically fruit, chocolate, and nuts. It uses high-quality fresh ingredients. These ingredients slowly incorporate air as they are frozen, resulting in a thick soft cream that is slow to melt.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-6 px-4 md:px-0">
        <div className="w-full md:w-64 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-6 md:mb-10">
          <Image
            src="/images/download (9).jpeg"
            alt="Delicious Rainbow"
            className="w-full h-48 md:h-64 object-cover"
            width={500}
            height={300}
            layout="responsive"
          />
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">Delicious Rainbow</h2>
            <p className="text-gray-500 font-medium">Smooth and creamy vanilla flavor.</p>
          </div>
        </div>

        <div className="w-full md:w-64 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-6 md:mb-10">
          <Image
            src="/images/download (10).jpeg"
            alt="Strawberry Delight"
            className="w-full h-48 md:h-64 object-cover"
            width={400}
            height={200}
            layout="responsive"
          />
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">Strawberry Delight</h2>
            <p className="text-gray-500 font-medium">Fresh strawberry with a hint of sweetness.</p>
          </div>
        </div>

        <div className="w-full md:w-64 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse mb-6 md:mb-10">
          <Image
            src="/images/download (11).jpeg"
            alt="Rainbow Heaven"
            className="w-full h-48 md:h-64 object-cover"
            width={400}
            height={200}
            layout="responsive"
          />
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">Rainbow Heaven</h2>
            <p className="text-gray-500 font-medium">Rich and decadent rainbow flavors.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 md:px-10">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-6 bg-yellow-500 p-2 animate-bounce">
            More About Us
          </h1>
          <p className="text-sm md:text-lg text-neutral-700 mb-8">
            Ice cream, frozen dairy food and common dessert made from cream or butterfat, milk, sugar, and flavorings. Frozen custard and French-type ice creams also contain eggs. Containing less air than the ice cream produced in the United States, Italian gelato is denser and more intensely flavored. Popular flavors include vanilla, chocolate, and strawberry.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="group w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/abouticecream.jpeg"
                alt="Ice Cream"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={200}
                layout="responsive"
              />
            </div>

            <div className="group w-full md:w-1/4 relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/about2ice.jpg"
                alt="Ice Cream 2"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={200}
                layout="responsive"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="group w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/images (5).jpeg"
                alt="Ice Cream 3"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={200}
                layout="responsive"
              />
            </div>

            <div className="group w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/download (12).jpeg"
                alt="Ice Cream 4"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                width={400}
                height={200}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About

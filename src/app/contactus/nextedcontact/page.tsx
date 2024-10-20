'use client'

import Navbar from '@/app/navbar/page';
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

  

const iceCreamFlavors = [
  { name: 'Vanilla', description: 'Classic vanilla ice cream.' },
  { name: 'Chocolate', description: 'Rich chocolate flavor.' },
  { name: 'Strawberry', description: 'Fresh strawberry taste.' },
  { name: 'Mint Chocolate Chip', description: 'Mint ice cream with chocolate chips.' },
  { name: 'Cookie Dough', description: 'Cookie dough chunks in vanilla ice cream.' },
];

export default function NestedContact() {
  const [selectedFlavor, setSelectedFlavor] = useState("string");

    return (
        <div>
        <Navbar/>
    <div className="container mx-auto p-5 mt-16" >
      <h1 className="text-3xl font-bold text-center mb-5 animate-pulse">Ice Cream Map</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {iceCreamFlavors.map((flavor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold">{flavor.name}</h2>
            <button
              className="mt-2 bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => setSelectedFlavor(flavor.description)}
            >
              Show Description
            </button>
          </div>
        ))}
      </div>
      {selectedFlavor && (
        <div className="mt-5 p-4 border border-gray-300 rounded bg-zinc-600 mb-12">
          <h2 className="text-lg font-bold">Description:</h2>
          <p>{selectedFlavor}</p>
        </div>
      )}
    </div>
    </div>
  )
}




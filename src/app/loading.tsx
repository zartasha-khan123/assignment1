
import React from 'react'
import Image from 'next/image'


function LoadingPage() {
   
  return (
    <div className=' h-screen flex justify-center items-center' >
      <h1 className='text-center text-8xl font-extrabold text-black animate-bounce  '>
      <Image  src="/images/emoji.png" alt="loading" width={100} height={100}/>loading page please wait...</h1>


    </div>
  )
}

export default LoadingPage



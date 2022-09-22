import React from 'react'

function Contact() {
  return (
    <div className='flex flex-wrap justify-center align-center pt-8 md:flex-nowrap'>
      <div className='flex flex-wrap justify-center w-4/5 bg-neutral-700 p-4 mb-4 rounded-md md:w-1/3 md:mb-0 md:mr-2 '>
        <div className='w-full text-center'>
        <span> Zapraszam na mojego facebooka: </span>
        </div>
        <div>
        <button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        </div>
      </div>
      <div className='flex flex-wrap justify-center w-4/5 bg-neutral-700 p-4 rounded-md md:w-1/3 md:ml-2'>
        <div className='w-full text-center'>
        <span> Zapraszam na mojego bloga: </span>
        </div>
        <div>
        <button class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
        </div>
      </div>

    </div>
  
  )
}

export default Contact
import React from 'react'

function Contact() {
  return (
    <div className='contact'> 
      <div className='text-center'>
        <h5> Kontakt </h5>
      </div>
      <div className='flex justify-center align-center'>
        <div className=''>
          <p> Zapraszam na mojego facebooka:</p>
          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'> Facebook </button>
        </div>
        <div className=''>
          <p> Zapraszam na mojego bloga: </p>
         <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'> Blog </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
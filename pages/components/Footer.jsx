import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

function Footer() {
  return (
    
    <footer className='bg-gray-900 text-white'>
    <div className='flex flex-col w-full p-1 border-t-2 border-white mt-4'>
        <div className='text-center text-3xl pt-5'> 
        POSZYDEŁKUJMY!
        🧶
        </div>
        <div className='flex justify-around align-center pt-20 pb-20 border-b border-[#12e1f1]' > 
            <div> Blog </div>  
            <div> Strona główna </div>  
            <div>  O mnie  </div>  
        </div>
    </div> 
    <div className='text-sm w-full flex justify-around content-center text-center h-36 pt-10 '>
      <div className='w-8'>
      <Link href="https://www.facebook.com/profile.php?id=100063693720962"><FontAwesomeIcon icon={faFacebook}/></Link>
        </div>
        <div className='test'>
        <a href='#'> <button className='bg-[#12e1f1] text-white font-bold py-2 px-4 rounded'> Do góry! </button> </a>
        </div>
      </div>
      <div className='text-center'>
        Wszystkie prawa zastrzeżone
      </div>
    </footer>
  )
}

export default Footer
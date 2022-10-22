import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

function Footer() {
  return (
    
    <footer className='flex-wrap bg-gray-900 text-white flex justify-around align-center h-64 items-center md:flex-nowrap'>
      <div> © 2022 Wszystkie prawa zastrzeżone  </div>
      <div className='flex justify-around align-center'> 
      <Link href="/"><div className='font-bold pr-8 md:pr-4'>  Strona główna </div></Link>
      <Link href="/blog"><div className='font-bold pr-8 md:pr-4'> Blog </div></Link>
      <Link href="/o-mnie"><div className='font-bold pr-8 md:pr-4'> O mnie </div></Link>
      <Link href="https://www.facebook.com/profile.php?id=100063693720962"><div className='w-8'> <FontAwesomeIcon icon={faFacebook}/> </div></Link>
      </div>
      <div> Stworzone przez: Łukasz Pietrzykowski </div>
    </footer>
  )
}

export default Footer
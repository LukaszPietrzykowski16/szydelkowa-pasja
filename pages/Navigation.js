import React, { useState } from 'react';
import test from './images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Navigation() {
    const [menu, setMenu] = useState(false)
    const hideMenu = (menu) => {
        menu === true ? setMenu(false) : setMenu(true)
    }
  return (
  
    <nav className='sticky top-0 bg-white z-40 text-grey-600 h-1/5 border-b-2 border-grey-200 w-full'>
        <div className='container flex h-full'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <div className='container flex flex-wrap justify-center items-center w-full h-20 p-1'>
                    <img src={test.src} alt="szydelkowa pasja logo" className='h-full text-center rounded-lg'/>
                </div> 
            </div>
            <div className='md: hidden md:container md:flex md:flex-wrap md:justify-around md:items-center md:mx-auto'>
                <ul className='flex items-center'>
                    <li> <Link href="/"> Strona główna </Link> </li>
                </ul>
                <ul className='flex items-center'>
                    <li>  <Link href="/blog"> Blog </Link> </li>
                </ul>
                <ul className='flex items-center'>
                    <li> <Link href="/o-mnie"> O mnie </Link>
                </li>
                </ul>
            </div>
            <div className='md:hidden md:block w-full flex justify-center'>
                <div className="flex items-center w-10" onClick={() => hideMenu(menu)}>
                    <FontAwesomeIcon icon={menu? faXmarkCircle : faBars}/>
                </div>
            </div>
        </div>
        
        <div className={menu === false? 'menu sticky top-20': 'menu-open sticky top-20'}>
       <div className='flex flex-col align-center text-xl'>
                <ul className='p-8'>
                    <li> <Link href="/"> Strona główna </Link> </li>
                </ul>
                <ul className='p-8'>
                    <li>  <Link href="/blog"> Blog </Link> </li>
                </ul>
                <ul className='p-8'>
                    <li> <Link href="/o-mnie"> O mnie </Link>
                </li>
                </ul>
                <div className='flex flex-column content-end justify-end h-4/5 items-center'>
                    <div className='w-8 text-[#4267B2]'>  <FontAwesomeIcon icon={faFacebook}/> </div>
                    <div className='p-2'> 
                    <button class="block bg-[#ef2c64] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                     Blog
                    </button>
                    </div>
                </div>
       </div>
       
    </div>
        
    </nav>
    

  )
}

export default Navigation
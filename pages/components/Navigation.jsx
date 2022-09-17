import React, { useState } from 'react';
import test from '../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';

function Navigation() {
    const [menu, setMenu] = useState(false)

    console.log(menu)

    const hideMenu = (menu) => {
        menu === true ? setMenu(false) : setMenu(true)
    }
  return (
    <nav className='bg-gray-800 text-indigo-600 h-1/5'>
        <div className='container flex h-full'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <div className='container flex flex-wrap justify-center items-center w-full h-20 p-1'>
                    <img src={test.src} alt="szydelkowa pasja logo" className='h-full text-center rounded-lg'/>
                </div> 
            </div>
            <div className='md: hidden md:container md:flex md:flex-wrap md:justify-around md:items-center md:mx-auto'>
                <a className='flex items-center'>
                    Strona główna
                </a>
                <a className='flex items-center'>
                    Blog
                </a>
                <a className='flex items-center'>
                    O mnie
                </a>
            </div>
            <div className='md:hidden md:block w-full flex justify-center'>
                <div className="flex items-center w-10" onClick={() => hideMenu(menu)}>
                    <FontAwesomeIcon icon={menu? faXmarkCircle : faBars}/>
                </div>
            </div>
        </div>
        <div className={menu === false? 'opacity-0 absolute top-20 right-0 translate-x-800 transition ease-in-out delay-1500': 'absolute right-0 top-20 bg-gray-600 w-40 absolute right-0 translate-x-200 transition ease-in-out delay-1500'}>
                <a className='flex items-center p-2 h-20'>
                    Strona główna
                </a>
                <a className='flex items-center p-2 h-20'>
                    Blog
                </a>
                <a className='flex items-center p-2 h-20'>
                    O mnie
                </a>
        </div>
       
        
    </nav>
  )
}

export default Navigation
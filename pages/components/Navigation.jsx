import React, { useState } from 'react';
import test from '../images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';


function Navigation() {
    const [menu, setMenu] = useState(false)
    const hideMenu = (menu) => {
        menu === true ? setMenu(false) : setMenu(true)
    }
  return (
   
    <nav className='bg-white-200 text-grey-600 h-1/5 border-b-2 border-grey-200 w-full'>
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
        
        <div className={menu === false? 'menu': 'menu-open'}>
       <div className={menu === false? 'list': 'list-open'}>
            <p> Strona główna </p>
            <p> Blog </p>
            <p> O mnie </p>
       </div>
    </div>
        
    </nav>
   

  )
}

export default Navigation
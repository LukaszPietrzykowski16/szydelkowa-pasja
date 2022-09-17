import React from 'react';
import test from '../images/logo.jpg';

function Navigation() {
    console.log(test)
  return (
    <nav className='bg-gray-800 text-indigo-600 h-20'>
        <div className='container flex h-full'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <div className='container flex flex-wrap justify-center items-center w-full h-20 p-1'>
                    <img src={test.src} alt="szydelkowa pasja logo" className='h-full text-center rounded-lg'/>
                </div>
                
            </div>
            <div className='container flex flex-wrap justify-around items-center mx-auto'>
                <a className='flex items-center'>
                    strona główna
                </a>
                <a className='flex items-center'>
                    blog
                </a>
                <a className='flex items-center'>
                    o mnie
                </a>
            </div>
        </div>
        
       
        
    </nav>
  )
}

export default Navigation
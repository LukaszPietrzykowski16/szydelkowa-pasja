import React, {useEffect, useState} from 'react'
import picture from '../../images/main-picture.jpg'
import { motion } from "framer-motion"


function Front() {

  return (


    <main className='block md:flex mb-20'>
            <div className='w-full flex justify-center mt-10'>
           
              <motion.div 
               className='w-full flex justify-center mt-10 bg-[#12e1f1] w-10/12 md:w-4/5 md:w-10/12  rounded-lg'
                initial={{opacity: 0}}
               animate={{opacity: 1}}
               transition={{ type: 'spring', duration: 1.3}}> 
               <motion.div 
               className='w-full flex justify-center' 
               initial={{y: '50vh', opacity: 0}}
               animate={{y: 0, opacity: 1}}
               transition={{ type: 'spring', duration: 1.5, bounce: 0.3}}> 
               <img src={picture.src} className="sm:center w-4/5 md:w-4/5 md:w-10/12 rounded-lg z-10 m-6 rounded-lg"  alt='Kasia Kowalska'/> 
               </motion.div>
              </motion.div>
                
            </div>
            <div className='flex justify-center align-center mt-5 md:flex-wrap md:justify-around md:content-center'>
                <div className='center w-4/5'>
                    <h1 className='text-5xl pb-2 hover-underline-animation'> Witajcie Kochani! </h1>
                    <p>
                    Jestem Kasia, a Szydelkowanie to moja wielka Pasja. Zawładnela moim życiem od października 2018 roku i teraz to wręcz moje pozytywne uzależnienie   
                    Dzierganie to mój czas dla siebie, relax i ogromna satysfakcja. 
                </p>
                </div>
            </div>
    </main>
  )
}

export default Front
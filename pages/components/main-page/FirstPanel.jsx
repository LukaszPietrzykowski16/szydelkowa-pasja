import React from 'react'
import img0 from '../../images/first-project/first-project-0.jpg'
import img1 from '../../images/first-project/first-project-1.jpg'
import img2 from '../../images/first-project/first-project-2.jpg'
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import {useAnimation} from 'framer-motion'

function FirstPanel() {

 

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if(inView){
      animation1.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.3, delay: 0.2,
        }
      })
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.3, delay: 0.4,
        }
      })
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.3, delay: 0.6,
        }
      })
    }
    if(!inView){
      animation1.start({x: '-50vw', opacity: 0})
      animation2.start({y: '-20vh', opacity: 0})
      animation3.start({y: '20vh', opacity: 0})


    }
    
  }, [inView])

  return (
    <div className='flex flex-wrap justify-center align-center mt-8 mb-8 md:flex-nowrap h-screen w-full mb-20 md:mb-5'>
      <div className='parent w-4/5 pt-5'>   
        <motion.div className='div1' animate={animation1} viewport={{ once: true }}> <img src={img2.src} className="w-full rounded-lg -z-10"/> </motion.div>
        <motion.div className='div2' animate={animation2} viewport={{ once: true }}> <img src={img1.src} className="w-full rounded-lg -z-10"/> </motion.div>
        <motion.div className='div3' animate={animation3} viewport={{ once: true }}> <img src={img0.src} className="w-full rounded-lg -z-10"/> </motion.div>
      </div>
      <div className='w-10/12 mt-8 md:flex md:flex-wrap md:justify-around md:content-center md:p-10'>
      <h2 className='text-5xl pb-7' ref={ref}> Kucyk Pony "Klaudia" 🦄 </h2>
      <p className='colorful-border'>Tak właściwie to "Jednorożec mini mini" ze wzoru Ezerioszka - handmade 
      Ma ok 20cm wysokości na siedząco i 30cm w pozycji leżącej. Jednak po grudniowym Gigancie jest naprawdę dość małych gabarytów, jednak uroku ma w sobie mnóstwo 
      Miał być kolorowy i jedyny w swoim rodzaju. Dla wspaniałej zumbowiczki i kreatorki ogrodów. Bo jak to mówię "Rękodzieło jest dla wszystkich. Dla Małych i Dużych"  </p>
      </div>
    </div>
    
  )
}

export default FirstPanel
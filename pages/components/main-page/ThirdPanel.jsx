import React from 'react'
import img1 from '../../images/third-project/img0.jpg'
import img2 from '../../images/third-project/img1.jpg'
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import {useAnimation} from 'framer-motion'

function ThirdPanel() {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();

  useEffect(() => {
    if(inView){
      animation1.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.3, delay: 0.2,
        }
      })
      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.0, bounce: 0.3, delay: 0.4,
        }
      })
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.2, bounce: 0.3, delay: 0.6,
        }
      })
      animation4.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.4, bounce: 0.3, delay: 0.8,
        }
      })
      animation5.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.6, bounce: 0.3, delay: 1.0,
        }
      })
    }
    if(!inView){
      animation1.start({y: '40vw', opacity: 0})
      animation2.start({y: '20vh', opacity: 0})
      animation3.start({y: '20vh', opacity: 0})
      animation4.start({y: '20vh', opacity: 0})
      animation5.start({y: '20vh', opacity: 0})


    }
    
  }, [inView])


    return (
        <div className='flex flex-wrap justify-center align-center mt-5' ref={ref}>
          <motion.div className='w-4/5 flex justify-center align-center md:w-1/2' animate={animation1}>   
            <img src={img1.src} className="w-full rounded-lg"/> 
          </motion.div>
          <div className='flex justify-center align-center'>
            <motion.div className='img-box w-1/5 p-1' animate={animation2}>
              <img src={img1.src} className="w-full rounded-lg"/>
            </motion.div>
            <motion.div className='img-box w-1/5 p-1' animate={animation3}>
              <img src={img1.src} className="w-full rounded-lg"/>
            </motion.div>
            <motion.div className='img-box w-1/5  p-1' animate={animation4}>
              <img src={img1.src} className="w-full rounded-lg"/>
            </motion.div>
            <motion.div className='img-box w-1/5 p-1' animate={animation5}>
              <img src={img1.src} className="w-full rounded-lg"/>
            </motion.div>
          </div>
          <div className='w-4/5 mt-8 md:flex md:flex-wrap md:justify-around md:content-center md:p-10'>
            <h4 className='text-5xl'> Krokodyl "Michał" 🐊 </h4>
                
            Na specjalne życzenie Mojego Chrzesniaka! 
            Ma prawie 50cm długości i wykonany jest z mieciutkiej pluszowej włóczki 
            Wzór od OliMori
            Trochę zaduma go złapała, bo miał mieć sesje zdjęciową na dworze, jednak deszcz zdecydowanie pokrzyżował nam plany
            Dobrze ze potem na chwilę wyszło słońce!
            Eh... I obawiam się, że powoli trzeba już będzie się przestawiać na aranzacje  domowe, a ja zdecydowanie polubiłam ujęcia na zewnątrz
      
            Mam nadzieję, że lada chwila przyjdzie piękna, złota i ciepła jesień 
            Na to liczę!

          </div>    
          
          
        </div>
        
      )
}

export default ThirdPanel
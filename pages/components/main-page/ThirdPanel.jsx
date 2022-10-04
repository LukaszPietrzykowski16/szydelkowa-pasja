import React from 'react'
import img0 from '../../images/third-project/img0.jpg'
import img1 from '../../images/third-project/img1.jpg'
import img2 from '../../images/third-project/img2.jpg'
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import {useEffect, useState} from 'react'
import {useAnimation} from 'framer-motion'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRight } from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function ThirdPanel() {
  const [index, setIndex] = useState(0)
  const images = [img0.src, img1.src, img2.src]

  const variants = {
    open: { opacity: [0, 1], duration: 0.5},
    closed: { opacity: [0, 1], duration: 0.5},
  }
  
  const [isOpen, setIsOpen] = useState(false)

  const change = (num) => {
    if (isOpen === true){
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
    setIndex(index + num)
    
  }

  if (index === images.length){
    setIndex(0)
  }
  if (index === -1){
    setIndex(images.length - 1)
  }
  
  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation1 = useAnimation();

  useEffect(() => {
    if(inView){
      animation1.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 1.5, bounce: 0.3, delay: 0.2,
        }
      })
    }
    if(!inView){
      animation1.start({y: '40vw', opacity: 0})
    }
    
  }, [inView])

 
    return (
        <div className='relative flex flex-wrap justify-center align-center mt-5' ref={ref}>
          <span className=' absolute top-60 left-10 z-10 w-10' onClick={() => change(-1)}>  <FontAwesomeIcon icon={faArrowLeft}/> </span>
          <motion.div className='w-4/5 flex justify-center align-center md:w-1/2' animate={animation1}>   
            <motion.img src={images[index]} className="w-full rounded-lg" animate={isOpen ? "open" : "closed"}
      variants={variants}/> 
          </motion.div>
          <span className='absolute top-60 right-10 w-10' onClick={() => change(+1)}>  <FontAwesomeIcon icon={faArrowRight} /> </span>
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
import React from 'react'
import img2 from '../../images/second-project/img1.jpg'
import { motion } from "framer-motion"
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'

function SecondPanel() {
    const animation = useAnimation();
    const animation2 = useAnimation();

    const {ref, inView} = useInView({
      threshold: 0.2
    });

    useEffect(() => {
      if(inView){
        animation.start({
          opacity: 1,
          transition: {
          type: 'spring', duration: 1.8, bounce: 0.3, delay: 0.4
        }
        }) 
        animation2.start({
          opacity: 1,
          transition: {
          type: 'spring', duration: 1.6, bounce: 0.3, delay: 0.4
          }
        })}
        if(!inView){
          animation.start({ opacity: 0})
          animation2.start({ opacity: 0})
        }
        
    })

    return (
        <div className='flex flex-wrap justify-center align-center mt-8 mb-8  md:flex-nowrap'>
            <motion.div animate={animation2} className="svg-bg w-4/5 mt-8 mb-4 md:flex md:flex-wrap md:justify-around md:content-center md:p-10] rounded-lg">
                <h3 className='text-5xl pt-5 text-center'> Miś "Szymon" 🐻 </h3>
                <p className='p-10'>Miał być zrobiony na 10 czerwca, a ja pomyliłam terminy i myślałam że na 10 lipca  
                Dodatkowo potem się okazało ze Maluszek, dla którego ma być, rodzi się 1 czerwca. Więc przyspieszenie było znaczące 
                Ale udało się! 
                Niech cieszy małe rączki 
                Niby taki zwykly miś, ale kolorystyka zaskoczyła i mnie samą aż mam ochotę na powtórkę 
                Po nadrobieniu zaległości oczywiście!
                Cierpliwi, jak ja ćwiczę tą Waszą cierpliwość 
                Teraz jeszcze kilka rodzinno-przyjacielskich projektów i wracam do królików i jednorożców 
                Obiecuje</p>
            </motion.div>    
          <motion.div  animate={animation} className='w-2/3 flex justify-center align-center'>   
            <img src={img2.src} className="w-4/5 rounded-lg" ref={ref}/> 
          </motion.div>
          
        </div>
        
      )
}

export default SecondPanel
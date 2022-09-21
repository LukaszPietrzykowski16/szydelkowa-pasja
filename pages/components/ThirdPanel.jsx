import React from 'react'
import img0 from '../images/third-project/third-project-0.jpg'
import img1 from '../images/third-project/third-project-1.jpg'
import img2 from '../images/third-project/third-project-3.jpg'


function ThirdPanel() {
    return (
        <div className='flex flex-wrap justify-center align-center mt-5'>
          <div className='w-2/3 flex justify-center align-center'>   
            <img src={img1.src} className="w-full rounded-lg"/> 
          </div>
          <div className='flex justify-center align-center'>
            <div className='img-box w-1/5 p-1'>
              <img src={img1.src} className="w-full rounded-lg"/>
            </div>
            <div className='img-box w-1/5 p-1'>
              <img src={img1.src} className="w-full rounded-lg"/>
            </div>
            <div className='img-box w-1/5  p-1'>
              <img src={img1.src} className="w-full rounded-lg"/>
            </div>
            <div className='img-box w-1/5 p-1'>
              <img src={img2.src} className="w-full rounded-lg"/>
            </div>
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
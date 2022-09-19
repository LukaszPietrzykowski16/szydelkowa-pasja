import React from 'react'
import img0 from '../images/third-project/third-project-0.jpg'
import img1 from '../images/third-project/third-project-1.jpg'
import img2 from '../images/third-project/third-project-2.jpg'


function ThirdPanel() {
    return (
        <div className='flex flex-wrap justify-center align-center mt-8 md:flex-nowrap'>
            <div className='w-4/5 mt-8 md:flex md:flex-wrap md:justify-around md:content-center md:p-10'>
                <h3> Miś "Szymon" 💛🐻‍❄️💛 </h3>
                Krokodyl "Michał"💚🐊💚
                Na specjalne życzenie Mojego Chrzesniaka! 🥳
                Ma prawie 50cm długości i wykonany jest z mieciutkiej pluszowej włóczki 💚🐊🧶💚
                Wzór od OliMori
                Trochę zaduma go złapała, bo miał mieć sesje zdjęciową na dworze, jednak deszcz zdecydowanie pokrzyżował nam plany 📷🤦🏻‍♀️🌧☔💦📷
                Dobrze ze potem na chwilę wyszło słońce! 🌞
                Eh... I obawiam się, że powoli trzeba już będzie się przestawiać na aranzacje  domowe, a ja zdecydowanie polubiłam ujęcia na zewnątrz
                🌳🌲🌷🍁🌳
                Mam nadzieję, że lada chwila przyjdzie piękna, złota i ciepła jesień 🍁🍂
                Na to liczę!🤩
            </div>    
          <div className=''>   
            <div className='test'> <img src={img2.src} className=""/> </div>
          </div>
          
        </div>
        
      )
}

export default ThirdPanel
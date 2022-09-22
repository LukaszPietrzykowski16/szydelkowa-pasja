import React from 'react'
import picture from '../../images/main-picture.jpg'


function Front() {

  return (


    <main className='block md:flex mb-20'>
            <div className='w-full flex justify-center mt-10'>
                <img src={picture.src} className="sm:center w-4/5 md:w-2/3 rounded-lg"/>
            </div>
            <div className='flex justify-center align-center mt-5 md:flex-wrap md:justify-around md:content-center'>
                <div className='center w-4/5'>
                    <h1> Witajcie Kochani! </h1>
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
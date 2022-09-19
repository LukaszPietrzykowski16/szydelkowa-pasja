import React from 'react'
import img0 from '../images/first-project-0.jpg'
import img1 from '../images/first-project-1.jpg'
import img2 from '../images/first-project-2.jpg'

function FirstPanel() {
  return (
    <div className='flex flex-wrap justify-center align-center mt-8 md:flex-nowrap'>
      <div className='parent w-4/5'>   
        <div className='div1'> <img src={img2.src} className="w-full rounded-lg"/> </div>
        <div className='div2'> <img src={img1.src} className="w-full rounded-lg"/> </div>
        <div className='div3'> <img src={img0.src} className="w-full rounded-lg"/> </div>
      </div>
      <div className='w-4/5 mt-8 md:flex md:flex-wrap md:justify-around md:content-center md:p-10'>
      <h2> Kucyk Pony "Klaudia"🦄 </h2>
      Tak właściwie to "Jednorożec mini mini" ze wzoru Ezerioszka - handmade 💪
      Ma ok 20cm wysokości na siedząco i 30cm w pozycji leżącej 😄 Jednak po grudniowym Gigancie jest naprawdę dość małych gabarytów, jednak uroku ma w sobie mnóstwo 🙈
      Miał być kolorowy i jedyny w swoim rodzaju. Dla wspaniałej zumbowiczki i kreatorki ogrodów. Bo jak to mówię "Rękodzieło jest dla wszystkich. Dla Małych i Dużych" 💙💜🌷💃
      Dajcie zna
      </div>
    </div>
    
  )
}

export default FirstPanel
import React from 'react'

function Footer() {
  return (
    
    <footer className='bg-gray-900 text-white'>
    <div className='flex flex-col w-full p-1 border-t-2 border-white mt-4'>
        <div className='text-center text-3xl pt-5'> 
        POSZYDEŁKUJMY
        🧶🧶🧶
        </div>
        <div className='flex justify-around align-center pt-20 pb-20 border-b border-sky-500' > 
            <div> Blog </div>  
            <div> Strona główna </div>  
            <div>  O mnie  </div>  
        </div>
    </div> 
    <div className='text-sm w-full flex justify-around content-center text-center h-36 pt-10 '>
      <div className='test'>
          F
        </div>
        <div className='test'>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'> Do góry! </button>
        </div>
      </div>
      <div className='text-center'>
        Wszystkie prawa zastrzeżone
      </div>
    </footer>
  )
}

export default Footer
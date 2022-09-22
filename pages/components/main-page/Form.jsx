import React from 'react'
import logo from '../../images/logo.jpg';

function Form() {
  return (
   
    <div className='flex justify-center align-center w-full'>
<div className="glass block p-6 rounded-lg shadow-lg bg-white w-4/5 md:w-1/3 mt-8">
  <form>
    <div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Imię"/>
    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Adres E-mail"/>
    </div>
    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Wiadomość"
    ></textarea>
    </div>
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-white
      text-black
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover: bg-zinc-50 hover:shadow-lg
      focus: bg-white focus:shadow-lg focus:outline-none focus:ring-0
      active: bg-white active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
  </form>
</div>


    </div>
   
  )
}

export default Form
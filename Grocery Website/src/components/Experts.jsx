import React from 'react'
import { GiFruitBowl } from "react-icons/gi";
function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 h-[200px] grid grid-cols-3'>
       

      <div className='w-[1200px] py-5 mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5'>
      <h2>Browse by Category</h2>
        <div className='bg-[green] py-5 text-center'>
        <GiFruitBowl />
        </div>
        <div className='bg-[green] py-5 text-center'></div>
        <div className='bg-[green] py-5 text-center'></div>
        <div className='bg-[green] py-5 text-center'></div>
        <div className='bg-[green] py-5 text-center'></div>
        
        <div
        className='bg-[green] py-5 text-center'></div>
        <div className='bg-[green] py-5 text-center'></div>
      </div>
        {/* <div className=' h-[200px] col-span-1 w-[80%] text-center'>
            <img src="https://pixabay.com/photos/student-typing-keyboard-text-849825/" alt="" className='inline'/>
        </div>
        <div className='flex flex-col justify-center col-span-2'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN WITH EXPERTS</h1>
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officiis quibusdam. Architecto cupiditate veniam commodi pariatur atque rerum, fugiat aliquid.</p>
            <button className=' w-[30%] bg-black ml-2 text-white p-3 rounded'>Get Started</button>
        </div>
         */}

    </div>
  )
}

export default Experts
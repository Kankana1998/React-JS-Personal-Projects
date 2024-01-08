import React from 'react'
import { GiFruitBowl } from "react-icons/gi";
function Experts() {
  return (
    <div className='mb-40'>
      <h2 className='pt-2 uppercase text-bold font-serif text-2xl md:pl-[40%] mb-2'>Browse by Category</h2>
      <div id='experts' className='max-w-[1240px] mx-auto my-4 h-[300px] grid grid-cols-2'>
       
       
      <div className='w-[1200px] py-2 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 sm:justify-center md:place-items-center'>
      
        <div className='bg-[white] py-5 text-center hover:cursor-pointer'>
        <img src="src/assets/fruits/milk.png" className='' alt="" />
        </div>
        <div className='bg-[white] py-5 text-center hover:cursor-pointer'>
        <img src="src/assets/fruits/fish.png" className='' alt="" />
        </div>
        <div className='bg-[white] py-5 text-center hover:cursor-pointer'>
        <img src="src/assets/fruits/shalgom.png" className='' alt="" />
        </div>
        <div className='bg-[white] py-5 text-center hover:cursor-pointer'>
        <img src="src/assets/fruits/mushro.png" className='' alt="" />
        </div>
        <div className='bg-[white] py-5 text-center hover:cursor-pointer'>
        <img src="src/assets/fruits/Natural.png" className='' alt="" />
        </div>
        <div className='bg-[white] py-5 text-center hover:cursor-pointer'>
        <img src="src/assets/fruits/vector8.png" className='' alt="" />
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
    </div>
    </div>
    
  )
}

export default Experts
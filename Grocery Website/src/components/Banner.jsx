import React from 'react'
import Typed from 'react-typed';

function Banner() {
  return (
   
    <div id='banner' className='bg-[url(`../src/assets/fruits/Mask group.png`)] w-full py-[100px]'>
      
    <div className='max-w-[1240px] mx-auto my-[100px] text-center font-bold mt-4 md:grid grid-cols-2'>
        
    <div className='max-w-[1240px] mx-auto py-[50px]'>
                  
       <div className='md:text-3xl text-xl md:p-[24px] text-white'>Fresh fruits & veggies</div>
        <h2 className='text-white  text-3xl md:p-[24px] font-bold md:text-[50px] '>Dairy, breads & eggs</h2>
        <div className='md:text-[50px] md:p-[24px] text-[20px] text-white '>delivered

        <Typed      className='pl-3'
                    strings={['in minutes!']}
                    typeSpeed={10}
                    loop={true}
                    backSpeed={70}
                />
               
        </div>
    </div>
        <img className='md:float-right md:w-full 2xl:ml-40 bg-opacity-25' src="src/assets/fruits/Mask group.png" alt="" />

  </div>
    </div>
  )
}

export default Banner
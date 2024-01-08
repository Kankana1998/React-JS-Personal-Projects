import React from 'react'

function Plans() {
  return (
    <div id='plans' className='py-[100px] px-2 bg-gray-800'>
      <p className='uppercase text-bold font-serif text-2xl md:pl-[45%] mb-2 text-white'>How it Works</p>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
            <div className='shadow-xl h-[500px] my-2  hover:scale-105 duration-500 flex-col bg-gray-100 '>
              <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.19.2/images/pdp/place-order.svg" className='w-[260px] py-8 px-10' alt="" />
              <h2 className='uppercase font-bold text-3xl px-[15%] mb-8'>Place an order</h2>
              <p className='px-[15%] leading-relaxed mb-12'>Choose from a wide range of daily essentials</p></div>

            <div className='shadow-xl h-[500px] my-2 bg-gray-100 hover:scale-105 duration-500 flex-col'>
            <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.19.2/images/pdp/do-not-blink.svg" className='w-[260px] py-8 px-10' alt="" />
            <h2 className='uppercase font-bold text-3xl px-[15%] mb-8'>Don't Blink</h2>
              <p className='px-[15%] leading-relaxed mb-12'>Our delivery partner will be at your door</p>
            </div>
            
            <div className='shadow-xl h-[500px] my-2 hover:scale-105 duration-500 flex-col bg-gray-100 '>
            <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.19.2/images/pdp/enjoy.svg" className='w-[260px] py-8 px-10' alt="" />
            <h2 className='uppercase font-bold text-3xl px-[15%] mb-8'>Enjoy</h2>
              <p className='px-[15%] leading-relaxed mb-12'>Boom! You’ll never have to wait for groceries again</p>
            </div>

        </div>
    </div>
  )
}

export default Plans
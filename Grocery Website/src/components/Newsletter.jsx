import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
function Newsletter() {
  return (
    <div id='Newsletter' className='w-full bg-[#fefae0] p-4'>
        <div className='max-w-[1240px] md:flex justify-between mx-auto py-[50px]'>
            <div className='m-2'>
                <h1 className='md:text-[40px] text-[20px] font-bold text-[#001d3d]'>Download Grocify &
order now! </h1>
                <span>Trusted by millions of shoppers in Bangalore, Delhi-NCR, Hyderabad, Mumbai, Chennai, Pune & other cities</span>
            </div>
            <div className='grid grid-cols-1 gap-2'>
                
                <button className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 '>Download on the <FaApple />  App Store</button>

                <button className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 '>Get it on <FaGooglePlay /> Google Play</button>
              
            </div>

        </div>
    </div>
  )
}

export default Newsletter
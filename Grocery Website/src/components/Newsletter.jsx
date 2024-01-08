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
            <div className='md:grid grid-col-2'>
                
                <button className='bg-black mb-2 w-full text-white p-3 rounded pr-2 '>Download on the <FaApple alignmentBaseline='row'/> App Store</button>
                <button className='bg-black w-full mb-2 text-white p-3 rounded pl-2'>Get it on <FaGooglePlay /> Google Play</button>
              
            </div>

        </div>
    </div>
  )
}

export default Newsletter
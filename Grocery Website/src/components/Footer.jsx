import React from 'react'
import { FaInstagram, FaTwitter, FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className='bg-gray-800 border-y text-white'>
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 md:flex md:justify-between'>

   <img
            className="w-40 lg:w-[20%] lg:h-[20%] cursor-pointer"
            src="src/assets/logo.png"
            alt=""
          />
    <div className='font-medium md:flex'>
    <a href="#" class="footer__icon hover:underline"></a>
            <a href="#" class="footer__icon px-2 hover:underline"><FaFacebook /></a>
            <a href="#" class="footer__icon px-2 hover:underline"><FaInstagram /></a>
            <a href="#" class="footer__icon px-2 hover:underline"><FaTwitter /></a>
            </div>
        <p className="footer__copy font-abc ">&#169;Grocify@2024 All rigths reserved</p>

    </div>
  </footer>
  )
}

export default Footer
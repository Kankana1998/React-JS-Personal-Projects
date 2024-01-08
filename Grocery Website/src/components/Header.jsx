import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import {NavLink } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
function Header() {
const [searchVal, setSearchVal]  = useState("")
  const handleMatch = (e) => {
    e.preventDefault();
    
  }
    const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-[-1240px] flex justify-between items-center py-[15px] mx-auto">
        <div className="text-3xl font-bold">
          <img
            className="w-40 cursor-pointer"
            src="src/assets/logo.png"
            alt=""
          />
        </div>
        <div className='md:w-2/4 flex items-center'>
          <input 
            type="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search..."
            className='w-full rounded h-10 text-[#272343] mr-2'

          />
          <button onClick={handleMatch} className='bg-[#ffd803] ml-2 text-white p-3 rounded'>Search</button>
        </div>
        {toggle ? (
          <IoIosClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <IoMenuSharp
            color="white"
            onClick={() => setToggle(!toggle)}
            className="tex-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10 font-serif">
          <li><a href="#banner">Home</a></li>
          <li><a href="#experts">Categories</a></li>
          <li><a href="#Newsletter">Download App</a></li>
          <li><a href="#plans">About Us</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>

        {/* Responsive Menu */}

        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-[#332941] top-[88px] 
            ${toggle ? "left-[0]" : "left-[-100%]"}
            `}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header
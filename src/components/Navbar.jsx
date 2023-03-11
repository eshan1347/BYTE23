import React from 'react';
import {useState }from 'react'
import logo from  '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between navbar'>
        <img src={logo} alt="logo"
        className='w-[84px] h-[52px]'/>
        <ul className='list-none sm:flex hidden  text-left justify-end flex-1'>
            <li className='px-6 font-poppins text-white'>Learning Dis</li>
            <li className='px-6 font-poppins text-white'>Home</li>
            <li className='px-6 font-poppins text-white'>Tests</li>
            <li className='px-6 font-poppins text-white'>Resources</li>
            <li className='px-6 font-poppins text-white'>Login/Sign Up</li>
            <li className='pl-6 font-poppins text-white'>About Us</li>
        </ul>
    </nav>
  )
}

export default Navbar

//Logo, Name, Home, Tests,Resources,Login/SIgn Up,ABout US
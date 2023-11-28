import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {TfiVideoClapper} from 'react-icons/tfi'
import {MdOutlinePersonalVideo} from "react-icons/md"
import  Pexel from '../image/pexel.jpg' 

const Navbar = () => {
  return (
    <>
    <div className='sticky w-full bg-red-700 z-[10000000]'>
        <nav className='border border-red-500 flex justify-around py-1'>
            <Link className='mt-2 text-white' to="/">Home</Link>
            <div className='flex gap-10 mt-3 text-white'>
            <Link className='text-xl' to="/"><AiOutlineHome/></Link>
            <Link className='text-xl' to="/"><TfiVideoClapper/></Link>
            <Link className='text-xl' to="/"><MdOutlinePersonalVideo/></Link>
            </div>
            <img src={Pexel} width={50} className='rounded-[100%] h-[43px] border-0 border-black' alt="" />
        </nav>
    </div>
    </>
    
  )
}

export default Navbar
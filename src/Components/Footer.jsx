import React from 'react'
import Blue from '../image/blue.svg'

const Footer = () => {
  return (
    <>
    <div>
    <div className='bg-red-700'>
      <footer className='flex flex-col items-center justify-center text-white font-mono'>
        <p>Powerd by:</p>
        <img src={Blue} width={50} alt="" />
        <p>Developed By Papiloyaks🤍</p>
      </footer>
    </div>
    </div>
    </>
  )
}

export default Footer
import React from 'react'
import Blue from '../image/blue.svg'

const Footer = () => {
  return (
    <>
    <div className='mt-10 bg-red-700'>
      <footer className='grid cols-2 justify-center text-white font-mono'>
        <p>Powerd by:</p>
        <img src={Blue} width={50} alt="" />
        <p>Developed By Papiloyaks🤍</p>
      </footer>
    </div>
    </>
  )
}

export default Footer
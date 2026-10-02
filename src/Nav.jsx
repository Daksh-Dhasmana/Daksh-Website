import React from 'react'
import "./Nav.css"
import Button from './Button'
const Nav = () => {
  return (
    <div>
      <nav className='h-20 relative border-b border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.15)] overflow-hidden'>
        <img src="src/Images/N1.gif" alt="Error Loading Image" className='absolute -z-9 w-full h-full'/> 
        <ul className='flex justify-evenly items-center z-10 h-20 text-white'>
          <li><Button className='min-w-[110px] bg-black/70 backdrop-blur-md'>Home</Button></li>
          <li><Button className='min-w-[110px] bg-black/70 backdrop-blur-md'>About</Button></li>
          <li><Button className='min-w-[110px] bg-black/70 backdrop-blur-md'>Projects</Button></li>
          <li><Button className='min-w-[110px] bg-black/70 backdrop-blur-md'>Contacts</Button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
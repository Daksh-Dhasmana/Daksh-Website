import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import "./Nav.css"
const Nav = () => {
  return (
    <div>
      <nav className='h-20 relative border-b border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.15)] overflow-hidden'>
        <img
          src="src/Images/N1.gif"
          alt="Navigation Background"
          className='absolute inset-0 -z-10 w-full h-full object-cover'
        />
        <ul className='flex justify-evenly items-center z-10 h-20 text-white relative'>
          <li>
            <NavHashLink
              smooth
              to='/#home'
              className='px-6 py-2.5 text-sm font-semibold tracking-wide text-cyan-300 bg-black/70 backdrop-blur-md border border-cyan-500/80 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95 min-w-[110px] inline-block text-center'
            >
              Home
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              to='/#about'
              className='px-6 py-2.5 text-sm font-semibold tracking-wide text-cyan-300 bg-black/70 backdrop-blur-md border border-cyan-500/80 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95 min-w-[110px] inline-block text-center'
            >
              About
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              to='/#projects'
              className='px-6 py-2.5 text-sm font-semibold tracking-wide text-cyan-300 bg-black/70 backdrop-blur-md border border-cyan-500/80 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95 min-w-[110px] inline-block text-center'
            >
              Projects
            </NavHashLink>
          </li>
          <li>
            <NavHashLink
              smooth
              to='/#contacts'
              className='px-6 py-2.5 text-sm font-semibold tracking-wide text-cyan-300 bg-black/70 backdrop-blur-md border border-cyan-500/80 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_25px_rgba(6,182,212,0.9)] hover:scale-105 active:scale-95 min-w-[110px] inline-block text-center'
            >
              Contacts
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
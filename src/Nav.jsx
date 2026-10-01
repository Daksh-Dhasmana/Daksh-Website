import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div>
      <nav className='h-20 relative'>
        {/* <img src="src/Images/N1.gif" alt="Error Loading Image" className='absolute inset-0 -z-10 w-full h-full'/>  */}
        <ul className='flex justify-evenly items-center z-10 h-20 text-white'>
          <li><button className="relative px-5 py-2 text-sm font-medium text-slate-200 bg-slate-900/60 rounded-xl backdrop-blur-md border border-slate-700/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 active:translate-y-0">Home</button></li>
          <li><button className="relative px-5 py-2 text-sm font-medium text-slate-200 bg-slate-900/60 rounded-xl backdrop-blur-md border border-slate-700/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 active:translate-y-0">HRHRHR</button></li>
          <li><button className="relative px-5 py-2 text-sm font-medium text-slate-200 bg-slate-900/60 rounded-xl backdrop-blur-md border border-slate-700/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:-translate-y-0.5 active:translate-y-0">COURSEE</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
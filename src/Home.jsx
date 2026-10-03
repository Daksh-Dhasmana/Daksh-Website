import React from 'react'
import './Nav.css'

const Home = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <p className='text-amber-50'>Hi, I am Daksh Dhasmana,<br/> Front-End Web Developer <br/>I build responsive, component-driven web applications using React, JavaScript, and modern CSS frameworks</p>
        <img src="src/Images/HomePhoto.jpeg" alt="Error Loading Profile" className='w-50 h-50 rounded-full overflow-hidden'/>
      </div>
      <p></p>
    </>
  )
}

export default Home

import React from 'react'
import './Nav.css'

const Home = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <p className='text-amber-50'>Hi, I am Daksh Dhasmana,<br/><br/><br/> Front-End Web Developer <br/><br/><br/>I build responsive, component-driven web applications using React, JavaScript, and modern CSS frameworks</p>
        <img src="src/Images/HomePhoto.jpeg" alt="Error Loading Profile" className='w-48 h-48 rounded-full overflow-hidden'/>
      </div>
     </>
  )
}

export default Home

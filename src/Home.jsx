import React from 'react'
import './Nav.css'

const Home = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <p className='text-amber-50'>Hi, I am Daksh Dhasmana, Front-End Web Developer</p>
        <img src="src/Images/HomePhoto.jpeg" alt="Error Loading Profile" className='w-50 h-50 rounded-full overflow-hidden'/>
      </div>
    </div>
  )
}

export default Home

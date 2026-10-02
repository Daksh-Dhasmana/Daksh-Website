import { useState } from 'react'
import Nav from './Nav'
import Home from './Home'
import "./Nav.css"
function App() {
  return (
    <>
    <Nav/>
    <img src="src/Images/HomeBack.jpg" alt="Error Loading Image" className=' absolute bg-black/60 backdrop-blur-md inset-x-0 bottom-0 -z-10 w-full h-full'/>
    
    <main>
      <Home/>
    </main>
    </>
  )
}

export default App

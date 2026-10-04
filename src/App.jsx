import Nav from './Nav'
import Home from './Home'
import "./Nav.css"
import About from './About'
import {Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
    <Nav/>
    <img src="src/Images/HomeBack.jpg" alt="Error Loading Image" className=' absolute inset-x-0 inset-y-0 bottom-0 -z-20 w-full h-full'/>
    <img 
        src="src/Images/HomeBack.jpg" 
        alt="Space Background Blurred" 
        className="absolute inset-0 -z-10 w-full h-full object-cover blur-sm [mask-image:linear-gradient(to_right,transparent_0px,transparent_60px,black_60px,black_calc(100%-60px),transparent_calc(100%-60px),transparent_100%)]"
        />
      <main className='w-[calc(100%-120px)] mx-auto bg-black/60 backdrop-blur-md p-8 border border-cyan-500/30 rounded-lg'>
        <Home/>
        <About/>
      </main>
    </div>
  )
}

export default App

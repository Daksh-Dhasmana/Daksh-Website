// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Outer layout containing <Nav /> and background layers
    children:[
      {
        path:"/home",
        element:<Home/>,    
      },
      {
        path:"/about",
        element:<About/>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
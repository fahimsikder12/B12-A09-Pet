import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer'
 
function RootLayout() {
  return (
    <div className='bg-gray-100 mx-auto '> 
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout
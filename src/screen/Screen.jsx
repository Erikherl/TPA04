import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import Navbar from './navbar/navbar'
import Footer from './footer/footer'

const Screen = () => {
  return (
    <div>
        <Navbar></Navbar>
          <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Screen
import React from 'react'
import Profile from '../../assets/FotoErik.jpg'
import './navbar.css'
import { Routes, Route, Link } from 'react-router-dom'

import Homepage from '../../components/homepage/Homepage'
import About from '../../components/about/About'
import Project from '../../components/project/Project'
import Blog from '../../components/blog/Blog'
import Contact from '../../components/contact/Contact'

const navbar = () => {
  return (
    <div>
    <nav>
        <a className="link-logo-nav"><Link to="/"><img id="logo-nav" src={Profile}/></Link></a>
        <div className="navigation">
            <a><Link to="/About">About</Link></a>
            <a><Link to="/Project">Project</Link></a>
            <a><Link to="/Blog">Blog</Link></a>    
            <a><Link to="/Contact">Contact</Link></a> 
        </div>
    </nav>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Project" element={<Project/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    
  )
}

export default navbar
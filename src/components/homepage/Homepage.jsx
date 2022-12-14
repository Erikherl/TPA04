import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="hero-container">
        <div className="hero-left-section">
            <h1>Hello There 👋</h1>
            <p>Please let me introduce myself, my name is Frederik Wiriawan Herlambang, 
                pleasure to meet you. Age is currently 21, still single and going 
                for my goals (still work on it). There's a few word i want to share 
                with you, i hope this can cheer you up!</p>
            <blockquote>"Life is already hard, just enjoy it, breakthrough everything"
                - No one</blockquote>
        </div>
        <img id="profile-homepage" src={require("../../assets/FotoProfile.jpg")}/>
    </div>
  )
}

export default Homepage
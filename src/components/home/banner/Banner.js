import React from 'react'
import heroBackground from '../../../images/image4.jpg';
import './banner.css'



const Banner = () => {
  return (
    
    <div className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to Prescom</h1>
      <h2 className="hero-subtitle">Your Trusted Partner in Network and Telecommunications</h2>
      <button className="hero-button">Get Quotation</button>
    </div>
    <img className="hero-image" src={heroBackground} alt="Hero Background" />
  </div>
  
  )
}

export default Banner
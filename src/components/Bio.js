import React from 'react'
import './Bio.css'
const Bio = () => {
  return (
    <div className='BioContainer'>
    <img alt='eye'  width='175px' src={require('./images/eye.png')} />
      <h1 className='BioTitle'>About Me</h1>
      <p className='BioSummary'><p>Code = paintbrush</p>
        <p>Computer = canvas!</p>
        <span>السلام ، أنا توماس</span>
        <p>שלום, אני תומאס</p>
        <p>
        Peace, I'm Thomas, your personal
        web developing assistant. You have an idea, and want it made.
        I will support you in that endeavor.</p>
        <h2>Interests</h2>
        <ul>
          <li>AI</li>
          <li>Jetson Nano</li>
          <li>Arduino</li>
          <li>Robotics</li>
        </ul>
      </p>
    </div>
  )
}

export default Bio

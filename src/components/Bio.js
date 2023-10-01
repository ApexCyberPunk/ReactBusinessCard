import React from 'react'
import './Bio.css'
const Bio = () => {
  return (
    <div className='BioContainer'>
    <img alt='eye'  width='175px' src={require('./images/eye.png')} />
      <h1 className='BioTitle'>About Me</h1>
      <p className='BioSummary'><p>Code = paintbrush</p>
        <p>Computer = canvas!</p>
        <h2>Interests</h2> 
        <ul>
          <li>AI</li>
          <li>Jetson Nano</li>
          <li>Arduino</li>
          <li>Robotics</li>
        </ul>
        To those who support and collab with me: Eye see you and Eye love you!
        Love light and healing energy to you!
      </p>
    </div>
  )
}

export default Bio

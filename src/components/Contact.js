import React from 'react'
import './Contact.css'

const Contact = () => {

 let SendEmail = () => {
return window.location.href = "mailto:codingndevelopment@gmail.com"
  }

  return (
    <>
       <div className='cContainer'>
      <h1 className='Contact'>Contact:</h1>
    <a className='anchor' href='www.fiverr.com'><img width='100px' alt='fiverr' src={require("./images/fiver.jpg")}></img></a>
    <button className='eButton' onClick={SendEmail}>Email</button>
    </div>
    </>

  )
}

{/* <a color='gold' href="mailto:codingndevelopment@gmail.com">Email</a> */}

export default Contact

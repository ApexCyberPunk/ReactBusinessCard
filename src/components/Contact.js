import React from 'react'

const Contact = () => {

 let SendEmail = () => {
return window.location.href = "mailto:codingndevelopment@gmail.com"
  }

  return (
    <>
       <div>
      <h1>Contact:</h1>
    <a href='www.fiverr.com'><img width='100px' alt='fiverr' src={require("./images/fiver.jpg")}></img></a>
    </div>
    <button onClick={SendEmail}>Email</button>
    </>

  )
}

{/* <a color='gold' href="mailto:codingndevelopment@gmail.com">Email</a> */}

export default Contact

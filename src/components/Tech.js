import React from 'react'
import "./Tech.css"

const Tech = () => {
  return (
    <div className='ListSection'>
      <h1 className='TechTitle'>TechStack:</h1>
  <section className='list'>
      <ol className='OlTitle'>
        <li><p>HTML5 <i className="fab fa-html5 fa-lg"></i></p></li>
        <li>CSS <i class="fab fa-css3-alt fa-lg"></i></li>
        <li> Javascript <i class="fab fa-js fa-ls"></i></li>
      </ol>
      <h2 className='subTitle'>Frameworks:</h2>
      <ol className='OlTitle'>
        <li>React <i class="fab fa-react fa-lg"></i></li>
        <li>TailwindCSS</li>
      </ol>
  </section>
    </div>
  )
}

export default Tech

import React from 'react'

const Bio = () => {
  return (
    <div>
    <img alt='eye'  width='175px' src={require('./images/eye.png')} />
      <h1>Bio:</h1>
      <p className='hi'>Hey! I'm an artists that uses code as my paintbrush
        and computers as my canvas!
        Interested in AI, jetson nano, arduino boards, and robotics.
        Learned to code, because I couldn't find anyone that could
        build my ideas for me, so decided to build them myself.
        To those who support and collab with me: Eye see you and Eye love you!
        Love light and healing energy to you!
      </p>
    </div>
  )
}

export default Bio

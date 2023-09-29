import Bio from './components/Bio'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Tech from './components/Tech'

function App() {
  return (
    <>
<div className='container'>

    <div className='g-B'>
      <Bio />
    </div>

    <div className='g-C'>
      <Contact />
    </div>

    <div className='g-P'>
      <Projects />
    </div>

    <div className='g-S'>
      <Socials />
    </div>

    <div className='g-T'>
      <Tech />
    </div>

</div>
    </>
  )

}

export default App;
import Bio from './components/Bio'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Tech from './components/Tech'

function App() {
  return (
    <>
<div className='container'>

    <div className='Bio'>
      <Bio />
    </div>

    <div className='Contact'>
      <Contact />
    </div>

    <div className='Projects'>
      <Projects />
    </div>

    <div className='Socials'>
      <Socials />
    </div>

    <div className='Tech'>
      <Tech />
    </div>

</div>
    </>
  )

}

export default App;
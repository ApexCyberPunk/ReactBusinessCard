import Bio from './components/Bio'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Tech from './components/Tech'

function App() {
  return (
    <>
<div className='container'>

    <div className='grid1-Bio'>
      <Bio />
    </div>

    <div className='grid2-Contact'>
      <Contact />
    </div>

    <div className='grid3-Projects'>
      <Projects />
    </div>

    <div className='grid4-Socials'>
      <Socials />
    </div>

    <div className='grid5-Tech'>
      <Tech />
    </div>

</div>
    </>
  )

}

export default App;
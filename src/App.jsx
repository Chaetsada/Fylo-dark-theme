import './App.css'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Feature from './Components/Feature'
import Productive from './Components/Productive'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  
  return (
    <div className='min-h-screen bg-darkblue-200'>
      <header className='bg-darkblue-100'>
        <Navbar/>
        <Intro/>
      </header>
      <Feature/>
      <Productive/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import LawyersBar from './components/LawyersBar'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import Contact from './components/Contact'
import HowItWorks from './components/HowitWorks'

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <LawyersBar /> 
      <About />
      <HowItWorks />
      <Services />
      <Contact />
    </div>
  )
}

export default App

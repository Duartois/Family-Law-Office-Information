import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import LawyersBar from './components/LawyersBar' 
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Hero />
      <LawyersBar /> 
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App
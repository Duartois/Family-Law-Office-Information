import { Routes, Route } from 'react-router-dom'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Home from './pages/Home'
import FgtsDoencaGrave from './pages/FgtsDoencaGrave'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saque-fgts-doenca-grave" element={<FgtsDoencaGrave />} />
      </Routes>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App

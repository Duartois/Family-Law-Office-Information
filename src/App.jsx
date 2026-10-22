import { Routes, Route } from 'react-router-dom'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import { routes } from './routes'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App

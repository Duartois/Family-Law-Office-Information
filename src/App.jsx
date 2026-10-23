import { Routes, Route } from 'react-router-dom'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import { routes } from './routes'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Analytics />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App

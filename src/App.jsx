import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Toast from './components/shared/Toast'
import Modal from './components/shared/Modal'

// Pages
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import AktualityPage from './pages/AktualityPage'
import VyberDomuPage from './pages/VyberDomuPage'
import StandardyPage from './pages/StandardyPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/aktuality" element={<AktualityPage />} />
              <Route path="/vyber-domu" element={<VyberDomuPage />} />
              <Route path="/standardy" element={<StandardyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
          <Modal />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App


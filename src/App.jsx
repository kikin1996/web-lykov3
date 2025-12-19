import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Toast from './components/shared/Toast'
import Modal from './components/shared/Modal'

// Pages
import HomePage from './pages/HomePage'
import FloorDetailPage from './pages/FloorDetailPage'
import ApartmentDetailPage from './pages/ApartmentDetailPage'
import GalleryPage from './pages/GalleryPage'
import AboutProjectPage from './pages/AboutProjectPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import AktualityPage from './pages/AktualityPage'
import VyberDomuPage from './pages/VyberDomuPage'
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
              <Route path="/patro/:floorId" element={<FloorDetailPage />} />
              <Route path="/byt/:floorId/:apartmentId" element={<ApartmentDetailPage />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/o-projektu" element={<AboutProjectPage />} />
              <Route path="/o-nas" element={<AboutUsPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/aktuality" element={<AktualityPage />} />
              <Route path="/vyber-domu" element={<VyberDomuPage />} />
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


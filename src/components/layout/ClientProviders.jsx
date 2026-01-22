'use client'

import { HelmetProvider } from 'react-helmet-async'
import { AppProvider } from '../../context/AppContext'
import Header from './HeaderNext'
import Footer from './FooterNext'
import Toast from '../shared/Toast'
import Modal from '../shared/Modal'

export default function ClientProviders({ children }) {
  return (
    <HelmetProvider>
      <AppProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toast />
          <Modal />
        </div>
      </AppProvider>
    </HelmetProvider>
  )
}


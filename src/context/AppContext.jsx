'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [toast, setToast] = useState(null)
  const [modal, setModal] = useState(null)

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }, [])

  const showModal = useCallback((modalType, props = {}) => {
    setModal({ type: modalType, props })
  }, [])

  const hideModal = useCallback(() => {
    setModal(null)
  }, [])

  return (
    <AppContext.Provider
      value={{
        toast,
        showToast,
        modal,
        showModal,
        hideModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}












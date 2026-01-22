'use client'

import { useApp } from '../../context/AppContext'

const Toast = () => {
  const { toast } = useApp()

  if (!toast) return null

  const bgColor = toast.type === 'success' 
    ? 'bg-semantic-success' 
    : toast.type === 'error' 
    ? 'bg-semantic-error' 
    : 'bg-semantic-info'

  return (
    <div className="fixed top-4 right-4 z-50 animate-fadeIn">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-large min-w-[300px]`}>
        <p className="text-body-regular font-medium">{toast.message}</p>
      </div>
    </div>
  )
}

export default Toast












import { useEffect } from 'react'
import { useApp } from '../../context/AppContext'
import InterestForm from '../apartment/InterestForm'
import TourRequestForm from './TourRequestForm'

const Modal = () => {
  const { modal, hideModal } = useApp()

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [modal])

  if (!modal) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      hideModal()
    }
  }

  const renderModalContent = () => {
    switch (modal.type) {
      case 'interest':
        return <InterestForm apartment={modal.props.apartment} onClose={hideModal} />
      case 'tour':
        return <TourRequestForm apartment={modal.props.apartment} onClose={hideModal} />
      default:
        return null
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-large max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-slideIn">
        <div className="sticky top-0 bg-white border-b border-neutral-lightGray px-6 py-4 flex justify-between items-center">
          <h2 className="text-h3 text-neutral-darkNavy">
            {modal.type === 'interest' ? 'Mám zájem o byt' : 'Naplánovat prohlídku'}
          </h2>
          <button
            onClick={hideModal}
            className="text-neutral-mediumGray hover:text-neutral-darkNavy transition-colors text-2xl leading-none"
            aria-label="Zavřít"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          {renderModalContent()}
        </div>
      </div>
    </div>
  )
}

export default Modal


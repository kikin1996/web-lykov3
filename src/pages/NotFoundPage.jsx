import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-offWhite">
      <div className="text-center px-5">
        <h1 className="text-6xl font-bold text-neutral-darkNavy mb-4">404</h1>
        <h2 className="text-h2 mb-4">Stránka nenalezena</h2>
        <p className="text-body-large text-neutral-mediumGray mb-8 max-w-md mx-auto">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje.
        </p>
        <Link to="/">
          <Button>Zpět na domovskou stránku</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage


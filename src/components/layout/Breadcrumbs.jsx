import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="container mx-auto px-5 lg:px-20 py-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-body-small">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-neutral-mediumGray">/</span>
            )}
            {item.path ? (
              <Link
                to={item.path}
                className={`transition-colors ${
                  index === items.length - 1
                    ? 'text-primary-teal font-semibold'
                    : 'text-neutral-mediumGray hover:text-primary-teal'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? 'text-primary-teal font-semibold' : 'text-neutral-mediumGray'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
}

export default Breadcrumbs







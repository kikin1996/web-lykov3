import PropTypes from 'prop-types'

const Card = ({ children, className = '', hover = false, ...props }) => {
  const baseStyles = 'bg-white rounded-xl shadow-small transition-all duration-300'
  const hoverStyles = hover ? 'hover:shadow-large hover:-translate-y-1' : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
}

export default Card









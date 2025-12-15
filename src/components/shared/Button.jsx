import PropTypes from 'prop-types'

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-8 py-4 text-base font-semibold font-secondary uppercase tracking-wider rounded-md transition-all duration-300 cursor-pointer disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary-teal text-white shadow-[0_2px_8px_rgba(0,217,181,0.3)] hover:bg-primary-tealDark hover:shadow-[0_4px_16px_rgba(0,217,181,0.4)] hover:-translate-y-0.5 active:bg-[#009980] active:translate-y-0 disabled:bg-neutral-lightGray disabled:text-neutral-mediumGray disabled:shadow-none',
    secondary: 'bg-transparent text-neutral-darkNavy border-2 border-primary-teal hover:bg-primary-teal hover:text-white hover:-translate-y-0.5',
    ghost: 'bg-transparent text-neutral-mediumGray border-none hover:text-primary-teal',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
}

export default Button







import PropTypes from 'prop-types'

const Input = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-neutral-darkNavy mb-2">
          {label}
          {required && <span className="text-semantic-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 text-base font-secondary text-neutral-darkNavy bg-white border rounded-md transition-all duration-300 ${
          error 
            ? 'border-semantic-error focus:border-semantic-error' 
            : 'border-neutral-lightGray focus:border-primary-teal focus:outline-none focus:ring-3 focus:ring-primary-teal focus:ring-opacity-10'
        } disabled:bg-neutral-offWhite disabled:text-neutral-mediumGray disabled:cursor-not-allowed`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-semantic-error">{error}</p>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
}

export default Input









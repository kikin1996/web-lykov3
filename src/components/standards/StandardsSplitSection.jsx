const StandardsSplitSection = ({ 
  pillLabel, 
  title, 
  description, 
  items = [], 
  image, 
  imageAlt = '',
  reverse = false 
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Text Content */}
          <div className={reverse ? 'lg:col-start-2 lg:col-end-3' : ''}>
            {/* Pill Label – číslo v kolečku */}
            {pillLabel && (
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 text-sm font-semibold text-slate-700 border-2 border-slate-200/70">
                  {pillLabel}
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              {title}
            </h2>

            {/* Description */}
            {description && (
              <p className="text-slate-600 leading-relaxed mb-6">
                {description}
              </p>
            )}

            {/* Items List */}
            {items && items.length > 0 && (
              <div>
                <ul className="space-y-3">
                  {items.map((item, index) => (
                    <li key={index} className="text-slate-600 leading-relaxed flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Image */}
          <div className={reverse ? 'lg:col-start-1 lg:col-end-2 lg:row-start-1' : ''}>
            <div className="rounded-2xl overflow-hidden border border-slate-200/70 h-[260px] md:h-[340px]">
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.display = 'flex'
                  }
                }}
              />
              {/* Gradient Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 hidden items-center justify-center">
                <p className="text-slate-400 text-sm">{imageAlt || title}</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default StandardsSplitSection


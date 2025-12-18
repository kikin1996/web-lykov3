const TimelineItem = ({ item, index, isLast }) => {
  const isLeft = index % 2 === 0

  const getStatusBadge = (status) => {
    const statusConfig = {
      'hotovo': {
        bg: 'bg-green-50',
        text: 'text-green-700',
        label: 'Hotovo'
      },
      'probíhá': {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        label: 'Probíhá'
      },
      'plánováno': {
        bg: 'bg-slate-50',
        text: 'text-slate-700',
        label: 'Plánováno'
      }
    }

    const config = statusConfig[status?.toLowerCase()] || statusConfig['plánováno']
    
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start relative ${isLast ? '' : 'mb-12 md:mb-16'}`}>
      {/* Levá strana - Desktop */}
      {isLeft ? (
        <div className="hidden md:block pr-12 text-right">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/70 inline-block w-full">
            {item.status && (
              <div className="mb-3 flex justify-end">
                {getStatusBadge(item.status)}
              </div>
            )}
            <div className="text-sm font-medium text-indigo-600 mb-2">
              {item.date}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.image && (
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="hidden md:block pr-12"></div>
      )}

      {/* Střední osa s bodem - Desktop */}
      <div className="hidden md:flex relative flex-col items-center">
        <div className="absolute top-0 bottom-0 w-px bg-slate-200"></div>
        <div className="relative z-10 h-4 w-4 rounded-full bg-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.12)] flex-shrink-0"></div>
      </div>

      {/* Střední osa s bodem - Mobile */}
      <div className="md:hidden relative flex items-start gap-4 mb-4">
        <div className="relative z-10 h-4 w-4 rounded-full bg-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.12)] flex-shrink-0 mt-1"></div>
        <div className="flex-1 h-px bg-slate-200 mt-2"></div>
      </div>

      {/* Pravá strana - Desktop */}
      {!isLeft ? (
        <div className="hidden md:block pl-12 text-left">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/70 inline-block w-full">
            {item.status && (
              <div className="mb-3 flex justify-start">
                {getStatusBadge(item.status)}
              </div>
            )}
            <div className="text-sm font-medium text-indigo-600 mb-2">
              {item.date}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.image && (
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="hidden md:block pl-12"></div>
      )}

      {/* Mobile - všechny položky vlevo */}
      <div className="md:hidden text-left">
        <div className="bg-white rounded-2xl p-6 border border-slate-200/70">
          {item.status && (
            <div className="mb-3 flex justify-start">
              {getStatusBadge(item.status)}
            </div>
          )}
          <div className="text-sm font-medium text-indigo-600 mb-2">
            {item.date}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {item.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {item.description}
          </p>
          {item.image && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem


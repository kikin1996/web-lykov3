const StatsSection = () => {
  const stats = [
    { value: '800–1 300 m²', label: 'Velikost pozemků' },
    { value: '12', label: 'Rodinných domů' },
    { value: 'A / B', label: 'Energetická třída' },
    { value: '2026', label: 'Rok dokončení' },
  ]

  return (
    <section className="pt-8 pb-20 bg-neutral-darkNavy text-white relative hidden md:block" style={{paddingBottom: 'calc(20rem - 15px)'}}>
      <div className="container mx-auto px-5 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-stats mb-2 whitespace-nowrap">
                {stat.value}
              </div>
              <div className="text-body-small text-white text-opacity-80 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave divider: dark -> white */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
        <svg
          className="section-wave"
          viewBox="-20 -20 1644 403"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_102_5)">
            <path
              d="M212 296.173C140.8 354.973 43.6667 241.34 4 177.173L20.5 0H123.5H871.5C991.5 12.1667 1298.4 -10.5 1600 17.5V198.673L1574 318.173C1552 387.878 1412.5 240.173 1412.5 240.173C1341 201.173 1369.32 275.937 1291 216.173C1220.5 162.378 1170 253.173 1154.5 296.173C1139 339.173 1040 266.173 970.5 253.173C901 240.173 981.5 318.173 1003 339.673C1024.5 361.173 938.294 363.468 920.5 318.173C902.706 272.878 793 257.173 715 240.173C637 223.173 686.032 281.126 624 318.173C588 339.673 502.5 268.173 457 198.673C411.5 129.173 413.5 274.673 402.5 318.173C393.7 352.973 390.5 318.759 364.5 296.173C315 253.173 283.2 237.373 212 296.173Z"
              fill="#F9FAFB"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_102_5"
              x="-20"
              y="-20"
              width="1644"
              height="402.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_102_5"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_102_5"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default StatsSection


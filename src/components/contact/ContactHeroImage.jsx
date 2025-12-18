const ContactHeroImage = () => {
  return (
    <div className="relative h-full w-full min-h-[420px] overflow-hidden">
      {/* Skeleton photo - gradient + texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
        {/* Jemný šum efekt přes pseudo-element */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
        {/* Jemný gradient overlay pro hloubku */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent" />
      </div>
      {/* Pokud existuje obrázek, použij ho */}
      <img
        src="/images/contact-building.jpg"
        alt="Contact building"
        className="w-full h-full min-h-[420px] object-cover"
        onError={(e) => {
          e.target.style.display = 'none'
        }}
      />
    </div>
  )
}

export default ContactHeroImage


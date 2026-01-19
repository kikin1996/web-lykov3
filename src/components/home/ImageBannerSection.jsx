const ImageBannerSection = () => {
  return (
    <section className="relative w-full h-[300px] overflow-hidden mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/bungalow_wide_shot.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
      </div>

      {/* Text Overlay - positioned at bottom */}
      <div className="relative z-10 h-full flex items-end justify-start pb-8 md:pb-12">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="max-w-4xl">
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              Premiový&nbsp;interiér
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageBannerSection


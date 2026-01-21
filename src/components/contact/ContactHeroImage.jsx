const ContactHeroImage = () => {
  return (
    <div className="relative h-full w-full min-h-[420px] overflow-hidden">
      {/* Obrázek bez overlay, aby byl viditelný */}
      <img
        src="/images/contact_hero.jpg"
        alt="Kontakt – interiér kuchyně a jídelny"
        className="w-full h-full min-h-[420px] object-cover"
        onError={(e) => {
          e.target.style.display = 'none'
        }}
      />
    </div>
  )
}

export default ContactHeroImage


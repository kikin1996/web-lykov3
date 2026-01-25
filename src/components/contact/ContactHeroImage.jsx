import Image from 'next/image'

const ContactHeroImage = () => {
  return (
    <div className="relative h-full w-full min-h-[420px] overflow-hidden">
      <Image
        src="/images/contact_hero.jpg"
        alt="Kontakt – interiér kuchyně a jídelny"
        width={1200}
        height={420}
        className="w-full h-full min-h-[420px] object-cover"
      />
    </div>
  )
}

export default ContactHeroImage


export default function sitemap() {
  const baseUrl = 'https://domypecerady.cz'
  const currentDate = new Date().toISOString().split('T')[0]

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${baseUrl}/images/hero_photo.png`],
    },
    {
      url: `${baseUrl}/vyber-domu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/images/bungalov_hero.jpg`],
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/gallery/dum-9/d%20(5)_dum9.jpg`],
    },
    {
      url: `${baseUrl}/standardy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/standardy/stavba_3.jpg`],
    },
    {
      url: `${baseUrl}/aktuality`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
      images: [`${baseUrl}/images/stavba.jpg`],
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}/images/contact_hero.jpg`],
    },
  ]
}







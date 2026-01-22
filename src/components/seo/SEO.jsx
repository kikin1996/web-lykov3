'use client'

import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website'
}) => {
  const siteUrl = 'https://domypecerady.cz' // TODO: Změň na skutečnou doménu
  const fullTitle = title ? `${title} | Luční Háj` : 'Luční Háj - Rezidenční bytový komplex'
  const fullDescription = description || 'Moderní rezidenční bytový komplex Luční Háj. Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí.'
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/hero_photo.png`
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      {/* Základní meta tagy */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords || 'bytový komplex, byty, realitní projekt, Luční Háj, rezidenční bydlení, nové byty'} />
      <meta name="author" content="Luční Háj" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Luční Háj" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Další meta tagy */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Czech" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
}

export default SEO


'use client'

import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  publishedTime,
  modifiedTime
}) => {
  const siteUrl = 'https://domypecerady.cz'
  const fullTitle = title ? `${title} | Luční Háj` : 'Luční Háj - Rodinné domy u Prahy'
  const fullDescription = description || 'Moderní rodinné domy Luční Háj v Týnci nad Sázavou, 30 min od Prahy. Dvojdomy a bungalovy s energetickou třídou A/B a prémiovým vybavením.'
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/hero_photo.png`
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl

  return (
    <Helmet>
      {/* Základní meta tagy */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords || 'rodinné domy, Týnec nad Sázavou, domy u Prahy, Luční Háj, novostavby, dvojdomy, bungalovy'} />
      <meta name="author" content="NIKASTAR s.r.o." />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Luční Háj - Rodinné domy" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />

      {/* Geo tagy pro lokální SEO */}
      <meta name="geo.region" content="CZ-20" />
      <meta name="geo.placename" content="Týnec nad Sázavou" />
      <meta name="geo.position" content="49.839666;14.611472" />
      <meta name="ICBM" content="49.839666, 14.611472" />

      {/* Další meta tagy */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Czech" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
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
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
}

export default SEO


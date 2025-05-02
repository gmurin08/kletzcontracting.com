import Script from 'next/script'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor", // More specific than LocalBusiness
    "name": "Kletz Contracting",
    "image": "https://kletzcontracting.com/assets/img/logo/KletzLogo.png",
    "logo": "https://kletzcontracting.com/assets/img/logo/KletzLogo.png",
    "url": "https://kletzcontracting.com",
    "telephone": "+1-412-200-2475",
    "email": "john@kletzcontracting.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1468 Old Steubenville Pike",
      "addressLocality": "Pittsburgh",
      "addressRegion": "PA",
      "postalCode": "15205",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "07:00",
          "closes": "20:00"
        }
      ],
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4488,
      "longitude": -80.1358
    },
    "founder": {
        "@type": "Person",
        "name": "John Kletz"
      },
    "foundingDate": "1996",
    "areaServed": [
        {
          "@type": "Place",
          "name": "Allegheny County"
        },
        {
          "@type": "Place",
          "name": "Beaver County"
        },
        {
          "@type": "Place",
          "name": "Cranberry Township"
        },
        {
          "@type": "Place",
          "name": "Mars, PA"
        }
      ],
    "sameAs": [
      "https://www.facebook.com/kletzcontracting"
    ],
    "makesOffer": [
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Roofing Replacement"
        }
    },
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Kitchen Renovations"
        }
    },
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Flooring Replacement"
        }
    },
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Commercial Build-outs"
        }
    },
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Bathroom Remodeling"
        }
    },
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Home Additions"
        }
    },
    {
        "@type": "Offer",
        "itemOffered": {
        "@type": "Service",
        "name": "Deck Construction"
        }
    }
    ],

    "description": "Kletz Contracting is a trusted contractor in Pittsburgh, offering roofing, kitchen and bathroom remodeling, flooring, and commercial build-outs since 1996."
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

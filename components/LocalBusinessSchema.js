import Script from 'next/script'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": "https://kletzcontracting.com#organization",
    "name": "Kletz Contracting",
    "alternateName": "Kletz Contracting LLC",
    "image": "https://kletzcontracting.com/assets/img/logo/KletzLogo.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://kletzcontracting.com/assets/img/logo/KletzLogo.png",
      "width": 250,
      "height": 60
    },
    "url": "https://kletzcontracting.com",
    "telephone": "+1-412-219-7279",
    "email": "john@kletzcontracting.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1468 Old Steubenville Pike",
      "addressLocality": "Robinson Township",
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
            "Friday"
          ],
          "opens": "07:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing Available"],
    "currenciesAccepted": "USD",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4542,
      "longitude": -80.1263
    },
    "founder": {
        "@type": "Person",
        "name": "John Kletz",
        "jobTitle": "Owner"
      },
    "foundingDate": "1985",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 15
    },
    "areaServed": [
        {
          "@type": "City",
          "name": "Robinson Township",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "City",
          "name": "Pittsburgh",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Allegheny County",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Beaver County",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Butler County",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Washington County",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
          }
        }
      ],
    "slogan": "Your Local, Trusted Partner in Home Improvement",
    "sameAs": [
      "https://www.facebook.com/kletzcontracting",
      "https://www.google.com/maps/place/Kletz+Contracting/@40.4542,-80.1263"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Contracting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roofing Services",
            "description": "Complete roofing solutions including repairs, replacements, and emergency services",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Siding Installation",
            "description": "Professional vinyl, fiber cement, and wood siding installation and repair",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dumpster Rental",
            "description": "10-20 yard roll-off dumpster rentals for construction and home projects",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Remodeling",
            "description": "Complete kitchen renovations from design to installation",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Remodeling",
            "description": "Full bathroom renovations including fixtures, tile, and plumbing",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Additions",
            "description": "Room additions and home expansions to increase living space",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deck Construction",
            "description": "Custom deck design and construction using quality materials",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flooring Services",
            "description": "Hardwood, laminate, tile, and carpet installation",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Remodeling",
            "description": "Commercial build-outs and renovation services for businesses",
            "provider": {
              "@id": "https://kletzcontracting.com#organization"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Kletz Contracting did an amazing job on our roof replacement. Professional, timely, and great communication throughout the project."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Mike D."
        },
        "reviewBody": "Excellent siding installation! The crew was professional and cleaned up perfectly. Highly recommend for any home improvement project."
      }
    ],
    "description": "Kletz Contracting is a trusted family-owned contractor in Robinson Township, PA, offering professional roofing, siding, dumpster rental, and home remodeling services throughout Pittsburgh and surrounding counties since 1985. Licensed, insured, and committed to quality craftsmanship.",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Pennsylvania Contractor License"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Fully Insured"
      }
    ]
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
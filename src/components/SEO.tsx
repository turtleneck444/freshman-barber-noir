import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

const SEO = ({ 
  title = "The FRESHMEN Barbershop - Premium Barber in Mississauga | 4.9★ Rated",
  description = "Mississauga's #1 rated barbershop with 200+ 5-star reviews. Expert fades, beard trims, hot towel shaves. Walk-ins welcome! Located at 167 Queen St S. Call (905) 483-7374",
  canonical = "https://thefreshmenbarbershop.com",
  ogImage = "https://thefreshmenbarbershop.com/og-hero-image.jpg",
  schema
}: SEOProps) => {
  
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BarberShop",
        "@id": "https://thefreshmenbarbershop.com/#barbershop",
        "name": "The FRESHMEN Barbershop",
        "alternateName": "FRESHMEN Style Barbershop",
        "description": "Premium barbershop in Mississauga offering expert haircuts, fades, beard grooming, hot towel shaves, and professional styling services. Voted #1 barbershop in Streetsville with 4.9-star rating.",
        "url": "https://thefreshmenbarbershop.com",
        "logo": "https://thefreshmenbarbershop.com/logo.png",
        "image": [
          "https://thefreshmenbarbershop.com/og-hero-image.jpg",
          "https://thefreshmenbarbershop.com/og-image.jpg",
          "https://thefreshmenbarbershop.com/outside.jpg"
        ],
        "telephone": "+19054837374",
        "email": "freshmen.style16@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "167 Queen St S, Unit 4",
          "addressLocality": "Mississauga",
          "addressRegion": "ON",
          "postalCode": "L5M 1L2",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5823631",
          "longitude": "-79.7144503"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
            "opens": "12:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "11:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$$",
        "currenciesAccepted": "CAD",
        "paymentAccepted": "Cash, Credit Card, Debit Card",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasMap": "https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z",
        "sameAs": [
          "https://www.instagram.com/freshmen.style",
          "https://www.facebook.com/freshmenbarbershop",
          "https://www.google.com/maps/place/The+FRESHMEN+Barbershop/@43.5823631,-79.7144503,17z"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Mississauga"
          },
          {
            "@type": "City",
            "name": "Streetsville"
          },
          {
            "@type": "City",
            "name": "Meadowvale"
          },
          {
            "@type": "City",
            "name": "Erin Mills"
          },
          {
            "@type": "City",
            "name": "Port Credit"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Barbering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Signature Haircut",
                "description": "Premium haircut with consultation, hot towel service, and professional styling",
                "provider": {
                  "@id": "https://thefreshmenbarbershop.com/#barbershop"
                }
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "45",
                "priceCurrency": "CAD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Skin Fade",
                "description": "Expert skin fade with precision blending and sharp line work",
                "provider": {
                  "@id": "https://thefreshmenbarbershop.com/#barbershop"
                }
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "50",
                "priceCurrency": "CAD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Beard Grooming",
                "description": "Professional beard trim, shaping, and conditioning treatment",
                "provider": {
                  "@id": "https://thefreshmenbarbershop.com/#barbershop"
                }
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "35",
                "priceCurrency": "CAD"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Royal Package",
                "description": "Complete grooming experience including haircut, beard trim, and traditional hot towel shave",
                "provider": {
                  "@id": "https://thefreshmenbarbershop.com/#barbershop"
                }
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "85",
                "priceCurrency": "CAD"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://thefreshmenbarbershop.com/#website",
        "url": "https://thefreshmenbarbershop.com",
        "name": "The FRESHMEN Barbershop",
        "description": "Premium barbershop in Mississauga offering expert grooming services",
        "publisher": {
          "@id": "https://thefreshmenbarbershop.com/#barbershop"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://thefreshmenbarbershop.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://thefreshmenbarbershop.com/#localbusiness",
        "name": "The FRESHMEN Barbershop",
        "image": "https://thefreshmenbarbershop.com/outside.jpg",
        "telephone": "+19054837374",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "167 Queen St S, Unit 4",
          "addressLocality": "Mississauga",
          "addressRegion": "ON",
          "postalCode": "L5M 1L2",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5823631",
          "longitude": "-79.7144503"
        },
        "url": "https://thefreshmenbarbershop.com",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "200"
        }
      }
    ]
  };

  const schemaData = schema || defaultSchema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Keywords for Local SEO */}
      <meta name="keywords" content="barbershop Mississauga, barber near me, haircut Mississauga, fade Mississauga, beard trim Mississauga, hot towel shave, men's grooming Mississauga, best barber Streetsville, professional haircut, skin fade, beard grooming, traditional shave, walk-in barber, Mississauga barbershop, Queen Street barbershop, premium haircut, men's salon Mississauga, hair styling, barber shop near me, FRESHMEN barbershop, Streetsville barber" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The FRESHMEN Barbershop" />
      <meta property="og:locale" content="en_CA" />
      <meta property="business:contact_data:street_address" content="167 Queen St S, Unit 4" />
      <meta property="business:contact_data:locality" content="Mississauga" />
      <meta property="business:contact_data:region" content="ON" />
      <meta property="business:contact_data:postal_code" content="L5M 1L2" />
      <meta property="business:contact_data:country_name" content="Canada" />
      <meta property="place:location:latitude" content="43.5823631" />
      <meta property="place:location:longitude" content="-79.7144503" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="The FRESHMEN Barbershop" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Mississauga" />
      <meta name="geo.position" content="43.5823631;-79.7144503" />
      <meta name="ICBM" content="43.5823631, -79.7144503" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;

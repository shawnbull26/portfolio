import { brand, pricing, siteUrl } from './site'

// schema.org details that help Google show the business in local results. Contact fields appear once set in brand.
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: brand.name,
  url: `${siteUrl}/`,
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/apple-touch-icon.png`,
  description: `${brand.name} designs and builds websites for local businesses that don’t have one yet.`,
  areaServed: { '@type': 'AdministrativeArea', name: brand.location },
  priceRange: `${pricing.packages[0].price}–${pricing.packages[1].regular}`,
  founder: { '@type': 'Person', name: brand.owner },
  ...(brand.phone && { telephone: brand.phone }),
  ...(brand.email && { email: brand.email }),
  makesOffer: pricing.packages.map((pkg) => ({
    '@type': 'Offer',
    name: pkg.name,
    price: pkg.price.replace(/[^\d.]/g, ''),
    priceCurrency: 'USD',
  })),
}

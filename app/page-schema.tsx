export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'WebP Converter',
    description: 'Free online tool to convert images to WebP format. Reduce file size by up to 50% with high-quality compression.',
    url: 'https://towebp.vercel.app',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Convert images to WebP format',
      'Batch conversion support',
      'Quality control slider',
      'Drag and drop upload',
      'No file storage - privacy focused',
      'Support for PNG, JPG, GIF, and more',
    ],
    screenshot: 'https://towebp.vercel.app/screenshot.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  };
}

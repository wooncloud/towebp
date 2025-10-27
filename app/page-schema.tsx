export function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'WebP Converter - Free Online Image to WebP Converter',
    alternateName: 'Image to WebP Converter',
    description: 'Professional free online WebP converter tool to convert PNG to WebP, JPG to WebP, GIF to WebP and all image formats to WebP. Reduce file size by up to 50% with high-quality WebP compression.',
    url: 'https://towebpi.vercel.app',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Works on all modern browsers.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free WebP converter with unlimited conversions',
    },
    featureList: [
      'Convert PNG to WebP format',
      'Convert JPG/JPEG to WebP format',
      'Convert GIF to WebP format',
      'Batch WebP conversion support',
      'Adjustable WebP quality control',
      'Drag and drop image upload',
      'Fast WebP conversion processing',
      'No file storage - privacy focused',
      'Support for all image formats to WebP',
      'Client-side WebP preview',
    ],
    screenshot: 'https://towebpi.vercel.app/screenshot.png',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'WebP Converter',
    },
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is WebP format?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WebP is a modern image format developed by Google that provides superior compression for images on the web. WebP files are typically 25-50% smaller than PNG or JPG files while maintaining the same visual quality. Converting images to WebP format helps improve website loading speed and reduces bandwidth usage.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I convert images to WebP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To convert images to WebP format: 1) Upload your PNG, JPG, GIF, or other image files by dragging and dropping or clicking to select. 2) Adjust the quality slider to control WebP compression level (85% recommended for balanced quality and size). 3) Click "Convert to WebP" button. 4) Download your converted WebP files. Our WebP converter supports batch conversion of multiple images at once.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I convert PNG to WebP for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our WebP converter is completely free to use with unlimited conversions. You can convert PNG to WebP, JPG to WebP, GIF to WebP, and any other image format to WebP without any cost or registration. All WebP conversions are processed securely and your files are not stored on our servers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the benefits of using WebP format?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Converting images to WebP format offers several benefits: 1) Smaller file sizes - WebP images are 25-50% smaller than PNG/JPG, 2) Faster website loading - reduced image size means faster page loads, 3) Better SEO - Google favors faster websites with optimized images, 4) Supports transparency - like PNG, WebP supports alpha channel, 5) Animation support - WebP can replace animated GIFs with much smaller file sizes, 6) High quality - maintains excellent visual quality even with compression.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is WebP supported by all browsers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, WebP is now widely supported across all modern browsers including Chrome, Firefox, Safari (14+), Edge, and Opera. Over 95% of global web users can view WebP images. For older browsers, you can implement fallback images using the picture element or server-side detection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much smaller are WebP files compared to PNG or JPG?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'WebP files are typically 25-50% smaller than equivalent PNG or JPG files. The exact reduction depends on the image content and quality settings. Our WebP converter shows you the exact file size reduction for each conversion, so you can see how much space you save by converting to WebP format.',
        },
      },
    ],
  };
}

export function generateHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Convert Images to WebP Format Online',
    description: 'Step-by-step guide to convert PNG, JPG, GIF, and other image formats to WebP using our free online WebP converter tool.',
    image: 'https://towebpi.vercel.app/og-image.png',
    totalTime: 'PT2M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    tool: [
      {
        '@type': 'HowToTool',
        name: 'WebP Converter Online Tool',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Upload Images',
        text: 'Upload your PNG, JPG, GIF, or other image files to the WebP converter. You can drag and drop files or click to select them from your device. Multiple images can be uploaded for batch WebP conversion.',
        image: 'https://towebpi.vercel.app/og-image.png',
        url: 'https://towebpi.vercel.app#step1',
      },
      {
        '@type': 'HowToStep',
        name: 'Adjust WebP Quality Settings',
        text: 'Use the quality slider to adjust the WebP compression level (1-100%). We recommend 85% for the best balance between file size reduction and image quality. Higher values produce larger WebP files with better quality.',
        image: 'https://towebpi.vercel.app/og-image.png',
        url: 'https://towebpi.vercel.app#step2',
      },
      {
        '@type': 'HowToStep',
        name: 'Convert to WebP',
        text: 'Click the "Convert to WebP" button to start converting your images to WebP format. The converter will process all uploaded files and show you the file size reduction for each WebP conversion.',
        image: 'https://towebpi.vercel.app/og-image.png',
        url: 'https://towebpi.vercel.app#step3',
      },
      {
        '@type': 'HowToStep',
        name: 'Download WebP Files',
        text: 'Download your converted WebP files individually or use the "Download All" button to get all WebP images at once. The converted WebP files are ready to use on your website.',
        image: 'https://towebpi.vercel.app/og-image.png',
        url: 'https://towebpi.vercel.app#step4',
      },
    ],
  };
}

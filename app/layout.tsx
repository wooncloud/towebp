import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebP Converter - Free Online Image to WebP Converter | PNG, JPG to WebP",
  description: "Convert images to WebP format for free online. Transform PNG to WebP, JPG to WebP, GIF to WebP with our powerful WebP converter tool. Reduce file size by up to 50% while maintaining high quality. Fast, secure, and easy WebP conversion for all image formats.",
  keywords: [
    "webp",
    "webp converter",
    "convert to webp",
    "image to webp",
    "png to webp",
    "jpg to webp",
    "jpeg to webp",
    "gif to webp",
    "webp online",
    "free webp converter",
    "webp image converter",
    "image compression",
    "webp format",
    "webp tool",
    "convert image to webp online",
    "online webp converter",
    "webp file converter",
    "image optimizer",
    "reduce image size",
    "webp 변환",
    "이미지 webp 변환",
    "무료 webp 변환기"
  ],
  authors: [{ name: "WebP Converter" }],
  creator: "WebP Converter",
  publisher: "WebP Converter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://towebpi.vercel.app",
    title: "WebP Converter - Free Online Image to WebP Converter",
    description: "Convert PNG, JPG, GIF to WebP format online for free. Professional WebP converter tool that reduces file size by up to 50% with high-quality compression. Fast and secure WebP conversion.",
    siteName: "WebP Converter - Image to WebP Online",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebP Converter - Free Online Image to WebP Conversion Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP Converter - Convert Images to WebP Online",
    description: "Free WebP converter: Convert PNG, JPG, GIF to WebP format. Reduce file size by up to 50% with our powerful online WebP conversion tool.",
    images: ["/og-image.png"],
    creator: "@webpconverter",
  },
  alternates: {
    canonical: "https://towebpi.vercel.app",
    languages: {
      'en': 'https://towebpi.vercel.app',
      'ko': 'https://towebpi.vercel.app',
    },
  },
  verification: {
    google: "0SyJ1fC3TZsuzoY2ygtLte3F_Zf-mztCJZth_jmbiUk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

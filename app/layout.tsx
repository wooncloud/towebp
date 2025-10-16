import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebP Converter - Convert Images to WebP Online Free",
  description: "Free online tool to convert images to WebP format. Reduce file size by up to 50% with high-quality compression. Support for PNG, JPG, GIF, and more.",
  keywords: ["webp converter", "image compression", "webp online", "convert to webp", "image optimizer", "free webp tool"],
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
    title: "WebP Converter - Convert Images to WebP Online Free",
    description: "Free online tool to convert images to WebP format. Reduce file size by up to 50% with high-quality compression.",
    siteName: "WebP Converter",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebP Converter - Free Online Image Conversion Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP Converter - Convert Images to WebP Online Free",
    description: "Free online tool to convert images to WebP format. Reduce file size by up to 50%.",
    images: ["/og-image.png"],
    creator: "@webpconverter",
  },
  alternates: {
    canonical: "https://towebpi.vercel.app",
  },
  verification: {
    google: "googlef2ea87898abad19d",
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

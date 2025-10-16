# WebP Converter

Free online tool for high-quality image compression and WebP conversion

## Features

✨ **Key Features**
- 🚀 Server-side processing (Sharp library)
- 📦 Batch conversion support (multiple files at once)
- 🎚️ Quality control (1-100%)
- 📊 File size comparison and savings percentage
- 🎯 Drag and drop support
- 🎨 Modern UI design with shadcn/ui
- 🌓 Dark mode support
- 🔒 Privacy-focused (no file storage on server)

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Image Processing**: Sharp (optimized WebP conversion)
- **Icons**: lucide-react
- **Deployment**: Vercel (recommended)

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## How to Use

1. **Select Images**
   - Drag and drop files, or
   - Click the upload area to select files

2. **Adjust Quality**
   - Use slider to control compression quality (1-100%)
   - Recommended: 85% (balance between quality and size)

3. **Convert**
   - Click "Convert to WebP" button
   - Download individual or all files after conversion

## API Endpoint

### POST /api/convert

Convert images to WebP format

**Request:**
```typescript
FormData {
  file: File,
  quality: number (1-100)
}
```

**Response:**
- Content-Type: `image/webp`
- WebP image binary

## Performance

- **Average compression**: 30-50%
- **Quality loss**: Minimal (at 85% quality)
- **Supported formats**: PNG, JPG, GIF, BMP, and all image formats

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use GitHub integration for automatic deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/towebp)

## Project Structure

```
towebp/
├── app/
│   ├── api/
│   │   └── convert/
│   │       └── route.ts       # WebP conversion API
│   ├── layout.tsx             # Root layout with SEO
│   ├── page.tsx               # Main page
│   ├── page-schema.tsx        # Structured data for SEO
│   ├── sitemap.ts             # Dynamic sitemap
│   ├── manifest.ts            # PWA manifest
│   └── globals.css            # Global styles
├── public/
│   └── robots.txt             # SEO robots file
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## SEO Features

- ✅ Comprehensive meta tags (title, description, keywords)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Dynamic sitemap generation
- ✅ robots.txt configuration
- ✅ PWA manifest for mobile installation
- ✅ Optimized for search engines

## License

ISC

## Contributing

Issues and PRs are always welcome!

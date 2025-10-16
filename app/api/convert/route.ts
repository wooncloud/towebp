import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const quality = parseInt(formData.get('quality') as string) || 85;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Convert to WebP using Sharp
    const webpBuffer = await sharp(buffer)
      .webp({
        quality: quality,
        effort: 6, // 0-6, higher = better compression (slower)
        lossless: false,
      })
      .toBuffer();

    // Remove extension and add .webp
    const originalName = file.name.replace(/\.[^/.]+$/, '');
    const fileName = `${originalName}.webp`;

    // Return WebP image
    return new NextResponse(webpBuffer as unknown as BodyInit, {
      headers: {
        'Content-Type': 'image/webp',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': webpBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Conversion error:', error);
    return NextResponse.json(
      { error: 'Conversion failed' },
      { status: 500 }
    );
  }
}

// File size limit (10MB)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

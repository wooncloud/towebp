'use client';

import { useState, useCallback } from 'react';
import { FileImage, Download, Upload, X, Loader2 } from 'lucide-react';
import { generateStructuredData, generateFAQSchema, generateHowToSchema } from './page-schema';

interface ConvertedFile {
  name: string;
  url: string;
  originalSize: number;
  convertedSize: number;
  originalFile: File;
}

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [quality, setQuality] = useState(85);
  const [converting, setConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/')
    );

    if (droppedFiles.length > 0) {
      setFiles(prev => [...prev, ...droppedFiles]);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []).filter(file =>
      file.type.startsWith('image/')
    );

    if (selectedFiles.length > 0) {
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const convertToWebP = async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('quality', quality.toString());

    const response = await fetch('/api/convert', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Conversion failed');
    }

    return await response.blob();
  };

  const handleConvertAll = async () => {
    if (files.length === 0) return;

    setConverting(true);
    setConvertedFiles([]);

    try {
      const results: ConvertedFile[] = [];

      for (const file of files) {
        const webpBlob = await convertToWebP(file);
        const url = URL.createObjectURL(webpBlob);

        results.push({
          name: file.name.replace(/\.[^/.]+$/, '') + '.webp',
          url,
          originalSize: file.size,
          convertedSize: webpBlob.size,
          originalFile: file,
        });
      }

      setConvertedFiles(results);
    } catch (error) {
      console.error('Conversion error:', error);
      alert('Some files failed to convert.');
    } finally {
      setConverting(false);
    }
  };

  const downloadFile = (file: ConvertedFile) => {
    const a = document.createElement('a');
    a.href = file.url;
    a.download = file.name;
    a.click();
  };

  const downloadAll = () => {
    convertedFiles.forEach(file => downloadFile(file));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getSavingsPercentage = (original: number, converted: number): number => {
    return Math.round(((original - converted) / original) * 100);
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHowToSchema()),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileImage className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              WebP Converter
            </h1>
          </div>
          <p className="text-muted-foreground">
            The best free tool for high-quality image compression
          </p>
        </div>

        <div className="space-y-6">
          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg transition-all ${
              dragActive
                ? 'border-primary bg-blue-50 dark:bg-blue-950'
                : 'border-border bg-card hover:border-primary/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="sr-only"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center py-12 cursor-pointer"
            >
              <Upload className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-lg font-semibold mb-2">
                Drag images here or click to select
              </p>
              <p className="text-sm text-muted-foreground">
                Supports PNG, JPG, GIF, and all image formats
              </p>
            </label>
          </div>

          {/* Selected Files */}
          {files.length > 0 && (
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                Selected Files ({files.length})
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-secondary/50 rounded p-2"
                  >
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <FileImage className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm truncate">{file.name}</span>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        ({formatFileSize(file.size)})
                      </span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="ml-2 text-muted-foreground hover:text-destructive flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quality Slider */}
          {files.length > 0 && (
            <div className="bg-card border rounded-lg p-6">
              <label className="block mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Compression Quality</span>
                  <span className="text-sm text-muted-foreground">{quality}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Lower Quality (Smaller Size)</span>
                  <span>Higher Quality (Larger Size)</span>
                </div>
              </label>

              <button
                onClick={handleConvertAll}
                disabled={converting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {converting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 mr-2" />
                    Convert to WebP
                  </>
                )}
              </button>
            </div>
          )}

          {/* Converted Files */}
          {convertedFiles.length > 0 && (
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Conversion Complete ({convertedFiles.length})</h3>
                <button
                  onClick={downloadAll}
                  className="text-sm bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-lg flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download All
                </button>
              </div>

              <div className="space-y-3">
                {convertedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="bg-secondary/30 rounded-lg p-4 border border-border"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate mb-1">{file.name}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span>{formatFileSize(file.originalSize)} → {formatFileSize(file.convertedSize)}</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold">
                            {getSavingsPercentage(file.originalSize, file.convertedSize)}% saved
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadFile(file)}
                        className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-lg flex-shrink-0"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>All conversions are processed on the server. Your files are not stored.</p>
          </div>
        </div>
      </main>
    </>
  );
}

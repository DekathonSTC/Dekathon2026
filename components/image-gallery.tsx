"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageItem {
  src: string
  alt: string
}

interface ImageGalleryProps {
  images: ImageItem[]
  layout: "hero" | "grid"
}

export function ImageGallery({ images, layout }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  if (layout === "hero") {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-0">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative h-full overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
        {selectedIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={selectedIndex}
            onClose={closeLightbox}
            onPrevious={goToPrevious}
            onNext={goToNext}
          />
        )}
      </>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden group cursor-pointer rounded-sm"
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
          </button>
        ))}
      </div>
      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  )
}

interface LightboxProps {
  images: ImageItem[]
  currentIndex: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

function Lightbox({ images, currentIndex, onClose, onPrevious, onNext }: LightboxProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors p-2 z-10"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="absolute left-4 text-white hover:text-white/70 transition-colors p-2 z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-white/70 transition-colors p-2 z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
        <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-mono">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

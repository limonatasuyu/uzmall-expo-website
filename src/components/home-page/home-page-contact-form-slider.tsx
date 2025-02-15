"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { customLoader } from '@/lib/customLoader';
const images = [
  "/contact-form-image-1.jpg",
  "/contact-form-image-2.jpg",
  "/contact-form-image-3.jpg",
  "/contact-form-image-4.jpg",
]

export function ContactFormSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full max-w-[500px] h-full relative rounded-2xl overflow-hidden bg-[#015d66] backdrop-blur-sm">
      {/* Image container */}
      <div className="relative w-full h-full aspect-[3/4]">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          loader={customLoader}
        />
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="bg-black/20 hover:bg-black/40 text-white rounded-full"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="bg-black/20 hover:bg-black/40 text-white rounded-full"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index as number}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  )
} 
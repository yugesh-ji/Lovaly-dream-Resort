"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

const categories = ["All", "Rooms", "Dining", "Pool", "Events"]

const allImages = [
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", category: "Rooms", alt: "Luxury Room" },
  { src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80", category: "Rooms", alt: "Suite View" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", category: "Dining", alt: "Fine Dining" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80", category: "Dining", alt: "Restaurant Setup" },
  { src: "https://images.unsplash.com/photo-1540541338537-ad197c73eef5?w=800&q=80", category: "Rooms", alt: "Comfortable Bed" },
  { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80", category: "Pool", alt: "Swimming Pool" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80", category: "Events", alt: "Wedding Setup" },
  { src: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?w=800&q=80", category: "Pool", alt: "Outdoor Pool Area" },
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80", category: "Events", alt: "Resort Exterior" },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80", category: "Pool", alt: "Spa Area" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80", category: "Rooms", alt: "Resort Night View" },
  { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80", category: "Dining", alt: "Bar & Lounge" },
]

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = activeTab === "All" 
    ? allImages 
    : allImages.filter(img => img.category === activeTab)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white dark:bg-[#0d0a07] pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Gallery
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === cat 
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/30 scale-105" 
                  : "bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                onClick={() => setSelectedImage(img.src)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-serif font-bold text-xl tracking-wider transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Fullscreen View" fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

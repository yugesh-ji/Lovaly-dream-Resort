"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { BedDouble, UtensilsCrossed, Trees, Waves, Sparkles, Flower2 } from "lucide-react"

const services = [
  { icon: BedDouble, title: "Luxury Hotel Rooms", desc: "Experience comfort like never before in our spacious, elegantly designed rooms." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Savor exquisite cuisines crafted by expert chefs in a luxurious ambiance." },
  { icon: Trees, title: "Resort & Event Spaces", desc: "Lush green spaces perfect for relaxation and memorable gatherings." },
  { icon: Waves, title: "Swimming Pool", desc: "Take a refreshing dip in our crystal-clear pool, surrounded by nature." },
  { icon: Sparkles, title: "Banquet & Weddings", desc: "Make your special day unforgettable in our grand banquet halls." },
  { icon: Flower2, title: "Spa & Wellness", desc: "Rejuvenate your mind and body with our exclusive spa treatments." },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
  "https://images.unsplash.com/photo-1540541338537-ad197c73eef5?w=600&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
]

function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  )
}

export default function Home() {
  const heroWords = "Welcome to Lovaly Dream Resort".split(" ")
  const servicesRef = useRef(null)
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 overflow-hidden flex flex-wrap justify-center gap-x-4">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-xl"
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide drop-shadow-md"
          >
            Your Ultimate Getaway for Stay, Dine and Relax in Rohtas
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-black rounded-full font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            >
              Book Now
            </Link>
            <Link 
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
            >
              Explore More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-white dark:bg-[#0d0a07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80" 
                alt="Lovaly Dream Resort Exterior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Discover a World of <span className="text-yellow-500">Luxury</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Nestled near Patanwa Govt Polytechnic College in Indrapuri, Rohtas, Lovaly Dream Resort is a sanctuary of elegance and tranquility. We bring together modern luxury and nature's beauty to offer you an unforgettable experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                Whether you're looking for a peaceful weekend getaway, a romantic dinner, or a grand venue for your dream wedding, we have everything you need to create lasting memories.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-yellow-600 dark:text-yellow-500 font-bold text-lg hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors group"
              >
                Read Our Story
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#12100e] relative overflow-hidden" ref={servicesRef}>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Our Premium Services" subtitle="Everything you need for a perfect stay, tailored to your desires." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: [0, -10, 0] } : {}}
                transition={{ 
                  opacity: { duration: 0.6, delay: index * 0.1 },
                  y: { repeat: Infinity, duration: 4, delay: index * 0.3, ease: "easeInOut" }
                }}
                className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-white/10 transition-colors shadow-lg dark:shadow-none group"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 bg-white dark:bg-[#0d0a07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Glimpse of Paradise" subtitle="Explore the beauty that awaits you at Lovaly Dream Resort." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-block px-8 py-3 border-2 border-yellow-500 text-yellow-600 dark:text-yellow-500 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

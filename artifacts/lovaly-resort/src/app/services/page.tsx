"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BedDouble, UtensilsCrossed, Trees, Waves, Sparkles, Flower2, CheckCircle2 } from "lucide-react"

const detailedServices = [
  {
    icon: BedDouble,
    title: "Luxury Accommodation",
    desc: "Our suites and rooms are designed to provide the ultimate comfort with stunning views. Each room features premium bedding, modern amenities, and a serene ambiance.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    features: ["King Size Beds", "24/7 Room Service", "Private Balconies", "Smart TV & Wi-Fi"]
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining Restaurant",
    desc: "Embark on a culinary journey with our expert chefs who prepare exquisite dishes ranging from local delicacies to international cuisines, all served in an elegant setting.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    features: ["Multi-cuisine Menu", "Buffet Breakfast", "Private Dining", "Bar & Lounge"]
  },
  {
    icon: Sparkles,
    title: "Weddings & Banquets",
    desc: "Make your special day truly magical. Our grand banquet halls and lush lawns provide the perfect backdrop for weddings, receptions, and grand celebrations.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    features: ["Grand Banquet Hall", "Outdoor Lawns", "Event Planning", "Custom Catering"]
  },
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "Dive into relaxation in our pristine swimming pool. Whether you want to swim laps or lounge by the poolside with a refreshing drink, it's the perfect spot to unwind.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    features: ["Temperature Controlled", "Kids Pool Area", "Poolside Bar", "Loungers & Cabanas"]
  },
  {
    icon: Flower2,
    title: "Spa & Wellness",
    desc: "Rejuvenate your senses at our state-of-the-art spa. Our experienced therapists offer a range of treatments designed to relax your body and mind.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    features: ["Ayurvedic Massages", "Aromatherapy", "Steam & Sauna", "Yoga Sessions"]
  },
  {
    icon: Trees,
    title: "Resort Activities",
    desc: "There's never a dull moment at Lovaly. Engage in a variety of indoor and outdoor activities designed for guests of all ages.",
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?w=800&q=80",
    features: ["Indoor Games", "Nature Walks", "Fitness Center", "Kids Play Area"]
  }
]

const packages = [
  {
    name: "Honeymoon Package",
    price: "₹15,000",
    duration: "2 Nights / 3 Days",
    includes: ["Welcome Drink", "Romantic Candlelight Dinner", "Couples Spa Session", "Room Decoration"]
  },
  {
    name: "Family Getaway",
    price: "₹22,000",
    duration: "2 Nights / 3 Days",
    includes: ["Family Suite", "All Meals Included", "Kids Activities", "Local Sightseeing"]
  },
  {
    name: "Corporate Retreat",
    price: "Custom",
    duration: "Flexible",
    includes: ["Conference Room Access", "Team Building Activities", "Gala Dinner", "Group Discounts"]
  }
]

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Experience world-class amenities and unparalleled hospitality
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white dark:bg-[#0d0a07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {detailedServices.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-24 bg-gray-50 dark:bg-[#12100e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">Exclusive Packages</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">Curated experiences for your special occasions.</p>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="backdrop-blur-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col"
              >
                <div className="p-8 bg-yellow-50 dark:bg-yellow-500/10 border-b border-gray-100 dark:border-white/10 text-center">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-yellow-600 dark:text-yellow-500 font-bold text-3xl mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{pkg.duration}</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-yellow-500 mr-3 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className="block w-full text-center bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

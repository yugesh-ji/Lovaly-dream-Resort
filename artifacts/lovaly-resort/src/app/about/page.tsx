"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Heart, Star, TreePine, Users } from "lucide-react"

function StatCounter({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.ceil(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white dark:bg-[#0d0a07]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              A Legacy of <span className="text-yellow-500">Excellence</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              Founded with a vision to bring world-class hospitality to Rohtas, Lovaly Dream Resort has grown into a premier destination for travelers seeking luxury, comfort, and a touch of nature.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              Our commitment to excellence is reflected in every aspect of our resort — from our meticulously designed rooms to our exquisite dining experiences and breathtaking event spaces. We believe in creating moments that turn into cherished memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20 bg-yellow-500 dark:bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 200, suffix: "+", label: "Luxury Rooms" },
              { target: 5000, suffix: "+", label: "Happy Guests" },
              { target: 15, suffix: "", label: "Years Experience" },
              { target: 5, suffix: " Star", label: "Rating" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-black"
              >
                <div className="font-serif text-5xl md:text-6xl font-bold mb-2">
                  <StatCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-[#12100e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Hospitality", desc: "Warm, welcoming, and intuitive service that makes you feel at home." },
              { icon: Star, title: "Excellence", desc: "Uncompromising quality in every detail of your stay." },
              { icon: TreePine, title: "Nature", desc: "Harmonious integration with our beautiful natural surroundings." },
              { icon: Users, title: "Family", desc: "Creating spaces and experiences that bring loved ones together." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform shadow-lg dark:shadow-none"
              >
                <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-500/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Utensils, BedDouble, PartyPopper, ChevronRight, Menu, X, Star } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const floatAnimation = {
  y: ["-10px", "10px"],
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-emerald-600 flex items-center justify-center text-white font-serif font-bold text-xl shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:scale-105 transition-transform">
            LDR
          </div>
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-white">
            Lovaly <span className="text-gradient-gold">Dream Resort</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white hover:text-emerald-400 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500 hover:text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] text-sm uppercase tracking-widest font-semibold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold tracking-wide"
              >
                Book Your Stay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Resort"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md"
        >
          <span className="text-emerald-300 text-sm font-semibold tracking-widest uppercase">
            A Premium Escape in Rohtas
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Welcome to <br />
          <span className="text-gradient-gold">Lovaly Dream Resort</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-lg"
        >
          Your Ultimate Getaway for Stay, Dine & Relax. Experience unmatched hospitality surrounded by elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-emerald-600 text-white rounded-full font-bold tracking-wide overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Your Stay <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </a>

          <a
            href="#services"
            className="px-8 py-4 rounded-full text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            Explore Amenities
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Elements (Anti-gravity) */}
      <motion.div
        animate={floatAnimation}
        className="absolute bottom-32 left-10 md:left-32 z-20 hidden lg:block"
      >
        <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4">
          <div className="bg-amber-500/20 p-3 rounded-full text-amber-400">
            <Star size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-white font-bold text-xl">4.9/5</p>
            <p className="text-zinc-400 text-sm">Customer Rating</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative z-10 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-emerald-500 font-semibold tracking-widest uppercase mb-3">
              About Us
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A Symphony of Luxury <br />& Comfort
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-zinc-400 text-lg mb-6 leading-relaxed">
              Nestled near the Patanwa Govt Polytechnic College in Indrapuri, Rohtas, Lovaly Dream Resort is a sanctuary of peace and elegance. We seamlessly blend modern luxury with warm hospitality to create unforgettable experiences.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Whether you are looking for top-notch hotel accommodations, a multi-cuisine culinary journey at our restaurant, or a grand venue for your special events, we offer everything in one breathtaking location.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-8">
              <div className="border-l-2 border-emerald-500 pl-4">
                <p className="text-3xl font-serif text-white mb-1">50+</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Luxury Rooms</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <p className="text-3xl font-serif text-white mb-1">2</p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">Event Spaces</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Resort View"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Anti-gravity floating badge */}
            <motion.div
              animate={floatAnimation}
              className="absolute bottom-8 left-8 z-20 glass-card p-6 rounded-2xl max-w-xs"
            >
              <p className="font-serif text-xl text-white mb-2">Unwind & Relax</p>
              <p className="text-zinc-400 text-sm">Experience nature's embrace with our premium amenities.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <BedDouble size={40} className="text-emerald-400 mb-6" />,
      title: "Luxury Hotel Rooms",
      desc: "Experience ultimate comfort in our thoughtfully designed suites, featuring premium bedding, modern amenities, and breathtaking views.",
      delay: 0.1
    },
    {
      icon: <Utensils size={40} className="text-amber-400 mb-6" />,
      title: "Fine Dining Restaurant",
      desc: "Indulge in a culinary adventure with our master chefs, offering a diverse menu of local delicacies and international cuisines.",
      delay: 0.3
    },
    {
      icon: <PartyPopper size={40} className="text-teal-400 mb-6" />,
      title: "Resort & Event Spaces",
      desc: "From grand weddings to corporate retreats, our expansive event spaces and manicured lawns provide the perfect backdrop.",
      delay: 0.5
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative bg-zinc-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-semibold tracking-widest uppercase mb-3"
          >
            Our Amenities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white"
          >
            Curated Experiences
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: service.delay }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass-card p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-700" />
              <div className="relative z-10">
                {service.icon}
                <h4 className="font-serif text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
                <div className="mt-8 flex items-center text-emerald-400 font-semibold text-sm tracking-wider uppercase group-hover:text-emerald-300">
                  Discover More <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c894099f72ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-emerald-500 font-semibold tracking-widest uppercase mb-3">Gallery</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white">Capturing Moments</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors pb-2">
            View Full Gallery <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''} ${index === 1 ? 'lg:col-span-2 lg:row-span-2 h-[600px]' : 'h-72'}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden bg-zinc-950 border-t border-white/10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Let's Plan Your Stay</h3>
            <p className="text-zinc-400 mb-12 max-w-md text-lg">
              Reach out to us to book your room, reserve a table, or plan your next grand event at Lovaly Dream Resort.
            </p>

            <div className="space-y-8">
              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-white/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-zinc-400 leading-relaxed">Near Patanwa Govt Polytechnic College,<br />Indrapuri, Rohtas (Bihar)</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-white/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-zinc-400">+91 8797550731</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-white/5">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-zinc-400">lovelydreamresort@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <h4 className="text-2xl font-serif text-white mb-6">Send us a message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 ml-1">First Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 ml-1">Email Address</label>
                <input type="email" className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-serif text-xl font-bold tracking-wider text-white">
              Lovaly <span className="text-gradient-gold">Dream Resort</span>
            </span>
          </div>
          <p className="text-zinc-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lovaly Dream Resort. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-600 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-600 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-600 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

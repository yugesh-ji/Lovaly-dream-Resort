import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BedDouble, UtensilsCrossed, Trees, Waves, Sparkles, Flower2, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const services = [
  { title: "Luxury Hotel Rooms", icon: BedDouble, desc: "Rest in opulence" },
  { title: "Fine Dining Restaurant", icon: UtensilsCrossed, desc: "Culinary excellence" },
  { title: "Resort & Event Spaces", icon: Trees, desc: "Lush green courtyards" },
  { title: "Swimming Pool", icon: Waves, desc: "Crystal clear waters" },
  { title: "Banquet & Weddings", icon: Sparkles, desc: "Unforgettable moments" },
  { title: "Spa & Wellness", icon: Flower2, desc: "Rejuvenate your soul" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1540541338537-ad197c73eef5?w=800&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80"
];

const testimonials = [
  { name: "Rahul Sharma", initials: "RS", text: "An absolute dream. The hospitality is unmatched in Bihar.", rating: 5 },
  { name: "Priya Singh", initials: "PS", text: "We hosted our wedding here. It was magical from start to finish.", rating: 5 },
  { name: "Amit Verma", initials: "AV", text: "The perfect weekend getaway. The fine dining is exceptional.", rating: 4 },
];

export function Home() {
  const title = "Welcome to Lovaly Dream Resort";
  const words = title.split(" ");

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" 
            alt="Resort hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight flex flex-wrap justify-center gap-x-4">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-10 font-medium"
          >
            Your Ultimate Getaway for Stay, Dine and Relax in Rohtas
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm text-lg px-8">
              Explore More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Experience Luxury</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.2 }}
                  className="bg-card border border-border p-8 rounded-2xl text-center hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-shadow group"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl relative h-[400px]"
          >
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80" alt="Resort entrance" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">A Regal Escape in the Heartland</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Step into a lavish palatial retreat where rich deep gold, warm candlelight, and deep forest greens surround you. At Lovaly Dream Resort, every interaction carries weight and intention.
            </p>
            <Link href="/about" className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4">
              Read Our Story &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Glimpses of Paradise</h2>
              <div className="w-24 h-1 bg-primary rounded-full" />
            </div>
            <Link href="/gallery" className="hidden sm:inline-flex items-center text-primary font-semibold hover:underline">
              View Full Gallery &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img src={src} alt="Gallery image" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/gallery" className="inline-flex items-center text-primary font-semibold">
              View Full Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Guest Experiences</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-background p-8 rounded-2xl border border-border shadow-sm relative"
              >
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg italic text-muted-foreground mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary font-bold">{t.initials}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

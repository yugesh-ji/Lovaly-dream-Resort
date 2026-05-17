import { motion } from "framer-motion";
import { BedDouble, UtensilsCrossed, Trees, Waves, Sparkles, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const allServices = [
  { 
    title: "Luxury Hotel Rooms", 
    icon: BedDouble, 
    desc: "Experience ultimate comfort in our meticulously designed rooms and suites. Featuring premium bedding, panoramic views, and 24/7 room service for an unforgettable stay.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
  },
  { 
    title: "Fine Dining Restaurant", 
    icon: UtensilsCrossed, 
    desc: "Savor exquisite culinary creations crafted by our master chefs. Enjoy a blend of authentic local flavors and international cuisines in a candlelit ambiance.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
  },
  { 
    title: "Resort & Event Spaces", 
    icon: Trees, 
    desc: "Expansive green lawns and elegant courtyards perfect for leisurely evening walks, outdoor gatherings, or simply relaxing amidst nature.",
    image: "https://images.unsplash.com/photo-1540541338537-ad197c73eef5?w=800&q=80"
  },
  { 
    title: "Swimming Pool", 
    icon: Waves, 
    desc: "Take a refreshing dip in our pristine swimming pool. Surrounded by loungers and cabanas, it's the perfect spot to unwind under the sun.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80"
  },
  { 
    title: "Banquet & Weddings", 
    icon: Sparkles, 
    desc: "Host grand celebrations in our opulent banquet halls. We provide comprehensive event planning services to make your special day truly magical.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
  },
  { 
    title: "Spa & Wellness", 
    icon: Flower2, 
    desc: "Rejuvenate mind, body, and spirit at our luxury spa. Indulge in therapeutic massages, steam baths, and specialized wellness treatments.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
  },
];

const packages = [
  { name: "Honeymoon Package", price: "₹25,000", desc: "Romantic suite, candlelit dinner, couple's spa, and late checkout." },
  { name: "Family Getaway", price: "₹35,000", desc: "Connecting rooms, complimentary meals for kids, pool access, and local tours." },
  { name: "Corporate Retreat", price: "Custom", desc: "Conference hall access, team building activities, catering, and executive suites." }
];

export function Services() {
  return (
    <div className="w-full">
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services & Amenities</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a world of luxury and comfort tailored to provide you with an exceptional experience.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {allServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row gap-6 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all"
            >
              <div className="sm:w-2/5 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <service.icon className="w-6 h-6" />
                  <h3 className="text-2xl font-serif font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Special Packages</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-8 text-center flex flex-col"
              >
                <h3 className="text-2xl font-serif font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                <p className="text-muted-foreground mb-8 flex-grow">{pkg.desc}</p>
                <Button className="w-full bg-primary text-primary-foreground">
                  Inquire Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

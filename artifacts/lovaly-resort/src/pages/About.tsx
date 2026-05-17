import { motion } from "framer-motion";

export function About() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80" 
            alt="About Resort" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">A Legacy of Luxury in Rohtas</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Nestled in the serene landscapes of Indrapuri, Rohtas, Lovaly Dream Resort was born from a vision to bring world-class hospitality to the heartland of Bihar. We believe that true luxury isn't just about opulent surroundings—it's about the feeling of being completely taken care of.
            </p>
            <p>
              Our architecture draws inspiration from palatial retreats, featuring rich deep golds, elegant marble corridors, and lush garden courtyards that come alive at dusk. Every detail, from the silk drapes in our suites to the warm candlelight in our dining areas, has been meticulously chosen to create an unhurried, regal escape.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "200+", label: "Luxury Rooms" },
            { value: "5000+", label: "Happy Guests" },
            { value: "15", label: "Years Experience" },
            { value: "4.9", label: "Star Rating" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Hospitality", desc: "Warmth that feels like home, service that feels like royalty." },
              { title: "Excellence", desc: "Uncompromising quality in every detail, every meal, every stay." },
              { title: "Nature", desc: "Deep forest greens and lush courtyards that soothe the soul." },
              { title: "Family", desc: "Creating unforgettable moments for generations to cherish." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-2xl border border-border text-center"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

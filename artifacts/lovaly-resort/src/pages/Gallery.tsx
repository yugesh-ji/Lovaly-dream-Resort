import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const images = [
  { id: 1, category: "Rooms", src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" },
  { id: 2, category: "Pool", src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80" },
  { id: 3, category: "Dining", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
  { id: 4, category: "Events", src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" },
  { id: 5, category: "Rooms", src: "https://images.unsplash.com/photo-1540541338537-ad197c73eef5?w=800&q=80" },
  { id: 6, category: "Pool", src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80" },
  { id: 7, category: "Dining", src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
  { id: 8, category: "Events", src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80" },
  { id: 9, category: "Rooms", src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80" },
  { id: 10, category: "Dining", src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
  { id: 11, category: "Rooms", src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" },
  { id: 12, category: "Pool", src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80" }
];

const categories = ["All", "Rooms", "Dining", "Pool", "Events"];

export function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="w-full min-h-screen py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Gallery</h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === cat 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={`Gallery ${img.category}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0">
          <DialogTitle className="sr-only">View Image</DialogTitle>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-full h-auto max-h-[90vh] object-contain rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

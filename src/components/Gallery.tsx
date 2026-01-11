import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, X } from 'lucide-react';

// Sample gallery items - in a real app these would come from an API
const galleryItems = [
  { id: 1, title: 'Classic Portrait', style: 'Graphite', size: 'A3', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=800&fit=crop' },
  { id: 2, title: 'Family Sketch', style: 'Charcoal', size: 'A2', image: 'https://images.unsplash.com/photo-1578926288207-32356a8b0878?w=600&h=600&fit=crop' },
  { id: 3, title: 'Pet Portrait', style: 'Pencil', size: 'A4', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&h=900&fit=crop' },
  { id: 4, title: 'Couple Sketch', style: 'Graphite', size: 'A3', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=700&fit=crop' },
  { id: 5, title: 'Child Portrait', style: 'Color', size: 'A3', image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=800&fit=crop' },
  { id: 6, title: 'Wedding Art', style: 'Charcoal', size: 'A2', image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=600&fit=crop' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            The Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Each piece tells a unique story. Browse through our collection of handcrafted portraits.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer hover-glow"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass rounded-xl p-4 backdrop-blur-xl">
                    <h3 className="font-display text-lg font-medium text-white">{item.title}</h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-white/80">
                      <span>{item.size} Size</span>
                      <span>•</span>
                      <span>{item.style}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;

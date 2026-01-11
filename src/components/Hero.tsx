import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-art.jpg';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      {/* Floating background elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-warm-light rounded-full blur-3xl opacity-40"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-10 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-muted rounded-full blur-3xl opacity-50"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
        {/* Text Content */}
        <div className="relative z-10 space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-xs sm:text-sm font-medium"
          >
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-warm animate-pulse" />
            Handcrafted with love
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight"
          >
            Turning Memories into{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Masterpieces</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2 sm:h-3 bg-warm/30 -z-0 origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Hand-drawn portraits from your photos. Each piece is a unique work of art, 
            crafted with precision and delivered across India.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a
              href="#order"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-full text-base sm:text-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Get Your Portrait
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#gallery"
              className="magnetic-btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground/20 rounded-full text-base sm:text-lg font-medium hover:border-foreground/40 transition-all duration-300"
            >
              View Gallery
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 pt-6 lg:pt-8"
          >
            {[
              { number: '500+', label: 'Portraits Created' },
              { number: '4.9★', label: 'Customer Rating' },
              { number: '100%', label: 'Handmade' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
            <img
              src={heroImage}
              alt="Hand-drawn portrait artwork"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 glass-card p-3 sm:p-4 max-w-[160px] sm:max-w-[200px]"
          >
            <div className="text-xs sm:text-sm font-medium">Starting from</div>
            <div className="font-display text-xl sm:text-2xl font-semibold">₹999</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">Delivery in 5-7 days</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

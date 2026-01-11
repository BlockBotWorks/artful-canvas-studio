import { motion } from 'framer-motion';
import { Palette, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center sm:justify-start">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-foreground flex items-center justify-center">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
              </div>
              <span className="font-display text-lg sm:text-xl font-semibold">Cart of Arts</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Turning your precious memories into timeless masterpieces.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex gap-6 sm:gap-8">
              <a href="#gallery" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              <a href="#order" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">Order</a>
              <a href="#faq" className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-end gap-3 sm:gap-4"
          >
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          <p>© 2024 Cart of Arts. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-warm fill-warm" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'framer-motion';
import { Palette, Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 section-padding relative overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                <Palette className="w-5 h-5 text-background" />
              </div>
              <span className="font-display text-xl font-semibold">Cart of Arts</span>
            </div>
            <p className="text-muted-foreground">
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
            <div className="flex gap-8">
              <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              <a href="#order" className="text-muted-foreground hover:text-foreground transition-colors">Order</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-end gap-4"
          >
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Cart of Arts. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-warm fill-warm" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

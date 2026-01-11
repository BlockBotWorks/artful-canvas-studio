import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '919876543210'; // Replace with actual number

const MobileWhatsAppButton = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in getting a custom portrait. Can you help me?`
    );
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      style={{ opacity }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full whatsapp-btn flex items-center justify-center shadow-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
};

export default MobileWhatsAppButton;

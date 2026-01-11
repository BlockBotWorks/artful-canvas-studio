import { motion } from 'framer-motion';
import { Upload, Wallet, Eye, Package } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-8 h-8" />,
    title: 'Upload Photo',
    description: 'Send us a clear photo via WhatsApp',
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: 'Pay 50% Advance',
    description: 'Confirm your order with initial payment',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Preview Sketch',
    description: 'Review the artwork before final touches',
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Get Delivered',
    description: 'Receive your masterpiece at your doorstep',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">How It Works</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4">
            Simple 4-Step Process
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center relative z-10 hover-glow [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 lg:[&>svg]:w-8 lg:[&>svg]:h-8"
                  >
                    {step.icon}
                    {/* Step Number */}
                    <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-foreground text-background text-xs sm:text-sm font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </motion.div>
                  
                  <h3 className="font-display text-sm sm:text-base lg:text-xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Delivery Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-warm-light">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-warm" />
            <span className="text-sm sm:text-base font-medium">Free shipping across India • 5-7 days delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

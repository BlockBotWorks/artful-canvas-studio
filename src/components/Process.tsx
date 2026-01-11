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
    <section id="process" className="py-24 section-padding relative overflow-hidden">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Simple 4-Step Process
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-secondary flex items-center justify-center relative z-10 hover-glow"
                  >
                    {step.icon}
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-sm font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </motion.div>
                  
                  <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-warm-light">
            <Package className="w-5 h-5 text-warm" />
            <span className="font-medium">Free shipping across India • 5-7 days delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, Palette, PenTool, Minus, Plus, MessageCircle, ArrowRight, Check } from 'lucide-react';

type Style = 'pencil' | 'charcoal' | 'color';
type Size = 'A4' | 'A3' | 'A2';

const styles: { id: Style; name: string; icon: React.ReactNode; price: number }[] = [
  { id: 'pencil', name: 'Pencil', icon: <Pencil className="w-6 h-6" />, price: 0 },
  { id: 'charcoal', name: 'Charcoal', icon: <PenTool className="w-6 h-6" />, price: 200 },
  { id: 'color', name: 'Color', icon: <Palette className="w-6 h-6" />, price: 500 },
];

const sizes: { id: Size; name: string; dimensions: string; price: number }[] = [
  { id: 'A4', name: 'A4', dimensions: '21 × 29.7 cm', price: 999 },
  { id: 'A3', name: 'A3', dimensions: '29.7 × 42 cm', price: 1499 },
  { id: 'A2', name: 'A2', dimensions: '42 × 59.4 cm', price: 2499 },
];

const PHONE_NUMBER = '919876543210'; // Replace with actual number

const WhatsAppConfigurator = () => {
  const [selectedStyle, setSelectedStyle] = useState<Style>('pencil');
  const [selectedSize, setSelectedSize] = useState<Size>('A3');
  const [faces, setFaces] = useState(1);
  const [step, setStep] = useState(1);

  const priceRange = useMemo(() => {
    const stylePrice = styles.find(s => s.id === selectedStyle)?.price || 0;
    const sizePrice = sizes.find(s => s.id === selectedSize)?.price || 0;
    const faceMultiplier = 1 + (faces - 1) * 0.4; // 40% extra per additional face
    
    const basePrice = Math.round((sizePrice + stylePrice) * faceMultiplier);
    const maxPrice = Math.round(basePrice * 1.2); // 20% range
    
    return { min: basePrice, max: maxPrice };
  }, [selectedStyle, selectedSize, faces]);

  const handleWhatsAppClick = () => {
    const styleName = styles.find(s => s.id === selectedStyle)?.name;
    const sizeName = sizes.find(s => s.id === selectedSize)?.name;
    
    const message = encodeURIComponent(
      `Hi! I'd like to order a custom portrait:\n\n` +
      `📎 Style: ${styleName}\n` +
      `📐 Size: ${sizeName}\n` +
      `👤 Faces: ${faces}\n` +
      `💰 Estimated: ₹${priceRange.min} - ₹${priceRange.max}\n\n` +
      `Please share the next steps!`
    );
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <section id="order" className="py-24 section-padding relative overflow-hidden bg-secondary/50">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Order Now</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Configure Your Portrait
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Customize your artwork and get an instant price estimate
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <button
                onClick={() => setStep(s)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                  step >= s 
                    ? 'bg-foreground text-background' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step > s ? <Check className="w-5 h-5" /> : s}
              </button>
              {s < 4 && (
                <div className={`w-12 h-0.5 mx-2 transition-colors ${
                  step > s ? 'bg-foreground' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Configurator Card */}
        <motion.div
          layout
          className="glass-card p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Style */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="font-display text-2xl font-semibold">Choose Your Style</h3>
                  <p className="text-muted-foreground mt-2">Select the artistic medium for your portrait</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover-glow ${
                        selectedStyle === style.id
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border bg-background hover:border-foreground/30'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-3">
                        {style.icon}
                        <span className="font-medium">{style.name}</span>
                        {style.price > 0 && (
                          <span className="text-xs opacity-70">+₹{style.price}</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Size */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="font-display text-2xl font-semibold">Select Size</h3>
                  <p className="text-muted-foreground mt-2">Choose the canvas size for your artwork</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover-glow ${
                        selectedSize === size.id
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border bg-background hover:border-foreground/30'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <span className="font-display text-2xl font-semibold">{size.name}</span>
                        <span className="text-xs opacity-70">{size.dimensions}</span>
                        <span className="font-medium mt-2">₹{size.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Faces */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="font-display text-2xl font-semibold">Number of Faces</h3>
                  <p className="text-muted-foreground mt-2">How many people in your portrait?</p>
                </div>
                <div className="flex items-center justify-center gap-8 mt-8">
                  <button
                    onClick={() => setFaces(f => Math.max(1, f - 1))}
                    disabled={faces <= 1}
                    className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-30"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  <div className="text-center">
                    <span className="font-display text-6xl font-semibold">{faces}</span>
                    <p className="text-muted-foreground mt-2">{faces === 1 ? 'Person' : 'People'}</p>
                  </div>
                  <button
                    onClick={() => setFaces(f => Math.min(6, f + 1))}
                    disabled={faces >= 6}
                    className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-30"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Additional faces: +40% per person
                </p>
              </motion.div>
            )}

            {/* Step 4: Summary */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="font-display text-2xl font-semibold">Your Order Summary</h3>
                  <p className="text-muted-foreground mt-2">Review your selections and place your order</p>
                </div>

                {/* Summary Grid */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-background text-center">
                    <span className="text-sm text-muted-foreground">Style</span>
                    <p className="font-display text-xl font-semibold mt-1">
                      {styles.find(s => s.id === selectedStyle)?.name}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-background text-center">
                    <span className="text-sm text-muted-foreground">Size</span>
                    <p className="font-display text-xl font-semibold mt-1">{selectedSize}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background text-center">
                    <span className="text-sm text-muted-foreground">Faces</span>
                    <p className="font-display text-xl font-semibold mt-1">{faces}</p>
                  </div>
                </div>

                {/* Price Estimate */}
                <div className="text-center p-6 rounded-2xl bg-warm-light">
                  <span className="text-sm text-muted-foreground">Estimated Price Range</span>
                  <p className="font-display text-4xl font-semibold mt-2">
                    ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Final price may vary based on complexity
                  </p>
                </div>

                {/* WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full py-5 rounded-2xl whatsapp-btn flex items-center justify-center gap-3 text-lg font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book via WhatsApp
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="px-6 py-3 rounded-full border border-border font-medium disabled:opacity-30 hover:bg-muted transition-colors"
            >
              Back
            </button>
            {step < 4 && (
              <button
                onClick={nextStep}
                className="magnetic-btn px-8 py-3 rounded-full bg-foreground text-background font-medium flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppConfigurator;

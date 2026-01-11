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
    <section id="order" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-secondary/50">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">Order Now</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4">
            Configure Your Portrait
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-lg mx-auto px-4">
            Customize your artwork and get an instant price estimate
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8 sm:mb-12">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <button
                onClick={() => setStep(s)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-medium transition-all duration-300 ${
                  step >= s 
                    ? 'bg-foreground text-background' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {step > s ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : s}
              </button>
              {s < 4 && (
                <div className={`w-6 sm:w-8 lg:w-12 h-0.5 mx-1 sm:mx-2 transition-colors ${
                  step > s ? 'bg-foreground' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Configurator Card */}
        <motion.div
          layout
          className="glass-card p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Style */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">Choose Your Style</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">Select the artistic medium for your portrait</p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover-glow ${
                        selectedStyle === style.id
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border bg-background hover:border-foreground/30'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1.5 sm:gap-3">
                        <div className="[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">{style.icon}</div>
                        <span className="text-xs sm:text-sm lg:text-base font-medium">{style.name}</span>
                        {style.price > 0 && (
                          <span className="text-[10px] sm:text-xs opacity-70">+₹{style.price}</span>
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
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">Select Size</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">Choose the canvas size for your artwork</p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover-glow ${
                        selectedSize === size.id
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border bg-background hover:border-foreground/30'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <span className="font-display text-lg sm:text-xl lg:text-2xl font-semibold">{size.name}</span>
                        <span className="text-[10px] sm:text-xs opacity-70 hidden sm:block">{size.dimensions}</span>
                        <span className="text-sm sm:text-base font-medium mt-1 sm:mt-2">₹{size.price}</span>
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
                className="space-y-4 sm:space-y-6"
              >
                <div className="text-center">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">Number of Faces</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">How many people in your portrait?</p>
                </div>
                <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
                  <button
                    onClick={() => setFaces(f => Math.max(1, f - 1))}
                    disabled={faces <= 1}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-30"
                  >
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <div className="text-center min-w-[80px]">
                    <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold">{faces}</span>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">{faces === 1 ? 'Person' : 'People'}</p>
                  </div>
                  <button
                    onClick={() => setFaces(f => Math.min(6, f + 1))}
                    disabled={faces >= 6}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border-2 border-border flex items-center justify-center hover:border-foreground transition-colors disabled:opacity-30"
                  >
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
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
                className="space-y-4 sm:space-y-6 lg:space-y-8"
              >
                <div className="text-center">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold">Your Order Summary</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">Review your selections and place your order</p>
                </div>

                {/* Summary Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8">
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background text-center">
                    <span className="text-xs sm:text-sm text-muted-foreground">Style</span>
                    <p className="font-display text-base sm:text-lg lg:text-xl font-semibold mt-1">
                      {styles.find(s => s.id === selectedStyle)?.name}
                    </p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background text-center">
                    <span className="text-xs sm:text-sm text-muted-foreground">Size</span>
                    <p className="font-display text-base sm:text-lg lg:text-xl font-semibold mt-1">{selectedSize}</p>
                  </div>
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background text-center">
                    <span className="text-xs sm:text-sm text-muted-foreground">Faces</span>
                    <p className="font-display text-base sm:text-lg lg:text-xl font-semibold mt-1">{faces}</p>
                  </div>
                </div>

                {/* Price Estimate */}
                <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-warm-light">
                  <span className="text-xs sm:text-sm text-muted-foreground">Estimated Price Range</span>
                  <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                    ₹{priceRange.min.toLocaleString()} - ₹{priceRange.max.toLocaleString()}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">
                    Final price may vary based on complexity
                  </p>
                </div>

                {/* WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 sm:py-4 lg:py-5 rounded-xl sm:rounded-2xl whatsapp-btn flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg font-semibold transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  Book via WhatsApp
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 border-t border-border">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border text-sm sm:text-base font-medium disabled:opacity-30 hover:bg-muted transition-colors"
            >
              Back
            </button>
            {step < 4 && (
              <button
                onClick={nextStep}
                className="magnetic-btn px-5 sm:px-8 py-2 sm:py-3 rounded-full bg-foreground text-background text-sm sm:text-base font-medium flex items-center gap-2"
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

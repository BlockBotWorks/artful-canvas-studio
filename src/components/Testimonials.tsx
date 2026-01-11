import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'Absolutely stunning! The portrait of my parents captured every detail perfectly. Worth every rupee.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Verma',
    location: 'Delhi',
    text: 'Got a charcoal sketch of my daughter. The artist has incredible talent. Delivered on time!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    location: 'Bangalore',
    text: 'Gifted my husband a couple portrait for our anniversary. He was moved to tears!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur',
    text: 'Professional communication and exceptional artwork. Already ordered my second piece!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Meera Patel',
    location: 'Ahmedabad',
    text: 'My pet dog looks so real in the sketch! Amazing attention to detail and expression.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Arjun Nair',
    location: 'Kochi',
    text: 'Fast delivery and the quality exceeded expectations. Highly recommend!',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto section-padding mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            What Customers Say
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[350px] glass-card p-6 hover-glow"
            >
              <Quote className="w-8 h-8 text-warm mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm text-warm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;

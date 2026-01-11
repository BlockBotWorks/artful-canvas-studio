import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does it take to complete a portrait?',
    answer: 'Typically, we complete portraits within 5-7 working days. Complex pieces with multiple faces may take a bit longer. We always keep you updated on the progress.',
  },
  {
    question: 'What kind of photos work best?',
    answer: 'Clear, well-lit photos work best. Ideally, front-facing images with good resolution. Avoid heavily filtered or low-quality photos. We can advise you after you share the image.',
  },
  {
    question: 'Do you ship across India?',
    answer: 'Yes! We offer free shipping to all pin codes across India. Your artwork is carefully packaged in a protective tube or flat packaging to ensure safe delivery.',
  },
  {
    question: 'What if I want changes after seeing the preview?',
    answer: 'We offer one round of minor revisions included in the price. Major changes may require additional charges. We share a preview before finalizing to ensure you are happy.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, bank transfers, and all major payment methods. A 50% advance is required to start the work, with the remaining 50% due before shipping.',
  },
  {
    question: 'Can I get a digital copy of my portrait?',
    answer: 'Yes! Along with the physical artwork, we provide a high-resolution digital scan at no extra cost. Perfect for sharing on social media or printing later.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 section-padding relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 paper-texture pointer-events-none" />
      
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

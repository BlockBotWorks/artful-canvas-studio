import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import WhatsAppConfigurator from '@/components/WhatsAppConfigurator';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import MobileWhatsAppButton from '@/components/MobileWhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Process />
        <WhatsAppConfigurator />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <MobileWhatsAppButton />
    </div>
  );
};

export default Index;

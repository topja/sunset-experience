import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import MapSection from '@/components/MapSection';
import RecommendationsSection from '@/components/RecommendationsSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import DiscountPopup from '@/components/DiscountPopup';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <StorySection />
        <MapSection />
        <RecommendationsSection />
        <PartnershipsSection />
        <ContactSection />
        <WhatsAppButton />
        <DiscountPopup />
        
        {/* Footer */}
        <footer className="bg-foreground text-background py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">
              © 2025 Sunset Experience. El Tabo, Chile. 🌅
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;

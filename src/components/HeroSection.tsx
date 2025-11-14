import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-sunset.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/56988315390?text=Hola%20Nicole%20y%20Top!%20Me%20interesa%20conocer%20más%20sobre%20Sunset%20Experience', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('guide')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth text-base sm:text-lg px-6 sm:px-8"
            >
              {t('hero.exploreGuide')}
            </Button>
            
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-foreground transition-smooth text-base sm:text-lg px-6 sm:px-8"
            >
              {t('hero.contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-wave">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

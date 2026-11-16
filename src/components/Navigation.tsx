import { Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌅</span>
            <span className="font-heading font-semibold text-lg text-foreground">
              Sunset Experience
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('experiences')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.guide')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.contact')}
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('en')}
                className={`rounded-full h-8 px-3 ${
                  language === 'en' ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('pt')}
                className={`rounded-full h-8 px-3 ${
                  language === 'pt' ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                PT
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage('es')}
                className={`rounded-full h-8 px-3 ${
                  language === 'es' ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                ES
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('experiences')}
                className="text-foreground hover:text-primary transition-smooth text-left"
              >
                {t('nav.guide')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-smooth text-left"
              >
                {t('nav.contact')}
              </button>

              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <Globe size={16} className="text-muted-foreground" />
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    EN
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('pt')}
                    className={language === 'pt' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    PT
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage('es')}
                    className={language === 'es' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    ES
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

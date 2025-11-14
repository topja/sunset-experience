import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

const DiscountPopup = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenDiscountPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('hasSeenDiscountPopup', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const scrollToExperiences = () => {
    const element = document.getElementById('experiences');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
            {t('popup.title')}
          </DialogTitle>
          <DialogDescription className="text-lg pt-4">
            {t('popup.message')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={scrollToExperiences} size="lg" className="w-full">
            {t('popup.cta')}
          </Button>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="w-full"
          >
            {t('popup.close')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiscountPopup;

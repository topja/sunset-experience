import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { toast } from 'sonner';

const FriendsSection = () => {
  const { t } = useLanguage();

  const levels = [
    t('friends.level1'),
    t('friends.level2'),
    t('friends.level3'),
  ];

  const handleJoin = () => {
    toast.success(t('form.thanks'));
    // Here you would typically handle the join logic
  };

  return (
    <section id="friends" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t('friends.title')}
          </h2>

          <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto">
            {t('friends.description')}
          </p>

          <Button
            size="lg"
            onClick={handleJoin}
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-smooth text-base sm:text-lg px-8 mt-8"
          >
            {t('friends.join')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FriendsSection;

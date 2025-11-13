import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import sanadoraImage from '@/assets/experiencia-sanadora.jpg';
import saboresImage from '@/assets/sabores-pacifico.jpg';
import nerudaImage from '@/assets/tour-neruda.jpg';
import vinasImage from '@/assets/vinas-litoral.jpg';

const experiences = [
  {
    titleKey: 'exp.sanadora',
    descKey: 'exp.sanadoraDesc',
    image: sanadoraImage,
    duration: '3-4h',
    price: 'USD 95',
  },
  {
    titleKey: 'exp.sabores',
    descKey: 'exp.saboresDesc',
    image: saboresImage,
    duration: '3-4h',
    price: 'USD 80',
  },
  {
    titleKey: 'exp.neruda',
    descKey: 'exp.nerudaDesc',
    image: nerudaImage,
    duration: '4h',
    price: 'USD 70',
  },
  {
    titleKey: 'exp.vinas',
    descKey: 'exp.vinasDesc',
    image: vinasImage,
    duration: '4-5h',
    price: 'USD 95',
  },
];

const RecommendationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center text-foreground mb-4 animate-fade-in">
          {t('exp.title')}
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
          {t('exp.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-lg transition-smooth animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exp.image}
                  alt={t(exp.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-white/90 text-foreground text-xs font-semibold px-2 py-1 rounded">
                    {exp.duration}
                  </span>
                  <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    {exp.price}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(exp.descKey)}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/56912345678?text=Hola! Me interesa conocer más sobre ' + t(exp.titleKey), '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t('exp.bookNow')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('exp.moreInfo')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;

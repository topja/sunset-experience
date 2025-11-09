import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
import cafeImage from '@/assets/cafe-lucrecio.jpg';
import restaurantImage from '@/assets/puerto-castilla.jpg';
import kaleucheImage from '@/assets/kaleuche-restaurant.jpg';
import plazaImage from '@/assets/plaza-y-el-mar.jpg';

const recommendations = [
  {
    titleKey: 'reco.cafe',
    descKey: 'reco.cafeDesc',
    image: cafeImage,
    mapsUrl: 'https://maps.google.com/?q=Cafe+Lucresio+El+Tabo',
  },
  {
    titleKey: 'reco.restaurant',
    descKey: 'reco.restaurantDesc',
    image: restaurantImage,
    mapsUrl: 'https://maps.google.com/?q=Puerto+Castilla+El+Tabo',
  },
  {
    titleKey: 'reco.kaleuche',
    descKey: 'reco.kaleucheDesc',
    image: kaleucheImage,
    mapsUrl: 'https://maps.google.com/?q=Restaurante+El+Kaleuche+Chile',
  },
  {
    titleKey: 'reco.plaza',
    descKey: 'reco.plazaDesc',
    image: plazaImage,
    mapsUrl: 'https://maps.google.com/?q=Plaza+y+el+Mar+Restaurant+Chile',
  },
];

const RecommendationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="recommendations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center text-foreground mb-12 animate-fade-in">
          {t('reco.title')}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {recommendations.map((reco, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-lg transition-smooth animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={reco.image}
                  alt={t(reco.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {t(reco.titleKey)}
                </h3>
                <p className="text-muted-foreground">{t(reco.descKey)}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(reco.mapsUrl, '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {t('reco.viewLocation')}
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
            {t('reco.addRecommendation')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;

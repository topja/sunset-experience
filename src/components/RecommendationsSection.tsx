import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import lunchImage from '@/assets/almuerzo-amigos.jpg';
import lunchMesa from '@/assets/almuerzo-mesa.jpg';
import sunsetTerraza from '@/assets/sunset-terraza.jpg';
import sunsetMar from '@/assets/sunset-mar.jpg';
import sunsetAmigos from '@/assets/sunset-amigos.jpg';
import sunsetFamilia from '@/assets/sunset-familia.jpg';
import comboImage from '@/assets/hosts-image.jpg';

const experiences = [
  { titleKey: 'exp.lunch', descKey: 'exp.lunchDesc', images: [lunchMesa, lunchImage], duration: '13:00 – 16:00' },
  { titleKey: 'exp.sundowner', descKey: 'exp.sundownerDesc', images: [sunsetTerraza, sunsetFamilia, sunsetMar, sunsetAmigos], duration: '19:30 – 21:30' },
  { titleKey: 'exp.combo', descKey: 'exp.comboDesc', images: [comboImage], duration: '13:00 – 21:30', featured: true },
];

// Fotos de cada experiencia: para agregar más, súmalas al arreglo "images".
const PhotoCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [i, setI] = useState(0);
  const n = images.length;
  useEffect(() => {
    if (n < 2) return;
    const id = setInterval(() => setI((x) => (x + 1) % n), 4000);
    return () => clearInterval(id);
  }, [n]);
  return (
    <>
      {images.map((src, k) => (
        <img
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-110 ${k === i ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {n > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => setI((i - 1 + n) % n)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-1 hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Foto siguiente"
            onClick={() => setI((i + 1) % n)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-1 hover:bg-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
            {images.map((_, k) => (
              <button
                key={k}
                type="button"
                aria-label={`Foto ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? 'w-4 bg-white' : 'w-2 bg-white/60'}`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

const RecommendationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center text-foreground mb-4 animate-fade-in">
          {t('exp.title')}
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in">
          {t('exp.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`overflow-hidden shadow-soft hover:shadow-lg transition-smooth animate-slide-up group flex flex-col ${exp.featured ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <PhotoCarousel images={exp.images} alt={t(exp.titleKey)} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {exp.featured && (
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {t('exp.comboBadge')}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-white/90 text-foreground text-xs font-semibold px-2 py-1 rounded">
                    {exp.duration}
                  </span>
                  <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    {t('exp.price')}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm flex-1">{t(exp.descKey)}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open('https://wa.me/56988315390?text=Hola! Me interesa conocer más sobre ' + t(exp.titleKey), '_blank')}
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

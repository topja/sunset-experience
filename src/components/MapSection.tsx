import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { MapPin, Utensils, Palette, ShoppingBag, Landmark, Waves } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const categories = [
  { key: 'beaches', icon: Waves, color: 'text-primary' },
  { key: 'food', icon: Utensils, color: 'text-accent' },
  { key: 'artisan', icon: Palette, color: 'text-sunset-coral' },
  { key: 'shopping', icon: ShoppingBag, color: 'text-secondary-foreground' },
  { key: 'interests', icon: Landmark, color: 'text-primary' },
];

const places = {
  beaches: [
    { name: 'Playa El Caleuche', location: 'El Tabo', mapUrl: 'https://maps.google.com/?q=Playa+El+Caleuche' },
    { name: 'Playa Las Cruces', location: 'Las Cruces', mapUrl: 'https://maps.google.com/?q=Las+Cruces+Chile' },
  ],
  food: [
    { name: 'Café Lucresio', location: 'Plaza San Luis', mapUrl: 'https://maps.google.com/?q=Cafe+Lucresio+El+Tabo' },
    { name: 'Puerto Castilla', location: 'Costanera', mapUrl: 'https://maps.google.com/?q=Puerto+Castilla+El+Tabo' },
    { name: 'Pizza del Litoral', location: 'Centro', mapUrl: 'https://maps.google.com/?q=Pizza+El+Tabo' },
  ],
  artisan: [
    { name: 'Feria Isla Negra', location: 'Isla Negra', mapUrl: 'https://maps.google.com/?q=Feria+Artesanal+Isla+Negra' },
    { name: 'Tiendas Locales', location: 'El Tabo Centro', mapUrl: 'https://maps.google.com/?q=El+Tabo+Centro' },
  ],
  shopping: [
    { name: 'Unimarc', location: 'El Tabo', mapUrl: 'https://maps.google.com/?q=Unimarc+El+Tabo' },
    { name: 'Verdulería Local', location: 'Centro', mapUrl: 'https://maps.google.com/?q=Verduleria+El+Tabo' },
    { name: 'Mall Chino', location: 'El Tabo', mapUrl: 'https://maps.google.com/?q=Mall+El+Tabo' },
  ],
  interests: [
    { name: 'Casa de Pablo Neruda', location: 'Isla Negra', mapUrl: 'https://maps.google.com/?q=Casa+Pablo+Neruda+Isla+Negra' },
    { name: 'Plaza San Luis', location: 'El Tabo', mapUrl: 'https://maps.google.com/?q=Plaza+San+Luis+El+Tabo' },
    { name: 'Terminal de Buses', location: 'El Tabo', mapUrl: 'https://maps.google.com/?q=Terminal+Buses+El+Tabo' },
  ],
};

const MapSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('beaches');

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-center text-foreground animate-fade-in">
            {t('map.title')}
          </h2>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.key)}
                  className="transition-smooth"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {t(`map.${category.key}`)}
                </Button>
              );
            })}
          </div>

          {/* Places Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {places[selectedCategory as keyof typeof places]?.map((place, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-glow transition-smooth hover:scale-105 cursor-pointer group"
                onClick={() => window.open(place.mapUrl, '_blank')}
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                        {place.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{place.location}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-125 transition-smooth" />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(place.mapUrl, '_blank');
                      }}
                    >
                      Ver en Mapa
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Embed */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-glow animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26483.90859473845!2d-71.65799449999999!3d-33.45946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57c4d0a5d8b%3A0x8a9a5a3b6b0a8b0a!2sEl%20Tabo%2C%20Chile!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa del Litoral"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

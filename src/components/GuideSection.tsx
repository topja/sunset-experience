import { useState } from 'react';
import { Heart, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { places, type Category } from '@/data/guide';

const filters: { key: 'all' | Category | 'fav'; label: Record<'es' | 'en' | 'pt', string> }[] = [
  { key: 'all', label: { es: 'Todo', en: 'All', pt: 'Tudo' } },
  { key: 'fav', label: { es: 'Imperdibles', en: 'Must-sees', pt: 'Imperdíveis' } },
  { key: 'see', label: { es: 'Qué ver', en: 'See', pt: 'O que ver' } },
  { key: 'eat', label: { es: 'Dónde comer', en: 'Eat', pt: 'Onde comer' } },
  { key: 'beach', label: { es: 'Playas', en: 'Beaches', pt: 'Praias' } },
];

const GuideSection = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all');

  const shown = places.filter((p) =>
    filter === 'all' ? true : filter === 'fav' ? p.fav : p.cat === filter,
  );

  return (
    <section id="guide" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t('guide.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('guide.subtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition-smooth ${
                filter === f.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-foreground border-border hover:bg-secondary'
              }`}
            >
              {f.label[language]}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {shown.map((p) => (
            <article key={p.name} className="bg-card rounded-2xl p-6 shadow-soft flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{p.town}</p>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{p.name}</h3>
                </div>
                {p.fav && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    {t('guide.fav')}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.text[language]}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.q)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-primary hover:underline"
              >
                <MapPin className="w-4 h-4" />
                {t('guide.map')}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;

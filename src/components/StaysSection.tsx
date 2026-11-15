import { Award, ExternalLink, Star, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CDN = 'https://a0.muscache.com/im/pictures/';

const stays = [
  {
    titleKey: 'stays.apt1',
    descKey: 'stays.apt1Desc',
    badgeKey: 'stays.top10',
    rating: '4,98',
    reviews: 92,
    url: 'https://www.airbnb.cl/rooms/753469374767232802',
    photo: `${CDN}miso/Hosting-753469374767232802/original/f538cdba-dd23-49fa-ab9d-bf9ac9efa705.jpeg?im_w=960`,
  },
  {
    titleKey: 'stays.apt2',
    descKey: 'stays.apt2Desc',
    badgeKey: 'stays.top5',
    rating: '5,0',
    reviews: 24,
    url: 'https://www.airbnb.cl/rooms/1540725200520898894',
    photo: `${CDN}hosting/Hosting-1510318028151214939/original/94163225-15a7-477c-95ae-0aaaaec5ce09.jpeg?im_w=960`,
  },
];

const StaysSection = () => {
  const { t } = useLanguage();

  return (
    <section id="alojamiento" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t('stays.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('stays.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stays.map((s) => (
            <article
              key={s.url}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-smooth flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.photo} alt={t(s.titleKey)} loading="lazy" className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">
                  <Award className="w-3.5 h-3.5 text-sunset" />
                  {t(s.badgeKey)}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-heading font-semibold text-foreground">{t(s.titleKey)}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                    <Star className="w-4 h-4 fill-current text-sunset" />
                    {s.rating}
                    <span className="font-normal text-muted-foreground">
                      · {s.reviews} {t('stays.reviews')}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {t('stays.guests')}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">{t(s.descKey)}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-smooth"
                >
                  {t('stays.book')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaysSection;

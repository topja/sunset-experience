import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import hostsImage from '@/assets/hosts-image.jpg';
import nicolePhoto from '@/assets/nicole.jpg';
import topPhoto from '@/assets/top.jpg';

const hosts = [
  {
    name: 'Nicole Vilches',
    photo: nicolePhoto,
    roleKey: 'story.nicoleRole',
    loveKey: 'story.nicoleLove',
    linkedin: 'https://www.linkedin.com/in/nicole-lisette-vilches-amigo-5a5b53a5/',
  },
  {
    name: 'Tophandd Caro',
    photo: topPhoto,
    roleKey: 'story.topRole',
    loveKey: 'story.topLove',
    linkedin: 'https://www.linkedin.com/in/tophandd-caro-fuentes-86561159/',
  },
];

const StorySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 space-y-6 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t('story.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('story.description')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('story.pro')}
            </p>
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={hostsImage}
                alt="Nicole y Top en la terraza frente al mar al atardecer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          {hosts.map((host) => (
            <div
              key={host.name}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-smooth flex flex-col gap-3"
            >
              <div className="flex items-center gap-4">
                <img
                  src={host.photo}
                  alt={host.name}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30 shrink-0"
                />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">{host.name}</h3>
                  <p className="text-sm font-medium text-primary">{t(host.roleKey)}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">{t(host.loveKey)}</p>
              <a
                href={host.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
                {t('story.linkedin')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;

import { useLanguage } from '@/contexts/LanguageContext';
import hostsImage from '@/assets/hosts-image.jpg';

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
          </div>

          <div className="order-1 md:order-2 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img
                src={hostsImage}
                alt="Nicole and Top sharing wine at sunset"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

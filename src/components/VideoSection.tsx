import { useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const base = import.meta.env.BASE_URL;

const VideoSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              {t('video.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('video.text')}</p>
          </div>
          <div className="relative mx-auto w-full max-w-xs rounded-2xl overflow-hidden shadow-soft">
            <video
              ref={ref}
              src={`${base}video/tarde-en-casa.mp4?v=2`}
              poster={`${base}video/poster.jpg`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto block"
            />
            <button
              type="button"
              onClick={toggle}
              className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white hover:bg-black/75"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              {muted ? t('video.soundOn') : t('video.soundOff')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Reseñas reales de Airbnb (textos originales, recortados con "…" cuando son largos).
const reviews = [
  { name: 'Sharon', cc: 'ca', from: 'Canadá', date: 'dic. 2025', text: 'Amazing oceanfront stay! The view is stunning — truly the best sunsets I’ve ever seen. The apartment was spotless, with a fully equipped kitchen and very comfortable beds.' },
  { name: 'Rita', cc: 'ch', from: 'Wädenswil, Suiza', date: 'ene. 2024', text: 'El departamento de Nicole es fantástico! Disfrutamos todos los días la vista espectacular al océano en la terraza… Además, Nicole siempre ha estado atenta a nuestras necesidades. Volveremos feliz.' },
  { name: 'Derek & Bobbi', cc: 'ca', from: 'Kamloops, Canadá', date: 'mar. 2025', text: 'We certainly picked the perfect Airbnb for us… In El Tabo, everything is within walking distance, super friendly people everywhere we went. Our host are amazing people, fun, intelligent people great to hangout with.' },
  { name: 'Endrey', cc: 'cl', from: 'Chile', date: 'nov. 2022', text: 'Nicole… tiene muchos datos de restaurantes, museos, arte, diversión y lugares mágicos que no salen el buscador… la vista es insuperable, realmente está muy cerca del mar y el sonido del mar es relajante para dormir.' },
  { name: 'Ivan', cc: 'am', from: 'Ereván, Armenia', date: 'abr. 2025', text: 'Amazing view of the Pacific through a large window — truly breathtaking. The beach right in front of the house is perfect for walks and relaxing. Highly recommended!' },
  { name: 'Laura', cc: 'ar', from: 'San Martín, Argentina', date: 'feb. 2026', text: 'Excelente departamento, cómodo, limpio, con olor rico, con una vista hermosa, y los anfitriones súper cálidos y agradables… súper recomendable! muchas gracias Nicole!' },
  { name: 'Philippe', cc: 'ca', from: 'Gatineau, Canadá', date: 'oct. 2025', text: 'Très bel appartement fonctionnel avec une vue extraordinaire sur la mer… Si nous avons la chance nous aimerions revenir à cet endroit.' },
  { name: 'Angélica', cc: 'cl', from: 'Santiago, Chile', date: 'abr. 2026', text: 'Lo mejor, por lejos, la vista y que está casi sobre la arena… al estar en el cuarto piso, desde dentro del departamento se ve como que estás en el mar!!! Nicole, super buena anfitriona.' },
  { name: 'Luis Gerardo', cc: 'mx', from: 'Xalapa, México', date: 'abr. 2026', text: 'Nicole siempre muy atenta y pendiente de nosotros… Totalmente recomendable el sitio y los anfitriones.' },
  { name: 'Bárbara', cc: 'es', from: 'España', date: 'sep. 2025', text: 'Excelente alojamiento, Nicole preocupada, atenta y clara con las instrucciones. Muy buena la ubicación del departamento y la ubicación maravillosa, céntrica y cerca de todo.' },
  { name: 'Victoria', cc: 'cl', from: 'Chile', date: 'oct. 2024', text: 'Las fotos no le hacen justicia a la tremenda panorámica que se puede apreciar desde el balcón. Si deseas desconectarte, este es el lugar ideal.' },
];

const ReviewCard = ({ r }: { r: (typeof reviews)[number] }) => (
  <figure className="w-80 shrink-0 rounded-2xl bg-card p-6 shadow-soft flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <img
        src={`https://flagcdn.com/w40/${r.cc}.png`}
        srcSet={`https://flagcdn.com/w80/${r.cc}.png 2x`}
        alt={r.from}
        title={r.from}
        loading="lazy"
        className="h-4 w-6 rounded-sm object-cover shadow-sm"
      />
      <div className="flex gap-0.5 text-sunset" aria-label="5 estrellas">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" />
        ))}
      </div>
    </div>
    <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">“{r.text}”</blockquote>
    <figcaption className="text-sm">
      <span className="font-semibold text-foreground">{r.name}</span>
      <span className="text-muted-foreground"> · {r.from} · {r.date}</span>
    </figcaption>
  </figure>
);

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
          {t('reviews.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('reviews.subtitle')}</p>
      </div>

      <div className="marquee relative">
        <div className="marquee-track flex w-max gap-6 px-3">
          {[...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default ReviewsSection;

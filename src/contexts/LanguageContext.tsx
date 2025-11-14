import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.guide': 'Guía del Litoral',
    'nav.friends': 'Sunset Friends',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Bienvenido a Sunset Experience',
    'hero.subtitle': 'Turismo sanador frente al mar chileno.',
    'hero.description': 'Descubre experiencias que mezclan energía, gastronomía y conexión.',
    'hero.exploreGuide': 'Explora la Guía del Litoral 🌊',
    'hero.joinFriends': 'Únete a Sunset Friends 💛',
    'hero.contact': 'Contáctanos por WhatsApp 📱',
    
    // Story
    'story.title': 'Nuestra Historia',
    'story.description': 'Somos Nicole y Top, dos viajeros sureños que encontramos en el litoral un lugar para sanar y compartir. Amamos el vino, la buena comida y las conversaciones que reconectan con la vida. Queremos que cada visitante sienta la calma, la alegría y la energía de este lugar mágico.',
    
    // Map
    'map.title': 'Guía del Litoral Interactiva',
    'map.beaches': 'Playas',
    'map.food': 'Comida y Picadas',
    'map.artisan': 'Artesanía y Cultura',
    'map.shopping': 'Compras y Servicios',
    'map.interests': 'Puntos de Interés',
    
    // Experiences
    'exp.title': 'Nuestras Imperdibles Experiencias 🌅',
    'exp.subtitle': 'En Sunset Experience creemos que sanar, disfrutar y compartir son parte del mismo viaje.',
    'exp.sanadora': 'Experiencia Sanadora del Litoral',
    'exp.sanadoraDesc': 'Biomagnetismo, meditación frente al mar y degustación de mariscos con vino chileno.',
    'exp.sabores': 'Sabores del Pacífico',
    'exp.saboresDesc': 'Tour gastronómico con preparación de empanadas, almejas a la parmesana y música en vivo.',
    'exp.neruda': 'Tras las Huellas de Pablo Neruda',
    'exp.nerudaDesc': 'Visita a su casa-museo en Isla Negra y ruta por las mejores picadas del litoral.',
    'exp.vinas': 'Viñas del Litoral',
    'exp.vinasDesc': 'Tour del vino chileno en viñas boutique del Valle de Casablanca o San Antonio.',
    'exp.bookNow': 'Reservar Ahora',
    'exp.moreInfo': 'Más información sobre experiencias',
    
    // Popup
    'popup.title': '¡Bienvenido a Sunset Experience! 🌅',
    'popup.message': 'Tienes un 15% de descuento en tu primera experiencia',
    'popup.cta': 'Ver Experiencias',
    'popup.close': 'Cerrar',
    
    // Partnerships
    'partners.title': 'Convenios y Descuentos',
    'partners.place': 'Lugar',
    'partners.benefit': 'Beneficio',
    'partners.type': 'Tipo',
    'partners.cafe': 'Café Lucresio',
    'partners.cafeBenefit': '10% en desayunos',
    'partners.cafeType': 'Gastronomía',
    'partners.restaurant': 'Puerto Castilla',
    'partners.restaurantBenefit': 'Copa de vino gratis',
    'partners.restaurantType': 'Restaurante',
    'partners.artisan': 'Feria Isla Negra',
    'partners.artisanBenefit': 'Descuento en artesanías',
    'partners.artisanType': 'Cultura',
    
    // Friends
    'friends.title': 'Iniciemos la Experiencia Sunset 🌅',
    'friends.description': 'Bienvenido a Sunset Friends. Ahora que estás aquí, queremos que vivas el litoral de forma especial. Recibirás recomendaciones exclusivas, descuentos locales y sorpresas durante tu estadía.',
    'friends.level1': '🌊 Explorador del Litoral',
    'friends.level2': '🌅 Amigo del Mar',
    'friends.level3': '🌞 Guardián del Atardecer',
    'friends.join': 'Comenzar la Experiencia Sunset 🎁',
    
    // Contact
    'contact.title': 'Sigamos Conectados 💛',
    'contact.whatsapp': 'WhatsApp directo',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    
    // Form
    'form.name': 'Nombre',
    'form.country': 'País',
    'form.recommendation': 'Tu recomendación',
    'form.photo': 'Subir foto',
    'form.submit': 'Enviar',
    'form.thanks': 'Gracias por compartir tu experiencia. 🌅 Has ganado puntos en Sunset Friends.',
  },
  en: {
    // Navigation
    'nav.guide': 'Coastal Guide',
    'nav.friends': 'Sunset Friends',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Welcome to Sunset Experience',
    'hero.subtitle': 'Healing tourism by the Chilean sea.',
    'hero.description': 'Discover experiences that blend energy, gastronomy, and connection.',
    'hero.exploreGuide': 'Explore the Coastal Guide 🌊',
    'hero.joinFriends': 'Join Sunset Friends 💛',
    'hero.contact': 'Contact us via WhatsApp 📱',
    
    // Story
    'story.title': 'Our Story',
    'story.description': 'We are Nicole and Top, two southern travelers who found a place to heal and share by the coast. We love wine, good food, and conversations that reconnect with life. We want every visitor to feel the calm, joy, and energy of this magical place.',
    
    // Map
    'map.title': 'Interactive Coastal Guide',
    'map.beaches': 'Beaches',
    'map.food': 'Food & Eateries',
    'map.artisan': 'Crafts & Culture',
    'map.shopping': 'Shopping & Services',
    'map.interests': 'Points of Interest',
    
    // Experiences
    'exp.title': 'Our Must-Have Experiences 🌅',
    'exp.subtitle': 'At Sunset Experience we believe that healing, enjoying, and sharing are part of the same journey.',
    'exp.sanadora': 'Healing Coastal Journey',
    'exp.sanadoraDesc': 'Biomagnetism, ocean meditation, and seafood tasting with Chilean wine.',
    'exp.sabores': 'Pacific Flavors',
    'exp.saboresDesc': 'Gastronomic tour with empanada making, parmesan clams, and live music.',
    'exp.neruda': 'Following Neruda\'s Steps',
    'exp.nerudaDesc': 'Visit his museum house in Isla Negra and route through the best coastal spots.',
    'exp.vinas': 'Coastal Vineyards',
    'exp.vinasDesc': 'Chilean wine tour in boutique vineyards of Casablanca or San Antonio Valley.',
    'exp.bookNow': 'Book Now',
    'exp.moreInfo': 'More information about experiences',
    
    // Popup
    'popup.title': 'Welcome to Sunset Experience! 🌅',
    'popup.message': 'Get 15% off your first experience',
    'popup.cta': 'View Experiences',
    'popup.close': 'Close',
    
    // Recommendations
    'reco.title': 'Our Coastal Must-Sees 🌊',
    'reco.cafe': 'Café Lucresio',
    'reco.cafeDesc': 'Natural juices and crepes by the plaza.',
    'reco.restaurant': 'Puerto Castilla',
    'reco.restaurantDesc': 'Fish, seafood, and ocean views.',
    'reco.kaleuche': 'El Kaleuche Restaurant',
    'reco.kaleucheDesc': 'Oceanfront dining with unique sunsets.',
    'reco.plaza': 'Plaza y el Mar',
    'reco.plazaDesc': 'Chilean cuisine with plaza and ocean views.',
    'reco.viewLocation': 'View Location',
    'reco.addRecommendation': 'Add my recommendation 💬',
    
    // Partnerships
    'partners.title': 'Partnerships & Discounts',
    'partners.place': 'Place',
    'partners.benefit': 'Benefit',
    'partners.type': 'Type',
    'partners.cafe': 'Café Lucresio',
    'partners.cafeBenefit': '10% off breakfasts',
    'partners.cafeType': 'Gastronomy',
    'partners.restaurant': 'Puerto Castilla',
    'partners.restaurantBenefit': 'Free glass of wine',
    'partners.restaurantType': 'Restaurant',
    'partners.artisan': 'Isla Negra Fair',
    'partners.artisanBenefit': 'Craft discount',
    'partners.artisanType': 'Culture',
    
    // Friends
    'friends.title': 'Let\'s Start the Sunset Experience 🌅',
    'friends.description': 'Welcome to Sunset Friends. Now that you\'re here, we want you to experience the coast in a special way. You\'ll receive exclusive recommendations, local discounts, and surprises during your stay.',
    'friends.level1': '🌊 Coastal Explorer',
    'friends.level2': '🌅 Friend of the Sea',
    'friends.level3': '🌞 Sunset Guardian',
    'friends.join': 'Start the Sunset Experience 🎁',
    
    // Contact
    'contact.title': 'Stay Connected 💛',
    'contact.whatsapp': 'Direct WhatsApp',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    
    // Form
    'form.name': 'Name',
    'form.country': 'Country',
    'form.recommendation': 'Your recommendation',
    'form.photo': 'Upload photo',
    'form.submit': 'Submit',
    'form.thanks': 'Thank you for sharing your experience. 🌅 You\'ve earned Sunset Friends points.',
  },
  pt: {
    // Navigation
    'nav.guide': 'Guia do Litoral',
    'nav.friends': 'Sunset Friends',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Bem-vindo à Sunset Experience',
    'hero.subtitle': 'Turismo de cura à beira-mar chileno.',
    'hero.description': 'Descubra experiências que combinam energia, gastronomia e conexão.',
    'hero.exploreGuide': 'Explore o Guia do Litoral 🌊',
    'hero.joinFriends': 'Junte-se aos Sunset Friends 💛',
    'hero.contact': 'Contacte-nos via WhatsApp 📱',
    
    // Story
    'story.title': 'Nossa História',
    'story.description': 'Somos Nicole e Top, dois viajantes do sul que encontramos no litoral um lugar para curar e compartilhar. Amamos vinho, boa comida e conversas que reconectam com a vida. Queremos que cada visitante sinta a calma, a alegria e a energia deste lugar mágico.',
    
    // Map
    'map.title': 'Guia Interativo do Litoral',
    'map.beaches': 'Praias',
    'map.food': 'Comida e Restaurantes',
    'map.artisan': 'Artesanato e Cultura',
    'map.shopping': 'Compras e Serviços',
    'map.interests': 'Pontos de Interesse',
    
    // Experiences
    'exp.title': 'Nossas Experiências Imperdíveis 🌅',
    'exp.subtitle': 'Na Sunset Experience acreditamos que curar, aproveitar e compartilhar fazem parte da mesma jornada.',
    'exp.sanadora': 'Experiência Curativa do Litoral',
    'exp.sanadoraDesc': 'Biomagnetismo, meditação no oceano e degustação de frutos do mar com vinho chileno.',
    'exp.sabores': 'Sabores do Pacífico',
    'exp.saboresDesc': 'Tour gastronômico com preparação de empanadas, amêijoas à parmesana e música ao vivo.',
    'exp.neruda': 'Seguindo os Passos de Neruda',
    'exp.nerudaDesc': 'Visite sua casa-museu em Isla Negra e percorra os melhores pontos do litoral.',
    'exp.vinas': 'Vinhedos do Litoral',
    'exp.vinasDesc': 'Tour do vinho chileno em vinícolas boutique do Vale de Casablanca ou San Antonio.',
    'exp.bookNow': 'Reservar Agora',
    'exp.moreInfo': 'Mais informações sobre experiências',
    
    // Popup
    'popup.title': 'Bem-vindo à Sunset Experience! 🌅',
    'popup.message': 'Ganhe 15% de desconto na sua primeira experiência',
    'popup.cta': 'Ver Experiências',
    'popup.close': 'Fechar',
    
    // Recommendations
    'reco.title': 'Nossos Imperdíveis do Litoral 🌊',
    'reco.cafe': 'Café Lucresio',
    'reco.cafeDesc': 'Sucos naturais e crepes na praça.',
    'reco.restaurant': 'Puerto Castilla',
    'reco.restaurantDesc': 'Peixes, frutos do mar e vista para o mar.',
    'reco.kaleuche': 'Restaurante El Kaleuche',
    'reco.kaleucheDesc': 'Gastronomia à beira-mar com pores do sol únicos.',
    'reco.plaza': 'Plaza y el Mar',
    'reco.plazaDesc': 'Cozinha chilena com vista para a praça e o oceano.',
    'reco.viewLocation': 'Ver Localização',
    'reco.addRecommendation': 'Adicionar minha recomendação 💬',
    
    // Partnerships
    'partners.title': 'Parcerias e Descontos',
    'partners.place': 'Lugar',
    'partners.benefit': 'Benefício',
    'partners.type': 'Tipo',
    'partners.cafe': 'Café Lucresio',
    'partners.cafeBenefit': '10% de desconto nos cafés da manhã',
    'partners.cafeType': 'Gastronomia',
    'partners.restaurant': 'Puerto Castilla',
    'partners.restaurantBenefit': 'Taça de vinho grátis',
    'partners.restaurantType': 'Restaurante',
    'partners.artisan': 'Feira Isla Negra',
    'partners.artisanBenefit': 'Desconto em artesanato',
    'partners.artisanType': 'Cultura',
    
    // Friends
    'friends.title': 'Vamos Começar a Experiência Sunset 🌅',
    'friends.description': 'Bem-vindo aos Sunset Friends. Agora que você está aqui, queremos que você viva o litoral de forma especial. Você receberá recomendações exclusivas, descontos locais e surpresas durante sua estadia.',
    'friends.level1': '🌊 Explorador do Litoral',
    'friends.level2': '🌅 Amigo do Mar',
    'friends.level3': '🌞 Guardião do Pôr do Sol',
    'friends.join': 'Começar a Experiência Sunset 🎁',
    
    // Contact
    'contact.title': 'Fique Conectado 💛',
    'contact.whatsapp': 'WhatsApp direto',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',
    
    // Form
    'form.name': 'Nome',
    'form.country': 'País',
    'form.recommendation': 'Sua recomendação',
    'form.photo': 'Enviar foto',
    'form.submit': 'Enviar',
    'form.thanks': 'Obrigado por compartilhar sua experiência. 🌅 Você ganhou pontos no Sunset Friends.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

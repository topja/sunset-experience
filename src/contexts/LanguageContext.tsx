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
    'nav.guide': 'Experiencias',
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
    'story.pro': 'Somos profesionales y apasionados por el turismo y la gastronomía. Entre semana trabajamos en lo nuestro; los fines de semana abrimos nuestra casa en El Quisco para compartir mariscos, vinos de la costa y atardeceres.',
    'story.nicoleRole': 'Jefa de Retail Regional en Macro Food',
    'story.nicoleLove': 'Ingeniera en alimentos de profesión y Superanfitriona en Airbnb hace 7 años, apasionada por el turismo y la gastronomía.',
    'story.topRole': 'Software Project Leader en Mercado Libre',
    'story.topLove': 'Líder de proyectos de tecnología, apasionado por el turismo, la gastronomía y los atardeceres del litoral.',
    'story.linkedin': 'Ver perfil en LinkedIn',
    'reviews.title': 'Lo que dicen nuestros huéspedes',
    'reviews.subtitle': '4,96★ de promedio en 128 reseñas en Airbnb, con huéspedes de Canadá, Suiza, Armenia, Argentina, España, México y todo Chile.',
    'stays.title': 'Alójate con nosotros',
    'stays.subtitle': 'Dos departamentos frente al mar en El Tabo, elegidos "Favorito entre huéspedes" en Airbnb.',
    'stays.top10': 'Top 10 % de Airbnb',
    'stays.top5': 'Top 5 % de Airbnb',
    'stays.guests': '5 huéspedes',
    'stays.reviews': 'reseñas',
    'stays.book': 'Ver y reservar en Airbnb',
    'stays.apt1': 'Departamento con vista al mar',
    'stays.apt1Desc': '2 dormitorios, 2 baños y terraza cerrada en el 4º piso para ver el atardecer. A 20 metros de la playa.',
    'stays.apt2': 'Departamento a un costado del mar',
    'stays.apt2Desc': '3 dormitorios, 2 baños y una amplia terraza panorámica entre las playas Chépica y 7 Reales.',
    
    // Map
    'map.title': 'Guía del Litoral Interactiva',
    'map.beaches': 'Playas',
    'map.food': 'Comida y Picadas',
    'map.artisan': 'Artesanía y Cultura',
    'map.shopping': 'Compras y Servicios',
    'map.interests': 'Puntos de Interés',
    
    // Experiences
    'exp.title': 'Nuestras Experiencias 🌅',
    'exp.subtitle': 'En nuestra casa de El Quisco, frente al mar: cocinamos juntos, compartimos la mesa y esperamos el atardecer con un pisco sour en la mano.',
    'exp.lunch': 'Almuerzo Chileno',
    'exp.lunchDesc': 'Cocinamos juntos un almuerzo típico (pastel de choclo o empanadas de pino, pebre y ensalada chilena) para que aprendas cómo se prepara y pruebes todos sus sabores, con vino de la costa.',
    'exp.sundowner': 'Sunset & Pisco Sour',
    'exp.sundownerDesc': 'Esperamos el atardecer en la terraza: aprendes a preparar un pisco sour, compartimos una tabla para picar y brindamos con un cóctel cuando el sol toca el mar.',
    'exp.combo': 'Almuerzo + Sunset',
    'exp.comboDesc': 'La experiencia completa: cocinamos y almorzamos juntos, tarde libre para playa o hot tub, y cerramos con pisco sour, compartir y cóctel al atardecer.',
    'exp.comboBadge': 'Experiencia completa',
    'exp.price': 'Consultar precio',
    'exp.bookNow': 'Reservar por WhatsApp',
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
    'nav.guide': 'Experiences',
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
    'story.pro': 'We are professionals with a passion for tourism and food. During the week we work in our fields; on weekends we open our home in El Quisco to share seafood, coastal wines and sunsets.',
    'story.nicoleRole': 'Regional Retail Manager at Macro Food',
    'story.nicoleLove': 'Food engineer by profession and an Airbnb Superhost for 7 years, with a passion for tourism and food.',
    'story.topRole': 'Software Project Leader at Mercado Libre',
    'story.topLove': 'Tech project leader with a passion for tourism, food and coastal sunsets.',
    'story.linkedin': 'View LinkedIn profile',
    'reviews.title': 'What our guests say',
    'reviews.subtitle': '4.96★ average across 128 Airbnb reviews, with guests from Canada, Switzerland, Armenia, Argentina, Spain, Mexico and all over Chile.',
    'stays.title': 'Stay with us',
    'stays.subtitle': 'Two oceanfront apartments in El Tabo, both Airbnb "Guest favorites".',
    'stays.top10': 'Top 10% on Airbnb',
    'stays.top5': 'Top 5% on Airbnb',
    'stays.guests': '5 guests',
    'stays.reviews': 'reviews',
    'stays.book': 'View & book on Airbnb',
    'stays.apt1': 'Ocean-view apartment',
    'stays.apt1Desc': '2 bedrooms, 2 bathrooms and an enclosed 4th-floor terrace made for sunsets. 20 meters from the beach.',
    'stays.apt2': 'Apartment by the sea',
    'stays.apt2Desc': '3 bedrooms, 2 bathrooms and a large panoramic terrace between Chépica and 7 Reales beaches.',
    
    // Map
    'map.title': 'Interactive Coastal Guide',
    'map.beaches': 'Beaches',
    'map.food': 'Food & Eateries',
    'map.artisan': 'Crafts & Culture',
    'map.shopping': 'Shopping & Services',
    'map.interests': 'Points of Interest',
    
    // Experiences
    'exp.title': 'Our Experiences 🌅',
    'exp.subtitle': 'At our home in El Quisco, facing the ocean: we cook together, share the table and wait for the sunset with a pisco sour in hand.',
    'exp.lunch': 'Chilean Lunch',
    'exp.lunchDesc': 'Cook a traditional lunch with us (pastel de choclo or empanadas, pebre and Chilean salad), learn how it is made and taste every flavor, paired with coastal wine.',
    'exp.sundowner': 'Sunset & Pisco Sour',
    'exp.sundownerDesc': 'Wait for the sunset on our terrace: learn to make a pisco sour, share a tasting board and toast with a cocktail as the sun meets the sea.',
    'exp.combo': 'Lunch + Sunset',
    'exp.comboDesc': 'The full experience: cook and eat lunch together, a free afternoon for the beach or hot tub, and a sunset finale with pisco sour, bites and a cocktail.',
    'exp.comboBadge': 'Full experience',
    'exp.price': 'Ask for price',
    'exp.bookNow': 'Book via WhatsApp',
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
    'nav.guide': 'Experiências',
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
    'story.pro': 'Somos profissionais apaixonados por turismo e gastronomia. Durante a semana trabalhamos em nossas áreas; nos fins de semana abrimos nossa casa em El Quisco para compartilhar frutos do mar, vinhos do litoral e pores do sol.',
    'story.nicoleRole': 'Gerente Regional de Varejo na Macro Food',
    'story.nicoleLove': 'Engenheira de alimentos de profissão e Superhost no Airbnb há 7 anos, apaixonada por turismo e gastronomia.',
    'story.topRole': 'Software Project Leader no Mercado Libre',
    'story.topLove': 'Líder de projetos de tecnologia, apaixonado por turismo, gastronomia e pelos pores do sol do litoral.',
    'story.linkedin': 'Ver perfil no LinkedIn',
    'reviews.title': 'O que dizem nossos hóspedes',
    'reviews.subtitle': '4,96★ de média em 128 avaliações no Airbnb, com hóspedes do Canadá, Suíça, Armênia, Argentina, Espanha, México e de todo o Chile.',
    'stays.title': 'Hospede-se conosco',
    'stays.subtitle': 'Dois apartamentos de frente para o mar em El Tabo, ambos "Preferidos dos hóspedes" no Airbnb.',
    'stays.top10': 'Top 10% do Airbnb',
    'stays.top5': 'Top 5% do Airbnb',
    'stays.guests': '5 hóspedes',
    'stays.reviews': 'avaliações',
    'stays.book': 'Ver e reservar no Airbnb',
    'stays.apt1': 'Apartamento com vista para o mar',
    'stays.apt1Desc': '2 quartos, 2 banheiros e terraço fechado no 4º andar para ver o pôr do sol. A 20 metros da praia.',
    'stays.apt2': 'Apartamento ao lado do mar',
    'stays.apt2Desc': '3 quartos, 2 banheiros e um amplo terraço panorâmico entre as praias Chépica e 7 Reales.',
    
    // Map
    'map.title': 'Guia Interativo do Litoral',
    'map.beaches': 'Praias',
    'map.food': 'Comida e Restaurantes',
    'map.artisan': 'Artesanato e Cultura',
    'map.shopping': 'Compras e Serviços',
    'map.interests': 'Pontos de Interesse',
    
    // Experiences
    'exp.title': 'Nossas Experiências 🌅',
    'exp.subtitle': 'Na nossa casa em El Quisco, de frente para o mar: cozinhamos juntos, dividimos a mesa e esperamos o pôr do sol com um pisco sour na mão.',
    'exp.lunch': 'Almoço Chileno',
    'exp.lunchDesc': 'Cozinhamos juntos um almoço típico (pastel de choclo ou empanadas, pebre e salada chilena) para você aprender o preparo e provar todos os sabores, com vinho do litoral.',
    'exp.sundowner': 'Pôr do Sol & Pisco Sour',
    'exp.sundownerDesc': 'Esperamos o pôr do sol no terraço: você aprende a preparar um pisco sour, dividimos uma tábua de petiscos e brindamos com um coquetel quando o sol toca o mar.',
    'exp.combo': 'Almoço + Pôr do Sol',
    'exp.comboDesc': 'A experiência completa: cozinhamos e almoçamos juntos, tarde livre para praia ou hot tub, e fechamos com pisco sour, petiscos e coquetel no pôr do sol.',
    'exp.comboBadge': 'Experiência completa',
    'exp.price': 'Consultar preço',
    'exp.bookNow': 'Reservar pelo WhatsApp',
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

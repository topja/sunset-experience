// Guía del Litoral de los Poetas: lugares recomendados por Nicole y Top.
// Para agregar un lugar, copia un bloque y completa los textos en los 3 idiomas.
// `fav: true` marca los imperdibles de la casa. `q` es la búsqueda para Google Maps.

export type Lang = 'es' | 'en' | 'pt';
export type Category = 'see' | 'eat' | 'beach';

export interface Place {
  name: string;
  town: string;
  cat: Category;
  fav?: boolean;
  q: string;
  text: Record<Lang, string>;
}

export const places: Place[] = [
  // ── Isla Negra ──
  {
    name: 'Casa Museo Pablo Neruda',
    town: 'Isla Negra',
    cat: 'see',
    fav: true,
    q: 'Casa Museo Isla Negra Pablo Neruda',
    text: {
      es: 'La casa favorita del poeta, llena de mascarones, conchas y barcos en botella, frente al mar donde descansa. Reserva la entrada en verano.',
      en: "The poet's favourite home, full of ship figureheads, shells and ships in bottles, facing the sea where he rests. Book tickets ahead in summer.",
      pt: 'A casa favorita do poeta, cheia de figuras de proa, conchas e barcos na garrafa, de frente para o mar onde ele descansa. Reserve no verão.',
    },
  },
  {
    name: 'Restaurante Nobel',
    town: 'Isla Negra',
    cat: 'eat',
    fav: true,
    q: 'Restaurante Nobel Isla Negra',
    text: {
      es: 'Dentro de la casa museo: comida y poesía con vista al océano. El cierre perfecto después de recorrer la casa de Neruda.',
      en: "Inside the house museum: food and poetry with an ocean view. The perfect ending after touring Neruda's house.",
      pt: 'Dentro da casa museu: comida e poesia com vista para o oceano. O final perfeito depois de visitar a casa de Neruda.',
    },
  },
  {
    name: 'El Rincón del Poeta',
    town: 'Isla Negra',
    cat: 'eat',
    q: 'El Rincón del Poeta Isla Negra',
    text: {
      es: 'Clásico frente a las olas, a pasos de la casa de Neruda. Pide el congrio frito, el plato favorito del poeta.',
      en: "A classic facing the waves, steps from Neruda's house. Order the fried conger eel, the poet's favourite dish.",
      pt: 'Um clássico de frente para as ondas, a passos da casa de Neruda. Peça o congro frito, o prato favorito do poeta.',
    },
  },
  // ── Punta de Tralca ──
  {
    name: 'Piedra del Trueno',
    town: 'Punta de Tralca',
    cat: 'see',
    fav: true,
    q: 'Piedra del Trueno Punta de Tralca',
    text: {
      es: '"Tralka" significa trueno en mapudungun. Una roca gigante y sagrada para los pueblos originarios, con vista a toda la península. Visítala con respeto.',
      en: '"Tralka" means thunder in Mapudungun. A giant rock sacred to Indigenous peoples, overlooking the whole peninsula. Visit with respect.',
      pt: '"Tralka" significa trovão em mapudungun. Uma rocha gigante e sagrada para os povos originários, com vista para toda a península. Visite com respeito.',
    },
  },
  {
    name: 'Playa de Punta de Tralca',
    town: 'Punta de Tralca',
    cat: 'beach',
    fav: true,
    q: 'Playa Punta de Tralca',
    text: {
      es: 'Balneario tranquilo de arena blanca entre rocas. Camina hasta la península para ver el atardecer.',
      en: 'A quiet white-sand beach between rocks. Walk out to the peninsula to watch the sunset.',
      pt: 'Praia tranquila de areia branca entre rochas. Caminhe até a península para ver o pôr do sol.',
    },
  },
  // ── El Quisco ──
  {
    name: 'Restaurante El Cangrejo',
    town: 'El Quisco',
    cat: 'eat',
    fav: true,
    q: 'Restaurante El Cangrejo El Quisco',
    text: {
      es: 'Nuestro lugar de mariscos en El Quisco. Pide pescado del día y algo del mar para compartir.',
      en: 'Our go-to seafood spot in El Quisco. Order the catch of the day and something from the sea to share.',
      pt: 'Nosso lugar de frutos do mar em El Quisco. Peça o peixe do dia e algo do mar para dividir.',
    },
  },
  {
    name: 'Donde Canessa',
    town: 'El Quisco',
    cat: 'eat',
    q: 'Donde Canessa El Quisco',
    text: {
      es: 'Pescados y mariscos muy bien evaluados por quienes visitan El Quisco.',
      en: 'Fish and seafood that visitors to El Quisco rate very highly.',
      pt: 'Peixes e frutos do mar muito bem avaliados por quem visita El Quisco.',
    },
  },
  {
    name: 'Playa Los Corsarios',
    town: 'El Quisco',
    cat: 'beach',
    q: 'Playa Los Corsarios El Quisco',
    text: {
      es: 'La playa principal de El Quisco: surf, deportes náuticos y paseo costero.',
      en: "El Quisco's main beach: surfing, water sports and a seaside promenade.",
      pt: 'A praia principal de El Quisco: surfe, esportes náuticos e calçadão.',
    },
  },
  // ── Algarrobo ──
  {
    name: 'Islote Pájaros Niños',
    town: 'Algarrobo',
    cat: 'see',
    q: 'Islote Pájaros Niños Algarrobo',
    text: {
      es: 'Santuario de la naturaleza con más de 20 especies de aves marinas, incluidos pingüinos de Humboldt y de Magallanes.',
      en: 'A nature sanctuary with 20+ seabird species, including Humboldt and Magellanic penguins.',
      pt: 'Santuário da natureza com mais de 20 espécies de aves marinhas, incluindo pinguins-de-humboldt e de-magalhães.',
    },
  },
  {
    name: 'Playas Canelo y Canelillo',
    town: 'Algarrobo',
    cat: 'beach',
    q: 'Playa Canelillo Algarrobo',
    text: {
      es: 'Calas de arena blanca y agua turquesa rodeadas de pinos. De las más lindas del litoral.',
      en: 'White-sand coves with turquoise water surrounded by pines. Among the prettiest on the coast.',
      pt: 'Enseadas de areia branca e água turquesa cercadas de pinheiros. Das mais bonitas do litoral.',
    },
  },
  {
    name: 'La Cacerola',
    town: 'Algarrobo',
    cat: 'eat',
    q: 'La Cacerola Algarrobo',
    text: {
      es: 'Carta breve y sabrosa en el Algarrobo clásico, con muy buen servicio.',
      en: 'A short, tasty menu in classic Algarrobo, with great service.',
      pt: 'Cardápio curto e saboroso no Algarrobo clássico, com ótimo atendimento.',
    },
  },
  // ── El Tabo / Las Cruces ──
  {
    name: 'Mirador Punta del Lacho',
    town: 'Las Cruces',
    cat: 'see',
    q: 'Mirador Punta del Lacho Las Cruces',
    text: {
      es: 'Mirador sobre las rocas con una de las mejores vistas al mar del litoral. Ideal al atardecer.',
      en: 'A lookout over the rocks with one of the best sea views on the coast. Ideal at sunset.',
      pt: 'Mirante sobre as rochas com uma das melhores vistas para o mar do litoral. Ideal ao pôr do sol.',
    },
  },
  {
    name: 'Santuario Laguna El Peral',
    town: 'Las Cruces',
    cat: 'see',
    q: 'Santuario Laguna El Peral',
    text: {
      es: 'Humedal protegido para caminar y observar aves, a pasos de Playas Blancas.',
      en: 'A protected wetland for walking and birdwatching, steps from Playas Blancas.',
      pt: 'Zona úmida protegida para caminhar e observar aves, a poucos passos de Playas Blancas.',
    },
  },
  {
    name: 'Playa Chépica',
    town: 'El Tabo',
    cat: 'beach',
    q: 'Playa Chépica El Tabo',
    text: {
      es: 'Playa familiar y tranquila, justo frente a nuestros departamentos.',
      en: 'A calm, family-friendly beach right in front of our apartments.',
      pt: 'Praia familiar e tranquila, bem em frente aos nossos apartamentos.',
    },
  },
  // ── Cartagena ──
  {
    name: 'Museo Vicente Huidobro',
    town: 'Cartagena',
    cat: 'see',
    q: 'Museo Vicente Huidobro Cartagena',
    text: {
      es: 'La casa del otro gran poeta del litoral, creador del creacionismo.',
      en: 'The home of the coast’s other great poet, founder of Creacionismo.',
      pt: 'A casa do outro grande poeta do litoral, criador do creacionismo.',
    },
  },
];

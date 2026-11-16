import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/56991748857?text=¡Hola!%20Soy%20Nicole%20de%20Sunset%20Experience%20🌅.%20Gracias%20por%20tu%20reserva.%20¿Quieres%20recibir%20nuestras%20recomendaciones%20del%20litoral%20y%20descuentos%20locales?',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-glow transition-smooth hover:scale-110 animate-pulse"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;

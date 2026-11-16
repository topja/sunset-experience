import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      'https://wa.me/56991748857?text=' + encodeURIComponent('¡Hola Nicole y Top! Vi su página Sunset Experience y me gustaría más información 🌅') + '',
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

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/56988315390?text=Hola%20Nicole%20y%20Top!%20Me%20interesa%20conocer%20más%20sobre%20Sunset%20Experience', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {t('contact.title')}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <Card className="shadow-soft hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-smooth">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {t('contact.whatsapp')}
                </h3>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-smooth">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {t('contact.email')}
                </h3>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:inversioneselatardecer@gmail.com'}
                >
                  Email
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-glow transition-smooth group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-smooth">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {t('contact.location')}
                </h3>
                <p className="text-muted-foreground">El Tabo, Chile</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

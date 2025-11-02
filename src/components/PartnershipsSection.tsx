import { useLanguage } from '@/contexts/LanguageContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const PartnershipsSection = () => {
  const { t } = useLanguage();

  const partnerships = [
    {
      place: t('partners.cafe'),
      benefit: t('partners.cafeBenefit'),
      type: t('partners.cafeType'),
    },
    {
      place: t('partners.restaurant'),
      benefit: t('partners.restaurantBenefit'),
      type: t('partners.restaurantType'),
    },
    {
      place: t('partners.artisan'),
      benefit: t('partners.artisanBenefit'),
      type: t('partners.artisanType'),
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto shadow-soft animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-heading font-bold text-center text-foreground">
              {t('partners.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-heading font-semibold">
                      {t('partners.place')}
                    </TableHead>
                    <TableHead className="font-heading font-semibold">
                      {t('partners.benefit')}
                    </TableHead>
                    <TableHead className="font-heading font-semibold">
                      {t('partners.type')}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {partnerships.map((partnership, index) => (
                    <TableRow key={index} className="hover:bg-muted/50 transition-smooth">
                      <TableCell className="font-medium">{partnership.place}</TableCell>
                      <TableCell>{partnership.benefit}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                          {partnership.type}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnershipsSection;

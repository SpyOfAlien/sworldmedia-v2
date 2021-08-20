import { Container } from '../../../components/layout';
import { ServiceDetail } from '../../../components/common';
import services from '../../../lib/data/services';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import products from '../../../lib/data/products';

export const getStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const EventsPage = () => {
  const { t } = useTranslation('common');
  return (
    <ServiceDetail
      data={services[4]}
      products={products}
      baseUrl="/assets/images/products/events"
    />
  );
};

export default EventsPage;

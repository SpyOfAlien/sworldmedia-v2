import { Container } from '../../../components/layout';
import { ServiceDetail } from '../../../components/common';
import services from '../../../lib/data/services';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BrandCommunicationProducts from '../../../lib/data/brand-communication';

export const getStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const BrandCommunicationPage = () => {
  const { t } = useTranslation('common');
  return (
    <ServiceDetail
      data={services[0]}
      products={BrandCommunicationProducts}
      baseUrl="/assets/images/products/brand-communication"
    />
  );
};

export default BrandCommunicationPage;

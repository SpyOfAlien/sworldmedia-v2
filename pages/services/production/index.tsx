import { Container } from '../../../components/layout';
import { ServiceDetail } from '../../../components/common';
import services from '../../../lib/data/services';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Production from '../../../lib/data/production';

export const getStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const ProductionPage = () => {
  const { t } = useTranslation('common');
  return (
    <ServiceDetail
      data={services[2]}
      products={Production}
      baseUrl="/assets/images/products/production"
    />
  );
};

export default ProductionPage;

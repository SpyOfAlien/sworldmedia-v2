import { Container } from '../../../components/layout';
import services from '../../../lib/data/services';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BrandingProducts from '../../../lib/data/branding';

export const getStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const BrandingPage = () => {
  const { t } = useTranslation('common');
  return <div></div>;
};

export default BrandingPage;

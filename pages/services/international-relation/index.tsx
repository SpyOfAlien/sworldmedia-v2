import { Container } from '../../../components/layout';
import services from '../../../lib/data/services';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import IntenationalRelation from '../../../lib/data/intenational-relation';

export const getStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const InternationalRelationPage = () => {
  const { t } = useTranslation('common');
  return <div></div>;
};

export default InternationalRelationPage;

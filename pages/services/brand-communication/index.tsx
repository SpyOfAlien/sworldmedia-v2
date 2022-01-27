import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicePage from '../../../components/partials/service/service-page';
import { getServiceByName } from '../../../lib/api';
import { promises as fs } from 'fs';
import path from 'path';

export const getStaticProps = async ({ locale, preview }) => {
  const service = await getServiceByName('Communication');
  const pdfProductsDirectory = path.join(process.cwd(), 'public/pdf');
  const productsFilenames = await fs.readdir(pdfProductsDirectory);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      service: service,
      profile: productsFilenames,
    },
  };
};

const BrandCommunicationPage = ({ service, profile }) => {
  const { t } = useTranslation('common');
  return <ServicePage profile={profile} service={service} />;
};

export default BrandCommunicationPage;

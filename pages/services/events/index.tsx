import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getServiceByName } from '../../../lib/api';
import { promises as fs } from 'fs';
import path from 'path';
import ServicePage from '../../../components/partials/service/service-page';

export const getStaticProps = async ({ locale, preview }) => {
  const service = await getServiceByName('Events');
  const pdfProductsDirectory = path.join(process.cwd(), 'public/pdf');
  const productsFilenames = await fs.readdir(pdfProductsDirectory);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      service: service,
      profile: productsFilenames,
    },
    revalidate: 10,
  };
};

const EventsPage = ({ service, profile }) => {
  return <ServicePage service={service} profile={profile} />;
};

export default EventsPage;

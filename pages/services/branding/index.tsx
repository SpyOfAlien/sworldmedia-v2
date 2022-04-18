import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getServiceByName } from '../../../lib/api';
import { promises as fs } from 'fs';
import path from 'path';
import ServicePage from '../../../components/partials/service/service-page';

export const getStaticProps = async ({ locale, preview }) => {
  const service = await getServiceByName('Branding');
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

const BrandingPage = ({ service, profile }) => {
  return (
    <ServicePage
      profile={profile}
      service={service}
      seo={{
        vnName: 'S-world | Branding',
        enName: 'S-world | Xây dựng thương hiệu',
        vnDesc: 'S-World cung cấp giải pháp xây dựng thương hiệu toàn diện',
        enDesc: 'S-World provides a set of comprehensive branding solutions',
        url: 'http://localhost:3000/vn/services/branding',
      }}
    />
  );
};

export default BrandingPage;

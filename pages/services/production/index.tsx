import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getServiceByName } from '../../../lib/api';
import path from 'path';
import { promises as fs } from 'fs';

import ServicePage from '../../../components/partials/service/service-page';

export const getStaticProps = async ({ locale, preview }) => {
  const service = await getServiceByName('Production');
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

const ProductionPage = ({ service, profile }) => {
  return (
    <ServicePage
      service={service}
      profile={profile}
      seo={{
        vnName: 'S-world | Production',
        enName: 'S-world | Sản xuất',
        vnDesc:
          'Sản xuất là một trong những dịch vụ có thế mạnh lớn nhất của S-World',
        enDesc: 'Production is one of S-World’s greatest strengths',
        url: 'http://localhost:3000/vn/services/production',
      }}
    />
  );
};

export default ProductionPage;

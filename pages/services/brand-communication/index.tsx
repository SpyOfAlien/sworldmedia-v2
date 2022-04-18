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
    revalidate: 10,
  };
};

const BrandCommunicationPage = ({ service, profile }) => {
  return (
    <ServicePage
      profile={profile}
      service={service}
      seo={{
        vnName: 'S-world | Communication',
        enName: 'S-world | Truyền thông thương hiệu',
        vnDesc:
          'S-World truyền thông thương hiệu trên đa nền tảng với 6 dòng dịch vụ kết nối bền chặt',
        enDesc:
          'S-World provides multi-platform brand communication solutions with 6 interconnecting services',
        url: 'http://localhost:3000/vn/services/brand-communication',
      }}
    />
  );
};

export default BrandCommunicationPage;

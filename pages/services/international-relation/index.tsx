import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { promises as fs } from 'fs';
import path from 'path';
import ServicePage from '../../../components/partials/service/service-page';
import { getServiceByName } from '../../../lib/api';

export const getStaticProps = async ({ locale, preview }) => {
  const service = await getServiceByName('International Relations');
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

const InternationalRelationPage = ({ service, profile }) => {
  return (
    <ServicePage
      service={service}
      profile={profile}
      seo={{
        vnName: 'S-world | International Relations',
        enName: 'S-world | Kết nối quốc tế',
        vnDesc:
          'Định vị là cầu nối giữa Việt Nam và thế giới, bằng thế mạnh truyền thông đa phương tiện, S-World mang giải pháp khác biệt cho các doanh nghiệp, tổ chức',
        enDesc:
          'Positioning itself as a bridge between Vietnam and the world with its strength in multimedia communication, S-World brings new solutions to businesses and organizations',
        url: 'http://localhost:3000/vn/services/international-relation',
      }}
    />
  );
};

export default InternationalRelationPage;
